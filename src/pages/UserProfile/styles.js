import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  background-color: transparent;
`;


export const Title = styled.h1`
  font-size: 36px;
  color: black;
  margin-bottom: 10px;
`;
export const Content = styled.div`
 
gap: 30px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
max-width: 450px;
max-height: 700px;
padding: 20px;
border-radius: 10px;
background-color: transparent;
background: rgba(255, 255, 255, 0.2); /* Cor de fundo semi-transparente */
backdrop-filter: blur(10px); /* Efeito de desfoque */
box-shadow: 0 1px 2px #0003; /* Sombra leve para destaque */
`;
export const Label = styled.div`
font-size: 30px;
font-weight: 600;
color: #0000000;

`;

export const Info = styled.p`
  font-size: 1.1em;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;