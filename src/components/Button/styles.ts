import styled, { css } from 'styled-components'
import { Colors } from '../../styles/theme'

type ButtonProps = {
  kind: 'primary' | 'second' | 'danger'
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 6px 10px;
  font-size: 14px;
  color: ${Colors.white};
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    filter: brightness(80%);
  }

  ${(props) =>
    props.kind === 'primary' &&
    css`
      background-color: ${Colors.blue150};
    `}

  ${(props) =>
    props.kind === 'danger' &&
    css`
      background-color: ${Colors.danger};
    `}
`
