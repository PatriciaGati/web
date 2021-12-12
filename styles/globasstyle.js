import { createGlobalStyle } from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
const GlobalStyle = createGlobalStyle`

body {
  background-color: ${(props) => props.theme.bg} !important;
  color: ${(props) => props.theme.fg} !important;
}
.danger{
  color: ${(props) => props.theme.danger} !important;
}
h1 {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container-fluid {
  padding: 0 !important;
}
.modal-header {
  background-color: ${(props) => props.theme.bg} !important;
}
.modal-header > .btn-close {
  background-color: ${(props) => props.theme.fg} !important;
}
.modal-body {
  background-color: ${(props) => props.theme.bg} !important;
}
#navbarScrollingDropdown::after {
  content: none;
}

.dropdown-menu {
  background-color: transparent!important;
  margin-left: 1em !important;
}
.text-image > div {
  top: 50%;
  transform: translateY(-50%);
  position: static !important;
}
@media screen and (min-width: 992px) {
  .text-image > div {
    top: 50%;
    transform: translateY(-50%);
    position: relative !important;
  }
  .nav-link:not(.dropdown-link):not(:last-of-type)::after {
    content: "/" !important;
    position: relative !important;
    right: -10px !important;
  }
  .dropdown-menu {
    margin-left: 0em !important;
  }
} `;

export default GlobalStyle;
