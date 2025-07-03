class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer>
    <div>
    <a href="../index.html">
        <img src="../assets/images/cda-logo.svg" alt="Cranach Digital Archive Logo">
    </a>
    <nav>
    <h3>Allgemeines</h3>
    <ul>
        <li>Impressum</li>
        <li>Leitfaden</li>
        <li>Nutzungsbedingungen</li>
        <li>FAQ</li>
    </ul>
    </nav>
        <nav>
    <h3>Entdecken</h3>
    <ul>
        <li><a href="/persons/lucas-cranach.html">Lucas Cranach</a></li>
        <li>Luther</li>
        <li>Über uns</li>
        <li>Aktuelles</li>
        <li>Partner</li>
        <li>Forschung</li>
    </ul>
        </nav>
        <nav>
    <h3>Kontakt</h3>
    <p>Haben Sie Fragen oder Anregungen?<br>
        Kontaktieren Sie uns ganz einfach über folgenden Link:</p>
    <p>Zum Kontaktformular</p>
        </nav>
    </div>

    <small>Stiftung Museum Kunstpalast, Düsseldorf / Technische Hochschule Köln, 2025</small>
</footer>
    `;
    }
}
customElements.define('main-footer', Footer);