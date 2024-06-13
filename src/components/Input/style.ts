import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Label = styled.label`
  font-size: 22px;
  color: ${Colors.blue100};
`

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 2px solid;
  border-color: ${Colors.blue100};
  border-radius: 4px;

  &:focus {
    border-color: ${Colors.blue150};
    outline: none;
  }

  &::placeholder {
    color: ${Colors.blue50};
  }
`
