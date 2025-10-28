import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <span className="pink">Free</span>
          <span className="green">ze</span>
        </div>
        <nav className="nav-links">
          <a href="#" classname="active">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <img src="https://freewebsitetemplates.com/preview/frozenyogurtshop/images/bg-home.jpg"></img>
    <section className="yogurt-section">
      <div className="left-container">
        <p>NEW PRODUCT</p>
        <h2>The Twist of Healthy Yogurt</h2>
        <p>
          This website template has been designed by 
          <a href="#"> freewebsitetemplates.com </a> for you, for free. 
          You can replace all this text with your own text.
        </p>
      </div>

      <div className="right-container">
        <img src="https://www.wickedspatula.com/wp-content/uploads/2015/07/wickedspatula-roasted-blackberry-ice-cream-3.jpg"></img>
      </div>
    </section>
    
       <div>
            {/* Footer */}
      <footer>
        <div className="footer-top">
          <div>🍦 PRODUCTS</div>
          <div>🤲 OUR STORY</div>
          <div>🍓 FLAVORS</div>
          <div>📍 OUR LOCATION</div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Freeeze. All Rights Reserved.</p>
        </div>
      </footer>
        </div>
     
    </>
  );
}

export default App;