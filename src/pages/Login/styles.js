import styled from "styled-components";
import loginImage from '../../components/Images/login.jpg'; // Volta duas pastas para encontrar 'components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  height: 100vh;
  background-image: url(${loginImage}); 
  background-size: cover; /* Ajusta a imagem para cobrir todo o contêiner */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  
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
background: rgba(255, 255, 255, 0.2); /* Cor de fundo semi-transparente */
backdrop-filter: blur(10px); /* Efeito de desfoque */
box-shadow: 0 1px 2px #0003; /* Sombra leve para destaque */

`;

export const Label = styled.label`
  font-size: 30px;
  font-weight: 600;
  weight:100%
  
  
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #000000;
  
  span {
    
    color: orange; 
  }

`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #000000;
  }
`;