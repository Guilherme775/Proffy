import React from "react";

import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Background,
  Title,
  Description,
  Button,
  ButtonText,
} from "./styles";

import giveClassesBg from "../../assets/images/give-classes-background.png";

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <Background source={giveClassesBg} resizeMode="contain">
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Background>

      <Button onPress={handleBack}>
        <ButtonText>Tudo Bem</ButtonText>
      </Button>
    </Container>
  );
};

export default GiveClasses;
