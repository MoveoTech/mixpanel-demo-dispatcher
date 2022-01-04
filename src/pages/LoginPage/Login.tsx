import React from "react";
import logo from "../../assets/icons/logo.svg";
import { SIZE_TYPE, VARIANT } from "../../types";
import {
  Body,
  BodyContainer,
  ButtonLogin,
  Description,
  Header,
  LoginContainer,
  Logo,
  Title,
} from "./style";

export interface LoginProps {
  onClick: () => void;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  return (
    <LoginContainer>
      <Header>
        <Logo src={logo}></Logo>
      </Header>
      <Body>
        <BodyContainer>
          <Title>Welcome to Dispatcher</Title>
          <Description>
            Locate articles and breaking news headlines from news sources and
            blogs across the web
          </Description>
          <ButtonLogin
            onClick={props.onClick}
            icon={true}
            variant={VARIANT.primary}
            size={SIZE_TYPE.large}
          >
            continue
          </ButtonLogin>
        </BodyContainer>
      </Body>
    </LoginContainer>
  );
};
export default Login;
