class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="header">
    <div class="header-container">
        <a class="header-logo" href="../index.html">
            <img src="../assets/images/cda-logo.svg" alt="Cranach Digital Archive Logo">
        </a>
        <div class="header-buttons">
            <button class="header-button" data-js-search-open>
                <span class="icon">search</span>
            </button>
            <button class="header-button" data-js-main-menu-open>
                <span data-js-main-menu-icon class="icon">menu</span>
            </button>
        </div>
    </div>
    <nav class="header-overlay header-nav" aria-label="Hauptnavigation" data-js-main-menu-target>
        <button class="header-button header-overlay-close-button" data-js-main-menu-close>
            <span class="icon">close</span>
        </button>
        <ul class="header-nav-list">
            <li>
                Archiv
                <ul class="header-nav-sublist">
                    <li>Alle Werke</li>
                    <li>Gemälde</li>
                    <li>Archivalien</li>
                    <li>Literatur</li>
                </ul>
            </li>
            <li>
                Personen
                <ul class="header-nav-sublist">
                    <li><a href="lucas-cranach.html">Lucas Cranach</a></li>
                    <li class="red-text important-text">Martin Luther</li>
                    <li>Über uns</li>
                    <li>Partner</li>
                </ul>
            </li>
            <li>Forschung</li>
            <li>Aktuelles</li>
        </ul>
    </nav>
</header>
    `;
    }
}
customElements.define('main-header', MainHeader);