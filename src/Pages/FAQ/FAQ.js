
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css'

const FAQ = () => {
    return (
        
        <div className='py-5 my-5'>
            <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
            <Accordion className='mx-auto accordion' defaultActiveKey="0" flush>
       <Accordion.Item eventKey="0">
         <Accordion.Header>What is our main goal?</Accordion.Header>
         <Accordion.Body>
         <p>Our main goal is to help you to become a successful person. A successful person is someone who sets and achieves goals. Some people may define success as being happy and fulfilled, while others may define it as having status and accomplishments. Often when talking about success, all of these elements are relevant.</p>
         </Accordion.Body>
       </Accordion.Item>

       <Accordion.Item eventKey="1">
         <Accordion.Header>How to connect with us?</Accordion.Header>
         <Accordion.Body>
           <p>You can contact us anytime. We are here to help you to build your good habit. We have social media handle below. You can contact us through them. Also don't forget to subscribe our newsletter for extra more information.</p>
         </Accordion.Body>
       </Accordion.Item>

       <Accordion.Item eventKey="2">
         <Accordion.Header>Don't you think the course fee is a little bit of high?</Accordion.Header>
         <Accordion.Body>
          <p>Pretty much. But think, It's a one time investment for your entire life. If you committed with us to change you then this pretty much fee can uprise you to the high level of the society and your future also. So, neglect it and just focus on the course.</p>
         </Accordion.Body>
       </Accordion.Item>

       <Accordion.Item eventKey="3">
         <Accordion.Header>Is it useful for me?</Accordion.Header>
         <Accordion.Body>
          <p>On my opinion obviously. But rest of the thing is up to you. If you think that I need it then it'll be yours. Grab the opportunity. Be ready to change yourself with some pretty basic but most commonly and powerful courses.</p>
         </Accordion.Body>
       </Accordion.Item>
     </Accordion>
        </div>
    
    );
};

export default FAQ;