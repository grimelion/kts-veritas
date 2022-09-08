import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

const AuthPage = () => {
  const {
    connect,
    connectors,
    error,
    isLoading,
    pendingConnector,
  } = useConnect()

  return (
    <Container>
      <br />
      <br />
      <br />     
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="justify-content-md-center">
        <Col md={2} className="md-auto">
          <Stack direction="vertical" gap={3}>
            {connectors.map((connector) => (
              <Button // TODO: check if wallet exists in system
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
                href='/'
              >
                <Stack direction="horizontal" gap={3}>

                <span>Login via Metamask</span>
                <Image
                    src="/MetaMask-Logo.png"
                    width="50"
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  />
                </Stack>
                {!connector.ready && ' (unsupported)'}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  ' (connecting)'}
              </Button>
            ))}

            <span style={{ margin: '0 auto' }}>OR</span>
            <Button href='/signup/picking-roles'>Signup</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default AuthPage
