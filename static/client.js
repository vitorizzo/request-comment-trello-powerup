/* global TrelloPowerUp */
const t = TrelloPowerUp.iframe();

/**
 * Questo viene invocato quando l’utente clicca su “Segnala guasto”
 */
function onCardButtonClick(t, options) {
  // apri un popup con il tuo HTML di popup.html
  return t.popup({
    title: 'Segnala Guasto',
    url: 'static/popup.html',
    height: 200
  });
}

// TrelloPowerUp.iframe() export
window.TrelloPowerUp.initialize({
  'card-buttons': onCardButtonClick
});
