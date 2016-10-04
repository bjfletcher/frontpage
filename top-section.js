class TopSection extends HTMLElement {

  connectedCallback() {
		// fetch here
		const items = [{ title: 'abc' }, { title: 'def' }, { title: 'ghi' }, { title: 'jkl' }].map(attrs);
		this.items = new Promise((resolve, reject) => resolve(items));
		this.items.then(items => {
			this.innerHTML = `
				<div class="o-grid-container">
					<div class="o-grid-row">
						<div data-o-grid-colspan="12 L8">
							<h2>Top Stories</h2>
							<x-card is="lead-story" ${items[0]}></x-card>
							<div class="o-grid-row">
								<div data-o-grid-colspan="12 L6">
									${items.slice(0, 4).map(item => `<x-card ${item}></x-card>`)}
								</div>
								<div data-o-grid-colspan="12 L6">
									<h3>Opinion & Analysis</h3>
									${items.slice(0, 4).map(item => `<x-card is="opinion" ${item}></x-card>`)}
								</div>
							</div>
						</div>
						<div data-o-grid-colspan="12 L4">
							<h3>Trending Topics</h3>
							<x-trending-topics></x-trending-topics>
						</div>
					</div>
				</div>
			`;
		});
  }

}

customElements.define('x-top-section', TopSection);