import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  background: #ebd8ff;
  width: 100vw;
  height: 100vh;
  padding: 50px;
`;

export const Text = styled.h1`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 80px;
  margin-top: 150px;
  line-height: 1.2;
  color: #212121;
`;

export const GoButton = styled.button`
  font-size: 20px;
  color: #000000;
  padding: 10px 30px;
  margin: 10px;
  border: 2px;
  border-color: #000000;
  background-color: #5CD3A8;
  border-radius: 8px;
  &:hover {
    background-color: #212121;
    color: #ffffff;
    cursor: pointer;
  }
`;