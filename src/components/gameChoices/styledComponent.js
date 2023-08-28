import styled from 'styled-components'

export const OptionImage = styled.img`
  width: 170px;
  height: 170px;
  @media (max-width: 512px) {
    width: 120px;
    height: 120px;
  }
`
export const OptionListItem = styled.li`
  list-style-type: none;
  display: flex;
  @media (max-width: 512px) {
    width: 120px;
    height: 120px;
  }
`
export const GameOptionButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
`
