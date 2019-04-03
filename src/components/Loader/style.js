import styled, { keyframes } from 'styled-components'

export const rotate = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
 `

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-content: center;
  display: flex;
`

export const Container = styled.div`
  display: block;
  position: relative;
  width: 128px;
  height: 128px;
  margin: auto;
`
export const Div4 = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 102px;
  height: 102px;
  margin: 12px;
  border: 12px solid #2196f3;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #2196f3 transparent transparent transparent;
`
export const Div1 = styled(Div4)`
  animation-delay: -0.45s;
`

export const Div2 = styled(Div4)`
  animation-delay: -0.3s;
`

export const Div3 = styled(Div4)`
  animation-delay: -0.15s;
`
