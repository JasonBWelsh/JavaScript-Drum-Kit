
const background = document.querySelector('.keys');	

function playSound(e) {	
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) {
  	return; //stops function if not an audio key
  }
  audio.currentTime = 0; //so audio does not have to fully play 
  //before key can be hit again
  audio.play();
  key.classList.add('playing');
  background.classList.add('bg-playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') {
  	return; // skip if not a transform
  }
  this.classList.remove('playing');
  background.classList.remove('bg-playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

// click keys for sound 


/*background.addEventListener('click', (e) => {
	if (e.target.className === "key") {
		const key = e.target;
		const keyNum = key.getAttribute('data-key');
		const sound = document.querySelectorAll('audio');
		for ( let i=0; i < sound.length; i++ ) {
			let curSound = sound[i];
			if ( curSound.getAttribute('data-key') === keyNum ) {
				curSound.play();
				key.classList.add('playing');
				background.classList.add('bg-playing');
			}
		}
	} else if (e.target.parentElement.className == "key") {
		const key = e.target.parentElement;
		const keyNum = key.getAttribute('data-key');
		const sound = document.querySelectorAll('audio');
		for ( let i=0; i < sound.length; i++ ) {
			let curSound = sound[i];
			if ( curSound.getAttribute('data-key') === keyNum ) {
				curSound.play();
				key.classList.add('playing');
				background.classList.add('bg-playing');
			}
		}
	}
});*/

// shortened code

background.addEventListener('click', (e) => {
    if (e.target.className === "key" || e.target.parentElement.className == "key") {
        let key;
        if (e.target.className === "key") {
            key = e.target;
        }
        else {
            key = e.target.parentElement;
        }
        const keyNum = key.getAttribute('data-key');
        const sound = document.querySelectorAll('audio');
        for ( let i=0; i < sound.length; i++ ) {
            let curSound = sound[i];
            if ( curSound.getAttribute('data-key') === keyNum ) {
                curSound.play();
                key.classList.add('playing');
                background.classList.add('bg-playing');
            }
        }
    }
});
