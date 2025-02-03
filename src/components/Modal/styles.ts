import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${Colors.overlay};
`

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 10px;
  position: absolute;
  top: 30%;
  right: 0;
  left: 0;
  background-color: ${Colors.white};
`

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`

export const Title = styled.h2`
  color: ${Colors.blue150};
`

export const Separator = styled.div`
  height: 2px;
  width: 100%;
  margin: 8px 0 16px;
  background-color: ${Colors.blue150};
`
