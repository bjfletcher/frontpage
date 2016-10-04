class Card extends HTMLElement {

  connectedCallback() {
		switch (this.getAttribute('is')) {
			case 'lead-story':
				this.innerHTML = `<div>
					<h4>${this.dataset.title}</h4>
					<p>This is a lead story. Show the big image, related links and everything.</p>
				</div>`;
				break;
			case 'opinion':
				this.innerHTML = `<div>
					<h4>${this.dataset.title}</h4>
					<p>This is an opinion card</p>
				</div>`;
				break;
			default:
				this.innerHTML = `<div>
					<h4>${this.dataset.title}</h4>
					<p>This is a default card</p>
				</div>`;
		}
  }

}

customElements.define('x-card', Card);