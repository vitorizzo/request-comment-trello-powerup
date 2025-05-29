/* global TrelloPowerUp */
TrelloPowerUp.initialize({
  'card-buttons': (t, opts) => {
    // al click del bottone apri il popup
    return t.popup({
      title: 'Get Info',
      url: 'https://vitorizzo.github.io/request-comment-trello-powerup/static/popup.html',
      args: { /* se ti serve passare qualcosa */ },
      height: 200
    });
  }
});
