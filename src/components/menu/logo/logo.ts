class logo extends HTMLElement {
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
            <link rel="stylesheet" href="./src/components/menu/logo/logo.css">
            <a class="logo" href="">
                <img src="./assets/img/logo.png">
            </a>
        `
    }
}

customElements.define("my-logo", logo);
export default logo;