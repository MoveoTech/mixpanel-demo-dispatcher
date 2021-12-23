import './style';
import { Btn, Icon } from './style';

export interface ButtonProps {
  onClick: () => void;
  color: string;
  hover: string;
  icon: string;
  children: any;
  size: string;
}

const Button = ({onClick, color, hover, icon, children,size}: ButtonProps) => {
    return (
      <div>
        <Btn
          onClick={onClick}>
          {children}
          {size != "small" && <Icon src={icon} />}
        </Btn>
      </div>
      
    );
  };
  
  export default Button;