import { createGlobalStyle } from "styled-components";
import { COLORS } from "./theme";

export default createGlobalStyle`

.react-datepicker{
    position:absolute !important;
    top: 115%;
    border: 1px solid ${COLORS.secondary_grey};
    box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
}
.react-datepicker__header {
    background-color: ${COLORS.grayscale};
    color:white !important;
}
.react-datepicker__month{
    background-color:${COLORS.bright_purple_blue};
}
.react-datepicker__day-name,
.react-datepicker__current-month{
    color:${COLORS.white};
}
.react-datepicker__day{
    color: ${COLORS.purple_blue};
    :hover{
        background-color:${COLORS.grayscale};
        color:${COLORS.white};
    }
}
.react-datepicker__day--keyboard-selected,
.react-datepicker__day--selected,
.react-datepicker__day--in-range{
    background-color:${COLORS.grayscale} !important;
    color:${COLORS.white} !important;
}
.react-datepicker__day--in-selecting-range{
    background-color:${COLORS.grayscale} !important;
    color:${COLORS.white};
}
`;
