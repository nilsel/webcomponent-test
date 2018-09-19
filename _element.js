import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `stb-topmenu`
 * Global top menu for STB
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class StbTopmenu extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[backText]]!</h2>
    `;
  }
  static get properties() {
    return {
      backText: {
        type: String,
        value: 'stb-topmenu',
      },
    };
  }
}

window.customElements.define('stb-topmenu', StbTopmenu);
