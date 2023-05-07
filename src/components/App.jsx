import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/users/usersOperations';
import { selectUsers } from '../redux/users/usersSelectors';
import { Routes, Route } from 'react-router-dom';
import CardsList from './CardsList/CardsList';
import Home from './Home/Home';


export const App = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
  
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);
  
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<CardsList users={users} />} />
        </Routes>
      </>
    );
  };