/* ============================================================================
 * conteudos.js — Conteúdo completo do Portal de Biologia
 * ----------------------------------------------------------------------------
 * Cada assunto segue a mesma estrutura, consumida por script.js:
 *   id, icone, tema, titulo, linha, descricao, tempo, nivel, tags[]
 *   introducao[]  -> parágrafos de abertura
 *   secoes[]       -> subtítulos com texto, conceitos-chave e diagramas
 *   exemplos[]     -> exemplos do cotidiano
 *   glossario[]    -> termos e definições
 *   resumo[]       -> bullets de revisão rápida
 *   quiz[]         -> questões de múltipla escolha (c = índice da correta)
 * ==========================================================================*/

'use strict';

const CONTEUDOS = [

  /* ====================================================================== */
  /* 1. CITOLOGIA                                                          */
  /* ====================================================================== */
  {
    id: 'citologia',
    icone: 'celula',
    tema: 'verde',
    titulo: 'Citologia',
    linha: 'Estrutura e funções das células',
    descricao: 'A célula como unidade fundamental da vida: membranas, organelas e o funcionamento que sustenta todo o organismo.',
    tempo: 25,
    nivel: 'Ensino Médio',
    tags: ['célula', 'membrana', 'organelas', 'mitocôndria'],
    introducao: [
      'Citologia é a parte da Biologia que estuda as células — sua estrutura, seus componentes e as funções que nelas ocorrem. Tudo o que existe de vivo no planeta é formado por células, ou por produtos que as células produzem. Do antibiótico que combate uma infecção à madeira de uma mesa, quase tudo deriva da atividade celular.',
      'Acredita-se que a vida surgiu há cerca de 3,5 bilhões de anos a partir de estruturas simples, como as células procarióticas, e que a célula eucariótica — com núcleo e organelas delimitadas por membranas — surgiu depois, provavelmente por simbiose. Essa organização mais complexa permitiu a evolução de organismos pluricelulares, com um comportamento verdadeiramente complexo. Entender como uma única célula funciona é o primeiro passo para compreender o corpo humano, uma floresta ou uma gota de água de lago.'
    ],
    secoes: [
      {
        titulo: 'A teoria celular',
        texto: [
          'A teoria celular, consolidada ao longo do século XIX, sustenta dois pontos: todos os seres vivos são formados por células e toda célula nasce de outra célula pré-existente. Robert Hooke, em 1665, descreveu as "células" observadas em cortiça com um microscópio rudimentar; dois séculos depois, Rudolf Virchow formulou o famoso princípio "omnis cellula e cellula" ("toda célula vem de uma célula").',
          'Segundo essa teoria, existem dois grandes tipos celulares: as procarióticas, simples e sem núcleo delimitado por membrana, presentes em bactérias e arqueias; e as eucarióticas, com núcleo e organelas envoltas por membranas, presentes em animais, plantas, fungos e protozoários.'
        ],
        conceitos: [
          'Célula: unidade mínima e funcional da vida.',
          'Procariotos: sem núcleo delimitado por membrana (bactérias e arqueias).',
          'Eucariotos: com núcleo e organelas membranosas.',
          'Teoria celular: todos os seres vivos são formados por células.'
        ]
      },
      {
        titulo: 'Membrana plasmática e transporte',
        texto: [
          'A membrana plasmática é uma barreira seletiva formada por uma bicamada de fosfolípdeos, com proteínas incrustadas. O modelo aceito atualmente é o "modelo do mosaico fluido": os lipídeos e as proteínas deslizam lateralmente, dando dinâmico e flexibilidade à membrana.',
          'O transporte de substâncias obedece ao gradiente de concentração. Na difusão simples e na osmose, o movimento ocorre sem gasto de ATP, a favor do gradiente. O transporte ativo, com energia fornecida pelo ATP, permite bombear substâncias contra o gradiente — como a bomba de sódio e potássio (Na⁺/K⁺), essencial à função dos neurônios. Endocitose e exocitose, por sua vez, transportam moléculas grandes e partículas através de vesículas.'
        ],
        conceitos: [
          'Permeabilidade seletiva: a membrana controla o que entra e sai.',
          'Osmose: passagem de água por membrana semipermeável.',
          'Transporte ativo: requer ATP e ocorre contra o gradiente.',
          'Bomba Na⁺/K⁺: essencial para a transmissão nervosa.'
        ],
        diagrama: 'celula'
      },
      {
        titulo: 'Citoplasma e organelas',
        texto: [
          'O citoplasma é a substância fundamental que preenche a célula. Nele ficam as organelas, estruturas com funções especializadas que trabalham de forma coordenada.',
          'As mitocôndrias produzem ATP pela respiração celular, funcionando como as "usinas de energia" da célula. Os ribossomos fazem a tradução, ou seja, a síntese de proteínas. O retículo endoplasmático rugoso, associado aos ribossomos, processa proteínas; o liso atua na síntese de lipídeos e na detoxificação. O Complexo de Golgi modifica, classifica e empacota produtos. Os lisossomos digestam materiais com enzimas, e o citoesqueleto dá forma, sustentação e permite a movimentação interna e o transporte de organelas.'
        ],
        conceitos: [
          'Mitocôndria: respiração celular e produção de ATP.',
          'Ribossomos: síntese de proteínas.',
          'Complexo de Golgi: modificação e embalagem de produtos.',
          'Lisossomos: digestão intracelular com enzimas.',
          'Citoesqueleto: forma, sustentação e movimento celular.'
        ]
      },
      {
        titulo: 'Núcleo e material genético',
        texto: [
          'O núcleo é o centro de controle da célula eucariótica. Ele é delimitado por um envelope nuclear formado por duas membranas perfuradas por poros, que permitem a comunicação entre o núcleo e o citoplasma. Em seu interior está o nucléolo, onde se produzem os ribossomos, e a cromatina, composta por DNA associado a proteínas.',
          'Quando a célula se divide, a cromatina se condensa em cromossomos visíveis, cada um formado por duas cromátides irmãs unidas pelo centrômero. A contagem de cromossomos é característica de cada espécie: células somáticas humanas têm 46 (23 pares), enquanto os gametas têm 23.'
        ],
        conceitos: [
          'Envelope nuclear: dupla membrana com poros, que permite a comunicação com o citoplasma.',
          'Nucléolo: sítio de produção dos ribossomos.',
          'Cromatina e cromossomos: DNA organizado e condensável.',
          'Número diploide (2n) e haploide (n): pares de cromossomos.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'Por que células de plantas parecem caixas?',
        texto: 'A parede celular de celulose, rígida e externa à membrana, impede o aumento excessivo de volume e dá forma definida à célula. Já o vacúolo central armazena água e íons, mantém a pressão que sustenta a planta e acumula pigmentos e substâncias de defesa.'
      },
      {
        titulo: 'Por que o músculo aumenta de tamanho no esforço?',
        texto: 'Células do músculo esquelético são multinucleadas e, quando recebem estímulo de forma intensa e recorrente, aumentam o número de miofibrilas dentro da própria célula — o tecido cresce, mas a quantidade de células permanece praticamente a mesma.'
      },
      {
        titulo: 'O trabalho silencioso do fígado',
        texto: 'Um hepatócito humano pode realizar mais de mil operações de metabolismo por segundo, executadas de forma coordenada por organelas como mitocôndrias (energia), lisossomos (limpeza) e peroxissomos (detoxificação).'
      }
    ],
    glossario: [
      { termo: 'Organela', definicao: 'Estrutura celular com função especializada.' },
      { termo: 'Mitocôndria', definicao: 'Organela que realiza a respiração celular e produz ATP.' },
      { termo: 'Tecido', definicao: 'Conjunto de células com origem e função comuns.' },
      { termo: 'Citoplasma', definicao: 'Massa fundamental da célula, onde ficam as organelas.' }
    ].filter(g => g.termo),
    resumo: [
      'Todos os seres vivos são formados por células; toda célula vem de outra célula.',
      'Procariotos não têm núcleo; eucariotos têm núcleo e organelas membranosas.',
      'A membrana plasmática é seletiva: bicamada lipídica com proteínas (modelo do mosaico fluido).',
      'Mitocôndrias produzem ATP; ribossomos produzem proteínas.',
      'O núcleo guarda o material genético (DNA).',
      'Respiração celular: glicose + O₂ → CO₂ + H₂O + ATP.'
    ],
    quiz: [
      {
        p: 'Qual organela é responsável pela produção de ATP na célula eucariótica?',
        a: ['Mitocôndria', 'Ribossomo', 'Lisossomo', 'Complexo de Golgi'],
        c: 0,
        e: 'A mitocôndria realiza a respiração celular, na qual a energia dos açúcares é convertida em ATP, a moeda energética da célula.'
      },
      {
        p: 'A teoria celular afirma que:',
        a: ['Apenas os animais são formados por células', 'Todos os seres vivos são formados por células e toda célula deriva de outra célula', 'Só células eucarióticas são vivas', 'A célula é a menor unidade do ser vivo, mas pode viver isoladamente'],
        c: 1,
        e: 'Esses são os dois postulados clássicos da teoria celular, formulados por Hooke, Schleiden, Schwann e Virchow.'
      },
      {
        p: 'O transporte ativo de substâncias para dentro da célula:',
        a: ['Ocorre a favor do gradiente de concentração e não consome ATP', 'Ocorre contra o gradiente de concentração e consome ATP', 'É realizado exclusivamente pela difusão', 'Ocorre apenas pela parede celular'],
        c: 1,
        e: 'O transporte ativo exige energia (ATP) para mover substâncias de uma região de menor concentração para uma de maior concentração, como faz a bomba Na⁺/K⁺.'
      },
      {
        p: 'Qual organela possui material genético próprio e pode se multiplicar independentemente da divisão celular?',
        a: ['Lisossomo', 'Ribossomo', 'Mitocôndria', 'Complexo de Golgi'],
        c: 2,
        e: 'A mitocôndria tem DNA próprio e se replica de forma independente do núcleo, o que sustenta a teoria de que surgiu de uma bactéria incorporada por simbiose.'
      },
      {
        p: 'Qual característica diferencia células procarióticas de eucarióticas?',
        a: ['A presença de ribossomos', 'A ausência de núcleo delimitado por membrana', 'A presença de DNA', 'A capacidade de realizar fotossíntese'],
        c: 1,
        e: 'As duas apresentam DNA e ribossomos; o que falta às procarióticas é o envelope nuclear e as organelas membranosas.'
      },
      {
        p: 'A osmose corresponde à passagem de água do meio mais concentrado em solutos para o meio menos concentrado. Onde esse processo é especialmente importante?',
        a: ['Nos vacúolos das células vegetais', 'Nas mitocôndrias', 'Nos lisossomos', 'Nos centríolos'],
        c: 0,
        e: 'A entrada de água por osmose no vacúolo gera a pressão de turgescência, que sustenta folhas, caules e frutos.'
      },
      {
        p: 'Qual é a função do Complexo de Golgi?',
        a: ['Sintetizar proteínas', 'Modificar, classificar e embalar produtos celulares', 'Realizar a digestão intracelular', 'Produzir ATP'],
        c: 1,
        e: 'O Golgi funciona como uma central de distribuição: recebe vesículas do retículo endoplasmático, modifica seu conteúdo e o destina ao destino final.'
      },
      {
        p: 'O número de cromossomos de uma célula somática humana é:',
        a: ['23', '46', '48', 'Depende do sexo do indivíduo'],
        c: 1,
        e: 'São 46 cromossomos, organizados em 23 pares. Gametes têm 23 (haploides); células somáticas femininas também têm 46.'
      },
      {
        p: 'Por que se diz que a membrana plasmática tem permeabilidade seletiva?',
        a: ['Porque deixa passar todas as substâncias', 'Porque permite a passagem de algumas substâncias e restringe outras conforme o tamanho e a carga', 'Porque impede a entrada de toda substância', 'Porque funciona apenas como reserva de água'],
        c: 1,
        e: 'A bicamada lipídica bloqueia íons e moléculas polares, enquanto permite a difusão de gases e de moléculas pequenas apolares; proteínas explicam a travessia do restante.'
      }
    ]
  },

  /* ====================================================================== */
  /* 2. GENÉTICA                                                            */
  /* ====================================================================== */
  {
    id: 'genetica',
    icone: 'dna',
    tema: 'indigo',
    titulo: 'Genética',
    linha: 'DNA, genes, cromossomos e hereditariedade',
    descricao: 'Do pareamento das bases ao código genético: como a informação genética é guardada, copiada e transformada em características dos seres vivos.',
    tempo: 30,
    nivel: 'Ensino Médio',
    tags: ['DNA', 'genes', 'hereditariedade', 'Mendel'],
    introducao: [
      'Genética é a área da Biologia que estuda a hereditariedade: os mecanismos pelos quais as características são transmitidas dos pais para os filhos, além da variabilidade entre os indivíduos de uma mesma espécie. Nenhuma área do conhecimento está tão intimamente ligada à identidade de cada ser vivo.',
      'A genética humana ganhou bases sólidas no início do século XX, com os experimentos de Thomas Morgan em drosophila, que demonstraram que os genes ficam localizados nos cromossomos. Hoje sabemos que o genoma humano — cerca de 3 bilhões de pares de bases de DNA — guarda as instruções para a construção e o funcionamento de cada célula do corpo.'
    ],
    secoes: [
      {
        titulo: 'Estrutura do DNA',
        texto: [
          'O DNA (ácido desoxirribonucleico) é um polímero de nucleotídeos. Cada nucleotídeo é formado por um açúcar desoxirribose, um grupo fosfato e uma base nitrogenada: adenina (A), timina (T), guanina (G) ou citosina (C).',
          'Em 1953, Watson e Crick publicaram a estrutura de dupla hélice, baseando-se nos dados de difração de raios X de Rosalind Franklin e Maurice Wilkins. As duas fitas são antiparalelas e se unem por ligações de hidrogênio: adenina pareia sempre com timina (2 ligações) e guanina com citosina (3 ligações). Essa complementaridade permite que cada fita funcione como molde para a cópia da outra.'
        ],
        conceitos: [
          'Nucleotídeo: desoxirribose + fosfato + base nitrogenada.',
          'Dupla hélice antiparalela com complementares A–T e G–C.',
          'Bases nitrogenadas: adenina, timina, guanina e citosina.',
          'O DNA fica enrolado sobre proteínas, formando a cromatina.'
        ],
        diagrama: 'dna'
      },
      {
        titulo: 'Genes, cromossomos e replicação',
        texto: [
          'Gene é a sequência de DNA que codifica um produto funcional, geralmente uma proteína. Os genes, organizados no cromossomo em sequência linear, formam o genoma. Células somáticas humanas possuem 46 cromossomos; cada um é uma molécula de DNA associada a proteínas.',
          'Antes de a célula se dividir, o DNA é replicado na fase S do ciclo celular. A replicação é semiconservativa: cada molécula nova é composta por uma fita antiga e uma fita nova sintetizada. A enzima DNA polimerase acrescenta nucleotídeos na direção 5′ → 3′, e a enzima helicase abre a dupla hélice. A taxa de erro é baixa, mas quando ocorre, dá origem a mutações.'
        ],
        conceitos: [
          'Gene: trecho de DNA que codifica uma proteína ou um RNA funcional.',
          'Genoma: conjunto completo de genes de um organismo.',
          'Replicação semiconservativa: uma fita antiga + uma nova.',
          'Erros de replicação podem gerar mutações.'
        ]
      },
      {
        titulo: 'Da hélice à proteína: o dogma central',
        texto: [
          'A informação contida no DNA percorre duas etapas. Na transcrição, a enzima RNA polimerase copia uma das fitas do DNA em RNA mensageiro (mRNA). Na tradução, os ribossomos leem o mRNA em grupos de três bases (códons) e encaixam os aminoácidos correspondentes, formando a proteína.',
          'O conjunto de regras que associa códon a aminoácido é o código genético. Ele é praticamente universal: funciona igual em bactérias, plantas e animais, com pouquíssimas exceções. Na prática, o dogma central descreve o fluxo de informação do DNA para o RNA e do RNA para a proteína.'
        ],
        conceitos: [
          'Transcrição: DNA → RNA mensageiro.',
          'Tradução: RNA mensageiro → proteína, nos ribossomos.',
          'Códon: sequência de três bases do mRNA.',
          'Código genético: quase universal entre os seres vivos.'
        ]
      },
      {
        titulo: 'Hereditariedade mendeliana',
        texto: [
          'Gregor Mendel, monge-agricultor do século XIX, realizou experimentos com ervilhas e descreveu as leis da herança: a segregação, segundo a qual os dois alelos de um gene se separam na formação dos gametas, e a segregação independente, válida para genes localizados em cromossomos diferentes.',
          'Genótipo é a combinação de alelos presente no indivíduo; fenótipo é a característica observável. Em dominância completa, o alelo dominante (A) se manifesta em homozigotos e heterozigotos, enquanto o recessivo (a) só aparece em homozigotos recessivos (aa). Como cada gene possui dois alelos, herdados um de cada progenitor, a probabilidade de um filho apresentar determinado fenótipo pode ser calculada por diagramas de Punnett.'
        ],
        conceitos: [
          'Alelo: cada versão alternativa de um gene.',
          'Genótipo (AA, Aa, aa) e fenótipo (aparência).',
          'Homozigoto (AA, aa) e heterozigoto (Aa).',
          'Leis de Mendel: segregação e segregação independente.'
        ]
      },
      {
        titulo: 'Herança ligada ao X e mutações',
        texto: [
          'O cromossomo X carrega muitos genes. Como os homens possuem apenas um X, mutações recessivas ligadas a esse cromossomo aparecem com muito mais frequência em meninos. O daltonismo e a hemofilia são exemplos clássicos de herança recessiva ligada ao X.',
          'Mutações são alterações na sequência do DNA. As que surgem espontaneamente são chamadas mutações de novo; as adquiridas por agentes externos (radiação, substâncias químicas, erros de replicação) são mutações induzidas. Mutações em células somáticas afetam apenas o indivíduo; em células germinativas, podem passar à geração seguinte. A edição genética, com a ferramenta CRISPR, permite corrigir genes defeituosos e traz grandes promessas para o tratamento de doenças humanas, mas ainda exige discussão ética cuidadosa.'
        ],
        conceitos: [
          'Genes no cromossomo X manifestam-se com mais frequência em meninos.',
          'Mutação germinativa pode ser herdada; somática, não.',
          'CRISPR-Cas é a principal ferramenta de edição genética.',
          'Polialelismo: mais de dois alelos para o mesmo gene, como no sistema ABO.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'Como prever o tipo sanguíneo de um filho?',
        texto: 'Os genes do sistema ABO (Iᴬ, Iᴮ e i) ficam no cromossomo 9 e apresentam codominância entre Iᴬ e Iᴮ. Cruzamentos possíveis: A × A gera apenas A; A × B pode gerar AB; A × O pode gerar A ou O. Conhecendo os tipos dos pais, é possível estimar as probabilidades.'
      },
      {
        titulo: 'Por que gêmeos idênticos são geneticamente iguais?',
        texto: 'Eles se originam de um único zigoto que se divide em dois embriões. Como recebem exatamente o mesmo material genético, suas diferenças atuais são devidas ao ambiente, à alimentação e ao estilo de vida — o que demonstra que o fenótipo é resultado da interação entre genótipo e ambiente.'
      },
      {
        titulo: 'A medicina forense e o teste de DNA',
        texto: 'A análise de marcadores genéticos presentes no DNA permite identificar parentesco, confirmar a identidade de uma pessoa ou excluir suspeitos em investigações. A técnica se baseia no princípio de que cada indivíduo possui um perfil genético praticamente único, como uma "impressão digital molecular".'
      }
    ],
    glossario: [
      { termo: 'Alelo', definicao: 'Versão alternativa de um gene.' },
      { termo: 'Genótipo', definicao: 'Conjunto de alelos de um gene em um indivíduo.' },
      { termo: 'Fenótipo', definicao: 'Característica observável resultante da interação entre genótipo e ambiente.' },
      { termo: 'Cromossomo', definicao: 'Estrutura que condensa o DNA e carrega os genes.' }
    ],
    resumo: [
      'O DNA é formado por nucleotídeos e tem forma de dupla hélice.',
      'A pareia com T (2 ligações de hidrogênio) e G com C (3 ligações).',
      'A replicação do DNA é semiconservativa e ocorre na fase S.',
      'Transcrição (DNA → mRNA) e tradução (mRNA → proteína) expressam a informação genética.',
      'As leis de Mendel explicam a segregação e a segregação independente dos genes.',
      'O daltonismo e a hemofilia são exemplos de herança recessiva ligada ao X.'
    ],
    quiz: [
      {
        p: 'Quais bases nitrogenadas formam o DNA e como se pareiam?',
        a: ['Adenina com timina e guanina com citosina', 'Adenina com guanina e timina com citosina', 'Adenina com citosina e timina com guanina', 'Adenina com adenina e timina com timina'],
        c: 0,
        e: 'A complementaridade de bases (A–T com duas ligações de hidrogênio e G–C com três) é a base do pareamento e da replicação do DNA.'
      },
      {
        p: 'A replicação do DNA é dita semiconservativa porque:',
        a: ['Cada molécula nova possui uma fita antiga e uma fita recém-sintetizada', 'Apenas metade do DNA é replicada a cada ciclo', 'O DNA se replica somente no núcleo', 'As novas fitas são idênticas às antigas sem misturar nucleotídeos'],
        c: 0,
        e: 'O termo semiconservativa indica que cada fita parental é conservada e serve de molde para uma nova fita, formando uma molécula híbrida.'
      },
      {
        p: 'Na tradução, o mRNA é lido pelos ribossomos em grupos de quantos nucleotídeos?',
        a: ['Um', 'Dois', 'Três', 'Seis'],
        c: 2,
        e: 'Cada códon é formado por três bases do mRNA e corresponde a um aminoácido ou a um sinal de término da tradução.'
      },
      {
        p: 'Um homem tem daltonismo e a mulher é portadora do gene recessivo. Qual a probabilidade de um filho ser daltônico?',
        a: ['25%', '50%', '75%', '100%'],
        c: 1,
        e: 'O daltonismo é recessivo ligado ao X. Metade dos filhos herda da mãe o X que contém o alelo defeituoso; como o filho tem apenas um X, manifesta a doença.'
      },
      {
        p: 'Segundo a lei da segregação independente, os alelos de genes:',
        a: ['Localizados no mesmo cromossomo se distribuem independentemente', 'Localizados em cromossomos diferentes se distribuem independentemente na formação dos gametas', 'Nunca se separam durante a meiose', 'Sempre ficam juntos em um único cromossomo'],
        c: 1,
        e: 'A segregação independente vale para genes em pares de cromossomos diferentes, que se distribuem de forma independente para os gametas.'
      },
      {
        p: 'O conjunto completo de genes de um organismo é chamado de:',
        a: ['Cariótipo', 'Genoma', 'Fenótipo', 'Cromátide'],
        c: 1,
        e: 'O genoma é o conjunto total de material genético. Cariótipo é a representação do conjunto de cromossomos; cromátide é cada uma das duas fitas do cromossomo duplicado.'
      },
      {
        p: 'Uma mutação ocorrida em uma célula do cérebro:',
        a: ['Será transmitida aos filhos do indivíduo', 'Afeta apenas as células descendentes daquela célula e não é transmitida aos filhos', 'Alterará imediatamente toda a espécie', 'Será automaticamente corrigida pelo sistema imunológico'],
        c: 1,
        e: 'Mutações somáticas ficam restritas ao organismo e à linhagem celular em que surgiram. Somente mutações em células germinativas podem ser herdadas.'
      },
      {
        p: 'A principal ferramenta de edição genética atualmente é:',
        a: ['O microscópio eletrônico', 'A técnica CRISPR-Cas', 'A reação em cadeia da polimerase', 'A eletroforese em gel'],
        c: 1,
        e: 'O CRISPR-Cas funciona como uma "tesoura molecular" programada, capaz de localizar e cortar trechos específicos de DNA, permitindo correções dirigidas.'
      },
      {
        p: 'O código genético é chamado de quase universal porque:',
        a: ['Só funciona em células animais', 'O mesmo códon corresponde ao mesmo aminoácido na maioria dos seres vivos', 'Existe apenas em alguns microrganismos', 'Cada organismo possui um código completamente diferente'],
        c: 1,
        e: 'Praticamente todos os organismos usam o mesmo código, com pouquíssimas exceções — uma forte evidência de origem comum da vida.'
      }
    ]
  },

  /* ====================================================================== */
  /* 3. ECOLOGIA                                                            */
  /* ====================================================================== */
  {
    id: 'ecologia',
    icone: 'ecologia',
    tema: 'teal',
    titulo: 'Ecologia',
    linha: 'Ecossistemas, cadeias alimentares e relações ecológicas',
    descricao: 'Como os seres vivos se relacionam entre si e com o ambiente, e como a energia e a matéria circulam pelos ecossistemas.',
    tempo: 25,
    nivel: 'Ensino Médio',
    tags: ['ecossistema', 'cadeia alimentar', 'nicho', 'biodiversidade'],
    introducao: [
      'Ecologia é a parte da Biologia que estuda a distribuição e a abundância dos seres vivos, as relações entre eles e com o ambiente, e os processos que mantêm a vida organizada em cada ecossistema. O termo vem do grego oikos (casa) e logos (estudo): é o estudo da "casa" dos seres vivos.',
      'Ecossistema é o conjunto formado pela comunidade de organismos de uma área e pelos fatores abióticos que a cercam, num sistema inter-relacionado. Estudar um ecossistema significa entender como a energia flui entre os níveis tróficos, como os nutrientes circulam e como as espécies se relacionam entre si e com o meio físico.'
    ],
    secoes: [
      {
        titulo: 'Ecossistema e biosfera',
        texto: [
          'A biosfera reúne todos os seres vivos da Terra e os ambientes onde vivem. A ecologia se organiza em níveis de estudo: população (indivíduos da mesma espécie numa área), comunidade (todas as populações de uma área) e ecossistema (comunidade mais fatores abióticos, como luz, água, solo e temperatura).',
          'Habitat é o lugar onde a espécie vive; nicho ecológico é o conjunto de condições e de funções que ela ocupa no ecossistema. Duas espécies podem compartilhar o mesmo habitat e, ainda assim, ocupar nichos diferentes, o que reduz a competição direta.'
        ],
        conceitos: [
          'População, comunidade, ecossistema e biosfera.',
          'Habitat: local onde a espécie vive.',
          'Nicho ecológico: função e condições ocupadas pela espécie.',
          'Fatores abióticos: clima, solo, luz, água e relevo.'
        ],
        diagrama: 'ecologia'
      },
      {
        titulo: 'Cadeias e teias alimentares',
        texto: [
          'A cadeia alimentar descreve o caminho da energia: produtor → herbívoro → carnívoro → decomposidor. Na prática, os ecossistemas formam teias alimentares, em que uma espécie pode ocupar vários níveis tróficos. Os decompositores (bactérias e fungos) fecham o ciclo, devolvendo ao solo a matéria orgânica dos restos mortais e das excreções.',
          'A energia flui em uma única direção e se dissipa na forma de calor a cada transferência. Em regra, apenas cerca de 10% da energia de um nível trófico passa para o seguinte, o que explica por que o número de herbívoros é sempre muito maior que o de carnívoros.'
        ],
        conceitos: [
          'Produtores, consumidores primários, secundários e terciários.',
          'Decompositores devolvem matéria ao ambiente.',
          'Pirâmide energética: fluxo de energia em uma única direção.',
          'Cerca de 10% da energia é transferida a cada nível trófico.'
        ]
      },
      {
        titulo: 'Relações ecológicas',
        texto: [
          'As relações entre espécies são classificadas pelo efeito que exercem uma sobre a outra. No mutualismo (+/+), ambas se beneficiam, como as abelhas e as flores. Na competição (−/−), ambas são prejudicadas, disputando o mesmo recurso. Na predação e na herbivoria (+/−), uma se beneficia e a outra é prejudicada. O parasitismo é uma relação especial em que o parasita se beneficia e o hospedeiro é prejudicado. No comensalismo (+/0), apenas uma se beneficia; no amensalismo (−/0), uma é prejudicada e a outra não é afetada.',
          'Essas relações são dinâmicas: dependem da disponibilidade de recursos, da densidade populacional e das condições ambientais. A presença de predadores, por exemplo, pode evitar o colapso de uma população de herbívoros.'
        ],
        conceitos: [
          'Mutualismo (+/+), competição (−/−), predação (+/−).',
          'Parasitismo, comensalismo (+/0) e amensalismo (−/0).',
          'Relações intraespecíficas e interespecíficas.',
          'A densidade populacional altera o tipo de relação dominante.'
        ]
      },
      {
        titulo: 'Ciclos biogeoquímicos',
        texto: [
          'A matéria, ao contrário da energia, circula continuamente no ecossistema. No ciclo do carbono, as plantas fixam CO₂ na fotossíntese e devolvem parte dele pela respiração e pela queima de matéria orgânica. No ciclo do nitrogênio, bactérias fixam nitrogênio atmosférico, que se torna amônia, nitrito e nitrato, formas aproveitadas pelos seres vivos.',
          'O ciclo da água envolve evaporação, condensação, precipitação, infiltração no solo e retorno aos cursos d’água. Esses ciclos mantêm a disponibilização de matéria-prima e de energia química para os organismos.'
        ],
        conceitos: [
          'Ciclo do carbono: fotossíntese, respiração e combustão.',
          'Ciclo do nitrogênio: fixação, nitrificação e desnitrificação.',
          'Ciclo da água: evaporação, precipitação e infiltração.',
          'Matéria circula; energia flui em uma só direção.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'Um ecossistema inteiro em um aquário',
        texto: 'Peixes, plantas aquáticas, microalgas, zooplancton e bactérias decompositoras formam uma teia alimentar. A luz alimenta as algas; as plantas fornecem oxigênio; o zooplancton é consumido pelos peixes; e as bactérias devolvem à água os nutrientes. É um exemplo didático de ciclo de matéria e fluxo de energia em pequena escala.'
      },
      {
        titulo: 'Por que existem mais herbívoros que predadores?',
        texto: 'Como apenas cerca de 10% da energia passa de um nível trófico para o seguinte, cada predador precisa de muitos herbívoros para se sustentar. A pirâmide de números e a pirâmide de biomassa quase sempre têm a mesma forma: base larga e topo estreito.'
      },
      {
        titulo: 'A relação entre a alga e o fungo',
        texto: 'Nos liquens — associação entre um fungo e uma alga ou cianobactéria — o fungo oferece água, sais minerais e proteção, e a alga realiza a fotossíntese e fornece o açúcar. É um mutualismo clássico, usado como exemplo de simbiose na natureza.'
      }
    ],
    glossario: [
      { termo: 'Ecossistema', definicao: 'Comunidade de seres vivos e fatores abióticos relacionados.' },
      { termo: 'Bioma', definicao: 'Conjunto de ecossistemas com características semelhantes.' },
      { termo: 'Produtor', definicao: 'Ser vivo que produz matéria orgânica própria por fotossíntese.' },
      { termo: 'Nicho ecológico', definicao: 'Função e condições ocupadas por uma espécie no ecossistema.' }
    ],
    resumo: [
      'População → comunidade → ecossistema → biosfera.',
      'Habitat é o lugar; nicho ecológico é a função.',
      'A energia flui em uma só direção; a matéria circula em ciclos.',
      'Cerca de 10% da energia é transferida entre níveis tróficos.',
      'Mutualismo (+/+), competição (−/−) e predação (+/−) são relações frequentes.',
      'Decompositores são essenciais para a devolução de nutrientes ao solo.'
    ],
    quiz: [
      {
        p: 'A respeito da energia em um ecossistema, é correto afirmar que:',
        a: ['A energia circula em ciclos, como a matéria', 'A energia flui em uma única direção, do sol aos decompositores', 'A energia é criada pelos decompositores', 'Toda a energia do nível trófico passa para o nível seguinte'],
        c: 1,
        e: 'A energia entra como radiação solar e se dissipa em calor a cada troca entre níveis tróficos; ela não retorna ao sistema.'
      },
      {
        p: 'Em uma cadeia alimentar, a energia transferida de um nível trófico para o seguinte corresponde, em geral, a:',
        a: ['Cerca de 90%', 'Cerca de 10%', '100%', 'Cerca de 50%'],
        c: 1,
        e: 'A maior parte da energia é usada nos processos metabólicos e se dissipa como calor; cerca de 10% passa para o nível seguinte.'
      },
      {
        p: 'A relação em que as duas espécies se beneficiam é chamada de:',
        a: ['Competição', 'Mutualismo', 'Parasitismo', 'Amensalismo'],
        c: 1,
        e: 'No mutualismo ambas as espécies são favorecidas (+/+), como abelhas e flores. Na competição ambas são prejudicadas.'
      },
      {
        p: 'A função principal dos decompositores no ecossistema é:',
        a: ['Produzir alimento a partir da luz solar', 'Devolver ao ambiente a matéria orgânica dos restos mortais e das excreções', 'Aumentar a energia disponível nos níveis tróficos superiores', 'Polinizar as plantas'],
        c: 1,
        e: 'Bactérias e fungos quebram a matéria orgânica, reciclando os nutrientes no solo e na água.'
      },
      {
        p: 'Habitat e nicho ecológico referem-se, respectivamente, a:',
        a: ['Função e local', 'Local e função', 'Tipo de relação e local', 'População e comunidade'],
        c: 1,
        e: 'Habitat é o lugar onde o organismo vive; nicho é o conjunto de funções e condições que ele ocupa ali.'
      },
      {
        p: 'Duas espécies que ocupam o mesmo habitat e o mesmo nicho ecológico:',
        a: ['Podem conviver sem competição direta', 'Não podem coexistir por longo tempo, pois disputam os mesmos recursos', 'Ocupam o mesmo nível trófico', 'São necessariamente da mesma espécie'],
        c: 1,
        e: 'A sobreposição total de nichos gera competição intensa, que pode levar à exclusão competitiva de uma das espécies.'
      },
      {
        p: 'O ciclo do nitrogênio é essencial porque:',
        a: ['Produz a energia que vem do sol', 'Transforma o nitrogênio atmosférico em formas aproveitáveis pelos seres vivos', 'Remove o oxigênio da atmosfera', 'Impede a erosão do solo'],
        c: 1,
        e: 'Bactérias fixadoras convertem o N₂ atmosférico em amônia e, depois, nitrito e nitrato, formas que as plantas absorvem.'
      },
      {
        p: 'Uma pirâmide de biomassa invertida, com mais biomassa de fitoplâncton que de peixes, ocorre em:',
        a: ['Florestas tropicais', 'Ecossistemas aquáticos', 'Desertos', 'Campos de trigo'],
        c: 1,
        e: 'No mar, o fitoplâncton se reproduz e renova rapidamente, sustentando uma biomassa de consumidores maior do que a sua própria.'
      }
    ]
  },

  /* ====================================================================== */
  /* 4. EVOLUÇÃO                                                            */
  /* ====================================================================== */
  {
    id: 'evolucao',
    icone: 'evolucao',
    tema: 'roxo',
    titulo: 'Evolução',
    linha: 'Seleção natural e diversidade dos seres vivos',
    descricao: 'A transformação dos seres vivos ao longo do tempo: mecanismos, provas e o ramo que deu origem à enorme biodiversidade atual.',
    tempo: 25,
    nivel: 'Ensino Médio',
    tags: ['darwin', 'seleção natural', 'especiação', 'adaptação'],
    introducao: [
      'Evolução biológica é o conjunto de mudanças que ocorrem nas populações ao longo das gerações, levando ao surgimento de novas espécies e à transformação das existentes. Ela não é um plano, mas o resultado da interação entre variações herdáveis, ambiente e tempo.',
      'Jean-Baptiste Lamarck propôs, no início do século XIX, a ideia de herança dos caracteres adquiridos. Charles Darwin, influenciado por Thomas Malthus e por suas observações durante a viagem do Beagle, formulou a seleção natural como mecanismo explicativo. A genética do século XX, com as leis de Mendel, deu base experimental a essa teoria, que hoje é sustentada pela genética populacional, pela ecologia e pela paleontologia.'
    ],
    secoes: [
      {
        titulo: 'Seleção natural',
        texto: [
          'Darwin percebeu que os seres vivos produzem mais descendentes do que o ambiente consegue sustentar e que existe variação entre os indivíduos. Aqueles que possuem características heredáveis mais vantajosas para o ambiente atual têm maior chance de sobreviver e de se reproduzir, transmitindo essas características aos filhos. Ao longo de muitas gerações, a composição da população muda: ocorre a seleção natural.',
          'Os três requisitos básicos são: variação entre os indivíduos, herança dessa variação e diferenças na taxa de reprodução e sobrevivência. Observar que apenas os seres vivos apresentam variação e são objeto de seleção natural é um forte indício de evolução, e é o principal argumento de Darwin contra a ideia de criação abruptas e fixas.'
        ],
        conceitos: [
          'Variação, herança e sobrevivência diferencial.',
          'Adaptação: característica que favorece a sobrevivência e a reprodução.',
          'Fitness é o sucesso reprodutivo, não a força física.',
          'A evolução ocorre em populações, não em indivíduos.'
        ],
        diagrama: 'evolucao'
      },
      {
        titulo: 'Tipos de seleção',
        texto: [
          'A seleção natural pode atuar de diferentes maneiras. Na seleção direcional, uma direção é favorecida — por exemplo, plantas com casca mais espessa sobrevivem melhor em regiões frias. Na seleção estabilizadora, os extremos são eliminados e o intermediário prevalece, como em plantas de altura intermediária em ambientes estáveis. Na seleção disruptiva (ou divergente), os dois extremos são favorecidos e o intermediário é desfavorecido, o que pode levar à formação de duas espécies.',
          'Seleção sexual é outra força: em muitas espécies, fêmeas escolhem parceiros com características chamativas, o que impulsiona a evolução de ornamentos e ritual de cortejo.'
        ],
        conceitos: [
          'Direcional, estabilizadora e disruptiva.',
          'Seleção sexual: escolha de parceiros reprodutivos.',
          'Deriva genética: alteração aleatória na frequência dos alelos.',
          'Fluxo genético: entrada e saída de alelos por migração.'
        ]
      },
      {
        titulo: 'Formação de espécies',
        texto: [
          'A especiação é o processo pelo qual uma espécie se divide em duas ou mais. Na especiação alopátrica, uma barreira geográfica (um rio, uma montanha, uma mudança de habitat) isola duas populações, que evoluem de forma independente até deixarem de trocar genes e tornarem-se incompatíveis biologicamente. Na especiação simpátrica, a separação ocorre dentro da mesma área, geralmente por pressão seletiva diferente ou por hibridação com formação de espécies diferentes.',
          'Quanto maior o isolamento reprodutivo, mais completo é o processo. Barreiras pré-zigóticas (diferenças comportamentais, temporais, mecânicas) impedem que os gametes se encontrem; barreiras pós-zigóticas (esterilidade ou morte do híbrido) impedem que o zigoto se torne viável.'
        ],
        conceitos: [
          'Especiação alopátrica: isolamento geográfico.',
          'Especiação simpátrica: separação na mesma área.',
          'Barreiras pré-zigóticas e pós-zigóticas.',
          'Espécies biológicas: conjunto de populações que se cruzam produzindo descendentes férteis.'
        ]
      },
      {
        titulo: 'Evidências da evolução',
        texto: [
          'A evolução é uma teoria científica no sentido mais forte: uma explicação vastamente corroborada por várias áreas. Os fósseis mostram a sequência de mudanças ao longo do tempo e a extinção de espécies. A anatomia comparada revela órgãos homólogos (com origem comum, como o braço humano e a barbatana de baleia) e análogos (função semelhante, origens diferentes, como a asa de inseto e a de ave).',
          'A embriologia mostra padrões de desenvolvimento compartilhados. A genética molecular demonstra que espécies mais próximas compartilham sequências de DNA mais parecidas, construindo uma árvore filogenética que reflete a história da linhagem. Darwin, além disso, provou que a evolução é um fato: a teoria explica como e por que ela ocorre.'
        ],
        conceitos: [
          'Fósseis, anatomia comparada, embriologia e biologia molecular.',
          'Órgãos homólogos: mesma origem, funções diferentes ou iguais.',
          'Órgãos análogos: mesma função, origens diferentes.',
          'Filogênese: história evolutiva das espécies.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'A resistência dos insetos aos inseticidas',
        texto: 'Em lavouras onde inseticidas são usados há décadas, a aplicação cada vez maior do produto é necessária. Isso acontece porque a aplicação elimina os insetos sensíveis, enquanto os que possuem variações heredáveis de resistência sobrevivem e se reproduzem, formando uma população resistente.'
      },
      {
        titulo: 'O caso dos tentilhões de Darwin',
        texto: 'Nos arquipélagos de Galápagos, os pássaros que vivem em ilhas diferentes apresentam bicos de formas distintas, adaptados ao alimento disponível. Charles Darwin pode observar essa variação ainda durante a viagem do Beagle, que durou cerca de cinco anos.'
      },
      {
        titulo: 'Fósseis como documentos históricos',
        texto: 'A sequência de fósseis de cavalos, de pequenos mamíferos com vários dedos a formas grandes com casco, é uma das evidências mais claras da evolução: cada transição aparece em camadas rochosas mais recentes.'
      }
    ],
    glossario: [
      { termo: 'Seleção natural', definicao: 'Processo pelo qual o ambiente favorece características vantajosas para a sobrevivência e a reprodução.' },
      { termo: 'Adaptação', definicao: 'Característica heredável que favorece a sobrevivência e a reprodução.' },
      { termo: 'Deriva genética', definicao: 'Variação aleatória na frequência dos alelos de uma população.' },
      { termo: 'Espécie', definicao: 'Grupo de populações que se cruzam e produzem descendentes férteis.' }
    ],
    resumo: [
      'A seleção natural exige variação, herança e sucesso reprodutivo desigual.',
      'Populações evoluem; indivíduos não.',
      'A evolução não tem propósito nem direção pré-definida.',
      'Deriva genética e fluxo genético também alteram as populações.',
      'Especiação alopátrica ocorre por isolamento geográfico.',
      'Fósseis, anatomia comparada e genética molecular são evidências convergentes.'
    ],
    quiz: [
      {
        p: 'Para que a seleção natural ocorra, são necessários:',
        a: ['Apenas variabilidade entre os indivíduos', 'Variabilidade, herança da variação e diferenças na sobrevivência e reprodução', 'Somente mudanças no ambiente', 'Apenas herança de caracteres adquiridos'],
        c: 1,
        e: 'Sem herança, a variação não se transmitiria às gerações seguintes; sem diferenças de sobrevivência e reprodução, não haveria seleção.'
      },
      {
        p: 'Sobre a evolução, é correto afirmar que:',
        a: ['Ocorre somente em organismos que se reproduzem sexuadamente', 'É um processo que ocorre em populações, ao longo de muitas gerações', 'Consiste no aumento da complexidade de todos os seres vivos', 'É programada para produzir seres mais perfeito'],
        c: 1,
        e: 'A evolução é mudança de frequência de alelos em populações ao longo do tempo; não tem meta e não ocorre "para" melhorar os organismos.'
      },
      {
        p: 'A deriva genética ocorre quando:',
        a: ['A mutação é vantajosa e fixada pela seleção', 'Ocorram alterações aleatórias na frequência dos alelos, principalmente em populações pequenas', 'Há migração intensa entre populações', 'A seleção natural atua em apenas uma direção'],
        c: 1,
        e: 'A deriva genética é um evento aleatório, sem seleção; seu efeito é mais forte em populações pequenas.'
      },
      {
        p: 'Órgãos homólogos são exemplos de:',
        a: ['As asas de pássaros e de insetos', 'O braço humano e a barbatana de baleia', 'As nadadeiras de peixes e os tentilhões de Darwin', 'O coração de peixes e de aves'],
        c: 1,
        e: 'Órgãos homólogos têm a mesma origem evolutiva, herdada de um ancestral comum, ainda que exerçam funções diferentes.'
      },
      {
        p: 'A especiação alopátrica ocorre quando:',
        a: ['Duas espécies competem pelo mesmo recurso no mesmo local', 'Uma barreira geográfica isola populações, que evoluem de forma independente', 'Um híbrido se reproduz e origina uma nova espécie', 'Há mutação instantânea em uma única geração'],
        c: 1,
        e: 'O isolamento geográfico impede o fluxo genético; as populações acumulam diferenças até se tornarem espécies diferentes.'
      },
      {
        p: 'Seleção estabilizadora:',
        a: ['Favorece um dos extremos de um caractere, deslocando a média da população', 'Elimina os extremos e favorece os valores intermediários', 'Aumenta a variabilidade genética da população', 'Ocorre apenas em populações artificiais'],
        c: 1,
        e: 'Na seleção estabilizadora, o valor intermediário de um caractere é favorecido e os extremos são eliminados pelo ambiente.'
      },
      {
        p: 'O principal argumento de Darwin contra a criação de espécies estáveis e imutáveis é:',
        a: ['A existência de fósseis', 'A observação de que os seres vivos apresentam variação e são objeto de seleção natural', 'A descoberta da estrutura do DNA', 'A teoria da continuidade do plasma germinativo'],
        c: 1,
        e: 'Darwin mostrou que a variação existe, é herdável e produz sucesso reprodutivo desigual, o que torna desnecessária a ideia de espécies imutáveis.'
      }
    ]
  },
  {
    id: 'fisiologia-humana',
    icone: 'corpo',
    tema: 'rose',
    titulo: 'Fisiologia Humana',
    linha: 'Sistemas e funcionamento do organismo',
    descricao: 'Como o corpo humano mantém o equilíbrio interno: circulação, respiração, digestão, excreção, nervos e hormônios.',
    tempo: 30,
    nivel: 'Ensino Médio',
    tags: ['homeostase', 'órgãos', 'sistemas', 'hormônios'],
    introducao: [
      'Fisiologia humana é a parte da Biologia que estuda o funcionamento do corpo humano. Cada órgão realiza uma tarefa específica, mas nenhum funciona sozinho. O organismo é um conjunto de sistemas integrados.',
      'Manter o equilíbrio interno é a meta constante do corpo. Esse equilíbrio se chama homeostase e depende de retroalimentação. Sensores detectam mudanças, o sistema nervoso e o endócrino comparam os valores com o padrão e acionam respostas corretivas. Temperatura, glicose, pressão arterial e pH são alguns dos parâmetros mantidos estáveis.'
    ],
    secoes: [
      {
        titulo: 'Homeostase e organização do corpo',
        texto: [
          'O corpo humano é formado por níveis crescentes de organização. Células formam tecidos, tecidos formam órgãos e órgãos formam sistemas. Cada sistema contribui para o funcionamento do conjunto: o circulatório e o respiratório levam oxigênio e nutrientes, o digestivo extrai esses nutrientes, o excretor elimina resíduos, e os sistemas nervoso e endócrino coordenam tudo.',
          'A homeostase funciona por retroalimentação negativa. Quando a temperatura corporal sobe, termorreceptores da pele avisam o hipotálamo, que dispara suor e vasodilatação cutânea. Quando a temperatura cai, o corpo conserva calor com vasoconstrição e tremores.'
        ],
        conceitos: [
          'Homeostase: manutenção de condições internas estáveis.',
          'Retroalimentação negativa: o sistema corrige desvios do padrão.',
          'Tecido → órgão → sistema → organismo.',
          'Hipotálamo: elo entre sistema nervoso e endócrino.'
        ],
        diagrama: 'corpo'
      },
      {
        titulo: 'Circulação e respiração',
        texto: [
          'O coração humano é uma bomba muscular dividida em quatro cavidades: dois átrios e dois ventrículos. O lado direito recebe o sangue pobre em oxigênio, vindo do corpo, e o envia aos pulmões. O lado esquerdo recebe o sangue rico em oxigênio, vindo dos pulmões, e o bombeia para todo o organismo. Essa é a circulação dupla e completa, típica dos mamíferos.',
          'A circulação arterial leva o sangue do coração aos tecidos. A venosa traz o sangue de volta. As trocas gasosas acontecem nos alvéolos pulmonares. Ali, o oxigênio do ar difunde para o sangue e o dióxido de carbono passa para o alvéolo. O sangue transporta os gases com a ajuda da hemoglobina, a proteína vermelha contida nas hemácias.'
        ],
        conceitos: [
          'Coração com quatro cavidades: átrios e ventrículos.',
          'Circulação dupla e completa: pequeno e grande circuitos.',
          'Alvéolos pulmonares: local das trocas gasosas.',
          'Hemoglobina: transporta oxigênio dentro das hemácias.'
        ]
      },
      {
        titulo: 'Digestão e excreção',
        texto: [
          'A digestão começa na boca, com a mastigação e a saliva, que contém amilase. No estômago, o alimento é misturado ao suco gástrico, com ácido clorídrico e enzimas como a pepsina. No intestino delgado, a bile emulsifica gorduras. Enzimas do pâncreas e da parede intestinal completam a digestão de proteínas, carboidratos e lipídios. Os nutrientes são absorvidos pelas vilosidades intestinais.',
          'O sistema excretor filtra o sangue pelos néfrons dos rins, formando a urina. Os néfrons removem ureia, excesso de sais e água, e devolvem ao sangue o que é útil. Além disso, os pulmões eliminam dióxido de carbono, a pele elimina suor e o fígado participa da detoxificação do sangue.'
        ],
        conceitos: [
          'Enzimas digestivas: amilase, pepsina, lipase e proteases.',
          'Vilosidades intestinais: absorção dos nutrientes.',
          'Nefrão: unidade funcional do rim.',
          'Fígado: processa nutrientes e detoxifica o sangue.'
        ]
      },
      {
        titulo: 'Sistema nervoso e sistema endócrino',
        texto: [
          'O sistema nervoso conduz impulsos de forma rápida. O neurônio é a célula responsável: recebe o estímulo, transmite o impulso e libera neurotransmissores na sinapse. O sistema nervoso central é formado pelo cérebro e pela medula. O periférico é formado pelos nervos e pelos gânglios.',
          'O sistema endócrino atua de forma mais lenta, porém duradoura. As glândulas endócrinas liberam hormônios no sangue. A hipófise, a tireoide, as suprarrenais, o pâncreas e as gônadas fazem parte desse conjunto. O hormônio tireoidiano regula o metabolismo. A insulina e o glucagon controlam a glicose. A adrenalina prepara o corpo para situações de emergência.'
        ],
        conceitos: [
          'Neurônio e sinapse: transmissão do impulso nervoso.',
          'Encéfalo e medula: sistema nervoso central.',
          'Hormônios são transportados pelo sangue.',
          'Insulina (pâncreas) e tireoxina (tireoide) são exemplos.'
        ]
      },
      {
        titulo: 'Locomoção, defesa e reprodução',
        texto: [
          'O sistema locomotor é formado pelo esqueleto, que dá suporte e proteção, e pelos músculos, que produzem movimento por contração. As articulações permitem a mobilidade. Tendões ligam músculos aos ossos, e ligamentos ligam ossos entre si.',
          'O sistema imunológico protege o organismo contra agentes invasores. Os linfócitos reconhecem antígenos e produzem anticorpos. Neutrófilos e macrófagos fazem fagocitose. O sistema tegumentar, formado pela pele e seus anexos, é a primeira barreira de defesa. O sistema reprodutor produz gametes e hormônios sexuais. Na mulher, ele também sustenta a gestação.'
        ],
        conceitos: [
          'Esqueleto, músculos, articulações, tendões e ligamentos.',
          'Antígeno, anticorpo, linfócito e fagocitose.',
          'A pele é a primeira barreira de defesa do corpo.',
          'Gametes e hormônios sexuais fazem parte do sistema reprodutor.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'Por que o coração acelera quando você corre?',
        texto: 'O sistema nervoso autônomo detecta a maior demanda de oxigênio e envia sinais ao coração. O coração aumenta a frequência e a força das batidas. Ao mesmo tempo, a respiração acelera para entrar mais ar. É um exemplo de homeostase diante de uma nova exigência.'
      },
      {
        titulo: 'A regulação da glicose pelo pâncreas',
        texto: 'Após uma refeição, a glicose no sangue sobe. O pâncreas libera insulina, que faz as células captarem glicose. O fígado também armazena glicose na forma de glicogênio. Em jejum, a glicose cai e o pâncreas libera glucagon. O fígado passa a liberar glicose no sangue. O sistema endócrino mantém o equilíbrio.'
      },
      {
        titulo: 'Tosse e espirro: defesas do pulmão',
        texto: 'As vias aéreas são recobertas por cílios e muco, que retêm partículas e microrganismos. Quando há irritação, o sistema de defesa elimina o excesso de muco por meio da tosse e do espirro. Assim, agentes patógenos têm menos chance de chegar aos alvéolos.'
      }
    ],
    glossario: [
      { termo: 'Homeostase', definicao: 'Manutenção de condições internas estáveis.' },
      { termo: 'Hormônio', definicao: 'Substância liberada no sangue que regula funções do organismo.' },
      { termo: 'Nefrão', definicao: 'Unidade funcional do rim, responsável pela formação da urina.' },
      { termo: 'Sinapse', definicao: 'Região de comunicação entre dois neurônios ou entre neurônio e célula muscular.' }
    ],
    resumo: [
      'Homeostase é a manutenção do equilíbrio interno por retroalimentação.',
      'O coração tem quatro cavidades e uma circulação dupla e completa.',
      'As trocas gasosas ocorrem nos alvéolos pulmonares.',
      'A digestão é concluída no intestino delgado, onde os nutrientes são absorvidos.',
      'Nervos transmitem impulsos; hormônios viajam pelo sangue.',
      'O sistema imunológico defende o organismo contra agentes invasores.'
    ],
    quiz: [
      {
        p: 'O que é homeostase?',
        a: ['A capacidade de o corpo crescer durante a infância', 'A manutenção de condições internas relativamente estáveis', 'O transporte de nutrientes pelo sangue', 'A defesa do organismo contra infecções'],
        c: 1,
        e: 'Homeostase é a capacidade de manter parâmetros como temperatura, pH, glicose e pressão arterial dentro de faixas estreitas.'
      },
      {
        p: 'Quantas cavidades possui o coração humano e como elas se distribuem?',
        a: ['Duas: um átrio e um ventrículo', 'Quatro: dois átrios e dois ventrículos', 'Três: dois átrios e um ventrículo', 'Cinco: dois átrios e três ventrículos'],
        c: 1,
        e: 'São quatro cavidades. O átrio direito e o ventrículo direito recebem e enviam o sangue pobre em oxigênio. O lado esquerdo faz o mesmo com o sangue oxigenado.'
      },
      {
        p: 'Onde ocorrem as trocas gasosas no sistema respiratório?',
        a: ['Na traqueia', 'Nos brônquios', 'Nos alvéolos pulmonares', 'Na faringe'],
        c: 2,
        e: 'Os alvéolos são sacos delimitados por uma película delgada, o que facilita a difusão de oxigênio e dióxido de carbono entre o ar e o sangue.'
      },
      {
        p: 'A insulina, hormônio produzido pelo pâncreas, atua para:',
        a: ['Aumentar a glicose no sangue', 'Reduzir a glicose no sangue, favorecendo sua captação pelas células', 'Elevar a pressão arterial', 'Parar a respiração celular'],
        c: 1,
        e: 'A insulina é liberada quando a glicose sobe. Ela faz as células musculares e o fígado retirarem glicose do sangue, armazenando-a como glicogênio.'
      },
      {
        p: 'Qual é a unidade funcional do rim?',
        a: ['Alvéolo', 'Nefrão', 'Hepatócito', 'Bronquíolo'],
        c: 1,
        e: 'O néfron filtra o sangue e forma a urina. Cada rim possui cerca de um milhão de néfrons.'
      },
      {
        p: 'O sistema imunológico tem como uma de suas funções:',
        a: ['Transportar oxigênio pelo sangue', 'Reconhecer antígenos e produzir anticorpos', 'Digerir os alimentos no intestino', 'Regular a temperatura do corpo'],
        c: 1,
        e: 'Os linfócitos reconhecem antígenos e produzem anticorpos. Neutrófilos e macrófagos fazem fagocitose.'
      },
      {
        p: 'Qual sistema é responsável por conduzir impulsos de forma rápida?',
        a: ['Endócrino', 'Nervoso', 'Digestório', 'Excretor'],
        c: 1,
        e: 'O sistema nervoso transmite impulsos em frações de segundo. O endócrino atua de forma mais lenta, porém duradoura, por meio dos hormônios.'
      },
      {
        p: 'As células vermelhas do sangue transportam os gases respiratórios principalmente graças à:',
        a: ['Albumina', 'Hemoglobina', 'Mielina', 'Insulina'],
        c: 1,
        e: 'A hemoglobina é a proteína que contém ferro dentro das hemácias. Ela se liga ao oxigênio e forma a oxihemoglobina.'
      }
    ]
  },
  {
    id: 'botanica',
    icone: 'planta',
    tema: 'lime',
    titulo: 'Botânica',
    linha: 'Estrutura, reprodução e importância das plantas',
    descricao: 'Como são as plantas: raiz, caule, folha, fotossíntese, transporte de seiva e reprodução com ou sem sementes.',
    tempo: 25,
    nivel: 'Ensino Médio',
    tags: ['plantas', 'fotossíntese', 'raiz', 'flor'],
    introducao: [
      'Botânica é a parte da Biologia que estuda as plantas: sua estrutura, seu funcionamento, sua reprodução e sua relação com o ambiente. As plantas são organismos autotróficos. Elas fabricam o próprio alimento a partir de substâncias inorgânicas.',
      'A fotossíntese, descrita em 1779 por Jan Ingenhousz e mais tarde explicada por Priestley e Senebier, é o motor da vida na Terra. As plantas convertem luz, água e dióxido de carbono em matéria orgânica e liberam oxigênio. Esse processo sustenta quase toda a cadeia alimentar do planeta.'
    ],
    secoes: [
      {
        titulo: 'Classificação das plantas',
        texto: [
          'As plantas vasculares possuem xilema e floema, ou seja, tecidos condutores. Elas se dividem em dois grandes grupos. As angiospermas são as plantas com flores e com sementes protegidas por um fruto. As gimnospermas têm sementes expostas, sem fruto e sem flor verdadeira.',
          'As briófitas, como os musgos, não possuem vasos condutores. São plantas pequenas, que dependem da água para a fertilização. Por isso, vivem em lugares úmidos. As samambaias e as árvores são pteridófitas: têm vasos condutores, mas não têm sementes. Gimnospermas e angiospermas são as plantas com sementes.'
        ],
        conceitos: [
          'Briófitas: musgos e afins, sem vasos condutores.',
          'Pteridófitas: samambaias, com vasos e sem sementes.',
          'Gimnospermas: sementes expostas, como as coníferas.',
          'Angiospermas: flores, frutos e sementes protegidas.'
        ]
      },
      {
        titulo: 'Raiz, caule e folha',
        texto: [
          'A raiz ancora a planta, absorve água e sais minerais e, em algumas espécies, armazena reservas. A região dos pelos absorventes, logo depois da raiz principal, é onde ocorre a maior parte da absorção.',
          'O caule transporta a seiva bruta, que sobe da raiz até as folhas. Também transporta a seiva elaborada, que desce para as raízes e para os frutos. O caule apoia as folhas e as flores e, em algumas plantas, realiza fotossíntese.',
          'A folha é o principal órgão da fotossíntese. Sua forma achatada favorece a captação de luz. Nos estômatos, pequenas aberturas da epiderme, acontecem as trocas de gases com o ar. É por eles que a planta também perde água na transpiração.'
        ],
        conceitos: [
          'Raiz: fixação, absorção de água e sais minerais.',
          'Caule: transporte de seiva e suporte das folhas.',
          'Folha: principal local da fotossíntese.',
          'Estômatos: abertura para troca de gases e transpiração.'
        ],
        diagrama: 'planta'
      },
      {
        titulo: 'Xilema, floema e transporte',
        texto: [
          'O xilema é formado por células que morrem na maturidade. Elas formam tubos contínuos, que conduzem a seiva bruta: água com sais minerais. O fluxo ascendente do solo até as folhas é explicado pela coesão entre as moléculas de água e pela tensão gerada pela transpiração.',
          'O floema é formado por células vivas, os elementos condutores. Ele conduz a seiva elaborada: uma solução com açúcares. O caminho vai das folhas até as áreas de consumo ou de armazenamento. Esse fluxo pode subir ou descer, conforme a necessidade da planta.'
        ],
        conceitos: [
          'Xilema: seiva bruta, do solo para as folhas.',
          'Floema: seiva elaborada, das folhas para o resto da planta.',
          'Transpiração: perda de água pelas folhas.',
          'Pressão radicular também contribui para o fluxo ascendente.'
        ]
      },
      {
        titulo: 'Fotossíntese e respiração vegetal',
        texto: [
          'Na fotossíntese, a energia da luz é captada pela clorofila, presente nos cloroplastos. A água é quebrada e libera oxigênio. O carbono do dióxido de carbono é fixado em moléculas orgânicas. A equação geral é: seis moléculas de CO₂ e seis de H₂O, sob luz, produzem uma de glicose e seis de O₂.',
          'As plantas também respiram, dia e noite. A respiração consome oxigênio e libera dióxido de carbono. Os dois processos são diferentes e podem ocorrer ao mesmo tempo. A respiração é uma oxidação de açúcares, com produção de ATP.'
        ],
        conceitos: [
          'Fotossíntese: luz + CO₂ + H₂O resultam em glicose + O₂.',
          'Clorofila: pigmento que capta a energia da luz.',
          'Respiração celular: glicose + O₂ resultam em CO₂ + H₂O + ATP.',
          'As plantas respiram continuamente, inclusive à noite.'
        ]
      },
      {
        titulo: 'Reprodução das plantas',
        texto: [
          'As plantas se reproduzem de forma assexuada e sexuada. Na assexuada, a brotação, os estolões, os bulbos, os rizomas e as sementes formadas assexuadamente produzem novos indivíduos geneticamente iguais à planta-mãe. Na sexuada, há formação de gametes e fusão deles.',
          'Nas angiospermas, a flor é o órgão reprodutivo. O pólen é produzido nas anteras e chega ao estigma. A polinização pode ser feita pelo vento, pela água ou pelos animais. Depois, um tubo polínico leva o gamete masculino até o ovário, onde ocorre a fecundação. Formam-se o zigoto, a semente e o fruto. A semente tem casca, reservas nutritivas e embrião.'
        ],
        conceitos: [
          'Polinização: transporte do pólen até o estigma.',
          'Fecundação: fusão dos gametes, formando o zigoto.',
          'Semente: casca, reservas nutritivas e embrião.',
          'O fruto é formado a partir do ovário da flor.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'Por que as plantas crescem em direção à luz?',
        texto: 'Isso se chama fototropismo. O lado do caule que recebe mais luz se alonga mais que o lado sombreado. Assim, a planta se curva em direção à fonte de luz. Essa resposta é mediada pela auxina, um hormônio vegetal.'
      },
      {
        titulo: 'O eucalipto e a economia brasileira',
        texto: 'O eucalipto é uma das árvores mais plantadas no Brasil. Cresce rápido e tem madeira usada na produção de papel e celulose. Suas folhas liberam óleo volátil, o que ajuda a reduzir o risco de incêndios em algumas plantações.'
      },
      {
        titulo: 'Carnívoras: plantas que comem insetos',
        texto: 'Em solos pobres em nitrogênio, plantas carnívoras como a dioneia e o nepêntice atraem insetos com Substância adesiva. As folhas modificadas capturam a presa e digerem o tecido. Assim, a planta obtém nitrogênio e sais minerais.'
      }
    ],
    glossario: [
      { termo: 'Cloroplasto', definicao: 'Organela que realiza a fotossíntese.' },
      { termo: 'Seiva bruta', definicao: 'Água com sais minerais transportada pelo xilema.' },
      { termo: 'Seiva elaborada', definicao: 'Solução com açúcares transportada pelo floema.' },
      { termo: 'Estômato', definicao: 'Abertura na epiderme foliar usada nas trocas gasosas.' }
    ],
    resumo: [
      'Plantas são autotróficos: produzem o próprio alimento.',
      'Fotossíntese: luz + CO₂ + H₂O resultam em glicose + O₂.',
      'Xilema leva a seiva bruta; floema leva a seiva elaborada.',
      'A folha é o principal órgão fotossintético; a raiz absorve água.',
      'Angiospermas têm flores e frutos; gimnospermas têm sementes expostas.',
      'A semente protege e nutre o embrião da nova planta.'
    ],
    quiz: [
      {
        p: 'A fotossíntese pode ser resumida pela equação:',
        a: ['6 O₂ e 6 H₂O formam C₆H₁₂O₆ e 6 CO₂', '6 CO₂ e 6 H₂O, sob luz, formam C₆H₁₂O₆ e 6 O₂', 'C₆H₁₂O₆ e 6 O₂ formam 6 CO₂ e 6 H₂O', '6 CO₂ e 6 O₂ formam C₆H₁₂O₆ e 6 H₂O'],
        c: 1,
        e: 'A equação resume o processo: com energia luminosa, o dióxido de carbono e a água formam glicose, liberando oxigênio.'
      },
      {
        p: 'Qual tecido transporta a seiva bruta, rica em água e sais minerais?',
        a: ['Floema', 'Xilema', 'Epiderme', 'Estômato'],
        c: 1,
        e: 'O xilema conduz a seiva bruta das raízes até as folhas. O floema conduz a seiva elaborada, rica em açúcares.'
      },
      {
        p: 'As gimnospermas se diferenciam das angiospermas porque:',
        a: ['Não têm raízes verdadeiras', 'Não têm flores, e suas sementes não ficam dentro de frutos', 'Não fazem fotossíntese', 'São sempre parasitas'],
        c: 1,
        e: 'As gimnospermas, como as coníferas, têm sementes expostas sobre cones. As angiospermas apresentam flores, frutos e sementes protegidas.'
      },
      {
        p: 'A fotossíntese ocorre principalmente em qual organela?',
        a: ['Mitocôndria', 'Cloroplasto', 'Lisossomo', 'Complexo de Golgi'],
        c: 1,
        e: 'Nos cloroplastos, a clorofila capta a energia da luz, que é usada para fixar o carbono do dióxido de carbono.'
      },
      {
        p: 'A perda de água na forma de vapor pelas folhas chama-se:',
        a: ['Gutação', 'Transpiração', 'Absorção', 'Ascensão'],
        c: 1,
        e: 'A transpiração ocorre pelos estômatos e é um dos motores do fluxo ascendente da seiva bruta no xilema.'
      },
      {
        p: 'A polinização corresponde:',
        a: ['À fusão dos gametes', 'Ao transporte do pólen até o estigma da flor', 'À formação do fruto', 'À germinação da semente'],
        c: 1,
        e: 'A polinização é a chegada do pólen ao estigma. A fecundação vem depois, com a fusão dos gametes no ovário.'
      },
      {
        p: 'O que diferencia uma angiosperma de uma gimnosperma?',
        a: ['A angiosperma tem sementes nuas e a gimnosperma tem flor', 'A angiosperma tem flores e frutos; a gimnosperma tem sementes sem fruto', 'A angiosperma não tem raiz', 'A gimnosperma não realiza respiração celular'],
        c: 1,
        e: 'A presença de flores e frutos é a característica que define as angiospermas. As gimnospermas conservam as sementes expostas.'
      },
      {
        p: 'A respiração das plantas:',
        a: ['Ocorre somente à noite', 'Ocorre dia e noite, consumindo oxigênio e liberando dióxido de carbono', 'É idêntica à fotossíntese', 'Não existe em plantas'],
        c: 1,
        e: 'Respirar e fotossintetizar são processos diferentes, mas podem ocorrer ao mesmo tempo na mesma célula.'
      }
    ]
  },

  {
    id: 'zoologia',
    icone: 'animais',
    tema: 'laranja',
    titulo: 'Zoologia',
    linha: 'Características e classificação dos animais',
    descricao: 'Do reino Animalia aos grandes grupos: como são organizados os animais e o que distingue vertebrados de invertebrados.',
    tempo: 25,
    nivel: 'Ensino Médio',
    tags: ['animais', 'vertebrados', 'invertebrados', 'classificação'],
    introducao: [
      'Zoologia é a parte da Biologia que estuda os animais: sua organização, sua anatomia, seu comportamento e sua classificação. O reino Animalia reúne seres vivos heterotróficos, sem parede celular, que se movem de forma ativa e, em geral, consomem outros seres vivos ou restos de matéria orgânica.',
      'Os animais são classificados por critérios como a simetria do corpo, a presença de cavidades corporais, a forma de obtenção do alimento e o desenvolvimento do embrião. A classificação tradicional separa os vertebrados, com coluna vertebral, dos invertebrados, que são a grande maioria das espécies descritas.'
    ],
    secoes: [
      {
        titulo: 'O reino Animalia',
        texto: [
          'Os animais apresentam quatro características que os distinguem dos demais reinos. São multicelulares, heterotróficos, não têm parede celular e, em geral, conseguem se deslocar. A maioria também possui um sistema nervoso e sentidos especializados.',
          'Quanto à simetria, podem ser assimétricos, como as esponjas, ou simétricos, com um plano corporal. Entre os simétricos, há os de simetria radial, como os cnidários, e os de simetria bilateral, que incluem a maioria dos animais.',
          'A cavidade corporal varia. Os poríferos não têm cavidade verdadeira. Os platelmintos têm cavidade incompleta. Os demais têm cavidade completa, com intestino e mesoderme bem definidos. Esses últimos são chamadas triploblastos. Os poríferos e cnidários são diploblastos.'
        ],
        conceitos: [
          'Animais: multicelulares, heterotróficos e quase sempre móveis.',
          'Simetria radial e bilateral.',
          'Cavidade corporal: ausente, incompleta ou completa.',
          'Diploblastos (2 folhamentos) e triploblastos (3 folhamentos).'
        ],
        diagrama: 'animais'
      },
      {
        titulo: 'Invertebrados',
        texto: [
          'Os poríferos, como as esponjas, são animais simples. Possuem um sistema de canículos, e a digestão é intracelular. Os cnidários, como as águas-vivas e os corais, possuem cnidocistos, células urticantes usadas na defesa e na captura de presas. Os platelmintos, como as planárias e as tênias, são achatados e têm sistema nervoso em escada.',
          'Os nematelmintos, como os vermes redondos, têm corpo cilíndrico e uma cutícula resistente. Os anelidos, como as minhocas, têm o corpo dividido em segmentos e um sistema de vasos fechados. Os artrópodes são o maior filo do reino animal: têm corpo segmentado, apêndices articulados e exoesqueleto de quitina. Os moluscos, como caracóis e lulas, têm corpo mole e, em muitos grupos, uma concha calcária. Os equinodermos, como as estrelas-do-mar, têm esqueleto interno e simetria pentarradial na fase adulta.'
        ],
        conceitos: [
          'Poríferos: esponjas, com digestão intracelular.',
          'Cnidários: águas-vivas e corais, com cnidocistos.',
          'Anelidos: corpo segmentado, como a minhoca.',
          'Artrópodes: maior filo, com exoesqueleto de quitina.'
        ]
      },
      {
        titulo: 'Vertebrados',
        texto: [
          'Os vertebrados possuem coluna vertebral, crânio e sistema nervoso centralizado. São cinco grupos. Os peixes foram os primeiros vertebrados a aparecerem. Quase todos têm escamas, brânquias e nadadeiras.',
          'Os anfíbios, como os sapos e as salamandras, passaram a viver em terra. Têm pele úmida e respiram por pulmões e pela pele. Os répteis, como os lagartos e as serpentes, têm pele seca com escamas. As aves têm penas e ossos ocos, e todas põem ovos. Os mamíferos, como o ser humano, têm glândulas mamárias e cabelo. Podem ser monotrematos, marsupiais ou placentários.'
        ],
        conceitos: [
          'Vertebrados: coluna vertebral e crânio.',
          'Peixes: brânquias e escamas; primeiros vertebrados.',
          'Anfíbios: metamorfose e pele úmida.',
          'Répteis, aves e mamíferos: amniotas.'
        ]
      },
      {
        titulo: 'Nomenclatura científica',
        texto: [
          'Todo ser vivo recebe um nome científico único, em latim, definido por Carl von Linné no Systema Naturae. O nome é escrito em itálico e vem acompanhado do nome do autor, abreviado. Por exemplo: Homo sapiens L. O primeiro termo indica o gênero, e o segundo, a espécie.',
          'A nomenclatura binomial evita que organismos diferentes tenham o mesmo nome comum. Também permite que o nome seja usado em todo o mundo, em qualquer idioma. Uma espécie pode ainda ser dividida em subespécies, identificadas por um terceiro nome.'
        ],
        conceitos: [
          'Binomial: gênero e espécie, em latim e itálico.',
          'Gênero agrupa espécies com características afins.',
          'Classificação: reino, filo, classe, ordem, família, gênero e espécie.',
          'O nome científico é universal e independe do idioma.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'O polvo é um molusco diferente dos outros',
        texto: 'Embora tenha corpo mole como os moluscos, o polvo tem oito braços com ventosas. Seus olhos são parecidos com os dos vertebrados, e seu cérebro é muito desenvolvido. Ele é um cefalópode, grupo que inclui as lulas e o náutilo.'
      },
      {
        titulo: 'Por que as abelhas são insetos?',
        texto: 'Insetos são artrópodes com três pares de pernas. O corpo é dividido em cabeça, tórax e abdômen, e a maioria tem asas. As abelhas, as formigas, as borboletas e os besouros seguem todas essas características.'
      },
      {
        titulo: 'A metamorfose do sapo',
        texto: 'O sapo começa a vida como girino, uma larva aquática com brânquias e cauda. Durante a metamorfose, perde as brânquias, ganha pulmões e patas, e a cauda é reabsorvida. Esse modelo de desenvolvimento é típico dos anfíbios.'
      }
    ],
    glossario: [
      { termo: 'Nomenclatura binomial', definicao: 'Sistema de nomes científicos com gênero e espécie.' },
      { termo: 'Cnidocisto', definicao: 'Célula urticante dos cnidários, usada na defesa e na captura de presas.' },
      { termo: 'Cavidade corporal', definicao: 'Espaço interno do corpo, onde ficam os órgãos.' },
      { termo: 'Metamorfose', definicao: 'Mudança profunda de forma e anatomia durante o desenvolvimento.' }
    ],
    resumo: [
      'O reino Animalia reúne animais multicelulares, heterotróficos e móveis.',
      'Simetria radial ou bilateral; cavidade corporal ausente, incompleta ou completa.',
      'Invertebrados: poríferos, cnidários, platelmintos, nematelmintos, anelidos, artrópodes, moluscos e equinodermos.',
      'Vertebrados: peixes, anfíbios, répteis, aves e mamíferos.',
      'Os artrópodes são o maior filo, com exoesqueleto de quitina.',
      'A nomenclatura binomial usa nome de gênero e de espécie.'
    ],
    quiz: [
      {
        p: 'Qual é a característica que define os vertebrados?',
        a: ['A presença de exoesqueleto de quitina', 'A presença de coluna vertebral e crânio', 'A capacidade de fazer fotossíntese', 'A existência de cnidocistos'],
        c: 1,
        e: 'Os vertebrados apresentam esqueleto interno com vértebras que protegem a medula, além de crânio e sistema nervoso centralizado.'
      },
      {
        p: 'Os artrópodes são caracterizados por:',
        a: ['Corpo mole com concha única', 'Corpo segmentado e apêndices articulados', 'Ausência de esqueleto externo', 'Simetria radial e cnidocistos'],
        c: 1,
        e: 'Os artrópodes, como insetos, aranhas e crustáceos, têm exoesqueleto de quitina, corpo segmentado e membros articulados.'
      },
      {
        p: 'Qual grupo possui cnidocistos, células urticantes usadas para capturar presas?',
        a: ['Cnidários', 'Moluscos', 'Equinodermos', 'Peixes'],
        c: 0,
        e: 'Os cnidários, como águas-vivas e corais, usam cnidocistos para defender-se e para imobilizar presas.'
      },
      {
        p: 'A nomenclatura binomial de Carl von Linné utiliza:',
        a: ['O nome do filo e o da família', 'O nome do gênero e o da espécie', 'O nome científico e o popular', 'A família e a ordem'],
        c: 1,
        e: 'O nome científico tem duas partes: o gênero, com inicial maiúscula, e a espécie, com inicial minúscula. Ambos são escritos em itálico.'
      },
      {
        p: 'Os equinodermos, como as estrelas-do-mar, apresentam:',
        a: ['Corpo segmentado e apêndices articulados', 'Simetria pentarradial na fase adulta e esqueleto interno', 'Cnidocistos e digestão intracelular', 'Coluna vertebral e escamas'],
        c: 1,
        e: 'Os equinodermos têm esqueleto interno calcário e, quando adultos, simetria de cinco partes. As larvas têm simetria bilateral.'
      },
      {
        p: 'A metamorfose é típica de qual grupo?',
        a: ['Anfíbios', 'Aves', 'Mamíferos', 'Cnidários'],
        c: 0,
        e: 'Os anfíbios nascem como girinos aquáticos e passam por metamorfose, perdendo as brânquias e ganhando pulmões e patas.'
      },
      {
        p: 'A cavidade corporal completa, com intestino e mesoderme, é característica dos:',
        a: ['Poríferos', 'Cnidários', 'Platelmintos', 'Vertebrados e artrópodes'],
        c: 3,
        e: 'Nos platelmintos, a cavidade é incompleta. Nos vertebrados e artrópodes, a cavidade é completa e totalmente revestida pelo mesoderme.'
      },
      {
        p: 'Qual animal possui oito braços com ventosas, olhos complexos e sistema nervoso desenvolvido?',
        a: ['A arraia-manta', 'O polvo', 'A água-viva', 'A minhoca'],
        c: 1,
        e: 'O polvo é um cefalópode do grupo dos moluscos. Ele tem sistema nervoso e olhos praticamente tão típicos quanto os dos vertebrados.'
      }
    ]
  },
  {
    id: 'microbiologia',
    icone: 'microbio',
    tema: 'ciano',
    titulo: 'Microbiologia',
    linha: 'Vírus, bactérias, fungos e outros microrganismos',
    descricao: 'O mundo invisível: estrutura, reprodução, importância e riscos dos microrganismos, além dos mecanismos de controle.',
    tempo: 25,
    nivel: 'Ensino Médio',
    tags: ['vírus', 'bactérias', 'fungos', 'microrganismos'],
    introducao: [
      'Microbiologia estuda os microrganismos: seres vivos muito pequenos, observáveis apenas ao microscópio. Bactérias, fungos, protozoários, algas microscópicas e vírus formam um universo paralelo ao que vemos a olho nu.',
      'Os microrganismos estão em toda parte. Uns causam doenças, como a bactéria Mycobacterium tuberculosis, causadora da tuberculose, ou o vírus da gripe. Outros são indispensáveis. Sem as bactérias do intestino, a digestão e a produção de vitaminas ficariam comprometidas. Sem os decompositores, a matéria orgânica se acumularia sem reciclagem.'
    ],
    secoes: [
      {
        titulo: 'O mundo microbiano',
        texto: [
          'Os microrganismos podem ser vistos no microscópio óptico, com aumento de centenas a milhares de vezes. Alguns ainda exigem microscópio eletrônico. Entre eles, existem os que são procariontes, como as bactérias, e os eucariotes, como os fungos e os protozoários. Os vírus não são células: não têm metabolismo próprio.',
          'Os microrganismos ocupam praticamente todos os ambientes. Bactérias vivem no solo, no gelo, no fundo dos oceanos e dentro de outros organismos. Estima-se que existam trilhões de microrganismos na Terra, e muitos ainda não foram descritos pela ciência.'
        ],
        conceitos: [
          'Bactérias, fungos, protozoários e vírus só são vistos ao microscópio.',
          'Procariontes (bactérias) e eucariotes (fungos, protozoários).',
          'Vírus não são células: não têm metabolismo.',
          'Distribuição ubíqua: presentes em praticamente todos os ambientes.'
        ]
      },
      {
        titulo: 'Vírus',
        texto: [
          'Os vírus são agentes infecciosos muito simples. Não possuem células, nem metabolismo próprio, nem capacidade de se reproduzir sozinhos. São formados por um capsídeo proteico que envolve o material genético, que pode ser DNA ou RNA. Alguns também têm um envelope lipídico.',
          'O ciclo de multiplicação pode ser lítico ou lisogênico. No ciclo lítico, o vírus entra na célula hospedeira, usa a maquinaria celular para produzir novos vírus e, ao final, rompe a célula. No ciclo lisogênico, o material genético do vírus se integra ao do hospedeiro, permanecendo em silêncio antes de se ativar.'
        ],
        conceitos: [
          'Vírus: capsídeo proteico e material genético (DNA ou RNA).',
          'Sem metabolismo e sem reprodução independente.',
          'Ciclo lítico: multiplicação e destruição da célula hospedeira.',
          'Ciclo lisogênico: integração ao genoma do hospedeiro.'
        ]
      },
      {
        titulo: 'Bactérias',
        texto: [
          'As bactérias são procariotes. Possuem parede celular de peptidoglycano, membrana plasmática, citoplasma com ribossomos e um único cromossomo circular, geralmente associado a pequenos segmentos de DNA chamados plasmídeos. Não têm núcleo delimitado por membrana.',
          'A reprodução é assexuada, por divisão binária: a célula duplica seu DNA e se divide em duas células-filhas geneticamente iguais. A velocidade é impressionante. Em condições favoráveis, algumas bactérias se dividem a cada vinte minutos. A variabilidade genética surge por mutação e pela troca de DNA entre bactérias.'
        ],
        conceitos: [
          'Procariotes: sem núcleo e com DNA circular.',
          'Parede celular de peptidoglycano.',
          'Reprodução por divisão binária.',
          'Plasmídeos: DNA extracromossomial, às vezes com resistência a antibióticos.'
        ]
      },
      {
        titulo: 'Fungos e protozoários',
        texto: [
          'Os fungos são eucariotes heterotróficos, com parede celular de quitina. Podem ser unicelulares, como as leveduras, que produzem fermentação. Ou podem ser pluricelulares, com hifas que formam uma rede chamada micélio. Reproduzem-se por esporos. Os fungos decompõem matéria orgânica e ciclam nutrientes no ecossistema.',
          'Os protozoários são eucariotes unicelulares, sem parede celular. Como a água é o seu habitat, formam cistos resistentes para sobreviver a períodos desfavoráveis. Muitos são parasitas e causam doenças, como a malária, transmitida pelo mosquito Anopheles.'
        ],
        conceitos: [
          'Fungos: parede de quitina, hifas e esporos.',
          'Leveduras: fungos unicelulares que fazem fermentação.',
          'Decomposição: função ecológica essencial.',
          'Protozoários: eucariotes unicelulares aquáticos.'
        ]
      },
      {
        titulo: 'Controle dos microrganismos',
        texto: [
          'A pasteurização, o congelamento e a secagem reduzem a carga de microrganismos nos alimentos. A antissepsia usa álcool, iodo ou hipoclorito em feridas e superfícies. A esterilização, com calor sob pressão ou agentes químicos, elimina todos os microrganismos. Ela é usada em materiais cirúrgicos.',
          'Os antibióticos combatem bactérias, mas não funcionam contra vírus. O uso exagerado e incorreto de antibióticos seleciona bactérias resistentes, que sobrevivem e se multiplicam. Isso torna os tratamentos cada vez mais difíceis. Por isso, o uso deve ser indicado por profissionais de saúde e seguir a prescrição.'
        ],
        conceitos: [
          'Pasteurização: calor moderado para reduzir microrganismos.',
          'Esterilização: eliminação de todos os microrganismos.',
          'Antissépticos: álcool, iodo e hipoclorito.',
          'Antibióticos não têm efeito contra vírus.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'Por que a fermentação do pão deixa o pão fofinho?',
        texto: 'As leveduras, fungos unicelulares, quebram açúcares e liberam dióxido de carbono. Esse gás fica preso na massa e forma as bolhas que deixam o pão fofinho. O processo também produz álcool, que se evapora durante o forno.'
      },
      {
        titulo: 'Como funcionam as vacinas',
        texto: 'Vacinas estimulam o sistema imunológico por meio de antígenos atenuados ou de componentes do patógeno. Assim, o corpo já reconhece o invasor quando encontra o vírus de verdade. Nenhuma vacina torna a pessoa doente, e todas são testadas antes do uso.'
      },
      {
        titulo: 'Bactérias que beneficiam a agricultura',
        texto: 'No solo, bactérias fixadoras de nitrogênio transformam o nitrogênio do ar em amônia, utilizável pelas plantas. Outras vivem em simbiose com as raízes das leguminosas, formando nódulos radiculares. Nessas associações, todos se beneficiam.'
      }
    ],
    glossario: [
      { termo: 'Capsídeo', definicao: 'Capa proteica que envolve o material genético do vírus.' },
      { termo: 'Divisão binária', definicao: 'Reprodução assexuada de células procariotas.' },
      { termo: 'Hifa', definicao: 'Filamento do fungo que forma o micélio.' },
      { termo: 'Plasmídeo', definicao: 'Pequena molécula de DNA bacteriano separada do cromossomo.' }
    ],
    resumo: [
      'Bactérias são procariotes; fungos e protozoários são eucariotes.',
      'Vírus não são células e precisam de uma célula hospedeira para se reproduzir.',
      'Ciclo lítico destrói a célula hospedeira; ciclo lisogênico integra o genoma do hospedeiro.',
      'Bactérias se reproduzem por divisão binária e podem trocar DNA.',
      'Fungos têm parede de quitina, produzem esporos e realizam decomposição.',
      'Antibióticos atuam contra bactérias e não funcionam contra vírus.'
    ],
    quiz: [
      {
        p: 'Por que os vírus são considerados parasitas obrigatórios?',
        a: ['Porque vivem dentro de outros animais e plantas', 'Porque não têm metabolismo e precisam de uma célula hospedeira para se reproduzir', 'Porque não possuem material genético', 'Porque são formados apenas por proteínas'],
        c: 1,
        e: 'Sem células próprias e sem metabolismo, os vírus dependem da maquinaria da célula hospedeira para multiplicar seus componentes.'
      },
      {
        p: 'Qual característica é exclusiva das bactérias?',
        a: ['Ter núcleo delimitado por membrana', 'Ser procariotes, sem núcleo, com DNA circular e parede de peptidoglycano', 'Possuir organelas membranosas', 'Ser pluricelulares'],
        c: 1,
        e: 'Bactérias não têm envelope nuclear nem organelas membranosas. Seu DNA é circular e fica no citoplasma, junto de plasmídeos.'
      },
      {
        p: 'No ciclo lítico do vírus:',
        a: ['O vírus integra seu DNA ao genoma do hospedeiro e fica inativo', 'O vírus se multiplica e provoca a ruptura da célula hospedeira', 'O hospedeiro elimina o vírus sem multiplicação', 'O vírus se transforma em bactéria'],
        c: 1,
        e: 'No ciclo lítico, o material genético viral é copiado e as novas partículas se montam. A célula infectada é destruída ao final do processo.'
      },
      {
        p: 'A parede celular dos fungos é formada principalmente por:',
        a: ['Celulose', 'Quitina', 'Peptidoglycano', 'Sílica'],
        c: 1,
        e: 'Os fungos têm parede de quitina. As plantas usam celulose e as bactérias, peptidoglycano.'
      },
      {
        p: 'Por que o uso indevido de antibióticos é um problema de saúde pública?',
        a: ['Porque os antibióticos causam dependência nos pacientes', 'Porque selecionam bactérias resistentes, que passam a sobreviver aos tratamentos', 'Porque os antibióticos impedem a produção de vitaminas', 'Porque os antibióticos não são absorvidos pelo intestino'],
        c: 1,
        e: 'Antibióticos que não matam todas as bactérias deixam as mais resistentes em vantagem. A pressão de seleção aumenta a resistência na população bacteriana.'
      },
      {
        p: 'As leveduras são utilizadas na produção de:',
        a: ['Antibióticos', 'Pão, cerveja e vinho, por fermentação', 'Plásticos e polímeros sintéticos', 'Oxigênio para respiração artificial'],
        c: 1,
        e: 'As leveduras quebram açúcares por fermentação, liberando dióxido de carbono e álcool etílico, usados na panificação e na produção de bebidas.'
      },
      {
        p: 'A pasteurização:',
        a: ['Elimina todos os microrganismos de um alimento', 'Reduz a carga de microrganismos usando calor moderado', 'É usada apenas em hospitais', 'Consiste em congelar alimentos por longos períodos'],
        c: 1,
        e: 'A pasteurização usa calor moderado por tempo controlado, reduzindo microrganismos e preservando o sabor do alimento.'
      },
      {
        p: 'Qual característica NÃO pertence aos fungos?',
        a: ['Ser heterotrófos', 'Possuir parede celular', 'Produzir esporos para reprodução', 'Realizar fotossíntese e produzir glicose'],
        c: 3,
        e: 'Os fungos não têm clorofila e não fazem fotossíntese. Eles obtêm matéria orgânica de outros seres vivos ou de restos.'
      }
    ]
  },

  {
    id: 'reproducao',
    icone: 'reproducao',
    tema: 'magenta',
    titulo: 'Reprodução e Desenvolvimento',
    linha: 'Reprodução e desenvolvimento dos seres vivos',
    descricao: 'Como os seres vivos se reproduzem: tipos de reprodução, fecundação, zigoto e as etapas do desenvolvimento embrionário.',
    tempo: 25,
    nivel: 'Ensino Médio',
    tags: ['reprodução', 'gametas', 'embrião', 'fecundação'],
    introducao: [
      'Todo ser vivo reprodutivo tem a capacidade de se reproduzir. A reprodução garante a continuidade da espécie ao longo do tempo. Por meio da variação genética que acompanha o processo, ela também origina a diversidade de formas de vida.',
      'A reprodução pode ser assexuada, em que um único indivíduo gera descendentes geneticamente iguais a si. Ou pode ser sexuada, em que dois indivíduos se unem por meio de gametes. A sexuada traz a vantagem de combinar material genético de dois progenitores. Isso aumenta a variabilidade e a capacidade de adaptação das populações.'
    ],
    secoes: [
      {
        titulo: 'Reprodução assexuada',
        texto: [
          'Na reprodução assexuada, um único progenitor produz descendentes geneticamente idênticos a ele, salvo mutações. As principais modalidades são: brotação, quando novos brotos crescem no corpo do progenitor; fissão, quando a célula se divide em duas; fragmentação, quando o organismo se parte em pedaços que se regeneram; regeneração, quando partes do corpo se recompõem; e esporulação, que forma esporos resistentes.',
          'Esse tipo de reprodução é rápido e permite a sobrevivência em condições favoráveis. Em contrapartida, gera pouca variabilidade genética. Por isso, é comum em organismos unicelulares e em momentos de crescimento populacional.'
        ],
        conceitos: [
          'Brotação, fissão, fragmentação, regeneração e esporulação.',
          'Descendentes geneticamente iguais ao progenitor.',
          'Reprodução rápida, com pouca variabilidade genética.',
          'Exemplo: divisão binária das bactérias.'
        ]
      },
      {
        titulo: 'Reprodução sexuada',
        texto: [
          'Na reprodução sexuada, dois indivíduos produzem gametas, células reprodutivas haploides. A fusão dos gametas, chamada fecundação, gera o zigoto diploide. Ele carrega material genético dos dois progenitores, o que aumenta a variabilidade genética da espécie.',
          'Os gametas podem ser iguais, os isogametos, ou diferentes em tamanho e forma, os heterogametos, como o espermatozoide e o óvulo. Os gametas são produzidos por gametogênese, que passa por meiose. Chama-se hermafrodita o organismo que produz os dois tipos de gameta. Organismos dioicos têm sexos separados.'
        ],
        conceitos: [
          'Gametas haploides e zigoto diploide.',
          'Fecundação: fusão dos gametas.',
          'Gametogênese: formação dos gametas por meiose.',
          'Hermafrodita e dioico: formas de organização sexual.'
        ]
      },
      {
        titulo: 'Fecundação e desenvolvimento embrionário',
        texto: [
          'A fecundação pode ser externa, quando os gametas são liberados no ambiente, ou interna, quando a fecundação ocorre dentro do corpo da fêmea. A externa é comum em peixes e anfíbios. A interna ocorre na maioria dos vertebrados terrestres. Existem também casos de reprodução sem fecundação, como a partenogênese.',
          'Após a fecundação, o zigoto sofre divisões rápidas, chamadas segmentação, que originam um conjunto de células, a mórula. Em seguida, forma-se o blasto, com uma cavidade chamada blastocele. A gastrulação organiza os folhamentos embrionários: ectoderme, mesoderme e endoderme. Por fim, a organogênese forma os órgãos e os sistemas.'
        ],
        conceitos: [
          'Segmentação: divisões rápidas do zigoto.',
          'Blastulação: formação da blastocele.',
          'Gastrulação: formação dos folhamentos embrionários.',
          'Organogênese: formação de órgãos e sistemas.'
        ],
        diagrama: 'reproducao'
      },
      {
        titulo: 'Gestação e desenvolvimento pós-natal',
        texto: [
          'O período de gestação varia muito entre os grupos. Nos mamíferos placentários, o embrião se desenvolve no útero. A placenta realiza as trocas de gases, nutrientes e resíduos entre mãe e feto. O desenvolvimento pós-natal é marcado, nos mamíferos, pelo aleitamento, pela proteção externa e pela socialização.',
          'Em alguns vertebrados, o desenvolvimento passa por metamorfose, uma transformação profunda da forma do corpo. Os girinos tornam-se sapos, e as larvas de inseto tornam-se adultos. A fase de vida que antecede a reprodução recebe o nome de fase adulta ou reprodutiva.'
        ],
        conceitos: [
          'Placenta: trocas entre mãe e feto nos placentários.',
          'Gestação: período entre a concepção e o nascimento.',
          'Metamorfose: transformação profunda durante o desenvolvimento.',
          'Aleitamento e cuidado parental favorecem a sobrevivência.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'A hidra se reproduz por brotação',
        texto: 'Em condições favoráveis, a hidra forma uma saliência no corpo. A saliência se destaca e origina um novo organismo, geneticamente igual à hidra-mãe. Quando o alimento escasseia, algumas hidras formam cistos resistentes, como forma de sobrevivência.'
      },
      {
        titulo: 'Peixes: fecundação externa',
        texto: 'Na desova, a fêmea libera os ovos e o macho libera os espermatozoides no mesmo lugar. A água traz os espermatozoides até os ovos, e a fecundação ocorre fora do corpo. Esse modelo gera muitos filhotes, mas a mortalidade também é alta.'
      },
      {
        titulo: 'A mosca-da-fruta e a genética',
        texto: 'A drosophila é usada em laboratórios porque tem ciclo de geração curto e produz muitos descendentes. Ela tem apenas quatro pares de cromossomos. Thomas Morgan a usou para demonstrar que os genes ficam nos cromossomos.'
      }
    ],
    glossario: [
      { termo: 'Gameta', definicao: 'Célula reprodutiva haploide, que se une na fecundação.' },
      { termo: 'Zigoto', definicao: 'Célula diploide formada pela fusão dos gametas.' },
      { termo: 'Meiose', definicao: 'Divisão celular que forma os gametas, com redução do número de cromossomos.' },
      { termo: 'Partenogênese', definicao: 'Desenvolvimento de um novo ser a partir de um gameta não fecundado.' }
    ],
    resumo: [
      'A reprodução assexuada gera descendentes iguais ao progenitor.',
      'A reprodução sexuada une dois gametes e aumenta a variabilidade.',
      'A fecundação pode ser externa ou interna.',
      'A fecundação gera o zigoto diploide.',
      'Embrião: segmentação, blastulação, gastrulação e organogênese.',
      'A gestação e a metamorfose são estratégias de desenvolvimento.'
    ],
    quiz: [
      {
        p: 'Na reprodução assexuada, os descendentes são:',
        a: ['Geneticamente iguais ao progenitor', 'Sempre resultantes da união de dois gametas', 'Obrigatoriamente estéreis', 'Formados apenas por partenogênese'],
        c: 0,
        e: 'A ausência de fecundação significa ausência de mistura de material genético: os descendentes são cópias do progenitor, salvo mutações.'
      },
      {
        p: 'O zigoto é formado pela:',
        a: ['Divisão mitótica do gameta', 'Fusão de dois gametes', 'Fragmentação do progenitor', 'Fecundação do pólen'],
        c: 1,
        e: 'A fecundação une os gametes e forma o zigoto, que recupera o número diploide de cromossomos da espécie.'
      },
      {
        p: 'A gastrulação corresponde à etapa em que:',
        a: ['O zigoto se divide rapidamente em blastômeros', 'Se forma a blastocele', 'Se formam os folhamentos embrionários', 'Se diferenciam os órgãos'],
        c: 2,
        e: 'Na gastrulação, as células se organizam em ectoderme, mesoderme e endoderme. A formação de órgãos vem depois, na organogênese.'
      },
      {
        p: 'A partenogênese é um exemplo de:',
        a: ['Fecundação externa', 'Desenvolvimento sem fecundação', 'Fecundação interna', 'Segmentação do zigoto'],
        c: 1,
        e: 'Na partenogênese, um novo ser se forma a partir de um gameta não fecundado, como na abelha-rainha ou em certos lagartos.'
      },
      {
        p: 'Qual estrutura realiza as trocas entre mãe e feto nos mamíferos placentários?',
        a: ['O cordão umbilical apenas', 'A placenta', 'O saco amniótico', 'A parede uterina apenas'],
        c: 1,
        e: 'A placenta permite a passagem de gases, nutrientes e resíduos entre a circulação materna e a fetal, mantendo os dois circuitos separados.'
      },
      {
        p: 'Os gametas são produzidos por um processo chamado:',
        a: ['Gametogênese, que envolve meiose', 'Mitose', 'Segmentação', 'Organogênese'],
        c: 0,
        e: 'A gametogênese ocorre nas gônadas e envolve a meiose, que reduz pela metade o número de cromossomos das células.'
      },
      {
        p: 'A metamorfose é o processo de:',
        a: ['Multiplicação do número de espécies', 'Transformação profunda da forma do corpo durante o desenvolvimento', 'Fusão de dois organismos', 'Formação do zigoto'],
        c: 1,
        e: 'Nos anfíbios e em muitos insetos, o desenvolvimento passa por uma fase larvária que se transforma em outra bem distinta.'
      },
      {
        p: 'Um organismo hermafrodita é aquele que:',
        a: ['Produz apenas gametas masculinos', 'Produz os dois tipos de gameta', 'Não se reproduz', 'Reproduz-se apenas por fragmentação'],
        c: 1,
        e: 'Hermafroditas apresentam os dois sexos no mesmo indivíduo. Muitos moluscos e plantas flores são hermafroditas.'
      }
    ]
  },

  {
    id: 'biologia-ambiente',
    icone: 'ambiente',
    tema: 'ambar',
    titulo: 'Biologia e Meio Ambiente',
    linha: 'Biodiversidade, conservação e sustentabilidade',
    descricao: 'A diversidade da vida na Terra, os biomas brasileiros, os impactos humanos e as ações de conservação.',
    tempo: 25,
    nivel: 'Ensino Médio',
    tags: ['biodiversidade', 'biomas', 'conservação', 'sustentabilidade'],
    introducao: [
      'A biodiversidade é a variedade de seres vivos do planeta e de todos os sistemas naturais. Ela inclui a diversidade genética, a diversidade de espécies e a diversidade de ecossistemas. O Brasil abriga uma fração significativa da biodiversidade mundial. Isso torna a conservação no país uma tarefa de alcance global.',
      'A Biologia aplicada ao meio ambiente estuda as relações entre os seres vivos e o ambiente, os impactos das atividades humanas e as ferramentas de proteção da natureza. Conservar a biodiversidade é também proteger serviços essenciais, como água limpa, ar puro, alimento e clima estável.'
    ],
    secoes: [
      {
        titulo: 'Biodiversidade e sua importância',
        texto: [
          'A biodiversidade pode ser medida de várias formas: pela riqueza de espécies de uma área, pela diversidade genética dentro de cada espécie e pela variedade de ecossistemas. O destaque do Brasil no cenário mundial se explica pelos seus biomas, pela grande variedade genética e pela extensão dos seus ecossistemas.',
          'A biodiversidade oferece serviços valiosos à sociedade: polinização, controle biológico de pragas, purificação da água, armazenamento de carbono e fontes de alimento e medicinais. A perda de espécies pode desestabilizar todo o sistema, com efeitos em cadeia.'
        ],
        conceitos: [
          'Diversidade genética, de espécies e de ecossistemas.',
          'Brasil: um dos países mais biodiversos do mundo.',
          'Serviços ambientais: polinização, água, clima e alimento.',
          'A perda de biodiversidade gera efeitos em cadeia.'
        ]
      },
      {
        titulo: 'Biomas e ecossistemas brasileiros',
        texto: [
          'O Brasil é dividido em biomas, grandes conjuntos de ecossistemas com características de vegetação, clima e fauna próprias. Os principais biomas terrestres são a Amazônia, o Cerrado, a Mata Atlântica, a Caatinga, o Pantanal e o Pampa. Existem ainda os Campos e os Campos rupestres, além dos biomas marinhos e dos de transição.',
          'A Amazônia abriga a maior floresta tropical do mundo e uma enorme diversidade de espécies. O Cerrado tem uma característica singular: solo ácido, vegetação rasteira e adaptações à seca. A Caatinga é a única bioma brasileiro inteiramente adaptado ao semiárido. O Pantanal é a maior planície alagável do mundo.'
        ],
        conceitos: [
          'Bioma: conjunto de ecossistemas com vegetação e clima próprios.',
          'Amazônia, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa.',
          'Biomas marinhos e de transição completam o quadro.',
          'Cada bioma tem fauna e flora adaptadas ao local.'
        ],
        diagrama: 'biomas'
      },
      {
        titulo: 'Impactos das atividades humanas',
        texto: [
          'O desmatamento, as queimadas e a mineração destroem habitats e fragmentam a paisagem. A poluição de rios e do solo reduz a biodiversidade e afeta a saúde. O uso de agrotóxicos elimina insetos polinizadores e causa desequilíbrios na cadeia alimentar.',
          'As mudanças climáticas aceleram o aquecimento, o aumento do nível do mar e a mudança dos padrões de chuva. Isso empurra espécies para novas áreas. A camada de ozônio, que absorve boa parte da radiação ultravioleta, foi comprometida por substâncias chamadas clorofluorocarbonos. Hoje elas são proibidas pelo Protocolo de Montreal.'
        ],
        conceitos: [
          'Desmatamento, fragmentação de habitat e queimadas.',
          'Poluição, agrotóxicos e resíduos sólidos.',
          'Efeito estufa: retenção de calor na atmosfera.',
          'Camada de ozônio e Protocolo de Montreal.'
        ]
      },
      {
        titulo: 'Conservação e sustentabilidade',
        texto: [
          'Proteger a natureza exige transformar áreas em unidades de conservação, como parques, reservas biológicas e áreas de proteção ambiental. Onde a atividade humana já existe, o manejo busca conciliar uso e preservação. A restauração de áreas degradadas e o controle de espécies exóticas invasoras também fazem parte do trabalho.',
          'A sustentabilidade aparece quando o uso dos recursos naturais respeita a capacidade de recuperação dos ecossistemas. Educação ambiental, consumo consciente e políticas públicas de ordenamento territorial são ferramentas essenciais.'
        ],
        conceitos: [
          'Unidades de conservação e áreas protegidas.',
          'Manejo e restauração de áreas degradadas.',
          'Controle de espécies exóticas invasoras.',
          'Uso sustentável dos recursos naturais.'
        ]
      }
    ],
    exemplos: [
      {
        titulo: 'A Floresta Amazônica e o ciclo das águas',
        texto: 'A Amazônia funciona como uma grande bomba de umidade. As árvores absorvem água do solo e a devolvem à atmosfera por meio das folhas, formando nuvens que redistribuem a chuva em todo o continente. Por isso, a floresta é chamada de bomba de água da Amazônia.'
      },
      {
        titulo: 'O que são áreas de proteção ambiental?',
        texto: 'São territórios delimitados por lei para conservar os ambientes e a vida selvagem. Há diferentes categorias, com regras de uso que vão da proibição total de entrada até a permissão para atividades controladas, como o ecoturismo.'
      },
      {
        titulo: 'Espécies exóticas invasoras',
        texto: 'Espécies trazidas de outros países podem se adaptar muito bem. Como não têm predadores naturais, proliferam. O capim-colonião, o girassol-brasileiro e a traça-do-café são exemplos.'
      }
    ],
    glossario: [
      { termo: 'Biodiversidade', definicao: 'Variedade de genes, espécies e ecossistemas de uma região.' },
      { termo: 'Bioma', definicao: 'Grande conjunto de ecossistemas com características comuns.' },
      { termo: 'Fragmentação', definicao: 'Divisão de um habitat em áreas menores e isoladas.' },
      { termo: 'Espécie exótica invasora', definicao: 'Espécie introduzida que se reproduz e se espalha, prejudicando as espécies locais.' }
    ],
    resumo: [
      'A biodiversidade tem três níveis: genética, de espécies e de ecossistemas.',
      'Os biomas terrestres brasileiros são Amazônia, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa.',
      'Desmatamento, poluição e mudanças climáticas são as principais ameaças.',
      'A floresta Amazônica funciona como uma bomba de umidade.',
      'Unidades de conservação e manejo protegem os ecossistemas.',
      'Sustentabilidade é usar recursos sem comprometer a recuperação do ambiente.'
    ],
    quiz: [
      {
        p: 'A biodiversidade pode ser estudada em três níveis:',
        a: ['Genético, de espécies e de ecossistemas', 'Animal, vegetal e mineral', 'Rural, urbano e industrial', 'Local, regional e global'],
        c: 0,
        e: 'A diversidade genética ocorre dentro de cada espécie. A de espécies é a variedade de organismos de uma área. A de ecossistemas é a variedade de ambientes.'
      },
      {
        p: 'Qual NÃO é um bioma terrestre brasileiro?',
        a: ['Cerrado', 'Caatinga', 'Tundra', 'Pantanal'],
        c: 2,
        e: 'A tundra é uma região polar do extremo norte, coberta por solo permanentemente congelado. Não faz parte do território brasileiro.'
      },
      {
        p: 'A principal causa da perda de biodiversidade nas florestas tropicais é:',
        a: ['O aumento da biodiversidade', 'O desmatamento e a fragmentação de habitats', 'A criação de áreas protegidas', 'O uso de métodos agrícolas tradicionais'],
        c: 1,
        e: 'O desmatamento elimina o habitat inteiro. A fragmentação isola os fragmentos restantes, o que reduz o fluxo genético e aumenta o risco de extinção local.'
      },
      {
        p: 'A camada de ozônio é importante porque:',
        a: ['Absorve radiação ultravioleta', 'Produz a chuva', 'Retém o calor da Terra', 'Fornece oxigênio aos seres vivos'],
        c: 0,
        e: 'O ozônio na estratosfera filtra boa parte da radiação ultravioleta do Sol, protegendo a vida na superfície.'
      },
      {
        p: 'Uma área de proteção ambiental é:',
        a: ['Uma região delimitada por lei para conservar ambientes e a vida selvagem', 'Um tipo de lavoura intensiva', 'Uma área industrial com controle de poluição', 'Um espaço de uso livre, sem regras'],
        c: 0,
        e: 'Parques, reservas biológicas e áreas de proteção ambiental são unidades de conservação, cada uma com regras de uso específicas.'
      },
      {
        p: 'Por que a Amazônia é chamada de bomba de água do continente?',
        a: ['Porque possui a maior reserva de água doce em lagos', 'Porque a evapotranspiração das árvores gera nuvens que redistribuem a chuva', 'Porque seus rios não secam na estação seca', 'Porque possui a maior população humana'],
        c: 1,
        e: 'As árvores absorvem água do solo e a devolvem à atmosfera em forma de vapor, formando nuvens que carregam chuva para outras regiões.'
      },
      {
        p: 'O manejo de unidades de conservação consiste em:',
        a: ['Eliminar todas as atividades humanas dentro da área', 'Conciliar o uso dos recursos naturais com a preservação da natureza', 'Transformar toda área em reserva integral', 'Construir mais estradas dentro da área'],
        c: 1,
        e: 'O manejo planeja o uso e o monitoramento das atividades dentro da área, buscando manter os processos naturais e a qualidade do ambiente.'
      },
      {
        p: 'Uma espécie exótica invasora é aquela que:',
        a: ['É nativa da região e causa dano', 'Foi introduzida em um novo ambiente e se espalha, prejudicando as espécies locais', 'Não se reproduz fora do seu habitat', 'É protegida por lei'],
        c: 1,
        e: 'Sem predadores naturais no novo ambiente, essas espécies ocupam espaço e recursos, competindo com a biodiversidade local.'
      }
    ]
  }
];
