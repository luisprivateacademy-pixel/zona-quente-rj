/* =============================================================
   SERVICE WORKER - ZONA QUENTE RJ
   -----------------------------------------------------------
   Esse arquivo roda em background no celular do motorista.
   Permite mostrar notificações mesmo com o app fechado.
   ============================================================= */

const CACHE_NAME = 'zona-quente-v1';

// Quando o service worker instala (primeira vez)
self.addEventListener('install', (event) => {
  console.log('[SW] Instalado');
  self.skipWaiting(); // ativa imediatamente, sem esperar
});

// Quando ativa (depois de instalar)
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativado');
  event.waitUntil(clients.claim()); // controla todas as abas abertas
});

// Quando o motorista clica numa notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const dadosEvento = event.notification.data || {};
  const url = dadosEvento.url || '/';

  // Abre o app (ou foca se já estiver aberto)
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Se tem janela aberta, foca nela
      for (const client of windowClients) {
        if (client.url.includes(self.location.origin)) {
          client.focus();
          // Se tem ID de evento, manda mensagem pro app abrir esse evento
          if (dadosEvento.eventoId) {
            client.postMessage({ type: 'abrir_evento', eventoId: dadosEvento.eventoId });
          }
          return;
        }
      }
      // Não tem janela aberta — abre uma nova
      return clients.openWindow(url);
    })
  );
});

// Recebe mensagens do app (pra disparar notificação)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'mostrar_notificacao') {
    const { titulo, corpo, eventoId, tag } = event.data;

    self.registration.showNotification(titulo, {
      body: corpo,
      icon: '/icons/icon-192.png',
      badge: '/icons/favicon.png',
      tag: tag || 'zona-quente',  // tag evita notificações duplicadas
      requireInteraction: false,
      vibrate: [200, 100, 200],
      data: {
        eventoId,
        url: '/'
      }
    });
  }
});
