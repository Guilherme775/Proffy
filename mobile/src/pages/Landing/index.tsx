import React, { useState, useEffect } from "react";

import api from "../../services/api";

import {
  Container,
  Img,
  Title,
  Bold,
  ButtonsContainer,
  ButtonPrimary,
  Icon,
  ButtonSecundary,
  ButtonText,
  TotalConnections,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import LandingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate("GiveClasses");
  }

  function handleNavigateToStudyPage() {
    navigation.navigate("Study");
  }

  return (
    <Container>
      <Img source={LandingImg} resizeMode="contain" />

      <Title>
        Seja bem-vindo, {"\n"}
        <Bold>O que deseja fazer ?</Bold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={handleNavigateToStudyPage}>
          <Icon source={studyIcon} />

          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecundary onPress={handleNavigateToGiveClassesPage}>
          <Icon source={giveClassesIcon} />

          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecundary>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas{" "}
        <Icon source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
