import * as components from "./components/indexpadre";

class Appcontainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
       
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML += `  
            <section>
            <my-info text="text"></my-info>
            </section>
        `
    }
}

customElements.define("app-container", Appcontainer);