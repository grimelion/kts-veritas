import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import Article from './pages/Article'
import NotFound from './pages/NotFound'
import DaoPage from './pages/DAO'
import DaoPageClaim from './pages/DAOclaim'
import CreateClaim from './pages/CreateClaim'
import Header from './components/Header'
import PickingRolePage from './pages/PickingRolePage'
import IndependentInfoPage from './pages/FillingIndepententInformation'
import ReaderPage from './pages/ReaderPage'


import Home from './pages/Home'
import AuthPage from './pages/AuthPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import BigMediaPage from './pages/BigMediaPage'

function App() {
  const { address, connector, isConnected } = useAccount()

  return (
    <div>
      {isConnected ? (
        <div>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles/:title" element={<Article />} />
              <Route path="/dao" element={<DaoPage />} />
              <Route path="/dao/:id" element={<DaoPageClaim />} />
              <Route path="/dao-claim/" element={<CreateClaim />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/signup/picking-roles" element={<PickingRolePage />} />
            <Route path="/signup/picking-roles/independent" element={<IndependentInfoPage />} />
            <Route path="/signup/picking-roles/media" element={<BigMediaPage />} />
            <Route path="/signup/picking-roles/reader" element={<ReaderPage />} />
            <Route path="*" element={<AuthPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
