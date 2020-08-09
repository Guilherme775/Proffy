import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import LogoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import {
  Container,
  Content,
  Logo,
  ButtonsContainer,
  Conections,
} from "./styles";
import api from "../../services/api";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <Container>
      <Content>
        <Logo>
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </Logo>

        <img src={LandingImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Aulas" />
            Dar aulas
          </Link>
        </ButtonsContainer>

        <Conections>
          <span>
            Total de {totalConnections} conexões já realizadas
            <img src={purpleHeartIcon} alt="" />
          </span>
        </Conections>
      </Content>
    </Container>
  );
};

export default Landing;
