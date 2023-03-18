import React from "react";
import styles from "../Styles/Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.hamburger}>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </section>

      <div className={styles.divMotoImg}>
        <img
          src="https://images.ctfassets.net/x7j9qwvpvr5s/5kkoPNfevASziIHKnHLCHU/c65326f7dc7f55cf48194b6d952f86a2/Model-Menu-MY23-Ducati-Streetfighter-Lamborghini.png"
          alt="..."
        />
      </div>

      <div className={styles.divLogoImg}>
        <img
          src="https://t4.ftcdn.net/jpg/04/84/78/85/360_F_484788506_7GScMKPVlR6Vt6YODBLPWNjCf13PWn1c.jpg"
          alt="..."
        ></img>
      </div>
    </header>
  );
};

export default Header;
