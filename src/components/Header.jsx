import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

const Header = () => {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const {
    connect,
    connectors,
    error,
    isLoading,
    pendingConnector,
  } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <Navbar bg="light" expand="lg" style={{ borderBottom: '1px solid black' }}>
      <Container>
        <Navbar.Brand href="/" style={{ marginRight: '100px' }}>
          VeritasNews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ marginRight: '30px', color: 'black' }}>
              main
            </Nav.Link>
            <Nav.Link
              href="/hottest"
              style={{ marginRight: '30px', color: 'black' }}
            >
              hottest
            </Nav.Link>
            <Nav.Link
              href="/ukraine"
              style={{ color: 'black', marginRight: '30px' }}
            >
              Ukraine 🇺🇦
            </Nav.Link>
            <Nav.Link
              href="/dao"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              DAO
            </Nav.Link>
          </Nav>

          {isConnected ? (
            connectors.map((connector) => (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div
                  style={{
                    textAlign: 'center',
                    lineHeight: '50px',
                    marginRight: '10px',
                  }}
                >
                  {address.substring(5, 0) + '...' + address.substring(38)}
                </div>
                <Button onClick={disconnect}>Disconnect</Button>
              </div>
            ))
          ) : (
            <div></div>
          )}

          {error && <div>{error.message}</div>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
