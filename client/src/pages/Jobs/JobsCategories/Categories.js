import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

const Categories = () => {
    const categories =[
        {
            id:1,
            jobCategories : [
                {
                    id:1,
                    jobName : 'Readability',
                    jobNumbers: 85
                },
                {
                    id:2,
                    jobName : 'Grammar',
                    jobNumbers: 70
                },
                // {
                //     id:3,
                //     jobName : 'Data Entry Job',
                //     jobNumbers: 71
                // },
                // {
                //     id:4,
                //     jobName : 'Purchasing Manager',
                //     jobNumbers: 40
                // },
                // {
                //     id:5,
                //     jobName : 'Project Manager',
                //     jobNumbers: 86
                // },
                // {
                //     id:6,
                //     jobName : 'Education & training',
                //     jobNumbers: 47
                // },
                // {
                //     id:7,
                //     jobName : 'Marketing & Advertising',
                //     jobNumbers: 47
                // },
                // {
                //     id:8,
                //     jobName : 'Catering & Tourism',
                //     jobNumbers: 47
                // }
            ]
        },
        {
            id:2,
            jobCategories : [
                {
                    id:1,
                    jobName : 'UI',
                    jobNumbers: 90
                },
                {   id:2,
                    jobName : 'Skills',
                    jobNumbers: 73
                },
                // {   id:3,
                //     jobName : 'Teaching Jobs',
                //     jobNumbers: 88
                // },
                // {
                //     id:4,
                //     jobName : 'Retail & Customer Services',
                //     jobNumbers: 10
                // },
                // {
                //     id:5,
                //     jobName : 'Diploma Jobs',
                //     jobNumbers: 55
                // },
                // {
                //     id:6,
                //     jobName : 'Health Care Jobs',
                //     jobNumbers: 99
                // },
                // {
                //     id:7,
                //     jobName : 'Manufacturing & production',
                //     jobNumbers: 27
                // },
                // {
                //     id:8,
                //     jobName : 'Performing arts & media',
                //     jobNumbers: 11
                // }
            ]
        },
        {
            id:3,
            jobCategories : [
                {
                    id:1,
                    jobName : 'Experience',
                    jobNumbers: 75
                },
                {
                    id:2,
                    jobName : 'Projects',
                    jobNumbers: 90
                },
                // {
                //     id:3,
                //     jobName : 'Sports Jobs',
                //     jobNumbers: 42
                // },
                // {
                //     id:4,
                //     jobName : 'Forest Worker',
                //     jobNumbers: 30
                // },
                // {
                //     id:5,
                //     jobName : 'Animal Care Worker',
                //     jobNumbers: 120
                // },
                // {
                //     id:6,
                //     jobName : 'Digital Marketing',
                //     jobNumbers: 88
                // },
                // {
                //     id:7,
                //     jobName : 'Administrative Officer',
                //     jobNumbers: `04`
                // },
                // {
                //     id:8,
                //     jobName : 'Garage services',
                //     jobNumbers: 75
                // }
            ]
        }
    ]
    return (
        <React.Fragment>
                    <section className="section">
                        <Container className=''>
                            <Row className="justify-content-center">
                                <Col lg={6}>
                                    <div className="text-center mb-5">
                                        <p className="badge bg-warning fs-14 mb-2">Jobs Live Today</p>
                                        <h4>Lorem ipsum dolor sit amet.</h4>
                                        <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsa eius illo quibusdam temporibus officiis?.</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='width-90'>
                                {categories.map((categoriesDetails, key) => (
                                <Col lg={4} key={key} >
                                    <Card className="job-Categories-box bg-light border-0">
                                        <CardBody className="p-4">                                        
                                            <ul className="list-unstyled h4 job-Categories-list mb-0" >   
                                            {(categoriesDetails.jobCategories || []).map((jobCategoriesDetails, key) => (                                         
                                                <li key={key} className="p-4" >
                                                    <Link to="/joblist" className="primary-link">{jobCategoriesDetails.jobName} <span className="badge bg-soft-info float-end" style={{fontSize : 20}}>{jobCategoriesDetails.jobNumbers}</span></Link>
                                                </li>
                                            ))}
                                            </ul>                                            
                                        </CardBody>
                                    </Card>
                                </Col>  
                                ))}                             
                            </Row>
                        </Container>
                    </section>
        </React.Fragment>
    )
}

export default Categories
