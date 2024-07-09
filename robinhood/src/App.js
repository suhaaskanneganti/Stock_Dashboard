import React, {useEffect, useState} from 'react'

import './App.css';
import axios from 'axios'
import gif from '../src/images/infinity.gif'
import logo from '../src/images/robinhood.png'


import {LoadingContainer, 
        LoadingText, 
        SidebarContainer,
        GreenContainerTopLeft,
        PortfolioTotal,
        PortfolioTotalText,
        PortfolioTotalNumber,
        ScreenContainer,
        MenuItem,
        MenuItemText,
        StockDashboard,
        StockElement,
        StockTicker,
        StockPrice} from '../src/components/index'

function App() {

  const [stocks, setStocks] = useState([])

  function getData() {
    axios.get('http://localhost:3001/api/stocks')
    .then(res => {
      console.log(res)
      setStocks(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect( () => {
    setInterval(getData, 1000);
  }, [])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (loading === true) {
    return (
      <LoadingContainer>
        <LoadingText>Welcome to Simple Robinhood</LoadingText>
        <img src={gif} alt={"Loading..."} className='gif'></img>
      </LoadingContainer>
    );
  }
  else {
    return (
      <ScreenContainer>
        <SidebarContainer>
          <GreenContainerTopLeft>
            <img src={logo} alt="Robinhood logo"></img>
          </GreenContainerTopLeft>
          <PortfolioTotal>
            <PortfolioTotalText>Portfolio Total:</PortfolioTotalText>
            <PortfolioTotalNumber>{formatter.format(124873.45)}</PortfolioTotalNumber>
          </PortfolioTotal>
          <MenuItem>
            <MenuItemText>My Stocks</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText>Buy Stocks</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText>History</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText>Settings</MenuItemText>
          </MenuItem>
        </SidebarContainer>
        <StockDashboard>
          {stocks.map( (val) => {
            return(
              <StockElement>
                <StockTicker>{val.ticker}</StockTicker>
                <StockPrice>{formatter.format(val.price)}</StockPrice>
              </StockElement>
            )
          })}
        </StockDashboard>
      </ScreenContainer>
    );
  }


}

export default App;
