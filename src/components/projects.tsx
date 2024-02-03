import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../assets/styling/projects.css';
import fuji from '../assets/images/project/fuji.jpg';
import { Button, useAccordionButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function CustomToggle ({eventKey}: {eventKey: string}) {
    const showDetails = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
  );
    return (
        <Card.Img variant="top" src={fuji} onClick={showDetails} />
    );
};

export const Projects = ()  => { 
    return (
        <div className="projects" id="projects">
            <h3>My Work</h3>
            <Row className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col xs={12} sm={9} md={4} lg={3} xl={3} xxl={3} key={idx} className='mb-2'>
                        <Accordion defaultActiveKey="0" flush>
                                    <Card style={{width: "100%", borderRadius: "0.2rem"}} className="mx-auto">
                                        <Card.Header>
                                            <CustomToggle eventKey="1" />
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <Card.Text>
                                                    This is a longer card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit
                                                    longer.
                                                </Card.Text>
                                                <div className='project-action'>
                                                    <Button variant="dark">Demo</Button>
                                                    <Button variant="dark">Code</Button>
                                                    <Button variant="dark">More</Button>
                                                </div>
                                                <Card.Footer>
                                                    <small>React, Node, HTML, CSS</small>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                    </Accordion>
                    </Col>
                ))}
            </Row>
       </div>
    );
}