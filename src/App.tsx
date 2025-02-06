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
        <main>
          <Router />
        </main>
      </BrowserRouter>
    </Provider>
  )
}

export default App
