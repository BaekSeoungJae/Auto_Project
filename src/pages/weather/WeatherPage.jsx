import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
`;

const IframeContainer = styled.div`
  width: 90%;
  height: 800px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const WeatherPage = () => {
  return (
    <>
      <Container>
        <IframeContainer>
          <StyledIframe
            src="https://www.weather.go.kr/w/index.do"
            title="weather"
          />
        </IframeContainer>
      </Container>
    </>
  );
};

export default WeatherPage;
