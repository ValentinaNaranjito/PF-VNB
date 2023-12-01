class Info extends HTMLElement {
    static get observedAttributes() {
        return ["text"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    //método que se encarga de informar qué va a pasar cuando mi componente se incruste en el html.
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML =
                `
            <link  rel="stylesheet" href="./src/components/info/info.css">
            <input class="info" type="text" name="${this.text}" />
            <label for="${this.text}"></label>
        `;
        }
    }
}

customElements.define("my-info", Info);
export default Info;