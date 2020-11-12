
import Link from 'next/link'
import Layout from '../components/MyLayout';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default () => (
<div>


  <style jsx> {` 
#Maincard {
  text-align: center;
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
    <Card id="card" style={{ width: '40rem' }}>
 <Card.Body>
   <Card.Img id="ItunesPic" src="/static/images/Itunes_API_App.png/"></Card.Img>
   
   <Card.Title>Itunes API Project</Card.Title>
   <Card.Subtitle className="mb-2 text-muted">This project was built using the MERN stack. The Itunes API connects to express in the backend and React is used for the frontend of the App.</Card.Subtitle>
<div id="btn-container">
   <div id="Demo">
  <Button href="https://cryptic-meadow-06905.herokuapp.com/">View Demo</Button>
   </div>
   <div id="Code">
   <Button href="https://github.com/Trozema/IT-Store-Project.git">View Code</Button>
   </div>
   </div>
 </Card.Body>
</Card>
</div>
  </Layout>
  </div>
)