import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.div`
  > form {
    margin-top: 1.8rem;
  }

  > form button {
    margin: auto;
    width: 50%;
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
    margin-top: 2rem;
  }

  > form button:hover {
    background: var(--color-secundary-dark);
  }

  @media (min-width: 1000px) {
    > form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2rem;
    }

    > form button {
      margin: 0;
      width: 20rem;
      margin-top: 0;
      align-self: flex-end;
    }
  }
`;

export const InputBlock = styled.div`
  position: relative;
  margin-top: 1.4rem;

  @media (min-width: 1000px) {
    text-align: center;
  }

  > label {
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
  }

  > input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  > select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  :focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
