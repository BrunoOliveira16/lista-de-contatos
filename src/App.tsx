import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './routes/routes'
import store from './store'

import { GlobalStyle } from './styles/globalStyles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
