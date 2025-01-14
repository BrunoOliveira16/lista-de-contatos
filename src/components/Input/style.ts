import styled from 'styled-components'
import { Colors } from '../../styles/theme'

type labelProps = {
  isError?: boolean
}

type inputProps = {
  isError?: boolean
}

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Label = styled.label<labelProps>`
  font-size: 22px;
  color: ${(props) => (props.isError ? Colors.danger : Colors.blue100)};
`

export const Input = styled.input<inputProps>`
  padding: 8px;
  font-size: 16px;
  border: 2px solid;
  border-color: ${(props) => (props.isError ? Colors.danger : Colors.blue100)};
  border-radius: 4px;

  &:focus {
    border-color: ${Colors.blue150};
    outline: none;
  }

  &::placeholder {
    color: ${Colors.blue50};
  }
`
