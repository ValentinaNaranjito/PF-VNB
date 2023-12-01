class FiltroButton extends HTMLElement {
    //primer componente, el de observar los atributos. 
    static get observedAttributes() {
        //decirle qué atributos quiero observar.
        return ["text", "url"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    //método que se encarga de informar qué va a pasar cuando mi componente se incruste en el html.
    connectedCallback() {
        if (this.shadowRoot) {
            this.render();
        }
    }

    //Método para escuchar los ambios de nuestras variables.
    attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML =
                `
        <link rel="stylesheet" href="./src/components/filtro/filtrobuttons.css">
            <button class="filtrobutton">
                ${this.text}
            </button>
        `;
        }
    }
}

customElements.define("filtro-button", FiltroButton);
export default FiltroButton;