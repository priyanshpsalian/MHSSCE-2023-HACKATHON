import React,{useState} from 'react';

import { Card,CardBody,Nav,
    NavLink,
    NavItem,
    TabContent,
    TabPane, } from 'reactstrap';
    
import classnames from "classnames";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
     if (activeTab !== tab) setActiveTab(tab);
    };

    const [basicActiveTab, setBasicActiveTab] = useState("1");

    const basicTabChange = (tab) => {
     if (basicActiveTab !== tab) setBasicActiveTab(tab);
    };

    return (
        <React.Fragment>
                           <Card className="mt-4" id="tabs">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Tabs</h5>  
                                        </div>
                                        <CardBody className="p-4">
                                            <div>
                                                <h6 className="card-title">Basic Tabs</h6>
                                                <p className="text-muted">Example of Default Nav Tabs</p>
                                                <Nav className="nav-tabs" role="tablist">
                                                    <NavItem>
                                                    <NavLink to="#"
                                                            className={classnames({ active: activeTab === "1" })}
                                                            onClick={() => {
                                                            tabChange("1");
                                                            }}
                                                            type="button"
                                                            >
                                                            <span>Home</span>    
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                    <NavLink to="#"
                                                            className={classnames({ active: activeTab === "2" })}
                                                            onClick={() => {
                                                            tabChange("2");
                                                            }}
                                                            type="button"
                                                            >
                                                            <span>Profile</span>    
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                    <NavLink to="#"
                                                            className={classnames({ active: activeTab === "3" })}
                                                            onClick={() => {
                                                            tabChange("3");
                                                            }}
                                                            type="button"
                                                            >
                                                            <span>Messages</span>    
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink to="#"
                                                            className={classnames({ active: activeTab === "4" })}
                                                            onClick={() => {
                                                            tabChange("4");
                                                            }}
                                                            type="button"
                                                            >
                                                            <span>Settings</span>    
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>                                                
                                                <TabContent activeTab={activeTab} className="p-3 border border-top-0 rounded-bottom text-muted">
                                                    <TabPane tabId="1">
                                                        <p className="mb-0">
                                                            Raw denim you probably haven't heard of them jean shorts Austin.
                                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh 
                                                            iphone. Seitan aliquip butcher voluptate nisi qui.
                                                        </p>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <p className="mb-0">
                                                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                            single-origin coffee squid. Exercitation +1 labore velit, blog
                                                            sartorial PBR leggings next level wes anderson artisan four loko
                                                            farm-to-table craft beer twee. Qui photo booth letterpress,
                                                            aesthetic magna delectus.
                                                        </p>
                                                    </TabPane>
                                                    <TabPane tabId="3">
                                                        <p className="mb-0">
                                                            Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                            sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                            farm-to-table readymade. Messenger bag gentrify pitchfork
                                                            tattooed craft beer, iphone skateboard locavore carles etsy
                                                            mi whatever gluten yr.
                                                        </p>
                                                    </TabPane>
                                                    <TabPane tabId="4">
                                                        <p className="mb-0">
                                                            Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                            art party before they sold out master cleanse gluten-free squid
                                                            scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                            art party locavore wolf cliche high life echo park Austin. Cred
                                                            vinyl keffiyeh DIY salvia farm-to-table VHS.
                                                        </p>
                                                    </TabPane>
                                                </TabContent>
                                            </div>   

                                            <div className="mt-5">
                                                <h6 className="card-title">Basic Nav Pills</h6>
                                                <p className="text-muted">Example of Default Nav Tabs</p>
                                                <Nav className="nav-pills custom" role="tablist">
                                                    <NavItem className="waves-effect waves-light">
                                                    <NavLink to="#"
                                                            className={classnames({ active: basicActiveTab === "1" })}
                                                            onClick={() => {
                                                            basicTabChange("1");
                                                            }}
                                                            type="button"
                                                            >
                                                            <span>Home</span> 
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem className="waves-effect waves-light">
                                                    <NavLink to="#"
                                                            className={classnames({ active: basicActiveTab === "2" })}
                                                            onClick={() => {
                                                            basicTabChange("2");
                                                            }}
                                                            type="button"
                                                            >
                                                            <span>Profile</span> 
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem className="waves-effect waves-light">
                                                    <NavLink to="#"
                                                            className={classnames({ active: basicActiveTab === "3" })}
                                                            onClick={() => {
                                                            basicTabChange("3");
                                                            }}
                                                            type="button"
                                                            >
                                                            <span>Messages</span> 
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem className="waves-effect waves-light">
                                                    <NavLink to="#"
                                                            className={classnames({ active: basicActiveTab === "4" })}
                                                            onClick={() => {
                                                            basicTabChange("4");
                                                            }}
                                                            type="button"
                                                            >
                                                            <span>Settings</span> 
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent activeTab={basicActiveTab} className="tab-content p-3 text-muted">
                                                    <TabPane tabId="1">
                                                        <p className="mb-0">
                                                            Raw denim you probably haven't heard of them jean shorts Austin.
                                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                            qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                            iphone. Seitan aliquip quis cardigan american apparel
                                                        </p>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <p className="mb-0">
                                                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                            single-origin coffee squid. Exercitation +1 labore velit, blog
                                                            sartorial PBR leggings next level wes anderson artisan four loko
                                                            farm-to-table craft beer twee. Qui photo booth letterpress,
                                                            vinyl cillum PBR. Homo nostrud organic labore
                                                        </p>
                                                    </TabPane>
                                                    <TabPane tabId="3">
                                                        <p className="mb-0">
                                                            Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                            sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                            farm-to-table readymade. Messenger bag gentrify pitchfork
                                                            tattooed craft beer, iphone skateboard locavore carles etsy
                                                            Leggings gentrify squid 8-bit cred pitchfork
                                                        </p>
                                                    </TabPane>
                                                    <TabPane tabId="4">
                                                        <p className="mb-0">
                                                            Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                            art party before they sold out master cleanse gluten-free squid
                                                            scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                            vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                            farm-to-table.
                                                        </p>
                                                    </TabPane>
                                                </TabContent>  
                                                </div>                                    
                                        </CardBody>
                                    </Card>     
        </React.Fragment>
    )
}
export default Tabs;
