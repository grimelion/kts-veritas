import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import { verifyMessage } from 'ethers/lib/utils'

import { useConnect, useSignMessage } from 'wagmi'

const ReaderPage = () => {
  const recoveredAddress = React.useRef()
  const { connect, connectors } = useConnect()
  const { data, error, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      console.log(data, variables)
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
    },
  })

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={2} className="md-auto">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Stack direction="vertical" gap={3}>
            {connectors.map((connector) => (
              <Button // TODO: check if wallet exists in system
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
                href="/"
                width="400"
              >
                <Stack direction="horizontal" gap={3}>
                  <span>Register via Metamask</span>
                  <Image
                    src="/MetaMask-Logo.png"
                    width="50"
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  />
                </Stack>
              </Button>
            ))}
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default ReaderPage
