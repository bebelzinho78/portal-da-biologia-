# Portal de Biologia — Escola Estadual Prof. Abel Freire Coelho

Portal educacional de Biologia para estudantes do Ensino Médio, desenvolvido pela
**Escola Estadual Professor Abel Freire Coelho** (Mossoró/RN). Funciona como PWA
(progressive web app): pode ser instalado no celular ou no computador e continua
disponível mesmo sem internet.

- **10 assuntos** de Biologia com texto, conceitos-chave, exemplos, diagramas e resumo.
- **81 questões** de múltipla escolha com gabarito explicado.
- **Progresso local** (assuntos revisados, pontuações e média de acerto) salvo no navegador.
- Identidade visual baseada nas **cores oficiais do brasão da escola**.

## Estrutura do projeto

```
index.html              estrutura principal da aplicação
style.css               estilos, paleta da escola, temas claro/escuro e responsividade
script.js               navegação por rotas, quizzes, progresso, tema e instalação do app
data.js                 ícones SVG e os 10 diagramas educativos (SVG desenhado à mão)
conteudos.js            todo o conteúdo dos assuntos e as questões dos quizzes
manifest.json           configuração da PWA (nome, ícones, atalhos, modo standalone)
service-worker.js       cache dos arquivos essenciais e funcionamento offline
icon.svg                ícone da aplicação (DNA) em SVG
icon-192.png            ícone 192×192 para instalação
icon-512.png            ícone 512×512 para instalação
icon-maskable.svg       versão "maskable" do ícone
icon-maskable-192.png   versão "maskable" 192×192
icon-maskable-512.png   versão "maskable" 512×512
assets/brasao-escola.svg  brasão da escola em formato vetorial
assets/brasao-escola.png  brasão da escola em PNG
.github/workflows/      publicação automática no GitHub Pages
```

## Identidade visual

A paleta foi extraída do **brasão oficial da Escola Estadual Professor Abel Freire Coelho**:

| Cor | Hex | Uso |
| --- | --- | --- |
| Verde | `#22b14c` | cor principal, botões e destaques |
| Ciano | `#00a2e8` | secundária, links e diagramas |
| Índigo | `#3f48cc` | acentos dos assuntos |
| Amarelo | `#fff200` | detalhes e destaques |
| Azul-marinho | `#13346a` | texto, títulos e tema do navegador |
| Vermelho | `#d12920` | erros e alertas |

O brasão está **hospedado dentro do próprio repositório** (`assets/brasao-escola.svg`),
sem depender de nenhum servidor externo.

## Publicação no GitHub Pages

Todos os caminhos do projeto são **relativos**, então o portal funciona tanto na raiz de
um domínio quanto dentro de um subdiretório (por exemplo
`https://usuario.github.io/repositorio/`).

O repositório já tem uma branch **`gh-pages`** com todos os arquivos do portal e um
workflow (`.github/workflows/sincronizar-gh-pages.yml`) que mantém essa branch
atualizada a cada `push` na `main`.

### Ativar a publicação (1 passo, só na primeira vez)

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Em **Branch**, selecione **`gh-pages`** e a pasta **`/(root)`**.
4. Salve. Em menos de um minuto o GitHub publica o portal em:

   ```
   https://bebelzinho78.github.io/portal-da-biologia-/
   ```

Depois disso, **cada `git push` na `main` atualiza o site automaticamente**,
sem nenhuma ação manual.

<details>
<summary>Alternativa: publicar pelo GitHub Actions</summary>

Se preferir a opção **GitHub Actions** em *Settings → Pages → Source*, use o
workflow `.github/workflows/deploy-pages.yml`. Nesse caso, rode-o manualmente em
**Actions → Publicar no GitHub Pages (Actions) → Run workflow**.
</details>

### Enviar alterações

```bash
git add .
git commit -m "Portal de Biologia"
git push origin main
```

### Atualizar o Service Worker após mudanças grandes

Ao alterar a estrutura dos arquivos, increases a versão do cache em
`service-worker.js` (`const VERSAO_CACHE = 'portal-biologia-v1';`) para que os
estudantes recebam a versão nova.

## Testar localmente

```bash
python3 -m http.server 8000
```

Depois abra <http://localhost:8000>. O Service Worker exige `http://localhost`
(ou HTTPS), por isso não funciona abrindo o arquivo direto com `file://`.

### Testar a PWA e o modo offline

1. Abra o site em `localhost` ou no endereço publicado.
2. No Chrome/Edge: DevTools → Application → Service Workers → **Update on reload**.
3. Desligue a rede (DevTools → Network → *Offline*) e recarregue a página:
   o portal continua funcionando e exibe a faixa "Você está sem conexão".

## Progresso e privacidade

O progresso é gravado em `localStorage`, na chave `portalBiologia.progresso.v1`,
apenas no dispositivo do estudante. Não há cadastro, senha, servidor ou coleta de
dados pessoais. Na aba **Revisão** o progresso pode ser apagado a qualquer momento.

## Acessibilidade

- HTML semântico, `lang="pt-BR"` e um único `h1` por página.
- Link "pular para o conteúdo", foco visível e navegação completa por teclado.
- Formulários de quiz com `fieldset`/`legend` e `label` associado a cada alternativa.
- Feedback dos quizzes em regiões `role="status"` com `aria-live`.
- Diagramas SVG com `<title>` e `<desc>` (texto alternativo lido por leitores de tela).
- Tema claro/escuro e respeito a `prefers-reduced-motion`.

## Conteúdo

O material foi redigido em linguagem acessível, adequada ao Ensino Médio e sem
simplificar o rigor do conteúdo científico. Os diagramas são SVG desenhados
especificamente para o projeto, o que dispensa o uso de imagens externas com
questões de direitos autorais.
