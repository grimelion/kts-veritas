import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Badge from 'react-bootstrap/Badge';
import { HandThumbsDownFill, HandThumbsUpFill } from 'react-bootstrap-icons'


const Home = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=5')
      .then(async (res) => {
        const arr = await res.json()

        setContent(arr.posts)
      })
      .catch((err) => {
        throw new Error(err)
      })
  }, [])

  return (
    <div>
      {content.length !== 0 ? (
        <div>
          <Container style={{ marginTop: '50px' }}>
            <h2>Latest articles </h2>
            <Row xs={1} md={3} className="g-4" style={{ marginTop: 20 }}>
              {content.map((cont, id) => (
                <Col>
                  <Card style={{ width: '25rem' }}>
                    <Card.Img
                      variant="top"
                      src={`https://picsum.photos/id/${Math.floor(Math.random() * (100 - 1) + 1)}/1000`}
                    />
                    <Card.Body>
                      <Card.Link
                        href={
                          '/articles/' +
                          cont.title.replace(/\s+/g, '-').toLowerCase()
                        }
                        state={{ id: 5 }}
                      >
                        <Card.Title>{cont.title}</Card.Title>
                      </Card.Link>
                      <Card.Text>{cont.description}</Card.Text>
                      <Col>
                      <span style={{ fontWeight: 'bold' }}>Autor: </span>
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                          margin: '0 10px 0 10px',
                        }}
                        roundedCircle
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80"
                      ></Image>
                      <span style={{marginRight: '10px'}}>Mark F.</span><Badge style={{fontSize: '10px'}} bg="success">Approved</Badge>
                      </Col>
                      <br />
                        <HandThumbsUpFill style={{color: 'green'}} /> <span style={{ marginRight: '5px'}}>{Math.floor(Math.random() * (100 - 1) + 1)}</span>
                        <HandThumbsDownFill style={{color: 'red'}} /><span>{Math.floor(Math.random() * (100 - 1) + 1)}</span>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated {id + 5} mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  )
}

export default Home
