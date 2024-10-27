import "../style/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <section>
        <div className="hero-box">
          {/* <video className="hero-video" autoPlay muted loop>
            <source src="../src/assets/video/shibuya.mp4" />
          </video>
          <figcaption>
            <small>*この動画は、Udemyの講座をもとにUE5で作成したものです</small>
          </figcaption> */}

          <figure>
            <video className="idea-2" autoPlay loop>
              <source src="../src/assets/video/siro.mp4" />
            </video>
            <figcaption>
              <h2>Hi! Im Kazuki Tachinana</h2>
              <h1>”Welcome to My Portfolio”</h1>
              <p>ご覧いただきありがとうございます</p>
            </figcaption>
          </figure>
        </div>
        <div className="yohaku"></div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
