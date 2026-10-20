/* ============================================================================
 * Portal de Biologia — Service Worker
 * ----------------------------------------------------------------------------
 * Estratégia:
 *  - Navegação (HTML): rede primeiro, com fallback para o index.html em cache.
 *  - Arquivos locais (CSS, JS, imagens): cache primeiro, com atualização em
 *    segundo plano (stale-while-revalidate).
 *  - Recursos externos: apenas rede. Não são anunciados como disponíveis
 *    offline enquanto não estiverem armazenados.
 *
 * Todos os caminhos são relativos, para que o portal funcione tanto na raiz
 * do domínio quanto em um subdiretório (por exemplo, no GitHub Pages).
 * ==========================================================================*/

'use strict';

const VERSAO_CACHE = 'portal-biologia-v1';
const CACHE_ESSENCIAL = VERSAO_CACHE;

const ARQUIVOS_ESSENCIAIS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './data.js',
  './conteudos.js',
  './manifest.json',
  './assets/brasao-escola.svg',
  './assets/brasao-escola.png',
  './icon.svg',
  './icon-maskable.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png'
];

/* ---------------------------------------------------------------- install */
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE_ESSENCIAL)
      .then((cache) => cache.addAll(ARQUIVOS_ESSENCIAIS))
      .then(() => self.skipWaiting())
  );
});

/* --------------------------------------------------------------- activate */
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(
        nomes.filter((nome) => nome !== CACHE_ESSENCIAL).map((nome) => caches.delete(nome))
      ))
      .then(() => self.clients.claim())
  );
});

/* ----------------------------------------------------------------- fetch */
self.addEventListener('fetch', (evento) => {
  const requisicao = evento.request;

  if (requisicao.method !== 'GET') return;

  const url = new URL(requisicao.url);

  // Recursos de outra origem: vão direto para a rede, sem entrar no cache.
  if (url.origin !== self.location.origin) return;

  // Navegação: tenta a rede e, se não houver conexão, usa o index.html salvo.
  if (requisicao.mode === 'navigate') {
    evento.respondWith(
      fetch(requisicao)
        .then((resposta) => {
          const copia = resposta.clone();
          caches.open(CACHE_ESSENCIAL).then((cache) => cache.put('./index.html', copia));
          return resposta;
        })
        .catch(() => caches.match('./index.html')
          .then((cacheado) => cacheado || caches.match('./')))
    );
    return;
  }

  // Arquivos locais: cache primeiro, atualizando o cache em segundo plano.
  evento.respondWith(
    caches.match(requisicao).then((cacheado) => {
      const daRede = fetch(requisicao)
        .then((resposta) => {
          if (resposta && resposta.ok && resposta.type === 'basic') {
            const copia = resposta.clone();
            caches.open(CACHE_ESSENCIAL).then((cache) => cache.put(requisicao, copia));
          }
          return resposta;
        })
        .catch(() => cacheado);
      return cacheado || daRede;
    })
  );
});

/* -------------------------------------------------------------- mensagens */
self.addEventListener('message', (evento) => {
  if (evento.data && evento.data.tipo === 'atualizar') {
    self.skipWaiting();
  }
});
