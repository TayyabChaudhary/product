import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <main className="text-center lg:text-left footer">
        <div className="container p-6">
          <div className="grid lg:grid-cols-6 md:grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-800">
                PRODUCTIVE ALLIANCE
              </h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                varius fringilla velit habitant et, dictum.
              </p>
              <button class="bg-transparent mt-4 hover:yellow-300 Kajskjak text-black font-medium hover:text-white py-2 px-2 border border-black hover:border-transparent rounded-0">
              JOIN OUR TEAM
              </button>
            </div>

            <div className="mb-6"></div>

            <div className="mb-6"> </div>
            <div className="mb-6"> </div>

            <div className="mb-6">
              <h5 className="uppercase mb-2.5 footer_hading text-gray-800">
                Menu
              </h5>

              <ul className="list-disc mb-0">
                <li>
                  <a href="#!" className="text-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Success stories
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="uppercase mb-2.5 footer_hading text-gray-800">
                Services
              </h5>

              <ul className="list-disc mb-0">
                <li>
                  <a href="#!" className="text-gray-800">
                    Chair massage
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Yoga
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Neutrition
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Chiropractors
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Reflexology
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Paraphin wax
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
