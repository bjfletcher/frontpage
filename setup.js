global.HTMLElement = class HTMLElement {};

const Elements = {};

global.customElements = {
	define: (name, Element) => {
		Elements[name] = Element;
	},
	get: (name) => {
		return Elements[name];
	}
};