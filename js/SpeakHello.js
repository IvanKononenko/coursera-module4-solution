
(function (window) {
  let helloSpeaker = {}
  let speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker
})(window)