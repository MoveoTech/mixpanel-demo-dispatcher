import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`

.react-datepicker{
    position:absolute !important;
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
    margin:15px !important;
    width: 100% !important;
    height: 100% !important;
    justify-content: center !important;
}
.slide-pane__header {
    background-color: ${theme.colors.white} !important;
}
.slide-pane__close {
    opacity: unset !important;
    margin-left: 0;
}
.slide-pane__title {
   max-width: 100% !important;
   height: 100% !important;
   display: flex;
}
.slide-pane__content{
    padding: 0 !important;
}
.slide-pane {
    width: 100% !important
}
`;
