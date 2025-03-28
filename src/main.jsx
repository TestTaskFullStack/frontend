import { Provider as ChakraProvider } from "./components/ui/provider"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import AppRoutes from './routes'
import { store } from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>,
)
