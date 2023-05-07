import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CardsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const LoadMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  max-width: 210px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  :hover {
    cursor: pointer;
  }
`;

export const LoadMoreContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const BackLink = styled(NavLink)`
text-decoration: none;
margin-left: 20px;
`

export const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  max-width: 210px;
  margin-left:45px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  :hover {
    cursor: pointer;
  }
`