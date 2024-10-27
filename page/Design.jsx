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
            <h2>Photoshop</h2>
            <figure>
              <img src="" alt="" />
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
