/* global TrelloPowerUp */

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, opts) {
    return [{
      // opzionale: punta all'icona che vuoi mostrare
      icon: 'https://vitorizzo.github.io/request-comment-trello-powerup/static/icon.png',
      text: 'Get Info',
      callback: function(t, opts) {
        // Trello setta automaticamente il contesto, non serve event
        return t.popup({
          title: 'Get Info',
          url: 'https://vitorizzo.github.io/request-comment-trello-powerup/static/popup.html',
          args: { cardId: opts.card.id },
          height: 200
        });
      }
    }];
  }
});
