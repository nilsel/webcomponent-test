import {html, PolymerElement} from './node_modules/@polymer/polymer/polymer-element.js';

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
    header {
      width: 100%;
      margin: 0;
      background-color: #fff;
      border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
      box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.11);
      border-top: 4px #da291c solid;
      height: 60px;
      z-index: 1;
    }

    header .top-menu {
      width: 95%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    header img.stb-logo {
      width: 165px;
      height: 42px;
      cursor: pointer;
    }

    header .top-menu > section.top-menu-buttons {
      height: 52px;
      margin-left: auto;
      display: inline-flex;
    }


    /* individual buttons */
    header .top-menu .top-menu-buttons button {
      position: relative; /* needed for positioning dropdowns */
      /* height: 52px; */
      background-color: transparent;
      border: none;
      /* border: 1px solid red; */
      font-size: 16px;
      font-family: "Helvetica Neue", Times;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
    }
    header .top-menu .top-menu-buttons button svg {
      margin-right: 8px;
    }

    </style>
    <header>
    <div class="top-menu">
      <!-- inline style on this element to avoid flickering on pageload -->
      <svg id="stblogo" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.4 17.92" class="stb-logo" style="width: 165px; height: 42px;">
      <defs>
          <style>
          .cls-1 {
              fill: #fff;
          }
          .cls-2,
          .cls-3 {
              fill: #d92e27;
          }
          .cls-2 {
              fill-rule: evenodd;
          }
          </style>
      </defs>
      <title>Storebrand logo</title>
      <path class="cls-1" d="M31.89,10.1V10a8.42,8.42,0,0,0-2.14-5.59,8.23,8.23,0,0,0-11-.42,14.55,14.55,0,0,0-2.79-.26A13.76,13.76,0,0,0,13.19,4h0A8.14,8.14,0,0,0,7.89,2.07,8.12,8.12,0,0,0,0,10c0,.06,0,.11,0,.17s0,.23,0,.35a7.13,7.13,0,0,0,2.14,5.07,8.17,8.17,0,0,0,5.76,2.34,8,8,0,0,0,6.1-2.7,16.13,16.13,0,0,0,1.94.12,15.82,15.82,0,0,0,2-.12A8,8,0,0,0,24,17.92a8.17,8.17,0,0,0,5.76-2.34,7.14,7.14,0,0,0,2.14-5.07C31.9,10.38,31.9,10.24,31.89,10.1ZM5.15,11.8a3.35,3.35,0,0,1-.94-1.75,3.31,3.31,0,0,1,.95-1.86,3.85,3.85,0,0,1,2.3-1.08v3.46a3.38,3.38,0,0,0,1,2.31,4.3,4.3,0,0,1-.55,0A3.89,3.89,0,0,1,5.15,11.8ZM24,12.91a4.23,4.23,0,0,1-.59,0,3.41,3.41,0,0,0,1-2.33V7.11a3.86,3.86,0,0,1,2.33,1.09,3.32,3.32,0,0,1,.95,1.86A3.67,3.67,0,0,1,24,12.91Z" />
      <path class="cls-2" d="M7.89,14.52a4.15,4.15,0,0,1-4.29-4,4.15,4.15,0,0,1,4.29-4,4.34,4.34,0,0,1,3.73,2,5.37,5.37,0,0,0,3.56,1.31A7.17,7.17,0,0,0,7.89,3.68,7.09,7.09,0,0,0,.58,10.51a7.09,7.09,0,0,0,7.32,6.83,7.54,7.54,0,0,0,5.41-2.23A10.8,10.8,0,0,1,10,14,4.5,4.5,0,0,1,7.89,14.52Z" />
      <path class="cls-3" d="M24,3.68a7.16,7.16,0,0,0-7.28,6.17,5.37,5.37,0,0,0,3.55-1.31,4.34,4.34,0,0,1,3.73-2,4.15,4.15,0,0,1,4.29,4,4.15,4.15,0,0,1-4.29,4,4.5,4.5,0,0,1-2.1-.51,10.68,10.68,0,0,1-3.31,1.1A7.54,7.54,0,0,0,24,17.35a7.09,7.09,0,0,0,7.32-6.83A7.09,7.09,0,0,0,24,3.68Z" />
      <path class="cls-2" d="M23.84,10.54V8.28h-.08c-.53,1.94-3.83,3.43-7.83,3.43S8.63,10.2,8.11,8.26h0l0,0H8v2.26a2.79,2.79,0,0,0,1.23,2.13,10.29,10.29,0,0,0,5.35,1.79c.43,0,.87.05,1.32.05s.92,0,1.36-.06a10.23,10.23,0,0,0,5.33-1.8A2.79,2.79,0,0,0,23.84,10.54Z" />
      <path class="cls-3" d="M16,8.9l.11,0a7.71,7.71,0,0,1,1.66-3.4,9.46,9.46,0,0,0-1.8-.17,9.22,9.22,0,0,0-1.75.16,7.68,7.68,0,0,1,1.66,3.41Z" />
      <path d="M38.55,7.79c0-1.34,1.77-1.51,2.87-1.51a18.38,18.38,0,0,1,3.26.37V4.94A22.56,22.56,0,0,0,41,4.62c-2.26,0-4.66.73-4.66,3.32,0,2.2,1.81,2.8,3.39,3.21,1.12.28,3.43.41,3.43,1.94,0,1.27-1.6,1.66-3.19,1.66a17.27,17.27,0,0,1-3.56-.52V16a20.16,20.16,0,0,0,3.84.41c3.34,0,5.16-1.38,5.16-3.6C45.43,8.48,38.55,10.25,38.55,7.79Z" />
      <path d="M51.25.78c-.86.28-1.79.6-2.16.73V4.85H46.72v1.6H49.1v6.92c0,2.65,1.14,2.8,3.43,2.8h1.9V14.52h-1.7c-1.08,0-1.47-.09-1.47-1.36V6.45h3.26V4.85H51.25Z" />
      <path d="M61.84,4.57c-3.62,0-5.72,2.24-5.72,5.87s2.07,6,5.72,6c3.34,0,5.72-2.5,5.72-6S65.45,4.57,61.84,4.57Zm0,10.27c-2.24,0-3.41-1.73-3.41-4.4s1.19-4.25,3.41-4.25,3.41,1.6,3.41,4.25S64.09,14.84,61.84,14.84Z" />
      <path d="M72.16,4.85h-2V16.18h2.16V7.61c1.14-.8,2.2-.88,4.36-.88v-2A7.3,7.3,0,0,0,72.16,6Z" />
      <path d="M83.35,4.62C80.44,4.62,78,6.3,78,10.29s2.2,6.15,6.19,6.15A14.58,14.58,0,0,0,87.95,16V14.49a17.19,17.19,0,0,1-3.08.32c-1.64,0-4.16-.11-4.53-3.6h8.5v-.56C88.83,7,87.25,4.62,83.35,4.62Zm-3,5.07c.06-2.22,1.08-3.54,3-3.54,2.26,0,3,1.49,3,3.54Z" />
      <path d="M95.86,4.55a18.87,18.87,0,0,0-2.52.17V0H91.18V16a26.6,26.6,0,0,0,4.06.37c3.58,0,6.26-2.14,6.26-5.89S99.31,4.55,95.86,4.55Zm-.63,10.22a12.75,12.75,0,0,1-1.92-.13V6.34a15.41,15.41,0,0,1,2-.15c2.7,0,3.93,1.53,3.93,4.31C99.2,13.11,97.87,14.78,95.24,14.78Z" />
      <path d="M106.08,4.85h-2V16.18h2.16V7.61c1.14-.8,2.2-.88,4.36-.88v-2A7.3,7.3,0,0,0,106.08,6Z" />
      <path d="M116.37,4.62a19.91,19.91,0,0,0-4,.41V6.71a22.33,22.33,0,0,1,3.75-.45c3.15,0,3.26.58,3.26,3-.75,0-1.34-.06-1.83-.06-2.37,0-6,0-6,3.54,0,3.06,2,3.71,5,3.71a41.87,41.87,0,0,0,5-.26V8.37C121.55,5,119.52,4.62,116.37,4.62Zm3,10.14c-1.1.06-1.53.11-2.11.11-1.73,0-3.45-.19-3.45-2.09,0-1.66,1.38-2,3.64-2,.32,0,1,0,1.92.06Z" />
      <path d="M131.28,4.62c-1.55,0-2.33.26-4.57,1.25v-1h-2V16.18h2.13V7.46a11.5,11.5,0,0,1,3.69-1c1.94,0,2,1.32,2,2.52v7.23h2.18V8.07A3.22,3.22,0,0,0,131.28,4.62Z" />
      <path d="M147.39,0h-2.16V4.68a15.37,15.37,0,0,0-2.46-.15C139.07,4.53,137,7,137,10.59c0,3.82,2.67,5.82,6.26,5.82a27.56,27.56,0,0,0,4.12-.39C147.41,13.48,147.39,4.21,147.39,0Zm-2.16,14.67c-.93.09-1.47.11-1.88.11-2.59,0-4-1.73-4-4.25,0-3,1.38-4.34,3.93-4.34a11.89,11.89,0,0,1,2,.19Z" />
  </svg>

      <section class="top-menu-buttons" aria-label="Top menu">
        <!-- back button here, only show on subpages -->
        <button style="display: {{displayback}}">
          <svg role="presentation" width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-881.000000, -25.000000)" fill="#404040">
                <g transform="translate(881.000000, 15.000000)">
                  <g transform="translate(0.000000, 10.000000)">
                    <g>
                      <polygon points="7 7 0 7 0 0 7 0"></polygon>
                      <polygon points="15 7 8 7 8 0 15 0"></polygon>
                      <polygon points="7 15 0 15 0 8 7 8"></polygon>
                      <polygon points="23 15 16 15 16 8 23 8"></polygon>
                      <polygon points="15 15 8 15 8 8 15 8"></polygon>
                      <polygon points="7 23 0 23 0 16 7 16"></polygon>
                      <polygon points="15 23 8 23 8 16 15 16"></polygon>
                      <polygon points="23 7 16 7 16 0 23 0"></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span>{{back}}</span>
        </button>

        <button id="settingsButton"
        aria-haspopup="true"
        aria-expanded="false"> <!-- TODO: needs to change when clicked -->
        <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(1.000000, 1.000000)" fill-rule="nonzero" stroke="#404040">
              <path fill="#404040" d="M20.6127652,13.5652174 L23.9998957,13.5652174 L23.9998957,10.4347826 L20.6117217,10.4347826 C20.3936348,9.53008696 20.0367652,8.15947826 19.565113,7.38573913 L21.9609391,4.99043478 L19.0089391,2.03895652 L16.6125913,4.43478261 C15.8393739,3.96313043 14.4703304,3.60626087 13.565113,3.38817391 L13.565113,0 L10.4346783,0 L10.4346783,3.38817391 C9.52998261,3.60626087 8.15937391,3.96313043 7.38667826,4.43478261 L4.99033043,2.03895652 L2.03833043,4.99043478 L4.43467826,7.38678261 C3.96250435,8.15947826 3.60615652,9.53008696 3.38650435,10.4347826 L-0.000104347826,10.4347826 L-0.000104347826,13.5652174 L3.38650435,13.5652174 C3.60615652,14.469913 3.96250435,15.8405217 4.43467826,16.6132174 L2.0378087,19.0095652 L4.99033043,21.9610435 L7.38563478,19.5641739 C8.15937391,20.0368696 9.52998261,20.3937391 10.4346783,20.6128696 L10.4346783,24 L13.565113,24 L13.565113,20.6128696 C14.4703304,20.3937391 15.8404174,20.0368696 16.6125913,19.5652174 L19.0099826,21.9610435 L21.9609391,19.0095652 L19.565113,16.6132174 C20.0367652,15.8405217 20.3936348,14.469913 20.6127652,13.5652174 Z"></path>
              <path fill="#FFFFFF" d="M16.6956522,12 C16.6956522,14.5935652 14.5935652,16.6956522 12,16.6956522 C9.40643478,16.6956522 7.30434783,14.5935652 7.30434783,12 C7.30434783,9.40643478 9.40643478,7.30434783 12,7.30434783 C14.5935652,7.30434783 16.6956522,9.40643478 16.6956522,12 Z"></path>
            </g>
          </g>
        </svg>
        <span id="settings">{{settings}}</span>
      </button>

      <button
      id="service"
      aria-haspopup="true"
      aria-expanded="false"> <!-- TODO make it dynamic -->
      <svg width="32px" height="29px" viewBox="0 0 32 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 1.000000)">
            <g transform="translate(0.000000, 7.000000)" fill="#404040" fill-rule="nonzero">
              <path d="M22.5208333,9.43358183 C22.5208333,14.3790818 17.5873333,18.3900818 11.5,18.3900818 C10.1410833,18.3900818 8.840625,18.1896272 7.638875,17.8240363 L1.30525,20.7602182 L3.78541667,15.8290363 C1.745125,14.2034454 0.479166667,11.9383091 0.479166667,9.43358183 C0.479166667,4.48712728 5.41266667,0.477081818 11.5,0.477081818 C17.5873333,0.477081818 22.5208333,4.48712728 22.5208333,9.43358183 Z"></path>
            </g>
            <g transform="translate(8.000000, 0.000000)">
              <g>
                <g fill="#DA291B">
                  <rect x="0" y="0" width="23" height="17" rx="8"></rect>
                </g>
                <rect stroke="#FFFFFF" stroke-width="2" x="0" y="0" width="23" height="17" rx="8"></rect>
              </g>
              <g transform="translate(7.666667, 0.944444)" fill="#FFFFFF" font-family="HelveticaNeue, Helvetica Neue" font-size="14" font-weight="normal" id="customerServiceCounter">
                <text><tspan x="0.1035" y="13.300763">{{notifications}}</tspan></text>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <span>{{service}}</span>
    </button>
  </section>

</div>

</header>
    `;
  }
  static get properties() {
    return {
      back: {
        type: String
      },
      settings: {
        type: String
      },
      service: {
        type: String
      },
      notifications: {
        type: String
      },
      displayback: {
        type: String,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
    };
  }
}

window.customElements.define('stb-topmenu', StbTopmenu);
