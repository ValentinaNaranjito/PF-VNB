class notifications extends HTMLElement {
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
        <link rel="stylesheet" href="./src/components/menu/button-icon/buttonIcon.css">
            <button>
                <img class="perfil" src="./assets/img/notificacion.png">
            </button>
        `
    }
}

customElements.define("button-notifications", notifications);
export default notifications;