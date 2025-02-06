import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const ContainerAddContact = styled.div`
  max-width: 1024px;
  width: 100%;
  margin-top: 32px;
  padding: 32px;
  background-color: ${Colors.blue};
  border-radius: 10px;
`

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  gap: 8px;
`

export const ContainerPhoneAndEmail = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`

export const ContainerButtons = styled.div`
  display: flex;
  width: 150px;
  gap: 16px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
  }

  svg {
    font-size: 32px;
    color: ${Colors.yellow};
    cursor: pointer;
  }
`
