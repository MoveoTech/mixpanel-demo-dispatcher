import "./style";
import icon from "../../assets/icons/back.svg";
import { ButtonStyled, Icon, Label } from "./style";
import { SIZE_TYPE, VARIANT } from "../../utils/types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  size: SIZE_TYPE;
  variant: VARIANT;
  rtl?: boolean
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <ButtonStyled {...props}>
      <Label rtl={props.rtl} >{props.children}</Label>
      {props.icon && <Icon rtl={props.rtl} src={icon} />}
    </ButtonStyled>
  );
};

export default Button;
