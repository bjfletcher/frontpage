const Frontpage = customElements.get('x-frontpage');
const frontpage = new Frontpage();
frontpage.connectedCallback();
console.log(frontpage.innerHTML);