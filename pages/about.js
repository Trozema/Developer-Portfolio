
import Link from 'next/link'
import Layout from '../components/MyLayout';
import Image from 'react-bootstrap/Image';

export default () => (
<div>


  <style jsx> {` 
  profile {
  width: 20px
  }
  thumbnail {
    border-radius: 50%;
    width:40%
  }
  #ProfilePic {
    border-radius: 50%;
    width:50%;
    align-items: center
  }
  #PageHead {
    margin: 20px;
    display: inline-flex;
    
    align-items: center;
    
  }
  h2 {
    text-align: center
  }
 
  
  
  `} </ style >



  <Layout>
    <div id="PageHead">
    <img id="ProfilePic" src="/static/images/Tom_pic.jpg/"></img>
    <h2>Thomas Rozema</h2>
    </div>
    <div id="content">
      <p>I am a junior web developer that has been learning code for about 2 full year. I originally worked in the service industry (Hospitality) for years and therefore has strong people skills which I think is quite useful in team projects.  </p>
      
    </div>
  </Layout>

</div>
)