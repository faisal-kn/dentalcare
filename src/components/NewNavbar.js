import styles from "./NewNavbar.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { FaBars, FaCross } from "react-icons/fa";
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
              <HashLink smooth to="/aboutus">
                ABOUT
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/beforeafter">
                    BEFORE AND AFTER
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/aboutus">
                SERVICES
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/beforeafter">
                    GENERAL
                  </HashLink>
                  <ul className={styles["sub-menu"]}>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        BOTOX
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        CLEANINGS & EXAMS
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        EMERGENCY CARE
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        CROWNS
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <HashLink smooth to="/beforeafter">
                    COSMETIC
                  </HashLink>
                  <ul className={styles["sub-menu"]}>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        INVISALIGN
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        BOTOX
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        TEETH WHITENING
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        BONDING
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        VENEERS
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <HashLink smooth to="/beforeafter">
                    SURGICAL
                  </HashLink>
                  <ul className={styles["sub-menu"]}>
                    <li>
                      <HashLink smooth to="/beforeafter">
                        IMPLANTS
                      </HashLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/Warranty">
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
