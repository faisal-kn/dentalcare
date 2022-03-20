import styles from "./NewNavbar.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { FaBars, FaCross } from "react-icons/fa";
import home_styles from '../assets/css/Home.module.css';

const breakpoint = 960;

const NewNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const locData = useLocation();
  useEffect(() => {
    console.log(locData);
    setIsActive(false);
  }, [locData.pathname]);
  // const navRef = useRef();
  const [colorChange, setColorchange] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const changeNavbarColor = () => {
    if (window.scrollY >= 0) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(()=>{
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${home_styles.aniBottomToTop}`);
          return;
        }
        entry.target.classList.remove(`${home_styles.aniBottomToTop}`);
      });
    });
    const check1 = document.getElementById("nav_text1");

    observer3.observe(check1);
  },[])

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.addEventListener("scroll", changeNavbarColor);
  }, []);
  return (
    <header>
      <div className={styles.container}>
        <nav
          className={`${colorChange ? styles.scroll : ""} ${
            isActive ? styles.active : " "
          }`}
          id='nav_text1'
        >
          <div
            className={`${styles["menu-icons"]} menu-iconss`}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <FaBars
              className={`${styles.menuicon}`}
              aria-hidden="true"
            />
            <FaCross
              className={`${styles.closeicon}`}
              aria-hidden="true"
            />
          </div>
          <HashLink smooth to="/" className={styles.logo}>
            <img src={logo} width={"320px"} />
          </HashLink>
          <ul className={styles["nav-list"]}>
            <li className={styles["span-nav"]}></li>
            <li>
              <HashLink smooth to="/about-us">
                ABOUT
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/before-after">
                    BEFORE AND AFTER
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/services">
                SERVICES
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/services">
                    GENERAL
                  </HashLink>
                  <ul className={styles["sub-menu"]}>
                    <li>
                      <HashLink smooth to="/services/botox">
                        BOTOX
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/services/cleanings">
                        CLEANINGS & EXAMS
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/services/emergency">
                        EMERGENCY CARE
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/services/crowns">
                        CROWNS
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <HashLink smooth to="/services/cosmetic">
                    COSMETIC
                  </HashLink>
                  <ul className={styles["sub-menu"]}>
                    <li>
                      <HashLink smooth to="/services/invisalign">
                        INVISALIGN
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/services/botox">
                        BOTOX
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/services/teeth-whitening">
                        TEETH WHITENING
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/services/bonding">
                        BONDING
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/services/veneers">
                        VENEERS
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <HashLink smooth to="/services/surgical">
                    SURGICAL
                  </HashLink>
                  <ul className={styles["sub-menu"]}>
                    <li>
                      <HashLink smooth to="/services/implants">
                        IMPLANTS
                      </HashLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/warranty">
                WARRANTY
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/new-patients">
                NEW PATIENTS
              </HashLink>
            </li>
            <li className={`${styles["move-right"]}`}>
              <div className={styles["btn"]}>
                <HashLink smooth to="/contact-us#">
                  BOOK ONLINE
                </HashLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NewNavbar;
