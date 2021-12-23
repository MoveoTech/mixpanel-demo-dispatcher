
import './style';
import { Btn, Icon, Label } from './style';
import { BUTTON_SIZE, VARIANT } from "../../types";

export interface ButtonProps {
  onClick: () => void;
  icon?: string;
  label: string;
  size: BUTTON_SIZE;
  variant: VARIANT;
}

const Button = (props: ButtonProps) => {
    return (
      <div>
        <Btn {...props}
          onClick={props.onClick} >
          <Label>{props.label}</Label>
          <Icon src={props.icon} />
        </Btn>
      </div>
    );
  };
  
  export default Button;