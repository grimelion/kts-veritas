
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

const BigMediaPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Alert key='warning' variant='warning'>
                        You're a big guy and we're not (yet!)
                        <br />
                        <br />
                        Please come back soon!
                        <br />
                        <br />
                        <a href="/signup/picking-roles">Get back</a>
                    </Alert>
                </Col>
            </Row>
        </Container>
    )
}

export default BigMediaPage;