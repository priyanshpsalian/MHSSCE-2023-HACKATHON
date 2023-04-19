import React from 'react'
import { Card, Col, Nav, NavItem ,NavLink} from 'reactstrap'

const LeftSideContent = () => {
    return (
        <React.Fragment>
                                <Col lg={4}>
                                    <Card className="d-none d-lg-block ui-elements-bar">
                                        <Nav className="nav-pills flex-column" id="elementsBar">
                                            <NavItem>
                                                <NavLink href="#typography" >Typography</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#buttons" >Buttons</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#badges">Badges</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#dropdowns">Dropdowns</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#alerts">Alerts</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#images">Images</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#cards">Cards</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#tabs">Tabs</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#offcanvas">Offcanvas</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#modals">Modals</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#pagination">Pagination</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#progress">Progress</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#tooltip">Tooltips</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#spinner">Spinners</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#grid">Grid</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#video">Video</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Card>
                                </Col>
        </React.Fragment>
    )
}

export default LeftSideContent
