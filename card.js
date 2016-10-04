class Card extends HTMLElement {

  connectedCallback() {
		console.log(this.getAttribute('is'));
		switch (this.getAttribute('is')) {
			case 'opinion':
				this.innerHTML = `option ${this.dataset.title} !!`;
				break;
			default:
				this.innerHTML = `${this.dataset.title} !!`;
		}
  }

}

customElements.define('x-card', Card);