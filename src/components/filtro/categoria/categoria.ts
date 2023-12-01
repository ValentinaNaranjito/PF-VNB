import data from "./data";

export enum Attribute {
    "text" = "text",
    "url" = "url",
}

class Categorias extends HTMLElement {
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
        this.render();
    }

    //Método para escuchar los ambios de nuestras variables.
    attributeChangedCallback(
        propName: Attribute,
        oldValue: string | undefined,
        newValue: string | undefined
    ) {
        switch (propName) {
            case Attribute.text:
                this.text = newValue ? newValue : undefined;
                break;
        }
    }

    render() {
        let options = "";

        data.forEach((category) => {
            options += `<option value="${category.id}">${category.name}</option>`;
        });

        if (this.shadowRoot)
            this.shadowRoot.innerHTML =
                `
        <link rel="stylesheet" href="./src/components/filtro/filtrobuttons.css">
            <select class="categoria">
                ${options}
            </select>
        `;
    }
}

customElements.define("my-category", Categorias);
export default Categorias;