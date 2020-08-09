import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  > a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }

  > img {
    height: 1.6rem;
  }

  > a:hover {
    opacity: 0.6;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  > strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  > p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

  @media (min-width: 1000px) {
    text-align: center;
  }
`;
