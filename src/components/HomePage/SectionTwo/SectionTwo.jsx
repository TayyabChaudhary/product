import React from "react";
import "./sectiontwo.css";
import FirstImage from "../../../assets/images/others/one.png";
import SecImage from "../../../assets/images/others/sec.png";
import ThirdImage from "../../../assets/images/others/three.png";
import FourImage from "../../../assets/images/others/four.png";
import FiveImage from "../../../assets/images/others/five.png";
import SixImage from "../../../assets/images/others/six.png";
import SevenImage from "../../../assets/images/others/seven.png";
import Footer from "../../Footer/Footer";
export default function SectionTwo() {
  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <button className="flex justify-center items-center" onClick={topFunction} id="myBtn" title="Go to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#CFB53B"
        >
          <path d="M12.001 1.993C6.486 1.994 2 6.48 2 11.994c.001 5.514 4.487 10 10 10 5.515 0 10.001-4.486 10.001-10s-4.486-10-10-10.001zM12 19.994c-4.41 0-7.999-3.589-8-8 0-4.411 3.589-8 8.001-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8.001 8z"></path>
          <path d="m12.001 8.001-4.005 4.005h3.005V16h2v-3.994h3.004z"></path>
        </svg>
      </button>
      <section className="section">
        <div className="flex justify-around pt-32 oaiaioaoa">
          <div>
            <h2 className="text-4xl _i_o_s_x_x mb-10">Chair Massage</h2>
            <p className="text-white akakka">
              Swedish massage is a western modality designed <br /> to treat
              soft tissue and improve blood supply at a <br /> superficial
              muscular level. Swedish massage <br /> improves muscle tone and
              helps to flush out <br /> toxins out of the system. When done
              correctly, <br /> this modality can be a very good and effective{" "}
              <br />
              way to reduce physiological and psychological <br/> stress...
            </p>
            <div className="flex justify-between pt-32 relative">
              <button class="bg-transparent hover:yellow-300 _p_0_i_9 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                READ MORE
              </button>
              <button class="bg-transparent _p_0_i_9 flex items-center hover:yellow-300 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#CFB53B"
                  className="mr-1"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
          <div>
            <div className="border border-solid _p_k_n_U_l relative right-48 mt-14">
              <img
                src={FirstImage}
                className="relative _p_a_s_s"
                alt="first Image"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around pt-48 oaiaioaoa">
          <div>
            <div className="border border-solid _p_k_n_U_l relative left-40">
              <img
                src={SecImage}
                className="relative _pa_x_x_x_vc_v"
                alt="second Image"
              />
            </div>
          </div>
          <div className=" relative -top-16">
            <h2 className="text-4xl _i_o_s_x_x mb-10">Neutritionist</h2>
            <p className="text-white akakka">
              Swedish massage is a western modality designed <br /> to treat
              soft tissue and improve blood supply at a <br /> superficial
              muscular level. Swedish massage <br /> improves muscle tone and
              helps to flush out <br /> toxins out of the system. When done
              correctly, <br /> this modality can be a very good and effective{" "}
              <br />
              way to reduce physiological and psychological <br/> stress...
            </p>
            <div className="flex justify-between pt-32 relative">
              <button class="bg-transparent hover:yellow-300 _p_0_i_9 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                READ MORE
              </button>
              <button class="bg-transparent _p_0_i_9 flex items-center hover:yellow-300 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#CFB53B"
                  className="mr-1"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around pt-48 oaiaioaoa">
          <div className="relative -top-16">
            <h2 className="text-4xl _i_o_s_x_x mb-8">Chiropractor</h2>
            <p className="text-white akakka">
              Swedish massage is a western modality designed <br /> to treat
              soft tissue and improve blood supply at a <br /> superficial
              muscular level. Swedish massage <br /> improves muscle tone and
              helps to flush out <br /> toxins out of the system. When done
              correctly, <br /> this modality can be a very good and effective{" "}
              <br />
              way to reduce physiological and psychological <br/> stress...
            </p>
            <div className="flex justify-between pt-32 relative">
              <button class="bg-transparent hover:yellow-300 _p_0_i_9 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                READ MORE
              </button>
              <button class="bg-transparent _p_0_i_9 flex items-center hover:yellow-300 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#CFB53B"
                  className="mr-1"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
          <div>
            <div className="border border-solid _p_k_n_U_l relative right-48">
              <img
                src={ThirdImage}
                className="relative -top-14 left-8 _p_a_s_s"
                alt="third Image"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around pt-48 oaiaioaoa">
          <div>
            <div className="border border-solid _p_k_n_U_l relative left-48">
              <img
                src={FourImage}
                className="relative _p_k_m_j_u"
                alt="four Image"
              />
            </div>
          </div>
          <div className="relative -top-16">
            <h2 className="text-4xl _i_o_s_x_x mb-10">Yoga Instruction</h2>
            <p className="text-white akakka">
              Swedish massage is a western modality designed <br /> to treat
              soft tissue and improve blood supply at a <br /> superficial
              muscular level. Swedish massage <br /> improves muscle tone and
              helps to flush out <br /> toxins out of the system. When done
              correctly, <br /> this modality can be a very good and effective{" "}
              <br />
              way to reduce physiological and psychological <br/> stress...
            </p>
            <div className="flex justify-between pt-32 relative">
              <button class="bg-transparent hover:yellow-300 _p_0_i_9 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                READ MORE
              </button>
              <button class="bg-transparent _p_0_i_9 flex items-center hover:yellow-300 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#CFB53B"
                  className="mr-1"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around pt-48 oaiaioaoa">
          <div className="relative -top-16">
            <h2 className="text-4xl _i_o_s_x_x mb-8">
              Paraphin Wax Treatment
            </h2>
            <p className="text-white akakka">
              Swedish massage is a western modality designed <br /> to treat
              soft tissue and improve blood supply at a <br /> superficial
              muscular level. Swedish massage <br /> improves muscle tone and
              helps to flush out <br /> toxins out of the system. When done
              correctly, <br /> this modality can be a very good and effective{" "}
              <br />
              way to reduce physiological and psychological <br/> stress...
            </p>
            <div className="flex justify-between pt-32 relative">
              <button class="bg-transparent hover:yellow-300 _p_0_i_9 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                READ MORE
              </button>
              <button class="bg-transparent _p_0_i_9 flex items-center hover:yellow-300 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#CFB53B"
                  className="mr-1"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
          <div>
            <div className="_p_k_n_U_l border border-solid relative right-48">
              <img
                src={FiveImage}
                className="relative -top-14 left-8 _p_a_s_s"
                alt="five Image"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around pt-48 oaiaioaoa">
          <div>
            <div className="_p_k_n_U_l border border-solid relative left-48">
              <img
                src={SixImage}
                className="relative -top-14 left-8 _p_k_m_j_u"
                alt="six Image"
              />
            </div>
          </div>
          <div className="relative -top-16">
            <h2 className="text-4xl _i_o_s_x_x mb-8">Reflexology</h2>
            <p className="text-white akakka">
              Swedish massage is a western modality designed <br /> to treat
              soft tissue and improve blood supply at a <br /> superficial
              muscular level. Swedish massage <br /> improves muscle tone and
              helps to flush out <br /> toxins out of the system. When done
              correctly, <br /> this modality can be a very good and effective{" "}
              <br />
              way to reduce physiological and psychological <br/> stress...
            </p>
            <div className="flex justify-between pt-32 relative">
              <button class="bg-transparent hover:yellow-300 _p_0_i_9 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                READ MORE
              </button>
              <button class="bg-transparent _p_0_i_9 flex items-center hover:yellow-300 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#CFB53B"
                  className="mr-1"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around pt-48 oaiaioaoa">
          <div className="relative -top-16">
            <h2 className="text-4xl _i_o_s_x_x mb-8">
              Biometric Screening
            </h2>
            <p className="text-white akakka">
              Swedish massage is a western modality designed <br /> to treat
              soft tissue and improve blood supply at a <br /> superficial
              muscular level. Swedish massage <br /> improves muscle tone and
              helps to flush out <br /> toxins out of the system. When done
              correctly, <br /> this modality can be a very good and effective{" "}
              <br />
              way to reduce physiological and psychological <br/> stress...
            </p>
            <div className="flex justify-between pt-32 relative">
              <button class="bg-transparent hover:yellow-300 _p_0_i_9 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                READ MORE
              </button>
              <button class="bg-transparent _p_0_i_9 flex items-center hover:yellow-300 text-yellow-300 font-medium hover:text-white py-2 px-2 border border-yellow-300 hover:border-transparent rounded-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#CFB53B"
                  className="mr-1"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
          <div>
            <div className="_p_k_n_U_l border border-solid relative right-48">
              <img
                src={SevenImage}
                className="relative -top-14 left-8 _p_a_s_s"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
