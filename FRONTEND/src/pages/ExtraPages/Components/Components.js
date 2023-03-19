import React from 'react'
import Tabs from './Tabs';
import { Col, Container, Row } from 'reactstrap'
import Alerts from './Alerts'
import Badges from './Badges'
import Buttons from './Buttons'
import Cards from './Cards'
import Dropdowns from './Dropdowns'
import Images from './Images'
import LeftSideContent from './LeftSideContent'
import Section from './Section'
import Typography from './Typography'
import OffCanvas from './OffCanvas';
import Modals from './Modals';
import Pagination from './Pagination';
import Progress from './Progress';
import TooltipDemo from './TooltipDemo';
import Spinners from './Spinners';
import Grid from './Grid';
import Video from './Video';
import MetaTags from "react-meta-tags";


const Components = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Components | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container>
            <Row>            
            <LeftSideContent/>            
            <Col lg={8}>
            <Typography/>
            <Buttons/>
            <Badges/>
            <Dropdowns/>
            <Alerts/>
            <Images/>
            <Cards/>
            <Tabs/>
            <OffCanvas/>
            <Modals/>
            <Pagination/>
            <Progress/> 
            <TooltipDemo/>
            <Spinners/> 
            <Grid/>
            <Video/>
            </Col>                            
            </Row>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default Components
