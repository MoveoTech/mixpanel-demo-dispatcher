
import { useState } from 'react';
import './style';
import { Content, Dropdown, Header, Item } from './style';
import dropdownIcon from '../../assets/icons/dropdown.svg';

export interface FilterProps{
    options: string[],
    name: string,
    onChangeValue: (value: string) => void
}

const Filter: React.FC<FilterProps> = (props: FilterProps)=> {
    const[isActive,setIsActive]=useState(false);
    const[selected,setSelected] = useState(props.name);

    const handleChange = (event: any) => {
        setSelected(event.currentTarget.value); 
        setIsActive(false);
        props.onChangeValue(selected);
      }
    return (
        <Dropdown>
            <Header onClick={(e)=> 
                setIsActive(!isActive)}>
                    {selected}
                <img src={dropdownIcon} />
            </Header>
            {isActive && (
                <Content>
                    {props.options.map((option,index) => (
                        <Item 
                        key={index}
                        onClick={(e) => {
                            handleChange(e)
                            setSelected(option); 
                            setIsActive(false);
                        }} 
                        className="dropdown-item">  
                        {option}
                        </Item>
                     ))}
                </Content>
            )}
            </Dropdown>
    );
}
  
  export default Filter;