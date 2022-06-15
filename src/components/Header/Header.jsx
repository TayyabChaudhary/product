import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo/logo.png";
import $ from "jquery";
import SectionTwo from "../HomePage/SectionTwo/SectionTwo";
export default function Header() {

  $(document).ready(function() {
    $('#event_click').click(function() {
      $("#nav-dropdown").toggle();
    })
  })
  return (
    <div>
      <main className="main">
        <section className="navigation fixed w-full z-100">
          <div className="container">
            <div className="brand">
              <a>
                <img src={Logo} alt="logo"/>
              </a>
            </div>
            <nav id="nav">
              <div className="nav-mobile">
                <a id="nav-toggle">
                  <span></span>
                </a>
              </div>
              <ul className="nav-list">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Massage On-Demand</a>
                </li>
                <li>
                  <a className="flex items-center" id="event_click">
                    Events
                  </a>
                  <ul className="nav-dropdown" id="nav-dropdown">
                    <li>
                      <a>Our story</a>
                    </li>
                    <li>
                      <a>Web</a>
                    </li>
                    <li>
                      <a>Graphic</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Our story</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Gift card</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <div className="pt-80">
          <h1 className="text-5xl text-white font-bold text-center hading">
            CORPORATE <span className="text-yellow-300">EVENTS</span>{" "}
          </h1>
          <div className="flex justify-center pt-8">
            <button className="border border-solid border-yellow-600 pl-5 _p_a_s_x_x_c pr-5 uppercase py-2">
              Learn More
            </button>
          </div>
        </div>
      </main>

      <SectionTwo />
    </div>
  );
}
