import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../assets/styling/projects.css';
import fuji from '../assets/images/project/fuji.jpg';
import { Button } from 'react-bootstrap';

export const Projects = ()  => { 
    return (
        <div className="projects" id="projects">
            <Row className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col xs={12} sm={9} md={4} lg={3} xl={3} xxl={3} key={idx} className='mb-2'>
                        <Card style={{width: "100%", borderRadius: "0"}} className="mx-auto">
                            <Card.Img variant="top" src={fuji} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='project-action'>
                                    <Button variant="dark">Demo</Button>
                                    <Button variant="dark">Code</Button>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <small>React, Node, HTML, CSS</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
       </div>
    );
}