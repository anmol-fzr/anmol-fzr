class MadeBy extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const className = this.getAttribute("class") ?? "";
		const linkClassName = this.getAttribute("link_class") ?? "";

		const shadow = this.attachShadow({ mode: "open" });

		const wrapper = document.createElement("span");
		wrapper.setAttribute("id", "wrapper");
		wrapper.setAttribute("class", className);

		const iconElem = document.createElement("span");
		iconElem.setAttribute("class", "icon");
		iconElem.textContent = "❤ ";

		const info = document.createElement("p");

		const linkElem = document.createElement("a");
		linkElem.setAttribute("class", linkClassName);
		linkElem.setAttribute("href", "https://anmol-fzr.web.app");
		linkElem.setAttribute("target", "_blank");
		linkElem.textContent = "Anmol";

		info.append("Made with ");
		info.appendChild(iconElem);
		info.append("by ");
		info.appendChild(linkElem);

		shadow.appendChild(wrapper);
		wrapper.appendChild(info);
	}
}

customElements.define("made-by", MadeBy);
