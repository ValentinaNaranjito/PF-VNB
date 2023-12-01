class ButtonAñadir extends HTMLElement {
    //primer componente, el de observar los atributos. 
    static get observedAttributes() {
        //decirle qué atributos quiero observar.
        return ["icon", "url"];
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    //método que se encarga de informar qué va a pasar cuando mi componente se incruste en el html.
    connectedCallback() {
        this.render();
    }

    //Método para escuchar los ambios de nuestras variables.
    attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =
            `
            <link rel="stylesheet" href="./src/components/menu/button-icon/buttonIcon.css">
            <button>
                <img class="perfil" src="${this.icon}">
            </button>
        `;
    }
}

customElements.define("my-añadir", ButtonAñadir);
export default ButtonAñadir;