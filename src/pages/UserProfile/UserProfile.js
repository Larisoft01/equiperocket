import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";


const UserProfile = () => {
  const { signout, user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  
  const handleUpdateUser = () => {
  console.log('Parâmetros:', phone, address, gender, birthDate);
  try {
    updateUser({
      phone,
      address,
      gender,
      birthDate,
    });
  } catch (error) {
    console.error(error);
    // Exibir mensagem de erro para o usuário
  }
};

  return (
    <C.Container>
      
      <C.Title>Perfil do Usuário</C.Title>
      <C.Content>
       <C.UserInfo>
        <C.Label>Nome:</C.Label>
        <C.Info>{user.name}</C.Info>
       </C.UserInfo>
       <C.UserInfo>
        <C.Label>Email:</C.Label>
        <C.Info>{user.email}</C.Info>
       </C.UserInfo>
       <C.UserInfo>
        <C.Label>Telefone:</C.Label>
        <C.Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
       </C.UserInfo>
       <C.UserInfo>
        <C.Label>Endereço:</C.Label>
        <C.Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
       </C.UserInfo>
       <C.UserInfo>
        <C.Label>Gênero:</C.Label>
        <C.Select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </C.Select>
       </C.UserInfo>
       <C.UserInfo>
        <C.Label>Data de Nascimento:</C.Label>
        <C.Input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
       </C.UserInfo>
      <Button Text="Salvar" onClick={handleUpdateUser}>
        Salvar
      </Button>
      
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
      </C.Content>
    </C.Container>
  );
};

export default UserProfile;