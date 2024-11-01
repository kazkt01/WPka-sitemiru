import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/design.css";

function Design() {
  return (
    <div>
      <Header />
      <section>
        <div className="design-box">
          <div className="d-item">
            <h2>Udemy Study 01</h2>
            <figure>
              <img
                className="u-study"
                src="../src/assets/image/g-study.png"
                alt=""
              />
              <h3>基本操作を理解できました</h3>
              <p>
                IllustratorとPhotoshopの基本操作を理解するするために学習しました
              </p>
              <p>URL:</p>
              <a
                href="https://www.udemy.com/share/108m0q3@esz6zr7eeefyJh_5outun_pV-4lVolG0cgPsbh_fGQ5sNsrx0Zm8kV8MKKHOZRsPXw==/"
                target="_blank"
              >
                https://www.udemy.com/share/108m0q3@esz6zr7eeefyJh_5outun_pV-4lVolG0cgPsbh_fGQ5sNsrx0Zm8kV8MKKHOZRsPXw==/
              </a>
            </figure>
          </div>
          <div className="d-item">
            <h2>Modeling</h2>
            <figure>
              <img
                className="d-img"
                src="../src/assets/image/amp2.jpg"
                alt="amp"
              />
              <figcaption>
                <h3>Marshall Amp</h3>
                <p>
                  Blenderを使用し自宅にあるアンプをモデリングしたものです <br />
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="design-box">
          <div className="d-item">
            <h2>Design</h2>
            <figure>
              <img
                className="d-img"
                src="../src/assets/image/sci-fi.PNG"
                alt=""
              />
            </figure>
          </div>
          <div className="d-item">
            <h2>Modeling</h2>
            <figure>
              <img
                className="d-img"
                src="../src/assets/image/forest3d.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Design;
