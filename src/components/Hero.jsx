import Swal from "sweetalert2";
import { styles } from "../style";
import "./Hero.css";
import profilePicture from "/desktop_pc/profile.png";

const Hero = () => {
  const downloadResume = () => {
    let timerInterval;
    Swal.fire({
      title: "Downloading...",
      html: `
      <div>
        <h1 class="text-green-500">Download will start in <b></b> milliseconds.</h1>
      </div>
    `,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  };

  return (
    <section className={`relative w-full h-screen mx-auto  `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-none lg:flex">
          <div>
            <div data-aos="fade-right" className="md:flex">
              <h1
                className={`md:${styles.heroHeadText} text-[22px] text-white`}
              >
                Hi, I'm
              </h1>
              <p
                className={`md:${styles.heroHeadText} text-[22px] md:ml-2 font-semibold font-serif`}
              >
                <span className="text-[#915EFF] font-semibold font-serif">
                  Adnan
                </span>
              </p>
            </div>
            <p
              data-aos="fade-up-right"
              className={`md:${styles.heroSubText} text-base mt-2 text-white-100 md:flex`}
            >
              <h1>
                Full Stack developer <span className="hidden md:inline">|</span>
                &nbsp;
              </h1>
              <h1>
                UI/UX <span className="hidden md:inline">|</span>&nbsp;
              </h1>
              <h1> Web apps</h1>
            </p>
            <div data-aos="fade-down-right" className="mt-6 md:mt-12 md:ms-12">
              <a
                onClick={downloadResume}
                href="https://drive.google.com/uc?export=download&id=1ZjH1AVuZyZTlwpvipjpTUCyOu0oBGjJX"
                className="text-base md:text-3xl rounded-2xl hover:text-yellow-500 hover:bg-black border-white border-2 hover:border-b-8 border-2xl  p-3"
              >
                Download Resume
              </a>
            </div>
          </div>

          <img
            className="max-w-[250px] md:max-w-[300px] lg:max-w-[576px] lg:mt-12    "
            src={profilePicture}
          />
        </div>
      </div>

      <div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Hero;
