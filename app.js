
const background = document.querySelector('.keys');	

function playSound(e) {	
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //stops function if not an audio key
  audio.currentTime = 0; //so audio does not have to fully play 
  //before key can be hit again
  audio.play();
  key.classList.add('playing');
  background.classList.add('bg-playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip if not a transform
  this.classList.remove('playing');
  background.classList.remove('bg-playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);