class Lampa{
    #allapot;
    #id;
    #divElem;
    constructor(id, allapot, szuloElem){
        this.#id=id;
        this.#allapot=allapot;
        const txt=`<div>${allapot}</div>`;
        szuloElem.append(txt);
        this.divElem = $('article div:last-child');
    }

    setAllapot(){
        this.#allapot=this.szinBeallit;
    }
    getid(){
        return this.#id;
    }
     
    gedDivElem(){
        return this.#divElem;
    }

    szinBeallit(){
        if (this.#allapot===false) {
            $(this.gedDivElem).css("background-color", "orange");
        } else {
            $(this.#divElem).css("background-color", "green");
        }
    }

    kattintasTrigger(){

    }

}
export default Lampa;