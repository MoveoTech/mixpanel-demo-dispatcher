
import './style';
import { Avatar, Container, Logo, NavbarContainer, PersonalArea , Icon} from './style';
import logo from '../../assets/icons/LOGO.svg';
import settingsIcon from '../../assets/icons/settings.svg';
import notifyIcon from '../../assets/icons/notifications.svg';
import searchIcon from '../../assets/icons/search.svg';
import { useMediaQuery } from 'react-responsive';
import Search from '../Search/Search';

export interface NavbarProps {
    children: string
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const isMobileDevice = useMediaQuery({
        query: '(max-width: 600px)'
      })
    return (
        <NavbarContainer>
            <Logo src={logo} />
            <Container>
                {!isMobileDevice && <Search />}
                <PersonalArea>
                    {
                        isMobileDevice && <Icon onClick={() => {}} src={searchIcon} />
                    }
                    <Icon src={settingsIcon}></Icon>
                    <Icon src={notifyIcon}></Icon>
                    <Avatar>{props.children}</Avatar>
                </PersonalArea>
            </Container>
        </NavbarContainer>
    );
  };
  
  export default Navbar;