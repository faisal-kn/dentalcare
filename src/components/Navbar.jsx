import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";

const MyNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/#">
          VILLAGE DENTAL
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="/aboutus"
                data-bs-toggle="dropdown"
              >
                ABOUT
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li>
                  <a class="dropdown-item" href="/before-after">
                    BEFORE AND AFTER
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="/services"
                data-bs-toggle="dropdown"
              >
                SERVICES
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li>
                  <a class="dropdown-item" href="#">
                    {" "}
                    GENERAL
                  </a>
                  <ul class="submenu submenu-left dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/services/botox">
                        BOTOX
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/services/cleanings">
                        CLEANINGS & EXAMS
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/services/emergency">
                        EMERGENCY CARE
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/services/crowns">
                        CROWNS
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    COSMETIC
                  </a>
                  <ul class="submenu submenu-left dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/services/invisalign">
                        INVISALIGN
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/services/botox">
                        BOTOX
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/services/teeth-whitening">
                        TEETH WHITENING
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/services/bonding">
                        BONDING
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/services/veneers">
                        VENEERS
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    SURGICAL
                  </a>
                  <ul class="submenu submenu-left dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/services/implants">
                        IMPLANTS
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/warranty">
                WARRANTY
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/new-patients">
                NEW PATIENTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
