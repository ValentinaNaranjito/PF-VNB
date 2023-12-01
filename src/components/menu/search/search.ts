class search extends HTMLElement {
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
            <link  rel="stylesheet" href="./src/components/menu/search/search.css">
            <input class="search" type="text">
        `
    }
}

customElements.define("my-search", search);
export default search;