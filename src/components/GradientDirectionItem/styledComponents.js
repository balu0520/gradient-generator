// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 5px;
`
export const SelectButton = styled.button`
  background-color: #ffffff;
  border-width: 0;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: #334155;
  width: 130px;
  height: 35px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`
