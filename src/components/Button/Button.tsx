
import './style';
import { ButtonStyled, Icon, Label } from './style';
import { SIZE_TYPE, VARIANT } from "../../types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: string;
  size: SIZE_TYPE;
  variant: VARIANT;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps)=> {
    return (
        <ButtonStyled {...props}>
          <Label>{props.children}</Label>
          <Icon src={props.icon} />
        </ButtonStyled>
    );
  };
  
  export default Button;