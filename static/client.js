/* global TrelloPowerUp */
const t = TrelloPowerUp.iframe();

/**
 * Viene chiamato quando l’utente clicca su “Get Info”
 * @param {Object} t    Trello iframe context
 * @param {Object} opts Opzioni (non usate qui)
 * @return {Promise}
 */
function onCardButtonClick(t, opts) {
  // prendi l’ID della card corrente
  return t.card('id')
    .then(({ id }) => {
      // apri un popup passando l’ID come argomento
      return t.popup({
        title: 'Get Info',
        url: 'https://vitorizzo.github.io/request-comment-trello-powerup/static/popup.html',
        // args verrà letta dentro popup.js
        args: { cardId: id },
        height: 200
      });
    });
}

// mappa le capability sui metodi
window.TrelloPowerUp.initialize({
  'card-buttons': onCardButtonClick
});
