import React, { useState } from "react";
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

const LsPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [stockData, setStockData] = useState(null);

  // Access Token 발급 함수
  const getAccessToken = async () => {
    const url = "https://openapi.ls-sec.co.kr:8080/oauth2/token";
    const appKey = "PSmN0nkeUAWSKnxQLdbEJIhp0mH1ZtzvVCgd"; // 홈페이지에서 발급받은 App Key
    const appSecret = "QI0OX7UAaSwBlIvKvlzIAZT2vEjTHzds"; // 홈페이지에서 발급받은 App Secret

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const params = new URLSearchParams({
      grant_type: "client_credentials",
      appkey: appKey,
      appsecretkey: appSecret,
      scope: "oob",
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: params,
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.access_token);
      } else {
        console.error("Failed to get access token", response.status);
      }
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  // 주식 시세 조회 함수
  const getStockPrice = async (stockCode) => {
    const url = "https://openapi.ls-sec.co.kr:8080/stock/market-data";
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`, // 발급받은 access token
      tr_cd: "t1301", // 주식시간대별 체결을 위한 거래 코드
      tr_cont: "N", // 연속 거래 여부
      tr_cont_key: "", // 연속 거래 키 (필요 시)
    };

    // API에 요구되는 TR 코드와 함께 요청 본문을 구성합니다.
    const body = {
      t1301InBlock: {
        shcode: "078020", // 종목 코드
        cvolume: 0, // 특이 거래량 조건
        starttime: "", // 시작 시간 (필요 시 입력)
        endtime: "", // 종료 시간 (필요 시 입력)
        cts_time: "", // 연속 조회 시 이전 조회의 시간
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Stock data:", data);
        setStockData(data.t1101OutBlock); // 성공 시 데이터 처리
      } else {
        console.error("Failed to fetch stock data", response.status, data);
      }
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  return (
    <Container>
      <h1>LS Securities API</h1>
      <button onClick={getAccessToken}>Get Access Token</button>
      {accessToken && <p>Access Token: {accessToken}</p>}

      <button onClick={() => getStockPrice("078020")}>
        Get Stock Price for LS증권
      </button>

      {stockData && (
        <div>
          <h2>Stock Data</h2>
          <p>종목명: {stockData.hname}</p>
          <p>현재가: {stockData.price}</p>
          <p>전일 대비: {stockData.change}</p>
          <p>등락율: {stockData.diff}</p>
          <p>누적 거래량: {stockData.volume}</p>
        </div>
      )}
    </Container>
  );
};

export default LsPage;
