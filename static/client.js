/* global TrelloPowerUp */
const ICON_URL = 'https://vitorizzo.github.io/request-comment-trello-powerup/static/icon.png';

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    // restituisco un array di bottoni
    return [{
      icon: ICON_URL,
      text: 'Get Info',
      callback: function(t) {
        // questo callback è invocato *direttamente* al click,
        // t.popup avrà il contesto corretto e non servirà target
        return t.popup({
          title: 'Get Info',
          url: 'https://vitorizzo.github.io/request-comment-trello-powerup/static/popup.html',
          height: 200
        });
      }
    }];
  }
});
