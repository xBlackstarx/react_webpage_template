import React, { useEffect, useState } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody,
    CardText, ListGroup, ListGroupItem, BreadcrumbItem
  } from 'reactstrap';
  import PageTitle from '../../components/PageTitle';

export const PersonalTodoPage = () => {
    const [data, setData] = useState<Event[]>([]);
    
    // Similar to componentDidMount when [] as second parameter set.
    // Otherwise put the state variables as second paramter to triggeer useEffet.
    useEffect(() => {
        const fetchData = async () => {
            // setData(mockData);
        }
        fetchData();
    }, []);
    
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <PageTitle breadCrumbItems={[
                        {
                            label: 'Personal Todo',
                            path: '/personal-todo',
                            active: true,
                        },
                        ]}
                        title='Personal Todo'
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default PersonalTodoPage;