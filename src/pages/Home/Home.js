import React from 'react';
import { Link } from 'react-router-dom';
import './styles.js'; // Importa o arquivo CSS para estilizar o componente

const Home = () => {
  return (
    <div>
      <Header>
        <Navigation>
          <NavigationLink as={Link} to="/login">Sign In</NavigationLink>
          <NavigationLink as={Link} to="/signup">Sign Up</NavigationLink>
        </Navigation>
        <SearchBar>
          <input type="text" placeholder="Search..." />
        </SearchBar>
      </Header>
    </div>
  );
};

export default Home;
