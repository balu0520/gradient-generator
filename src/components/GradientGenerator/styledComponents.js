// Style your elements here
import styled from 'styled-components'

export const GenerateForm = styled.form`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.colorOne},
    ${props => props.colorTwo}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const GradientHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const GradientPara = styled.p`
  color: #ededed;
  font-family: 'Roboto';
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const GradientColorPara = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`

export const ColorContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SelectColorPara = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border-width: 0;
  width: 130px;
  height: 35px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-top: 15px;
`
