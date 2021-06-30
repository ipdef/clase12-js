//Libreria Propia
//import {addMovingAnim, addRotateAnim, addFadeOut} from './lib'

addMovingAnim('#move', 1000, 200)
addMovingAnim('#move2', 5000, 600)

//addRotateAnim(selector, duration)
addRotateAnim('#rotate', 2000)

//addFadeOut(selector, duration)
let fade = document.getElementById('fade');
fade.addEventListener('click', () => {
    addFadeOut('.fade', 1500)
});