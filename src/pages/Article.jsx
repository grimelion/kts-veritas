import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Image from 'react-bootstrap/Image'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';

import { Link } from 'react-router-dom'

import { useAccount } from 'wagmi'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col } from 'react-bootstrap'

const Article = () => {
  const [content, setContent] = useState([])
  const { address, connector, isConnected } = useAccount()
  const { title } = useParams()
  const articleTitleDashed = title.split('-')[0] + '-' + title.split('-')[1]
  console.log(articleTitleDashed)

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/search?q=${articleTitleDashed}`)
      .then(async (res) => {
        const result = await res.json()
        setContent(result.posts[0])
      })
      .catch((err) => {
        throw new Error(err)
      })
  }, [])

  return (
    <div>
      {content.length !== 0 ? (
        <div>
          <Container>
            <Row
              style={{ margin: '10px auto' }}
              className="justify-content-md-center"
            >
              <Col>
                <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>{articleTitleDashed}</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
            <Row>
              <Image
                src={`https://picsum.photos/id/${Math.floor(
                  Math.random() * (100 - 1) + 1,
                )}/1000`}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '30%',
                }}
              />
            </Row>
            <Row
              style={{ margin: '20px auto' }}
              md="auto"
              className="justify-content-md-center"
            >
              <h2>{content.title}</h2>
            </Row>
            <Row
              style={{ margin: '20px auto' }}
              md="auto"
              className="justify-content-md-center"
            >
              <Col>
                { isConnected ? (<Button variant="danger" href="/dao-claim">
                  Report content
                </Button>) : (
                  <Alert key='danger' variant='danger'>To report a content, please connect your wallet!</Alert>
                ) }
              </Col>
            </Row>
            <Row
              style={{ margin: '20px auto' }}
              md="auto"
              className="justify-content-md-center"
            >
              <Col>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 10,
                  }}
                  roundedCircle
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80"
                ></Image>
                <span style={{ fontWeight: 'bold' }}>Mark F.</span>
              </Col>
            </Row>
            <Row
              style={{ margin: '20px auto' }}
              md="auto"
              className="justify-content-md-center"
            >
              <Col>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati sed mollitia, nihil numquam perspiciatis veniam, error
                harum nesciunt molestiae officiis animi veritatis quo
                consequatur excepturi expedita explicabo? Rem fuga tempora
                veritatis non est! Vero alias, quo, delectus dolores a voluptate
                eligendi distinctio fugiat repellat incidunt est, doloremque
                laboriosam quae culpa inventore impedit mollitia esse iusto
                voluptatem amet. Repellat, facilis dolores consequuntur mollitia
                iure animi? Adipisci fugit quae, natus commodi necessitatibus
                sed eos enim architecto accusantium possimus repellat nemo
                blanditiis aliquam obcaecati eius sit laborum tempore odio vel
                magni ipsam provident eaque quidem! Quidem error eveniet, sit
                voluptates qui autem in quia minus aut ipsam laborum architecto
                tempore iste dicta, quas consequuntur veniam? Aliquam ad unde
                quos earum dolor inventore. Fugiat ullam nostrum neque quisquam
                eos eveniet iste consequuntur, vel blanditiis voluptatibus,
                ipsa, doloribus similique nobis mollitia accusantium in at
                veritatis alias.
                <br />
                <br />
                Fugiat modi, quia corrupti amet nostrum nobis quam iusto quaerat
                repellat aliquam, id quas ullam praesentium aperiam nisi ex,
                laudantium porro perspiciatis. Quo voluptas aliquam cum rem sed,
                laboriosam inventore molestiae neque ut exercitationem vero, hic
                quia incidunt fugiat obcaecati? Accusamus, odit sed numquam
                repellat nostrum hic rerum mollitia nisi consequatur excepturi
                aliquam sint, reprehenderit totam fugit? Totam modi optio dolore
                neque consequatur suscipit id eos aliquam atque enim, veritatis
                perspiciatis odit, est quam vitae. Saepe eligendi, sint
                architecto iure corrupti neque alias laboriosam quas sunt ipsa
                id ducimus aut perspiciatis odio dolorum atque, amet ex animi
                pariatur maiores nisi aperiam at. Molestiae deleniti adipisci
                doloribus delectus illo voluptatum.
              </Col>

              <br />
              <br />
              <Link style={{ marginTop: '20px' }} to="/">
                Get back
              </Link>
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

export default Article
