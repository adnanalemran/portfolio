import React from "react";

const Footer = () => {
  return (
    <footer className="mx-4 text-light p-5 mt-8 ">
      <hr className="mb-4 border" />
      <div className="container flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-3">Location</p>
 
            <p className="text-base mb-2">Side of Halimfoundation Model High School</p>
            <p className="text-base mb-2">Taltola, Agargaon, Dhaka</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-3">Contact Us</p>
            <a
              href="mailto:info@kitchensecret.com"
              className="text-base text-light mb-2"
            >
              <i class="fa-solid fa-envelope"></i> adnanalemran@hotmail.com
            </a>

            <a href="tel:+1-123-456-7890" className="text-base text-light">
              <i class="fa-solid fa-phone"></i> +880-1917019619
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="flex flex-col">
            <div className="mb-3">
              <p>Adnan al emran</p>
            </div>
            <div className="flex justify-">
              <a
                href="https://twitter.com/adnanalemran1"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/ananalemran/"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://t.me/adnanalemran"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://www.facebook.com/adnanalemran/"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://youtube.com/electricalghost"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/adnanalemran/"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.pinterest.com/adnanalemran/"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-pinterest"></i>
              </a>
              <a
                href="https://snapchat.com"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-square-snapchat"></i>
              </a>
              <a
                href="https://reddit.com"
                target="_blank"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-reddit"></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                className="text-light"
              >
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <div className="flex justify-end mt-4">
              <p className="text-base mb-0">
                © 2023 Adnan al-emran. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
