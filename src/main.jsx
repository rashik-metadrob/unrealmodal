import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react'
import {AudioProvider} from "./context/useAudio.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AudioProvider>
        <App />
        </AudioProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
