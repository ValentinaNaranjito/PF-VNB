import * as logo from './logo/logo';
import * as search from './search/search';
import * as notifications from './notifications/notifications';
import * as buttons from './button-icon/buttonIcon';

class menuButtons extends HTMLElement {
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
            <link rel="stylesheet" href="./src/components/menu/menubuttons.css">
            <section class="menu">
                <my-logo></my-logo>
                <div class="list">
                    <my-search></my-search>
                    <button-icon icon="./assets/img/subir-archivo.png"></button-icon>
                    <button-notifications></button-notifications>
                    <button-icon icon="./assets/img/perfil.png" class="perfil" ></button-icon>
                </div>
            </section>
        `
    }
}

customElements.define("menu-buttons", menuButtons);
export default menuButtons;