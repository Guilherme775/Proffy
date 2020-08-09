import styled from "styled-components";

export const Container = styled.div`
  > main {
    margin: 3.2rem auto;
    width: 90%;
  }

  > main article {
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
  }

  > main article header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
  }

  > main article header img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  > main article header div {
    margin-left: 2.4rem;
  }

  > main article header div strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: var(--color-text-title);
  }

  > main article header div span {
    font-size: 1.6rem;
    display: block;
    margin-top: 0.4rem;
  }

  > main article p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  > main article footer {
    padding: 3.2rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > main article footer p strong {
    color: var(--color-primary);
    font-size: 1.6rem;
    display: block;
  }

  > main article footer a {
    width: 20rem;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
    text-decoration: none;
  }

  > main article footer a:hover {
    background: var(--color-secundary-dark);
  }

  @media (min-width: 1000px) {
    > main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }

    > main article header,
    footer {
      padding: 3.2rem;
    }

    > main article p {
      padding: 0 3.2rem;
    }

    > main article footer p strong {
      display: initial;
      margin-left: 1.6rem;
    }

    > main article footer a {
      width: 24.5rem;
      font-size: 1.6rem;
      justify-content: center;
    }

    > main article footer a img {
      margin-right: 1.6rem;
    }
  }
`;
