import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

const PickingRolePage = () => {
  return (
    <div>
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
            <Stack direction="vertical" gap={4}>
              <Button href="/signup/picking-roles/reader">Reader</Button>
              <Button href="/signup/picking-roles/independent">
                Independent writer
              </Button>
              <Button href="/signup/picking-roles/media">Media brand</Button>
              <small style={{margin: '0 auto'}}>----------------</small>
              <Button variant="info" size="sm" href="/signup">Get back</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PickingRolePage
