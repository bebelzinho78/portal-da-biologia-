/* ============================================================================
 * Portal de Biologia — lógica da aplicação
 * ----------------------------------------------------------------------------
 * 1. Utilitários            5. Quiz
 * 2. Armazenamento local    6. Revisão e progresso
 * 3. Navegação (rotas)      7. Sobre
 * 4. Vistas do portal        8. Eventos, tema, offline e Service Worker
 * ==========================================================================*/

'use strict';

/* =========================================================== 1. UTILITÁRIOS */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/** Escapa caracteres especiais para uso seguro em HTML. */
function esc(texto) {
  return String(texto).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/** Ícone SVG (string) a partir do catálogo de data.js. */
function icone(nome, classe = 'icone-svg') {
  const caminho = (typeof ICONES !== 'undefined' && ICONES[nome]) || ICONES.celula;
  return `<svg viewBox="0 0 24 24" aria-hidden="true" class="${classe}">${caminho}</svg>`;
}

/** Converte "hh:mm:ss" em texto legível ("3 dias atrás"). */
function dataRelativa(ts) {
  if (!ts) return '';
  const segundos = Math.floor((Date.now() - ts) / 1000);
  if (segundos < 60) return 'agora mesmo';
  if (segundos < 3600) return `há ${Math.floor(segundos / 60)} min`;
  if (segundos < 86400) return `há ${Math.floor(segundos / 3600)} h`;
  if (segundos < 2592000) return `há ${Math.floor(segundos / 86400)} dia(s)`;
  return new Date(ts).toLocaleDateString('pt-BR');
}

/** Remove acentos e normaliza para comparações e buscas. */
function normalizar(texto) {
  return String(texto)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}
/* ================================================ 2. ARMAZENAMENTO LOCAL === */
const CHAVE_PROGRESSO = 'portalBiologia.progresso.v1';

const PROGRESSO_PADRAO = {
  versao: 1,
  lidos: {},        // { idAssunto: 'manual' | 'quiz' }
  quizzes: {},      // { idAssunto: { melhor, acertos, total, tentativas, ultima } }
  acessos: {},      // { idAssunto: timestamp }
  ultimoAssunto: null,
  tema: 'auto'
};

let progresso = carregarProgresso();

function carregarProgresso() {
  let bruto = null;
  try {
    bruto = window.localStorage.getItem(CHAVE_PROGRESSO);
  } catch (erro) {
    console.warn('Armazenamento local indisponível:', erro);
    return Object.assign({}, PROGRESSO_PADRAO);
  }
  if (!bruto) return Object.assign({}, PROGRESSO_PADRAO);
  try {
    const dados = JSON.parse(bruto);
    return {
      versao: dados.versao || 1,
      lidos: dados.lidos || {},
      quizzes: dados.quizzes || {},
      acessos: dados.acessos || {},
      ultimoAssunto: dados.ultimoAssunto || null,
      tema: dados.tema || 'auto'
    };
  } catch (erro) {
    console.warn('Progresso corrompido; reiniciando:', erro);
    return Object.assign({}, PROGRESSO_PADRAO);
  }
}

function salvarProgresso() {
  try {
    window.localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(progresso));
    return true;
  } catch (erro) {
    console.warn('Não foi possível salvar o progresso:', erro);
    return false;
  }
}

/** Assunto é considerado concluído quando revisado ou com quiz acima de 60%. */
function ehConcluido(id) {
  if (progresso.lidos[id]) return true;
  const q = progresso.quizzes[id];
  return !!q && q.total > 0 && (q.melhor / q.total) >= 0.6;
}

function percentualGeral() {
  if (!CONTEUDOS.length) return 0;
  const feitos = CONTEUDOS.filter((c) => ehConcluido(c.id)).length;
  return Math.round((feitos / CONTEUDOS.length) * 100);
}

function atualizarIndicadoresProgresso() {
  const pct = percentualGeral();
  const feitos = CONTEUDOS.filter((c) => ehConcluido(c.id)).length;

  const preenchimento = $('#seloProgressoPreenchimento');
  if (preenchimento) preenchimento.style.width = `${pct}%`;
  const texto = $('#seloProgressoTexto');
  if (texto) texto.textContent = `${pct}%`;

  const menu = $('#preenchimentoMenu');
  if (menu) menu.style.width = `${pct}%`;
  const textoMenu = $('#textoProgressoMenu');
  if (textoMenu) textoMenu.textContent = `${feitos} de ${CONTEUDOS.length} assuntos concluídos`;

  const barra = $('#barraProgressoMenu');
  if (barra) barra.setAttribute('aria-label', `Progresso geral dos estudos: ${pct}%`);
}

/* ================================================== 3. NAVEGAÇÃO (ROTAS) === */
const app = $('#app');
let primeiraRenderizacao = true;

