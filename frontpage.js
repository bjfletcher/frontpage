class Frontpage extends HTMLElement {

  constructor() {
    super();
		this.id = '1234';
  }

  connectedCallback() {
		this.innerHTML = `<x-top-section id="${this.id}"></x-top-section>`;
  }

}

customElements.define('x-frontpage', Frontpage);