window.onload = function(){
  var context = new AudioContext();

  var oscillator = context.createOscillator();

  oscillator.connect(context.destination);
  oscillator.start();

  window.addEventListener('devicelight', function(e){
    oscillator.frequency.value = e.value * 10;
  });
};
