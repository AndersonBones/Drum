var keys = document.querySelectorAll('.key');

for(var key of keys){
    key.addEventListener('click', Click_key);
}

document.addEventListener('keyup', Key_press)
document.querySelector(".play-composition").addEventListener('click', Composition);

function Click_key(){
    let sound = document.querySelector(`#s_${this.dataset.key}`);
    Play_sound(sound);
}

function Key_press(e){
    let sound = document.querySelector(`#s_${e.code.toLowerCase()}`);
    let key = document.querySelector(`[data-key="${e.code.toLowerCase()}"]`)

    Animation_key(key);
    Play_sound(sound);
}

function Composition(){
    let composition = document.querySelector('#composition-value');
    Play_composition(composition.value)
}

function Play_composition(composition){
    let wait = 0;

    for(let songItem of composition.split('')){
        setTimeout(()=>{
            let sound = document.querySelector(`#s_key${songItem}`);
            Play_sound(sound)
            Animation_key(document.querySelector(`[data-key="key${songItem}"]`))
        }, wait)

        wait+=250;
    }
    
}

function Play_sound(sound){
    sound.play();
    sound.currentTime = 0;
}

function Animation_key(key){
    key.classList.add('active');

    setTimeout(()=>{
        key.classList.remove('active');
    },200)
}