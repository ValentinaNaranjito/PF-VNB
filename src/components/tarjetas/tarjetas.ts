
import * as tarjeta from './tarjetasbutton/tarjetasbutton'

class tarjetas extends HTMLElement {
    static get observedAttributes (){
        //decirle qué atributos quiero observar.
        return ["data", "title"]
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'}); 
    }
    //método que se encarga de informar qué va a pasar cuando mi componente se incruste en el html.
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        let options = '';

        JSON.parse(this.data).forEach((tarjeta)=>{
            options += `<my-tarjetabutton class="tarjeta" text="${tarjeta.text}" title="${tarjeta.title}" url="${tarjeta.url}"></my-tarjetabutton>`
            
        })
        if(this.shadowRoot)
        this.shadowRoot.innerHTML =
        `
            <link rel="stylesheet" href="./src/components/tarjetas/tarjetas.css">
            <h2>${ this.title }</h2>
            <section class="tarjetas">
                ${ options }
            </section>
            `
    }
}

customElements.define("my-tarjetas", tarjetas);
export default tarjetas;