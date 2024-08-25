import Animal from "./animal.js";

export default class Lobo extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar(){
        // aqui va el audio, pero como lo pongo?
        let aullido = new Audio('../../sounds/Aullido.mp3')
        aullido.play()

        // tengo que usar el dom?
        const aullido2 = document.querySelector("#player")
    }

}