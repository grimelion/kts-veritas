import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack';

const date = Date.now();
const today = new Date(date);

const test = [{
    title: 'I don`t like this content!',
    date: today.toLocaleDateString("en-US"),
    complainter: '0x5f1...jH4r'
}, {
    title: 'I don`t like this content too!',
    date: today.toLocaleDateString("en-US"),
    complainter: '0x5f1...jH4r'
}, {
    title: 'Think content is horrible!',
    date: today.toLocaleDateString("en-US"),
    complainter: '0x5f1...jH4r'
}]

const DaoPage = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      {test.map((val, id) => (
        <a href={`/dao/${id}`} style={{textDecoration: 'none', color: 'black'}}>
            <Stack direction="horizontal" gap={2} key={id} style={{backgroundColor: '#dedede', padding: '10px'}}>
                <h3>{val.title}</h3>
                <span className='ms-auto' style={{fontWeight: 'bold'}}>{val.date} | Issuer: {val.complainter}</span>
            </Stack>
            <br />
        </a>
      ))}
    </Container>
  )
}

export default DaoPage
