//Importa, coger todos los componentes agruparlos e indicarles como van a funcionar.
import * as components from "./components/indexpadre" 
import top10 from './data/top10/top10';
import recientes from './data/recientes/recientes'
import { appState } from "./store/index";
// import data from "./data.js"

class Appcontainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    console.log (appState)
       
    }

    render(){
        if (this.shadowRoot)

        this.shadowRoot.innerHTML += `  
            <menu-buttons></menu-buttons>
            <filtro-buttons></filtro-buttons>
            <section>
            <my-tarjetas title="Top 10" data='${JSON.stringify(top10)}'></my-tarjetas>

            <my-tarjetas title="Recientes" data='${JSON.stringify(recientes)}'></my-tarjetas>
            </section>
        `
    }
}

customElements.define("app-container", Appcontainer);