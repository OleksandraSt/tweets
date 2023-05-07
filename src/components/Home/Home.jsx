import { NavLink } from 'react-router-dom';
import {
    HomeContainer,
    Text,
    GoButton,
  } from './Home.styled';

  const Home = () => {
    return (
      <HomeContainer>
        <Text>Welcome to tweets</Text>
        <NavLink to="/tweets">
          {' '}
          <GoButton>Go</GoButton>
        </NavLink>
      </HomeContainer>
    );
  };
  
  export default Home;