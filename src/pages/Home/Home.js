import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/images/home-bg.svg";
import heroImg4 from '../../assets/images/resturantPickUpPhoto.png'
import heroImg3 from "../../assets/images/home-bg2.svg";
import heroImg1 from "../../assets/images/Hero-Image.png";
import trustPilot from "../../assets/images/trustpilot-logo.svg";
import heroImg2 from "../../assets/images/womanEatingPizzar.png";
import chips from "../../assets/images/chipsGoogle.png";
import phone from "../../assets/images/googlePhone.png";
import house from "../../assets/images/houseGoogle.png";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import twoPhones from "../../assets/images/twophoneWoman.png"
import goodfoodImgLeft from '../../assets/images/chips--burger.webp'



const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero_section_1">
        <div className="home_container-hero">
          <Link to="/"><img className="home-bg-img" src={heroImg} alt="hero-background-img" />
          </Link>
          <div className="home-section">
            <div className="home-section1">
              <h1>
                Beautiful food & takeaway,
                <br />
                <span style={{ color: "#35b8be" }}> delivered</span> to your{" "}
                <br /> door.
              </h1>
              <p>
                Foodmart application is an ecommerce website where resturant and
                fast food vendoors can actually post their sumptious Burger to
                showcase tp the world and get order from client.
              </p>
              <Link to={"/signup"}><button className="gnxbpphd">Place an Order</button></Link>
              <div style={{ marginTop: "20px" }}>
                <img src={trustPilot} alt="/" />
                <p>
                  <span className="section-1-span">4.8 out of 5 </span>based on
                  2000+ reviews
                </p>
              </div>
            </div>

            <div className="home-section1">
              <img src={heroImg1} alt="phone-img" />
            </div>
          </div>
        </div>

        <div className="home_container-hero">
          <img className="home-bg-img1" src={heroImg3} alt="/" />
          <div className="home-section">
            <div className="home-section2">
              <h1 style={{ color: "#35b8be" }}>
                The home of
                <br /> fresh product
              </h1>
              <p>
                Foodmart application is an ecommerce website where resturant and
                fast food vendoors can actually post their sumptious Burger to
                showcase tp the world and get order from client.
              </p>
              <Link to={'/'}><button>Learn about us</button></Link>
            </div>

            <div className="home-section2">
              <img src={heroImg2} alt="phone-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-3">
        <div className="sub3P">
          <h1 id="rem">How it works.</h1>
        </div>

        <div className="subContainer">
          <div className="chips">
            <div className="img-footer-container">
              <img className="img-footer" src={chips} alt="chips-img" />
            </div>
            <div className="subContainer_contents">
              <h1>Adapt your menu items</h1>
              <p>
                Easily access our available delicacy around by browsing through our page
              </p>
            </div>
          </div>
          <div className="chips">
            <div className="img-footer-container">
              <img src={phone} className="img-footer" alt="phone" />
            </div>
            <div className="subContainer_contents">
              <h1>Accept online orders & takeout</h1>
              <p>
                Quick delivery time whenever you you want and wherever you are
              </p>
            </div>
          </div>
          <div className="chips">
            <div className="img-footer-container">
              <img src={house} className="img-footer" alt="house" />
            </div>
            <div className="subContainer_contents">
              <h1>we manage your delivery and takeout</h1>
              <p>
                Easily adapt to the have available delicacy around your vecinity
                by allowing us serve you
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <div className='third-sectionJxs'>
      <img src={twoPhones} alt="phoneIcon"/>
      <div className='left--Jsx'>
        <h1 style={{ color: "#35b8be" }}>Order online with our simple Decadev checkout</h1>
        <p className="frnjk" style={{marginTop:"20px",marginBottom:"20px"}}>Here at decagon your satisfaction is our top prioty</p>
        <button className='FAQ'>See our FAQ</button>
      </div>
      </div>

        <div className="homexxgjgjf">
            <img className="home-bg-img1" src={heroImg3} alt="/" />
            <div className="home-section">
                <div className="home-section2">
                  <h1 style={{ color: "#35b8be" }}>
                    Call our store and takeaway when it suits you   best
                  </h1>
                  <p className="pxncndj">
                    Foodmart application is an ecommerce website where resturant and
                    fast food vendoors can actually post their sumptious Burger to
                    showcase to the world and get order from customer.
                  </p>
                  <Link to={'/'}><button className="btn--kjg-8uu">Learn about us</button></Link>
                </div>

              <div className="home-section2">
                <img src={heroImg4} alt="resturant-img" />
              </div>
            </div>
          </div>
            <div className="good--food-xhshfhdb">
              <div className="gF--left">
                <img src={goodfoodImgLeft} alt=""/>
              </div>

              <div className="gF--right">
                <h1>Support<br/> good food <br />and local business</h1>

                <Link to={"/signup"}><button>OrderNow</button></Link>
              </div>
            </div>

      <Footer />
    </>
  );
};

export default Home;
