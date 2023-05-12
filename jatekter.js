import Lampa from "./lampa.js";
class JatekTer{
    #db;
    #allapotLista;
    #meret;
    #lepes;
    constructor(){
        const szuloElem = $("article");
        const allapot =false;
        for (let i = 0; i < 9; i++) {
            new Lampa(i,allapot,szuloElem);
        }

    }

    setAllapotLista(){
         this.#meret=Math.floor(Math.random());
         for (let i = 0; i < this.#meret; i++) {
            const random=Math.floor(Math.random() * 2) + 1;
            if (random===1) {
                this.#allapotLista[i]=false;
            } else {
                this.#allapotLista[i]=true;
            }
         }
    }

    getmeret(){
        return this.#meret;
    }

    szomszedokKeresese(id){

    }
    init(){

    }
    ellenorzes(){

    }
}
export default JatekTer;