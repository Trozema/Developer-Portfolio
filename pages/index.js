
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'


export default () => (
	<div>

< style jsx> {`
h2 {
color: blue;
margin-top: 20px;
}
#items {
 text-align: center
}
`} </ style >


	<Layout>
		<div id="items">
	    <h2>Welcome to my Portfolio site</h2>
	    <p>The key purpose of this site is to show my web developement projects. The site also gives you a better understanding of me as a person.</p>
		<p>You can use the navigation above to view my project and learn more about me</p>
		</div>
   </Layout>

  </div>
)