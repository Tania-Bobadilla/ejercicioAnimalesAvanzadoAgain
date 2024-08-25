// super clase Animal, de esta clase van a heredar propiedades los otros animales
export default class Animal {

    #nombre
    #edad
    #img
    #comentarios
    #sonido
    
    constructor (nombre, edad, img, comentarios, sonido) {

        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;

    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get edad(){
        return this.#edad;
    }

    set edad(edad){
        this.edad = edad;
    }

    get img(){
        return this.#img;
    }

    set img(img){
        this.#img = img;
    }

    get comentarios(){
        return this.#comentarios;
    }

    set comentarios(comentarios){
        this.#comentarios = comentarios;
    }

    get sonido(){
        return this.#sonido;
    }

    set sonido(sonido){
        this.#sonido = sonido;
    }
}