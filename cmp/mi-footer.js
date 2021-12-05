class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Calzado Piedras Alejandro.
      </p>`;
  }
}

customElements.define("mi-footer", MiFooter);
