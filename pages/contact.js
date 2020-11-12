
import Link from 'next/link'
import Layout from '../components/MyLayout';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default () => (
<div>


  <style jsx> {` 
#Maincard {
  
  margin: 30px;
  width: 70%;
  display: inline-flex;
}


#Code, #Demo {
  margin: 10px;
}
#btn-container {
  display: inline-flex;
}
  
  
  
  `} </ style >











  <Layout>
  
    <div id="Maincard">
    <Card style={{ width: '40rem' }}>
 <Card.Body>
   <Card.Title>Contact Details</Card.Title>
   <Card.Subtitle className="mb-2 text-muted">Cell: 073 500 1437</Card.Subtitle>
   <Card.Subtitle className="mb-2 text-muted">Github Account: <a href="https://github.com/Trozema">Link</a></Card.Subtitle>
   <Card.Subtitle className="mb-2 text-muted">Linkedin: <a href="https://www.linkedin.com/in/thomasjanrozema/">Link</a></Card.Subtitle>
   <Card.Subtitle className="mb-2 text-muted">Email: <a>rozema.thomas@gmail.com</a></Card.Subtitle>
 </Card.Body>
</Card>
</div>
  </Layout>
  </div>
)