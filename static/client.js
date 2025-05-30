/* global TrelloPowerUp */
TrelloPowerUp.initialize({
  'card-buttons': function(t, opts) {
    // creiamo un singolo pulsante "Get Info"
    return t.card('id')
      .then(function({ id }) {
        return t.popup({
          title: 'Get Info',
          url: t.signUrl('static/popup.html'),
          args: { cardId: id },
          height: 200
        });
      });
  }
});
