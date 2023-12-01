import * as filtro from './filtro-button/filtro-button';
import * as categoria from './categoria/categoria';

class filtrobuttons extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'}); 
    }
    //método que se encarga de informar qué va a pasar cuando mi componente se incruste en el html.
    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML =
        `
            <link rel="stylesheet" href="./src/components/filtro/filtrobuttons.css">
            <section class="filtro">
            <my-category></my-category>
            <filtro-button text="Follow"></filtro-button>
            <filtro-button text="Favoritos"></filtro-button>
            </section>
        `
    }
}

customElements.define("filtro-buttons", filtrobuttons);
export default filtrobuttons;