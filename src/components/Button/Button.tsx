
import './style';
import { ButtonStyled, Icon, Label } from './style';
import { SIZE_TYPE, VARIANT } from "../../types";

export interface ButtonProps {
  onClick: () => void;
  icon?: string;
  label: string;
  size: SIZE_TYPE;
  variant: VARIANT;
}

const Button = (props: ButtonProps) => {
    return (
        <ButtonStyled {...props}
          onClick={props.onClick} >
          <Label>{props.label}</Label>
          <Icon src={props.icon} />
        </ButtonStyled>
    );
  };
  
  export default Button;