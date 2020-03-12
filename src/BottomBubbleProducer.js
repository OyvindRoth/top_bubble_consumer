import { html, css, LitElement } from 'lit-element';

export class BottomBubbleProducer extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      label: {type: String},
    };
  }

  constructor() {
    super();
    this.title = 'Title of bottom-bubble-producer';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <label for="inputFieldId">${this.label}</label>
      <slot name="inputField" id="inputFieldId"></slot>
      `;
  }
}

customElements.define('bottom-bubble-producer', BottomBubbleProducer);
