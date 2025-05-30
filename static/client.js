/* global TrelloPowerUp */
const t = TrelloPowerUp.iframe();

function onCardButtonClick(t, opts) {
  return t.card('id')
    .then(({ id }) => 
      t.popup({
        title: 'Get Info',
        url: 'https://vitorizzo.github.io/request-comment-trello-powerup/static/popup.html',
        args: { cardId: id },
        height: 200
      })
    );
}

window.TrelloPowerUp.initialize({
  'card-buttons': onCardButtonClick
});
