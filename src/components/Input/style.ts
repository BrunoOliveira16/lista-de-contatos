import styled from 'styled-components'
import { Colors } from '../../styles/theme'

type LabelProps = {
  $hasError?: boolean
}

type InputProps = {
  $error?: boolean
}

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Label = styled.label<LabelProps>`
  font-size: 18px;
  color: ${({ $hasError }) => ($hasError ? Colors.danger : Colors.blue100)};
`

export const Input = styled.input<InputProps>`
  padding: 8px;
  font-size: 16px;
  border: 2px solid;
  border-color: ${({ $error }) => ($error ? Colors.danger : Colors.blue100)};
  border-radius: 4px;

  &:focus {
    border-color: ${Colors.blue150};
    outline: none;
  }

  &::placeholder {
    color: ${Colors.blue50};
  }
`
