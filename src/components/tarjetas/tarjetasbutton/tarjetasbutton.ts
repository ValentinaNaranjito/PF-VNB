class tarjetasbutton extends HTMLElement {
    //primer componente, el de observar los atributos. 
    static get observedAttributes (){
        //decirle qué atributos quiero observar.
        return ["text", "title", "url"]
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'}); 
    }
    //método que se encarga de informar qué va a pasar cuando mi componente se incruste en el html.
    connectedCallback(){
        this.render();
    }

    //Método para escuchar los ambios de nuestras variables.
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML =
        `    
             <link rel="stylesheet" href="./src/components/tarjetas/tarjetasbutton/tarjetasbutton.css">
            <div class="tarjeta">
                <img src="${this.url}">
                
                <div class="texto">
                    <h4>${this.title}</h4> 
                    <p>${this.text}</p>
                 </div>
            </div>
        `
    }
}

customElements.define("my-tarjetabutton", tarjetasbutton);
export default tarjetasbutton;