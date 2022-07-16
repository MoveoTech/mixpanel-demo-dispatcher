import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`

.react-datepicker-wrapper,
.react-datepicker__input-container,
.react-datepicker__input-container input {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
}
.react-datepicker__portal {
    width: 100% !important;
    height: 100% !important;
    background-color: rgba(0, 0, 0, 0.55);
}

.react-datepicker{
    z-index:2;
    top: 115%;
    border: 1px solid ${theme.colors.secondary_grey};
    box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
}
.react-datepicker__header {
    background-color: ${theme.colors.grayscale};
    color:white !important;
}
.react-datepicker__month{
    background-color:${theme.colors.bright_purple_blue};
}
.react-datepicker__day-name,
.react-datepicker__current-month{
    color:${theme.colors.white};
}
.react-datepicker__day{
    color: ${theme.colors.purple_blue};
    :hover{
        background-color:${theme.colors.grayscale};
        color:${theme.colors.white};
    }
}
.react-datepicker__day--disabled{
    cursor: default;
    color: #ccc;

    :hover{
        background-color:transparent;
        color: #ccc;
    }
}
.react-datepicker__day--keyboard-selected,
.react-datepicker__day--selected,
.react-datepicker__day--in-range{
    background-color:${theme.colors.grayscale} !important;
    color:${theme.colors.white} !important;
}
.react-datepicker__day--in-selecting-range{
    background-color:${theme.colors.grayscale} !important;
    color:${theme.colors.white};
}
.slide-pane__title-wrapper {
    margin:0 !important;
    width: 100% !important;
    height: 100% !important;
    justify-content: center !important;
}
.slide-pane__header {
    background-color: ${theme.colors.white} !important;
}
.slide-pane__close {
    opacity: unset !important;
    margin-left: 3px;
}
.slide-pane__title {
   max-width: 100% !important;
   height: 100% !important;
   display: flex;
   align-items: center;
}
.slide-pane__content{
    padding: 0 !important;
}
.slide-pane__overlay.overlay-after-open {
    background-color: rgba(0, 0, 0, 0.55);
}
.infinite-scroll-component {
    ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey};
    border-radius: 40px;
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }
}
.infinite-scroll-component__outerdiv {
    overflow: hidden;
}
`;
