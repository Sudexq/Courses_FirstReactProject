import "bulma/css/bulma.css"; //bulma css kütüphanesini import ettik
import "./App.css";
import Course1 from "./Course1"; //course js i app js e import ediyoruz
import Angular from "./images/angular.png";
import Bootstrap from "./images/Bootstrap.png";
import Frontend from "./images/Frontend.png";
import Komple from "./images/kompleweb.jpg";

function App() {
  return (
    //title ve description propstur //child olarak Course1 companentı ürettik
    <div className="App">
      {/*Navbar*/}
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">KURSLARIM</p>
        </div>
      </section>

      {/*4 adet column içeren container*/}
      {/*containerı sectionın içine almamızın sebebi 3remlik bi margin istediğimiz için */}
      <section>
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course1
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe id est voluptatibus, sequi commodi, nam nostrum ipsam neque enim molestias minima nemo? Totam quasi asperiores soluta quas earum reprehenderit."
              />
            </div>
            <div className="column">
              <Course1
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe id est voluptatibus, sequi commodi, nam nostrum ipsam neque enim molestias minima nemo? Totam quasi asperiores soluta quas earum reprehenderit."
              />
            </div>
            <div className="column">
              <Course1
                image={Komple}
                title="Komple Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe id est voluptatibus, sequi commodi, nam nostrum ipsam neque enim molestias minima nemo? Totam quasi asperiores soluta quas earum reprehenderit."
              />
            </div>
            <div className="column">
              <Course1
                image={Frontend}
                title="Frontend"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe id est voluptatibus, sequi commodi, nam nostrum ipsam neque enim molestias minima nemo? Totam quasi asperiores soluta quas earum reprehenderit."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
