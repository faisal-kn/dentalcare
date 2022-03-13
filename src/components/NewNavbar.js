import styles from "./NewNavbar.module.css";
// import logo from "../assets/logo.webp";
import logo from "../assets/png.webp";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const breakpoint = 960;

const NewNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const locData = useLocation();
  useEffect(() => {
    console.log(locData);
    setIsActive(false);
  }, [locData.pathname]);
  // const navRef = useRef();
  const [colorChange, setColorchange] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
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
              // navRef.current.classList.toggle("active");
              setIsActive(!isActive);
            }}
          >
            <i
              className={`icon ion-md-menu  ${styles.menuicon}`}
              aria-hidden="true"
            ></i>
            {/* <AiOutlineMenu /> */}
            <i
              className={`icon ion-md-close ${styles.closeicon}`}
              aria-hidden="true"
            ></i>
          </div>
            <HashLink smooth to="/#" className={styles.logo}>
              <img src={logo} width={"150px"} />
            </HashLink>
          <ul className={styles["nav-list"]}>
            {/* <li>
              <HashLink smooth to="/#">
                Home
              </HashLink>
            </li> */}
            <li className={styles['span-nav']}>

            </li>
            <li>
              <HashLink smooth to="#">
                Company
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/about-us#">
                    About Us
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/about-us#our-values">
                    Our Values
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="#">
                Salesforce
              </HashLink>
              <ul
                className={
                  width > breakpoint ? styles["mega-menu"] : styles["sub-menu"]
                }
              >
                <li>
                  <HashLink to="services/salesforce-cloud-implementation#">
                    Salesforce Cloud Implementation
                  </HashLink>
                  <ul
                    className={
                      width > breakpoint
                        ? styles["mega-menu-col"]
                        : styles["sub-menu"]
                    }
                  >
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#salesforceservicecloud"
                      >
                        Salesforce Service Cloud
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#salesforcecommunitycloud"
                      >
                        Salesforce Community Cloud
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#salesforcehealthcarecloud"
                      >
                        Salesforce Healthcare Cloud
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#revenuecloud"
                      >
                        Revenue Cloud
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#salesforcecloudmarketing"
                      >
                        Salesforce Marketing Cloud
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#pardotimplementaion"
                      >
                        Pardot Implementation
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#"
                      >
                        Education Cloud
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#"
                      >
                        Financial Services Cloud
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#"
                      >
                        Salesforce Commerce Cloud
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-cloud-implementation#"
                      >
                        Lightning Field Service
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <HashLink smooth to="services/salesforce-services#">
                    Salesforce Services
                  </HashLink>
                  <ul
                    className={
                      width > breakpoint
                        ? styles["mega-menu-col"]
                        : styles["sub-menu"]
                    }
                  >
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-services#salesforce-consulting"
                      >
                        Salesforce Consulting
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-services#salesforce-platform"
                      >
                        Salesforce Platform Development
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-services#salesforce-administration"
                      >
                        Salesforce Administration
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-services#service-support"
                      >
                        Service and Support
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-services#data-migration"
                      >
                        Data Migration Services
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-services#appexchange-development"
                      >
                        Appexchange Development
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-services#release-management"
                      >
                        Salesforce Release Management
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="services/salesforce-services#">
                        Lightning Development
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="services/salesforce-services#">
                        Salesforce Project Management
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="services/salesforce-services#">
                        Salesforce Health Check
                      </HashLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <HashLink smooth to="services/other-crm-services#">
                    Other CRM Services
                  </HashLink>
                  <ul
                    className={
                      width > breakpoint
                        ? styles["mega-menu-col"]
                        : styles["sub-menu"]
                    }
                  >
                    <li>
                      <HashLink
                        smooth
                        to="services/other-crm-services#zendeskCRMimplementation"
                      >
                        Zendesk CRM Services
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/other-crm-services#pipedriveimplementation"
                      >
                        Pipedrive CRM Services
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/other-crm-services#hubspotcrmimplementation"
                      >
                        Hubspot CRM Services
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="services/salesforce-integration-services#"
                  >
                    Salesforce Integrations Services
                  </HashLink>
                  <ul
                    className={
                      width > breakpoint
                        ? styles["mega-menu-col"]
                        : styles["sub-menu"]
                    }
                  >
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-integration-services#customwebservices"
                      >
                        Custom Web Services
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-integration-services#salesforceintegration"
                      >
                        Salesforce CTI Integration
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-integration-services#marketingautomationintegration"
                      >
                        Marketing Automation Integration
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-integration-services#productsintegration"
                      >
                        Salesforce - AWS Integration
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/salesforce-integration-services#productsintegration"
                      >
                        Salesforce - Google Integration
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <HashLink smooth to="services/product-integration#">
                    Products Integration
                  </HashLink>
                  <ul
                    className={
                      width > breakpoint
                        ? styles["mega-menu-col"]
                        : styles["sub-menu"]
                    }
                  >
                    <li>
                      <HashLink
                        smooth
                        to="services/product-integration#salesforce–quickbook"
                      >
                        Salesforce - Quickbooks
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/product-integration#salesforce-zapier"
                      >
                        Salesforce - Zapier
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/product-integration#salesforce-mulesoft"
                      >
                        Salesforce - Mulesoft
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/product-integration#salesforce-pandadocs"
                      >
                        Salesforce - Pandadocs
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/product-integration#salesforce-docuSign"
                      >
                        Salesforce - DocuSign
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="services/product-integration#social-media-integration"
                      >
                        Social Media Integration
                      </HashLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="#">
                <span>NetSuite</span>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/online-training/salesforce#">
                Salesforce Training
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/online-training/salesforce/admin#">
                    Salesforce Admin
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/online-training/salesforce/development#"
                  >
                    Salesforce Development
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/online-training/salesforce/fsl#">
                    Salesforce FSL
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/online-training/salesforce/velocity#">
                    Velocity
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/online-training/salesforce/marketing-cloud#"
                  >
                    Marketing Cloud
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/online-training/salesforce/commerce-cloud#"
                  >
                    Salesforce Commerce Cloud
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/online-training/salesforce/cpq#">
                    CPQ
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/online-training/salesforce/lwc#">
                    LWC
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/online-training/salesforce/lightning#">
                    Lightning
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/online-training/salesforce/tableau#">
                    Salesforce Tableau
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/online-training/salesforce/pardot#">
                    Salesforce Pardot
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/online-training/salesforce/ncino#">
                    nCino
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/online-training/salesforce/qa#">
                    Salesforce QA
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/online-training/netsuite#">
                NetSuite Training
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#">
                Industries
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/industries/non-profit#">
                    Non Profit
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/healthcare#">
                    HealthCare
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/education#">
                    Education
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/public-sector#">
                    Public Sector
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/real-estate#">
                    Real Estate
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/communication#">
                    Communication and Media
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/automotive#">
                    Automotive
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/manufacturing#">
                    Manufacturing and Energy
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/financial-services#">
                    Financial Services
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/professional-services#">
                    Professional Services
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/consumer-goods#">
                    Consumer Goods
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/online-retail#">
                    Online Retail
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/industries/travel-hospitality#">
                    Travel and Hospitality
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/online-training/netsuite#">
                Technologies
              </HashLink>
            </li>
            <li className={`${styles["move-right"]}`}>
              <div className={styles["btn"]}>
                <HashLink smooth to="/contact-us#">
                  Contact Us
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
