import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
// import banner from './assets/banner.jpg';
import rate from './assets/rate.png';
import best from './assets/best-product.png';
import best2 from './assets/best-product2.png';
import best3 from './assets/best-product3.png';
import best4 from './assets/best-product4.png';
import best5 from './assets/best-product5.png';
import best6 from './assets/best-product6.png';
import best7 from './assets/best-product7.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import brands from './assets/Brands.png';


function App() {
  const [emailAddress, setEmailAddress] = useState("");

  function saveEmail () {
    localStorage.setItem('email', emailAddress);
    
   
    if(localStorage.getItem("email")){
      let modal= document.getElementById('modal')!;
      window.onclick = function(event: any) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      modal.style.display = "block"
    }
    
  }


  return (
    <div className="App">

      <header className="">

        <div className="header-topo">

        <div className="coin">
          <span>EN</span>
          <span className="coin">USD</span>
        </div>

        <div className="status">
          <div className="status-profile">
            <span className="material-icons">person</span>
            <span>My profile</span>
          </div>
          <div className="status-profile">
            <span className="material-icons">local_grocery_store</span>
            <span>Items</span>
          </div>
          <div className="status-profile">
            <span className="total">$0.00</span>
            <span className="material-icons">
            search
            </span>
          </div>
        </div>
        
        </div>
        
        <div className="header-nav">

          <div className="logo">
            <img src={logo} alt=""/>
          </div>

          <div className="navbar">
            <nav>
              <ul>
                <li>HOME</li>
                <li>BAG</li>
                <li>SNEAKERS</li>
                <li>BELT</li>
                <li>CONTACT</li>
              </ul>
            </nav>
          </div>

        </div>


      </header>
    
      <section className="banner">
          <div className="banner-img"></div>

          <div className="banner-title">
            <h1>Super Black Friday<br/> 50% Off</h1>
          </div>
          
      </section>

      <section className="mini-banners">

        <div className="mini-banner-image product1">
          <h3>FS - QUILTED MAXI <br/>CROSS BAG</h3>
          <div className="price-banner">
            <span className="old-value">$534,33</span>
            <span className="new-value">24% Off</span>
          </div>
          <div className="price-total">$299,43</div>
        </div>
        
        <div className="mini-banner-image  product2">
          <h3>FS - Nike Air <br/>Max 270 React...</h3>
          <div className="price-banner">
            <span className="old-value">$534,33</span>
            <span className="new-value">24% Off</span>
          </div>
          <div className="price-total">$299,43</div>
        </div>

        <div className="mini-banner-image  product3">
          <h3>FS - QUILTED MAXI <br/>CROSS BAG</h3>
          <div className="price-banner">
            <span className="old-value">$534,33</span>
            <span className="new-value">24% Off</span>
          </div>
          <div className="price-total">$299,43</div>
        </div>
      </section>

      <section className="best-seller">

        <h2>BEST SELLER</h2>
        
        <div className="best-products">

          <div className="product">
            <div className="best-product-img">
              <img src={best} alt=""/>
            </div>
            <h4>Nike Air Max 270 React</h4>
            <img src={rate} alt=""/>
            <div className="prices">
              <span className="price-best">$299,43</span>
              <span className="old-price-best">$534,33</span>
              <span className="discount-best">24% Off</span>
            </div>
          </div>

          <div className="product">
            <div className="best-product-img">
              <img src={best2} alt=""/>
            </div>
            <h4>Nike Air Max 270 React</h4>
            <img src={rate} alt=""/>
            <div className="prices">
              <span className="price-best">$299,43</span>
              <span className="old-price-best">$534,33</span>
              <span className="discount-best">24% Off</span>
            </div>
          </div>

          <div className="product">
            <div className="best-product-img">
              <img src={best3} alt=""/>
            </div>
            <h4>Nike Air Max 270 React</h4>
            <img src={rate} alt=""/>
            <div className="prices">
              <span className="price-best">$299,43</span>
              <span className="old-price-best">$534,33</span>
              <span className="discount-best">24% Off</span>
            </div>
          </div>

          <div className="product">
            <div className="best-product-img">
              <img src={best4} alt=""/>
            </div>
            <h4>Nike Air Max 270 React</h4>
            <img src={rate} alt=""/>
            <div className="prices">
              <span className="price-best">$299,43</span>
              <span className="old-price-best">$534,33</span>
              <span className="discount-best">24% Off</span>
            </div>
          </div>

          <div className="product">
            <div className="best-product-img">
              <img src={best5} alt=""/>
            </div>
            <h4>Nike Air Max 270 React</h4>
            <img src={rate} alt=""/>
            <div className="prices">
              <span className="price-best">$299,43</span>
              <span className="old-price-best">$534,33</span>
              <span className="discount-best">24% Off</span>
            </div>
          </div>

          <div className="product">
            <div className="best-product-img">
              <img src={best6} alt=""/>
            </div>
            <h4>Nike Air Max 270 React</h4>
            <img src={rate} alt=""/>
            <div className="prices">
              <span className="price-best">$299,43</span>
              <span className="old-price-best">$534,33</span>
              <span className="discount-best">24% Off</span>
            </div>
          </div>

          <div className="product">
            <div className="best-product-img">
              <img src={best7} alt=""/>
            </div>
            <h4>Nike Air Max 270 React</h4>
            <img src={rate} alt=""/>
            <div className="prices">
              <span className="price-best">$299,43</span>
              <span className="old-price-best">$534,33</span>
              <span className="discount-best">24% Off</span>
            </div>
          </div>

          <div className="product">
            <div className="best-product-img">
              <img src={best} alt=""/>
            </div>
            <h4>Nike Air Max 270 React</h4>
            <img src={rate} alt=""/>
            <div className="prices">
              <span className="price-best">$299,43</span>
              <span className="old-price-best">$534,33</span>
              <span className="discount-best">24% Off</span>
            </div>
          </div>

        </div>
        
        <h4>LOAD MORE</h4>
        
      </section>

      <section className="email-register">

        <div className="cadaster">

          <div className="chamado">
            <h4>Cadastre seu E-mail</h4>
            <p>Insecreva seu email hoje e receba 10% de desconto</p>
          </div>

          <div className="form">
            <input id="emailAddress" required type="text" value={emailAddress} placeholder="Seu Email" onChange={e => setEmailAddress(e.target.value)}/>
            <button onClick={saveEmail}>Subscribe</button>
          </div>

        </div>
        
      </section>
    
      <footer>
        <div className="info">
          <div className="info-commerce">
            <div className="header">
              <img src={logo} alt=""/>
            </div>
            <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
          </div>

          </div>
          
          <div className="follow">
            <div className="header">
              <h4>Follow Us</h4>
            </div>
            
            <div>
              <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
              <img className="facebook" src={facebook} alt=""/>
              <img className="twitter" src={twitter} alt=""/>
            </div>
          </div>
          
          <div>
            <div className="header">
              <h4>Contact Us</h4> 
            </div>
            <div>
              <p>E-Comm , 4578 <br/>Marmora Road, <br/>Glasgow D04 89GR</p>
            </div>
          </div>
        </div>
        
        <div className="info-extras">
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <img src={brands} alt=""/>
        </div>
      
      </footer>
    
      <section id="modal" className="model">
        <div className="modal-content">
          <h1>Seu email foi cadastrado com sucesso</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
