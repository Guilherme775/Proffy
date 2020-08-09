import React, { ReactNode } from "react";

import { Container, Header, Button, Img, Wrapper, Title } from "./styles";

import backIcon from "../../assets/images/icons/back.png";

import logoImg from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<Props> = ({ title, headerRight, children }) => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("Landing");
  }
  return (
    <Container>
      <Header>
        <Button onPress={handleGoBack}>
          <Img source={backIcon} resizeMode="contain" />
        </Button>

        <Img source={logoImg} resizeMode="contain" />
      </Header>

      <Wrapper>
        <Title>{title}</Title>

        {headerRight}
      </Wrapper>

      {children}
    </Container>
  );
};

export default PageHeader;
