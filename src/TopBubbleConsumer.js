import { html, css, LitElement } from 'lit-element';
import {Styles} from "./Styles";

import './BottomBubbleProducer'

export class TopBubbleConsumer extends LitElement {

  static get styles() {
    return [Styles()];
  }

  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'Title of top-bubble-consumer';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <bottom-bubble-producer label="A slotted input field within the bottom web component" @input=${this.slottedInputEditedInTop}>
          <input id="inputFieldId" slot="inputField" type="text"/>
      </bottom-bubble-producer>
      <BR/>
      <button id=buttonId @click="${this.pressed}">A button in top-bubble-consumer: Press me</button>
      <h2>Exercise:</h2>
       Typing something in the input field should toggle enable/disable of the button
    `;
  }

  slottedInputEditedInTop() {
    console.log('slottedInputEditedInTop')

    let button = this.shadowRoot.getElementById('buttonId');
    button.disabled = !button.disabled;
    this.requestUpdate();
  }

  pressed() {
    console.log('Button pressed')
  }
}

customElements.define('top-bubble-consumer', TopBubbleConsumer);
