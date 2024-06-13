import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const Home = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  margin: 80px auto;
  padding: 2rem;
  background-color: ${Colors.blue};
  border-radius: 10px;
`
