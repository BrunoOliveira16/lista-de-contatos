import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const ContainerAddContact = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: 80px auto;
  padding: 32px 40px;
  background-color: ${Colors.blue};
  border-radius: 10px;
`

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`

export const ContainerPhoneAndEmail = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;

  svg {
    font-size: 32px;
    color: ${Colors.yellow};
    cursor: pointer;
  }
`
