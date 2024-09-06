import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dadada;
`;

const BtnDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Btn = styled(Link)`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;
  text-decoration: none;
  color: #000000;
  border-radius: 10px;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const MainForm = () => {
  return (
    <Background>
      <Header>
        <BtnDiv>
          <Btn to="/">주식</Btn>
          <Btn to="/">설정</Btn>
          <Btn to="/">홈</Btn>
          <Btn to="/kakaomap">지도</Btn>
          <Btn to="/">날씨</Btn>
        </BtnDiv>
      </Header>
      <Contents>
        <Outlet />
      </Contents>
    </Background>
  );
};
export default MainForm;