function rotaAtual() {
  const bruto = (window.location.hash || '#/inicio').replace(/^#\/?/, '');
  const partes = bruto.split('/').filter(Boolean);
  return { nome: partes[0] || 'inicio', param: partes[1] ? decodeURIComponent(partes[1]) : null };
}

function irPara(caminho) {
  if (window.location.hash === `#/${caminho}`) {
    renderizar();
  } else {
    window.location.hash = `#/${caminho}`;
  }
}

const VISTAS = {
  inicio: () => vistaInicio(),
  conteudos: () => vistaConteudos(),
  conteudo: (id) => vistaConteudo(id),
  quiz: () => vistaHubQuiz(),
  'quiz-assunto': (id) => vistaQuiz(id),
  revisao: () => vistaRevisao(),
  sobre: () => vistaSobre()
};

function renderizar() {
  const rota = rotaAtual();
  let html = '';
  let titulo = 'Portal de Biologia';

  switch (rota.nome) {
    case 'conteudos': html = vistaConteudos(); titulo = 'Conteúdos'; break;
    case 'conteudo': {
      const assunto = CONTEUDOS.find((c) => c.id === rota.param);
      html = assunto ? vistaConteudo(assunto) : paginaNaoEncontrada('Conteúdo não encontrado');
      titulo = assunto ? assunto.titulo : 'Conteúdo não encontrado';
      break;
    }
    case 'quiz': html = vistaHubQuiz(); titulo = 'Quiz'; break;
    case 'quiz-assunto': {
      const assunto = CONTEUDOS.find((c) => c.id === rota.param);
      html = assunto ? vistaQuiz(assunto) : paginaNaoEncontrada('Quiz não encontrado');
      titulo = assunto ? `Quiz de ${assunto.titulo}` : 'Quiz não encontrado';
      break;
    }
    case 'revisao': html = vistaRevisao(); titulo = 'Revisão'; break;
    case 'sobre': html = vistaSobre(); titulo = 'Sobre'; break;
    case 'inicio':
    default: html = vistaInicio(); titulo = 'Início'; break;
  }

  app.innerHTML = html;
  document.title = `${titulo} — Portal de Biologia`;

  marcarLinkAtivo(rota.nome);
  atualizarIndicadoresProgresso();
  fecharMenuMobile();
  window.scrollTo({ top: 0, behavior: 'auto' });

  // foco no conteúdo para leitores de tela e navegação por teclado.
  // Na primeira renderização o foco não é movido, para que a navegação por
  // teclado comece pelo início da página (link "pular para o conteúdo").
  if (!primeiraRenderizacao) {
    const foco = $('[data-foco]', app);
    if (foco) { foco.setAttribute('tabindex', '-1'); foco.focus({ preventScroll: true }); }
  }
  primeiraRenderizacao = false;

  ligarEventosDaVista();
}

function marcarLinkAtivo(nomeRota) {
  const base = nomeRota === 'conteudo' ? 'conteudos' : (nomeRota === 'quiz-assunto' ? 'quiz' : nomeRota);
  $$('.item-menu, .item-inferior').forEach((link) => {
    if (link.dataset.rota === base) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function paginaNaoEncontrada(mensagem) {
  return `
    <section class="painel-vazio">
      <h1>Ops!</h1>
      <p>${esc(mensagem)}</p>
      <p><a class="botao botao--principal" href="#/inicio">Voltar ao início</a></p>
    </section>`;
}

/* ==================================================== 4. VISTAS DO PORTAL === */

function vistaInicio() {
  const feitos = CONTEUDOS.filter((c) => ehConcluido(c.id));
  const totalQuestoes = CONTEUDOS.reduce((s, c) => s + c.quiz.length, 0);
  const pct = percentualGeral();

  const recomendados = CONTEUDOS
    .filter((c) => !ehConcluido(c.id))
    .slice(0, 6);
  const listaRecomendados = recomendados.length ? recomendados : CONTEUDOS.slice(0, 6);

  const continuar = progresso.ultimoAssunto
    ? CONTEUDOS.find((c) => c.id === progresso.ultimoAssunto)
    : null;

  return `
    <section class="hero" aria-labelledby="tituloBoasVindas">
      <p class="hero__etiqueta">${icone('celula')} Escola Estadual Prof. Abel Freire Coelho — Mossoró/RN</p>
      <h1 id="tituloBoasVindas" data-foco>Biologia fica mais fácil quando o conteúdo é claro.</h1>
      <p class="hero__texto">
        Estude os principais assuntos do Ensino Médio com explicações diretas, diagramas que ajudam
        a visualizar e quizzes para você conferir o que aprendeu. Todo o conteúdo fica disponível
        no seu dispositivo, mesmo sem internet.
      </p>
      <div class="hero__acoes">
        <a class="botao botao--claro" href="#/conteudos">Começar a estudar</a>
        <a class="botao botao--fantasma" href="#/quiz">${icone('microbio')} Fazer um quiz</a>
      </div>
      <div class="hero__destaques">
        <div class="hero__destaque"><strong>${CONTEUDOS.length}</strong><span>assuntos disponíveis</span></div>
        <div class="hero__destaque"><strong>${totalQuestoes}</strong><span>questões de quiz</span></div>
        <div class="hero__destaque"><strong>${feitos.length}</strong><span>assuntos concluídos</span></div>
        <div class="hero__destaque"><strong>${pct}%</strong><span>do conteúdo revisado</span></div>
      </div>
    </section>

    ${continuar ? `
    <section class="aviso aviso--info" aria-label="Continuar de onde parou">
      ${icone('lampada')}
      <div>
        <strong>Você parou em: ${esc(continuar.titulo)}.</strong>
        <p style="margin:.2rem 0 0">Continue de onde ficou ou comece por um assunto novo.</p>
      </div>
      <a class="botao botao--suave botao--pequeno" href="#/conteudo/${esc(continuar.id)}" style="margin-left:auto">Continuar</a>
    </section>` : ''}

    <section class="secao" aria-labelledby="tituloAssuntos">
      <div class="secao__cabecalho">
        <div>
          <h2 id="tituloAssuntos" class="secao__titulo-icone">${icone('celula')} Assuntos em destaque</h2>
          <p>Os dez temas principais da Biologia do Ensino Médio, com texto, diagramas e quiz.</p>
        </div>
        <a class="botao botao--contorno botao--pequeno" href="#/conteudos">Ver todos os conteúdos ${icone('seta')}</a>
      </div>
      <div class="grade-cartoes">
        ${listaRecomendados.map(cartaoAssunto).join('')}
      </div>
    </section>

    <section class="secao" aria-labelledby="tituloProgresso">
      <div class="secao__cabecalho">
        <div>
          <h2 id="tituloProgresso" class="secao__titulo-icone">${icone('grafico')} Seu progresso</h2>
          <p>O progresso fica salvo apenas neste dispositivo, usando o armazenamento local do navegador.</p>
        </div>
        <a class="botao botao--contorno botao--pequeno" href="#/revisao">Abrir revisão ${icone('seta')}</a>
      </div>
      ${painelProgresso()}
    </section>

    <section class="secao" aria-labelledby="tituloQuickQuiz">
      <div class="secao__cabecalho">
        <div>
          <h2 id="tituloQuickQuiz" class="secao__titulo-icone">${icone('microbio')} Acesso rápido aos quizzes</h2>
          <p>Escolha um assunto e teste seus conhecimentos em poucos minutos.</p>
        </div>
      </div>
      <div class="grade-cartoes">
        ${CONTEUDOS.slice(0, 4).map((c) => {
          const q = progresso.quizzes[c.id];
          return `
          <a class="cartao-assunto tema-${esc(c.tema)}" href="#/quiz-assunto/${esc(c.id)}">
            <div class="cartao-assunto__topo">
              <span class="cartao-assunto__icone">${icone(c.icone)}</span>
              <span class="marcador-progresso ${q ? 'marcador-progresso--feito' : ''}">${q ? `${q.melhor}/${q.total}` : 'novo'}</span>
            </div>
            <div>
              <h3>${esc(c.titulo)}</h3>
              <span class="cartao-assunto__linha">${c.quiz.length} questões de múltipla escolha</span>
            </div>
            <p>${esc(c.linha)}</p>
            <div class="cartao-assunto__rodape">
              <span class="cartao-assunto__meta">${icone('seta')} Testar agora</span>
            </div>
          </a>`;
        }).join('')}
      </div>
    </section>`;
}

function cartaoAssunto(c) {
  const concluido = ehConcluido(c.id);
  const q = progresso.quizzes[c.id];
  return `
  <article class="cartao-assunto tema-${esc(c.tema)}">
    <div class="cartao-assunto__topo">
      <span class="cartao-assunto__icone">${icone(c.icone)}</span>
      <span class="marcador-progresso ${concluido ? 'marcador-progresso--feito' : ''}">
        ${concluido ? '✓ revisado' : (q ? `${q.melhor}/${q.total}` : 'não iniciado')}
      </span>
    </div>
    <div>
      <h3><a href="#/conteudo/${esc(c.id)}" style="text-decoration:none;color:inherit">${esc(c.titulo)}</a></h3>
      <span class="cartao-assunto__linha">${esc(c.linha)}</span>
    </div>
    <p>${esc(c.descricao)}</p>
    <div class="cartao-assunto__rodape">
      <span class="cartao-assunto__meta">
        <span>${c.tempo} min de leitura</span>
        <span>${c.quiz.length} questões</span>
      </span>
      <a class="botao botao--suave botao--pequeno" href="#/conteudo/${esc(c.id)}">Estudar</a>
    </div>
  </article>`;
}

function vistaConteudos() {
  return `
    <section class="secao" aria-labelledby="tituloConteudos">
      <div class="secao__cabecalho">
        <div>
          <h1 id="tituloConteudos" data-foco>Conteúdos de Biologia</h1>
          <p>Todos os assuntos do portal, organizados por tema. Escolha um para ler a explicação completa
             com exemplos, diagramas e resumo para revisão.</p>
        </div>
      </div>
      <div class="filtro">
        ${icone('lampada')}
        <label class="visualmente-oculto" for="campoFiltro">Filtrar assuntos</label>
        <input type="search" id="campoFiltro" placeholder="Filtrar por nome ou tema (ex.: DNA, ecologia)" autocomplete="off">
      </div>
      <p id="resultadoFiltro" class="visualmente-oculto" role="status" aria-live="polite"></p>
      <div class="grade-cartoes" id="listaConteudos">
        ${CONTEUDOS.map(cartaoAssunto).join('')}
      </div>
      <div class="painel-vazio" id="semResultados" hidden>
        <h2>Nenhum assunto encontrado</h2>
        <p>Tente outra palavra, como "célula", "genética" ou "ecossistema".</p>
      </div>
    </section>`;
}

function vistaConteudo(c) {
  progresso.acessos[c.id] = Date.now();
  progresso.ultimoAssunto = c.id;
  salvarProgresso();

  const concluido = ehConcluido(c.id);
  const q = progresso.quizzes[c.id];
  const indice = CONTEUDOS.findIndex((x) => x.id === c.id);
  const anterior = CONTEUDOS[indice - 1];
  const proximo = CONTEUDOS[indice + 1];

  return `
    <nav class="migalhas" aria-label="Trilha de navegação">
      <a href="#/inicio">Início</a><span class="migalhas__sep">/</span>
      <a href="#/conteudos">Conteúdos</a><span class="migalhas__sep">/</span>
      <span>${esc(c.titulo)}</span>
    </nav>

    <article class="artigo tema-${esc(c.tema)}">
      <header class="artigo__topo">
        <span class="cartao-assunto__icone" style="width:64px;height:64px">${icone(c.icone)}</span>
        <div class="artigo__titulo-bloco">
          <h1 data-foco>${esc(c.titulo)}</h1>
          <p style="color:var(--cor-texto-suave);margin-bottom:.4rem">${esc(c.linha)}</p>
          <div class="artigo__etiquetas">
            <span class="etiqueta">${esc(c.nivel)}</span>
            <span class="etiqueta">${c.tempo} min de leitura</span>
            ${c.tags.map((t) => `<span class="etiqueta">#${esc(t)}</span>`).join('')}
          </div>
        </div>
        <div style="display:grid;gap:.5rem;justify-items:end">
          <span class="marcador-progresso ${concluido ? 'marcador-progresso--feito' : ''}">
            ${concluido ? '✓ assunto revisado' : 'ainda não revisado'}
          </span>
          ${q ? `<span class="etiqueta">Melhor quiz: ${q.melhor}/${q.total}</span>` : ''}
        </div>
      </header>

      <section aria-label="Introdução">
        ${c.introducao.map((p) => `<p>${esc(p)}</p>`).join('')}
      </section>

      ${c.secoes.map((secao, i) => `
        <section aria-labelledby="secao-${i}">
          <h2 id="secao-${i}">${esc(secao.titulo)}</h2>
          ${secao.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
          ${secao.conceitos && secao.conceitos.length ? `
            <div class="bloco-conceitos">
              <p class="bloco-conceitos__titulo">${icone('lampada')} Conceitos principais</p>
              <ul class="lista-conceitos">${secao.conceitos.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
            </div>` : ''}
          ${secao.diagrama && typeof DIAGRAMAS !== 'undefined' && DIAGRAMAS[secao.diagrama] ? `
            <figure class="diagrama">
              ${DIAGRAMAS[secao.diagrama]}
              <figcaption class="diagrama__legenda">Figura: ${esc(secao.titulo.toLowerCase())}.</figcaption>
            </figure>` : ''}
        </section>`).join('')}

      ${c.exemplos && c.exemplos.length ? `
      <section aria-labelledby="titulo-exemplos">
        <h2 id="titulo-exemplos">${esc(c.exemplos.length > 1 ? 'Exemplos do cotidiano' : 'Exemplo do cotidiano')}</h2>
        ${c.exemplos.map((ex) => `
          <div class="bloco-exemplo">
            <h4>${esc(ex.titulo)}</h4>
            <p>${esc(ex.texto)}</p>
          </div>`).join('')}
      </section>` : ''}

      <section aria-labelledby="titulo-resumo">
        <h2 id="titulo-resumo">Resumo para revisão</h2>
        <div class="bloco-resumo">
          <h4>${icone('check')} Pontos essenciais</h4>
          <ul class="lista-resumo">${c.resumo.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
      </section>

      ${c.glossario && c.glossario.length ? `
      <section aria-labelledby="titulo-glossario">
        <h2 id="titulo-glossario">Glossário</h2>
        <dl class="glossario">
          ${c.glossario.map((g) => `
            <div class="glossario__item">
              <dt>${esc(g.termo)}</dt>
              <dd>${esc(g.definicao)}</dd>
            </div>`).join('')}
        </dl>
      </section>` : ''}

      <div class="acoes-assunto">
        <a class="botao botao--principal" href="#/quiz-assunto/${esc(c.id)}">${icone('microbio')} Fazer o quiz de ${esc(c.titulo)}</a>
        <button type="button" class="botao botao--contorno" id="botaoMarcar">
          ${icone('check')} ${concluido ? 'Marcar como não revisado' : 'Marcar como revisado'}
        </button>
      </div>
    </article>

    <nav class="acoes-assunto" aria-label="Navegação entre assuntos">
      ${anterior ? `<a class="botao botao--suave" href="#/conteudo/${esc(anterior.id)}">← ${esc(anterior.titulo)}</a>` : '<span></span>'}
      ${proximo ? `<a class="botao botao--suave" href="#/conteudo/${esc(proximo.id)}">${esc(proximo.titulo)} →</a>` : ''}
    </nav>`;
}

function vistaHubQuiz() {
  const Respondidos = Object.keys(progresso.quizzes).length;
  return `
    <section class="secao" aria-labelledby="tituloQuiz">
      <div class="secao__cabecalho">
        <div>
          <h1 id="tituloQuiz" data-foco>Quizzes</h1>
          <p>Questionários de múltipla escolha ligados a cada assunto. Depois de responder, você recebe
             o gabarito com a explicação de cada resposta. O resultado é salvo no dispositivo.</p>
        </div>
      </div>
      <div class="aviso">
        ${icone('lampada')}
        <div><strong>${Respondidos} de ${CONTEUDOS.length} quizzes já realizados.</strong>
        <p style="margin:.2rem 0 0">Cada quiz tem entre 8 e 9 questões e pode ser refeito quantas vezes quiser.</p></div>
      </div>
      <div class="grade-cartoes">
        ${CONTEUDOS.map((c) => {
          const q = progresso.quizzes[c.id];
          return `
          <article class="cartao-assunto tema-${esc(c.tema)}">
            <div class="cartao-assunto__topo">
              <span class="cartao-assunto__icone">${icone(c.icone)}</span>
              <span class="marcador-progresso ${q ? 'marcador-progresso--feito' : ''}">
                ${q ? `melhor: ${q.melhor}/${q.total}` : 'não iniciado'}
              </span>
            </div>
            <div>
              <h3>${esc(c.titulo)}</h3>
              <span class="cartao-assunto__linha">${c.quiz.length} questões · tema ${esc(c.tema)}</span>
            </div>
            <p>${esc(c.descricao)}</p>
            <div class="cartao-assunto__rodape">
              <span class="cartao-assunto__meta">
                ${q ? `<span>${q.tentativas} tentativa(s)</span>` : '<span>prima vez</span>'}
              </span>
              <a class="botao botao--suave botao--pequeno" href="#/quiz-assunto/${esc(c.id)}">
                ${q ? 'Refazer' : 'Começar'}
              </a>
            </div>
          </article>`;
        }).join('')}
      </div>
    </section>`;
}

/* ============================================================== 5. QUIZ === */
function vistaQuiz(c) {
  return `
    <nav class="migalhas" aria-label="Trilha de navegação">
      <a href="#/inicio">Início</a><span class="migalhas__sep">/</span>
      <a href="#/quiz">Quiz</a><span class="migalhas__sep">/</span>
      <span>${esc(c.titulo)}</span>
    </nav>

    <section class="secao" aria-labelledby="tituloQuizAssunto">
      <div class="secao__cabecalho">
        <div>
          <h1 id="tituloQuizAssunto" data-foco>Quiz de ${esc(c.titulo)}</h1>
          <p>${c.quiz.length} questões de múltipla escolha. Escolha uma alternativa e veja a explicação
             da resposta logo em seguida.</p>
        </div>
      </div>
      <div id="areaQuiz" data-assunto="${esc(c.id)}"></div>
    </section>`;
}

function montarQuiz(assunto) {
  const area = $('#areaQuiz');
  if (!area) return;

  const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
  const respondidas = new Array(assunto.quiz.length).fill(null);
  let indiceAtual = 0;

  area.innerHTML = `
    <div class="quiz" id="quiz">
      <div class="quiz__barra">
        <div class="quiz__progresso-topo">
          <span id="quizContador">Questão 1 de ${assunto.quiz.length}</span>
          <span id="quizPlacar">Acertos: 0</span>
        </div>
        <div class="barra-progresso" role="progressbar" aria-labelledby="quizContador"
             aria-valuemin="0" aria-valuemax="${assunto.quiz.length}" aria-valuenow="1" id="quizBarra">
          <span class="barra-progresso__preenchimento" id="quizPreenchimento" style="width:${(100 / assunto.quiz.length)}%"></span>
        </div>
      </div>

      ${assunto.quiz.map((q, i) => `
        <div class="pergunta" id="pergunta-${i}" ${i === 0 ? '' : 'hidden'}>
          <fieldset>
            <legend>
              <span class="pergunta__numero">Questão ${i + 1}</span><br>
              ${esc(q.p)}
            </legend>
            <div class="alternativas">
              ${q.a.map((alt, j) => `
                <label class="alternativa" for="alt-${i}-${j}">
                  <input type="radio" id="alt-${i}-${j}" name="pergunta-${i}" value="${j}">
                  <span class="alternativa__letra" aria-hidden="true">${letras[j]}</span>
                  <span>${esc(alt)}</span>
                </label>`).join('')}
            </div>
          </fieldset>
          <div class="feedback" id="feedback-${i}" hidden role="status" aria-live="polite"></div>
        </div>`).join('')}

      <div class="quiz__navegacao">
        <button type="button" class="botao botao--suave" id="quizAnterior" disabled>← Anterior</button>
        <button type="button" class="botao botao--principal" id="quizProximo" disabled>Próxima →</button>
      </div>
    </div>`;

  const blocoResultado = document.createElement('div');
  blocoResultado.id = 'resultadoQuiz';
  blocoResultado.hidden = true;
  area.appendChild(blocoResultado);

  function atualizarPlacar() {
    const acertos = respondidas.filter((r, i) => r === assunto.quiz[i].c).length;
    $('#quizPlacar').textContent = `Acertos: ${acertos}`;
    $('#quizContador').textContent = `Questão ${indiceAtual + 1} de ${assunto.quiz.length}`;
    const barra = $('#quizBarra');
    barra.setAttribute('aria-valuenow', String(indiceAtual + 1));
    $('#quizPreenchimento').style.width = `${((indiceAtual + 1) / assunto.quiz.length) * 100}%`;
    $('#quizAnterior').disabled = indiceAtual === 0;
    $('#quizProximo').textContent = indiceAtual === assunto.quiz.length - 1 ? 'Ver resultado →' : 'Próxima →';
    $('#quizProximo').disabled = respondidas[indiceAtual] === null;
  }

  function mostrar(indice) {
    indiceAtual = indice;
    $$('.pergunta', area).forEach((p, i) => { p.hidden = i !== indice; });
    atualizarPlacar();
    const titulo = $(`#pergunta-${indice} legend`, area);
    if (titulo) titulo.setAttribute('tabindex', '-1');
  }

  $$('.pergunta', area).forEach((pergunta, i) => {
    $$('input[type="radio"]', pergunta).forEach((input) => {
      input.addEventListener('change', () => {
        if (respondidas[i] !== null) return;
        const escolha = Number(input.value);
        respondidas[i] = escolha;
        const correta = assunto.quiz[i].c;
        const acertou = escolha === correta;

        $$('input[type="radio"]', pergunta).forEach((r) => { r.disabled = true; });
        $$(`.alternativa`, pergunta).forEach((lab, j) => {
          if (j === correta) lab.classList.add('alternativa--correta');
          if (j === escolha && !acertou) lab.classList.add('alternativa--errada');
        });
        pergunta.classList.add(acertou ? 'pergunta--correta' : 'pergunta--errada');

        const feedback = $(`#feedback-${i}`, area);
        feedback.className = `feedback feedback--${acertou ? 'acerto' : 'erro'}`;
        feedback.innerHTML = `
          <svg viewBox="0 0 24 24" aria-hidden="true" class="icone-svg">${acertou
            ? '<path d="M4 12.5 9 17.5 20 6.5"/>'
            : '<path d="M12 4 2.5 20h19z"/><path d="M12 10v4M12 17.2v.1"/>'}</svg>
          <div>
            <strong>${acertou ? 'Resposta correta!' : `Resposta incorreta. A alternativa ${letras[correta]} estava correta.`}</strong>
            <p>${esc(assunto.quiz[i].e)}</p>
          </div>`;
        feedback.hidden = false;
        atualizarPlacar();
        $('#quizProximo').focus();
      });
    });
  });

  $('#quizAnterior').addEventListener('click', () => { if (indiceAtual > 0) mostrar(indiceAtual - 1); });

  $('#quizProximo').addEventListener('click', () => {
    if (respondidas[indiceAtual] === null) return;
    if (indiceAtual < assunto.quiz.length - 1) {
      mostrar(indiceAtual + 1);
    } else {
      finalizarQuiz();
    }
  });

  function finalizarQuiz() {
    const acertos = respondidas.filter((r, i) => r === assunto.quiz[i].c).length;
    const total = assunto.quiz.length;
    const pct = Math.round((acertos / total) * 100);

    const anterior = progresso.quizzes[assunto.id];
    const registro = {
      melhor: anterior ? Math.max(anterior.melhor, acertos) : acertos,
      acertos,
      total,
      tentativas: (anterior ? anterior.tentativas : 0) + 1,
      ultima: Date.now()
    };
    progresso.quizzes[assunto.id] = registro;
    if (pct >= 60 && !progresso.lidos[assunto.id]) progresso.lidos[assunto.id] = 'quiz';
    salvarProgresso();
    atualizarIndicadoresProgresso();

    const mensagem = pct === 100 ? 'Gabaritou! Excelente domínio do assunto.'
      : pct >= 80 ? 'Muito bem! Você domina quase todo o conteúdo.'
      : pct >= 60 ? 'Bom resultado! Reveja os pontos abaixo do gabarito.'
      : 'Vale revisar o conteúdo e tentar de novo — errar faz parte do estudo.';

    $('#quiz').hidden = true;
    const bloco = $('#resultadoQuiz');
    bloco.hidden = false;
    bloco.innerHTML = `
      <div class="resultado">
        <div class="resultado__anel" style="--valor:${pct}">
          <span class="resultado__valor">${pct}%</span>
        </div>
        <h2>${acertos} de ${total} acertos</h2>
        <p style="color:var(--cor-texto-suave);max-width:52ch;margin-inline:auto">${esc(mensagem)}</p>
        <div class="resultado__estatisticas">
          <div class="resultado__estatistica"><strong>${pct}%</strong><span>aproveitamento</span></div>
          <div class="resultado__estatistica"><strong>${registro.melhor}/${total}</strong><span>melhor resultado</span></div>
          <div class="resultado__estatistica"><strong>${registro.tentativas}</strong><span>tentativa(s)</span></div>
        </div>
        <div class="resultado__acoes">
          <button type="button" class="botao botao--principal" id="botaoRefazer">Tentar novamente</button>
          <a class="botao botao--contorno" href="#/conteudo/${esc(assunto.id)}">Revisar o conteúdo</a>
          <a class="botao botao--suave" href="#/revisao">Ver meu progresso</a>
        </div>
      </div>`;

    $('#botaoRefazer').addEventListener('click', () => {
      bloco.hidden = true;
      $('#quiz').hidden = false;
      montarQuiz(assunto);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  atualizarPlacar();
}

/* ================================================= 6. REVISÃO E PROGRESSO === */
function painelProgresso() {
  const pct = percentualGeral();
  const feitos = CONTEUDOS.filter((c) => ehConcluido(c.id));
  const quizzesFeitos = Object.keys(progresso.quizzes).length;
  const media = calcularMedia();

  return `
    <div class="painel-progresso">
      <div>
        <p class="painel-progresso__numero">${pct}%</p>
        <p class="painel-progresso__rotulo">do conteúdo revisado (${feitos.length} de ${CONTEUDOS.length} assuntos)</p>
        <div class="barra-progresso" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"
             aria-label="Progresso geral dos estudos" style="margin-top:.8rem">
          <span class="barra-progresso__preenchimento" style="width:${pct}%"></span>
        </div>
        <div class="resultado__estatisticas" style="justify-content:flex-start;margin-top:1rem">
          <div class="resultado__estatistica"><strong>${quizzesFeitos}</strong><span>quizzes feitos</span></div>
          <div class="resultado__estatistica"><strong>${media}%</strong><span>média de acerto</span></div>
        </div>
      </div>
      <div class="lista-progresso">
        ${CONTEUDOS.map((c) => {
          const feito = ehConcluido(c.id);
          const q = progresso.quizzes[c.id];
          return `
          <a class="item-progresso" href="#/conteudo/${esc(c.id)}">
            <span class="item-progresso__status ${feito ? 'item-progresso__status--feito' : ''}">${feito ? '✓' : '–'}</span>
            <span class="item-progresso__texto">
              <span class="item-progresso__titulo">${esc(c.titulo)}</span>
              <span class="item-progresso__detalhe">${feito ? 'Revisado' : 'Ainda não revisado'}${q ? ` · quiz ${q.melhor}/${q.total}` : ''}</span>
            </span>
            <span class="item-progresso__nota">${q ? `${Math.round((q.melhor / q.total) * 100)}%` : '—'}</span>
          </a>`;
        }).join('')}
      </div>
    </div>`;
}

function calcularMedia() {
  const valores = Object.values(progresso.quizzes)
    .filter((q) => q && q.total > 0)
    .map((q) => (q.melhor / q.total) * 100);
  if (!valores.length) return 0;
  return Math.round(valores.reduce((s, v) => s + v, 0) / valores.length);
}

function vistaRevisao() {
  const pct = percentualGeral();
  const comQuiz = CONTEUDOS.filter((c) => progresso.quizzes[c.id]);

  return `
    <section class="secao" aria-labelledby="tituloRevisao">
      <div class="secao__cabecalho">
        <div>
          <h1 id="tituloRevisao" data-foco>Revisão e progresso</h1>
          <p>Acompanhe o que você já estudou, reveja os resumos dos assuntos e consulte o histórico
             das suas pontuações. Tudo fica salvo neste dispositivo.</p>
        </div>
      </div>

      ${painelProgresso()}

      <section aria-labelledby="tituloHistorico">
        <h2 id="tituloHistorico">Pontuações dos quizzes</h2>
        ${comQuiz.length ? `
        <div class="artigo" style="padding:var(--espaco-4)">
          <table class="tabela-pontuacoes">
            <caption class="visualmente-oculto">Histórico de pontuações por assunto</caption>
            <thead>
              <tr><th scope="col">Assunto</th><th scope="col">Tentativas</th><th scope="col">Última</th><th scope="col">Melhor</th></tr>
            </thead>
            <tbody>
              ${comQuiz.map((c) => {
                const q = progresso.quizzes[c.id];
                return `<tr>
                  <td><a href="#/quiz-assunto/${esc(c.id)}">${esc(c.titulo)}</a></td>
                  <td>${q.tentativas}</td>
                  <td>${esc(dataRelativa(q.ultima))}</td>
                  <td>${q.melhor}/${q.total} (${Math.round((q.melhor / q.total) * 100)}%)</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>` : `
        <div class="painel-vazio">
          <h3>Nenhum quiz realizado ainda</h3>
          <p>Faça o primeiro quiz para começar a acompanhar seu desempenho.</p>
          <p><a class="botao botao--principal" href="#/quiz">Ir para os quizzes</a></p>
        </div>`}
      </section>

      <section aria-labelledby="tituloResumos">
        <h2 id="tituloResumos">Resumos para revisão rápida</h2>
        <div class="grade-cartoes">
          ${CONTEUDOS.map((c) => `
            <article class="cartao-assunto tema-${esc(c.tema)}">
              <div class="cartao-assunto__topo">
                <span class="cartao-assunto__icone">${icone(c.icone)}</span>
                <span class="marcador-progresso ${ehConcluido(c.id) ? 'marcador-progresso--feito' : ''}">
                  ${ehConcluido(c.id) ? '✓ revisado' : 'pendente'}
                </span>
              </div>
              <h3>${esc(c.titulo)}</h3>
              <ul class="lista-resumo" style="font-size:.88rem">
                ${c.resumo.slice(0, 4).map((r) => `<li>${esc(r)}</li>`).join('')}
              </ul>
              <div class="cartao-assunto__rodape">
                <a class="botao botao--suave botao--pequeno" href="#/conteudo/${esc(c.id)}">Abrir resumo</a>
              </div>
            </article>`).join('')}
        </div>
      </section>

      <section aria-labelledby="tituloDados">
        <h2 id="tituloDados">Seus dados</h2>
        <div class="aviso">
          ${icone('lampada')}
          <div>
            <strong>Progresso salvo apenas neste dispositivo.</strong>
            <p style="margin:.2rem 0 0">O portal não pede cadastro, não envia dados para servidores e não usa cookies
               de rastreamento. O progresso fica no armazenamento local do navegador e pode ser apagado
               a qualquer momento pelo botão abaixo ou limpando os dados do site.</p>
          </div>
        </div>
        <div class="acoes-assunto">
          <button type="button" class="botao botao--contorno" id="botaoLimparProgresso">Apagar todo o progresso</button>
        </div>
      </section>
    </section>`;
}

function vistaSobre() {
  return `
    <section class="secao" aria-labelledby="tituloSobre">
      <div class="secao__cabecalho">
        <div>
          <h1 id="tituloSobre" data-foco>Sobre o Portal de Biologia</h1>
          <p>Um projeto educacional aberto, feito para estudantes do Ensino Médio revisarem os principais
             assuntos de Biologia com clareza, diagrams e prática.</p>
        </div>
      </div>

      <article class="artigo">
        <div class="sobre-cabecalho">
          <img class="sobre-brasao" src="./assets/brasao-escola.svg" width="120" height="71"
               alt="Brasão da Escola Estadual Professor Abel Freire Coelho">
          <div>
            <h2>Uma ferramenta da escola para os estudantes</h2>
            <p>O Portal de Biologia foi desenvolvido pela Escola Estadual Professor Abel Freire Coelho,
               em Mossoró/RN, para ajudar os alunos do Ensino Médio a revisar os conteúdos de Biologia
               de forma rápida, clara e com acesso pelo celular. O projeto não substitui o professor nem
               o livro didático: ele complementa o estudo, revise os pontos que ainda estão frágeis e
               aponta o que precisa ser retomado na sala de aula.</p>
          </div>
        </div>

        <h2>Por que este portal existe</h2>
        <p>A Biologia costuma ser estudada em um ritmo acelerado, com muitos conteúdos e pouco tempo de
           revisão. Este portal foi pensado para resolver esse desencontro: cada assunto reúne, em um só
           lugar, a explicação introdutória, os conceitos-chave, exemplos do cotidiano, um diagrama que
           ajuda a visualizar, um resumo e um quiz de verificação.</p>
        <p>O material foi redigido em linguagem acessível, sem porém simplificar o rigor do conteúdo
           científico. As explicações seguem o nível do Ensino Médio e respeitam a terminologia correta,
           evitando imprecisões.</p>

        <h2>O que você encontra aqui</h2>
        <ul class="lista-simples">
          <li><strong>${CONTEUDOS.length} assuntos</strong> de Biologia, da Citologia à Biologia e Meio Ambiente.</li>
          <li><strong>${CONTEUDOS.reduce((s, c) => s + c.quiz.length, 0)} questões</strong> de múltipla escolha com gabarito explicado.</li>
          <li><strong>Diagramas em SVG</strong> desenhados especialmente para este projeto, sem imagens externas.</li>
          <li><strong>Progresso local</strong> com assuntos concluídos, pontuações e média de acerto.</li>
          <li><strong>Funcionamento offline</strong> depois do primeiro acesso, com o Service Worker do navegador.</li>
        </ul>

        <h2>Como usar</h2>
        <ol class="lista-simples">
          <li>Escolha um assunto na aba <strong>Conteúdos</strong> e leia com calma.</li>
          <li>Use os diagramas e os exemplos para fixar as ideias principais.</li>
          <li>Depois, faça o <strong>quiz</strong> do assunto: ele corrige as respostas e explica o motivo.</li>
          <li>Volte à aba <strong>Revisão</strong> para acompanhar seu progresso e reler os resumos.</li>
        </ol>

        <h2>Tecnologia e acessibilidade</h2>
        <p>O portal foi construído com HTML, CSS e JavaScript puros, sem bibliotecas externas. Todos os
           arquivos são estáticos, o que permite publicá-lo gratuitamente no GitHub Pages. A interface é
           responsiva, funciona por teclado, possui descrições alternativas para os diagramas e respeita
           a preferência do sistema por tema claro ou escuro.</p>
        <p>Para instalar o portal como aplicativo, abra o site no navegador do celular ou do computador e
           use a opção de instalação. O Service Worker guarda os arquivos essenciais no dispositivo para
           que os estudos continuem mesmo sem internet.</p>

        <h2>Privacidade</h2>
        <p>O portal não solicita cadastro, e-mail, senha ou qualquer dado pessoal. Nenhuma informação é
           enviada para servidores externos. O único dado gravado é o seu progresso de estudos, guardado
           no armazenamento local do navegador, neste dispositivo.</p>
      </article>

      <div class="acoes-assunto">
        <a class="botao botao--principal" href="#/conteudos">Começar a estudar</a>
        <a class="botao botao--contorno" href="#/inicio">Voltar ao início</a>
      </div>
    </section>`;
}

/* ============================================ 7. EVENTOS DA VISTA ATUAL === */
function ligarEventosDaVista() {
  // filtro de assuntos
  const campo = $('#campoFiltro');
  if (campo) {
    const lista = $('#listaConteudos');
    const vazio = $('#semResultados');
    const aviso = $('#resultadoFiltro');
    campo.addEventListener('input', () => {
      const termo = normalizar(campo.value);
      let visiveis = 0;
      $$('.cartao-assunto', lista).forEach((cartao) => {
        const texto = normalizar(cartao.textContent);
        const mostrar = !termo || texto.includes(termo);
        cartao.hidden = !mostrar;
        if (mostrar) visiveis += 1;
      });
      if (vazio) vazio.hidden = visiveis > 0;
      if (aviso) aviso.textContent = `${visiveis} assunto(s) encontrado(s).`;
    });
  }

  // marcar assunto como revisado
  const botaoMarcar = $('#botaoMarcar');
  if (botaoMarcar) {
    botaoMarcar.addEventListener('click', () => {
      const rota = rotaAtual();
      const assunto = CONTEUDOS.find((c) => c.id === rota.param);
      if (!assunto) return;
      if (progresso.lidos[assunto.id] === 'manual') {
        delete progresso.lidos[assunto.id];
      } else {
        progresso.lidos[assunto.id] = 'manual';
      }
      salvarProgresso();
      renderizar();
    });
  }

  // quiz
  const areaQuiz = $('#areaQuiz');
  if (areaQuiz) {
    const assunto = CONTEUDOS.find((c) => c.id === areaQuiz.dataset.assunto);
    if (assunto) montarQuiz(assunto);
  }

  // apagar progresso
  const botaoLimpar = $('#botaoLimparProgresso');
  if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
      const confirmado = window.confirm('Apagar todo o progresso salvo neste dispositivo? Essa ação não pode ser desfeita.');
      if (!confirmado) return;
      progresso = Object.assign({}, PROGRESSO_PADRAO, { tema: progresso.tema });
      salvarProgresso();
      renderizar();
    });
  }
}

/* ============================ 8. TEMA, MENU MOBILE, OFFLINE E SERVICE WORKER */
const botaoMenu = $('#botaoMenu');
const menuLateral = $('#menuLateral');
const fundoMenu = $('#fundoMenu');

function abrirMenuMobile() {
  if (!menuLateral) return;
  menuLateral.classList.add('aberto');
  menuLateral.setAttribute('aria-hidden', 'false');
  botaoMenu.setAttribute('aria-expanded', 'true');
  botaoMenu.setAttribute('aria-label', 'Fechar menu de navegação');
  if (fundoMenu) fundoMenu.hidden = false;
  const primeiro = $('.item-menu', menuLateral);
  if (primeiro) primeiro.focus();
}

function fecharMenuMobile() {
  if (!menuLateral) return;
  menuLateral.classList.remove('aberto');
  menuLateral.setAttribute('aria-hidden', 'true');
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.setAttribute('aria-label', 'Abrir menu de navegação');
  if (fundoMenu) fundoMenu.hidden = true;
}

if (botaoMenu) {
  botaoMenu.addEventListener('click', () => {
    const aberto = botaoMenu.getAttribute('aria-expanded') === 'true';
    if (aberto) fecharMenuMobile(); else abrirMenuMobile();
  });
}
if (fundoMenu) fundoMenu.addEventListener('click', fecharMenuMobile);

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    const aberto = botaoMenu && botaoMenu.getAttribute('aria-expanded') === 'true';
    if (aberto) { fecharMenuMobile(); botaoMenu.focus(); }
  }
});

/* ---- tema claro/escuro ---- */
const botaoTema = $('#botaoTema');

function aplicarTema(tema) {
  document.documentElement.setAttribute('data-tema', tema);
  progresso.tema = tema;
  salvarProgresso();
  if (botaoTema) {
    botaoTema.setAttribute('aria-label', tema === 'escuro' ? 'Ativar tema claro' : 'Ativar tema escuro');
    botaoTema.title = tema === 'escuro' ? 'Ativar tema claro' : 'Ativar tema escuro';
  }
}

if (botaoTema) {
  botaoTema.addEventListener('click', () => {
    const escuro = document.documentElement.getAttribute('data-tema') === 'escuro';
    aplicarTema(escuro ? 'claro' : 'escuro');
  });
}
aplicarTema(progresso.tema || 'auto');

/* ---- aviso de conexão ---- */
const faixaOffline = $('#faixaOffline');

function atualizarEstadoConexao() {
  if (!faixaOffline) return;
  const offline = !navigator.onLine;
  faixaOffline.hidden = !offline;
  faixaOffline.querySelector('span').textContent = offline
    ? 'Você está sem conexão. O conteúdo já salvo no dispositivo continua disponível.'
    : '';
}

window.addEventListener('online', atualizarEstadoConexao);
window.addEventListener('offline', atualizarEstadoConexao);
atualizarEstadoConexao();

/* ---- inicialização e navegação ---- */
window.addEventListener('hashchange', renderizar);

// Define a rota inicial sem disparar um segundo "hashchange" (o que
// deslocaria o foco do teclado logo após o carregamento da página).
if (!window.location.hash) {
  window.history.replaceState(null, '', '#/inicio');
}
renderizar();

/* ---- Service Worker (PWA) ---- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch((erro) => {
      console.warn('Não foi possível registrar o Service Worker:', erro);
    });
  });
}

/* ---- aviso de instalação (PWA) ---- */
let promptInstalacao = null;
window.addEventListener('beforeinstallprompt', (evento) => {
  evento.preventDefault();
  promptInstalacao = evento;
  const botao = $('#botaoInstalar');
  if (botao) botao.hidden = false;
});
