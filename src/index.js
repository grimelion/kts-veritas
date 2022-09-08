import React, { StrictMode, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  useAccount,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import reportWebVitals from './reportWebVitals'
import CreateClaim from './pages/CreateClaim'

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: 'b3dh3IqFkiaGetO_sVAcer-iatb6PFDk' }),
  publicProvider(),
])

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
