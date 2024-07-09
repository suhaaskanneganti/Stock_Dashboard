import styled from 'styled-components'

export const LoadingContainer = styled.div`
    background: #3f3f3f;
    position: absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    text-align: center;
    vertical-align: middle;
    padding: 250px;
`

export const LoadingText = styled.h1`
    color: #23ce99;
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
`


export const ScreenContainer = styled.div`
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    flex-direction: row;
    display: flex;
`

export const SidebarContainer = styled.div`
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 25vw;
    background-color: #3f3f3f;
    border: 1px solid black;
`

export const GreenContainerTopLeft = styled.div`
    top: 0px;
    left: 0px;
    height: 10vh;
    background-color: #23ce99;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const PortfolioTotal = styled.div`
    top: 0px;
    left: 0px;
    height: 10vh;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;

`
export const PortfolioTotalText = styled.h1`
    color: #A9A9A9;
    font-size: medium;
`
export const PortfolioTotalNumber = styled.h1`
    color: white;
`

export const MenuItem = styled.div`
    top: 0px;
    left: 0px;
    height: 5vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
`

export const MenuItemText = styled.h1`
    color: #A9A9A9;
    font-size: medium;
`

export const StockDashboard = styled.div`
    background-color: #3f3f3f;
`

export const StockElement = styled.div`
    border: 1px solid black;
    height: 20vh;
    width: 75vw;
    align-items: center;
    display: flex;
    flex-direction: row;
`

export const StockTicker = styled.h1`
    color: white;
    font-size: 24px;
    position: absolute;
    padding-left: 15vh;
`

export const StockPrice = styled.h1`
    color: #23ce99;
    position: inherit;
    padding-left: 100vh;
`