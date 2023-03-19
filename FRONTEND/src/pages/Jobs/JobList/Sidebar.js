import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Collapse, Input, Label } from 'reactstrap';

//Noui slider
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const Sidebar = () => {
    const [toggleFirst, setToggleFirst] = useState(true);
    const [toggleSecond, setToggleSecond] = useState(true);
    const [toggleThird, setToggleThird] = useState(true);
    const [toggleFourth, setToggleFourth] = useState(true);
    const [toggleFifth, setToggleFifth] = useState(true);


    //CheckBox 
    const [isChecked, setIsChecked] = useState(true);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    const [isDateChecked, setIsDateChecked] = useState(true);
    const handleDateOnChange = () => {
        setIsDateChecked(!isDateChecked);
    };  

    return (
        <React.Fragment>
                                <Col lg={3}>
                                    <div className="side-bar mt-5 mt-lg-0">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="locationOne">
                                                <Button className="accordion-button" onClick={(e) => {
                                                        e.preventDefault();
                                                        setToggleFirst(!toggleFirst);
                                                    }}
                                                    role="button"
                                                    id="collapseExample"    
                                                >    
                                                    Location
                                                </Button>
                                                </h2>
                                                <Collapse isOpen={toggleFirst}>
                                                    <div className="accordion-body">
                                                        <div className="side-title">
                                                            <div className="mb-3">
                                                                <form className="position-relative">
                                                                    <Input className="form-control" type="search" placeholder="Search..." />
                                                                    <button className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2" type="submit"><span className="mdi mdi-magnify text-muted"></span></button>
                                                                </form>
                                                            </div>
                                                            <div className="area-range ">
                                                                <div className="form-label mb-4">Area Range: <span className="example-val mt-2" id="slider1-span" ></span></div>
                                                                <Nouislider 
                                                                    range={{ min: 0, max: 15 }}                                                                    
                                                                    start={9}                                                                    
                                                                    connect 
                                                                    color="primary"
                                                                    tooltips={true}                                                                                                                                                                                 
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>

                                            <div className="accordion-item mt-4">   
                                            <h2 className="accordion-header" id="experienceOne">
                                            <Button className="accordion-button" onClick={(e) => {
                                                        e.preventDefault();
                                                        setToggleSecond(!toggleSecond);
                                                    }}
                                                    role="button"
                                                    id="collapseExample"    
                                                >
                                                    Work experience
                                                </Button>
                                            </h2>
                                            <Collapse isOpen={toggleSecond}>
                                                <div className="accordion-body">
                                                    <div className="side-title">
                                                        
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                                                            <label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked1">No experience</label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked={isChecked} onChange={handleOnChange}/>
                                                            <label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked2">0-3 years</label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                                                            <label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked3">3-6 years</label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
                                                            <label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked4">More than 6 years</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>
                                            </div>

                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="jobType">
                                                <Button className="accordion-button" onClick={(e) => {
                                                        e.preventDefault();
                                                        setToggleThird(!toggleThird);
                                                    }}
                                                    role="button"
                                                    id="collapseExample"    
                                                >
                                                        Type of employment
                                                </Button>
                                                </h2>
                                                <Collapse isOpen={toggleThird}>
                                                    <div className="accordion-body">
                                                        <div className="side-title">
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" defaultChecked />
                                                                <label className="form-check-label ms-2 text-muted" htmlFor="flexRadioDefault6">
                                                                    Freelance
                                                                </label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                <label className="form-check-label ms-2 text-muted" htmlFor="flexRadioDefault2">
                                                                    Full Time
                                                                </label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                                <label className="form-check-label ms-2 text-muted" htmlFor="flexRadioDefault3">
                                                                    Internship
                                                                </label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                                <label className="form-check-label ms-2 text-muted" htmlFor="flexRadioDefault4">
                                                                    Part Time
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                    
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="datePosted">
                                                <Button className="accordion-button" onClick={(e) => {
                                                        e.preventDefault();
                                                        setToggleFourth(!toggleFourth);
                                                    }}
                                                    role="button"
                                                    id="collapseExample" 
                                                >
                                                        Date Posted
                                                </Button>
                                                </h2>
                                                <Collapse isOpen={toggleFourth}>
                                                    <div className="accordion-body">
                                                        <div className="side-title form-check-all">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="checkAll" value="" />
                                                                <Label className="form-check-label ms-2 text-muted" htmlFor="checkAll">
                                                                    All
                                                                </Label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="checkbox"  name="datePosted"  value="last" id="flexCheckChecked5" checked={isDateChecked} onChange={handleDateOnChange} />
                                                                <Label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked5">
                                                                    Last Hour
                                                                </Label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked6" />
                                                                <Label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked6">
                                                                    Last 24 hours
                                                                </Label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked7" />
                                                                <Label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked7">
                                                                    Last 7 days
                                                                </Label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked8" />
                                                                <Label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked8">
                                                                    Last 14 days
                                                                </Label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <Input className="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked9" />
                                                                <Label className="form-check-label ms-2 text-muted" htmlFor="flexCheckChecked9">
                                                                    Last 30 days
                                                                </Label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                    
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="tagCloud">
                                                <Button className="accordion-button" onClick={(e) => {
                                                        e.preventDefault();
                                                        setToggleFifth(!toggleFifth);
                                                    }}
                                                    role="button"
                                                    id="collapseExample" 
                                                >
                                                        Tags Cloud
                                                </Button>
                                                </h2>
                                                <Collapse isOpen={toggleFifth}>
                                                    <div className="accordion-body">
                                                        <div className="side-title d-flex flex-wrap align-items-start gap-1">
                                                            <Link to="#" className="badge tag-cloud fs-13 mt-2">design</Link>
                                                            <Link to="#" className="badge tag-cloud fs-13 mt-2">marketing</Link>
                                                            <Link to="#" className="badge tag-cloud fs-13 mt-2">business</Link>
                                                            <Link to="#" className="badge tag-cloud fs-13 mt-2">developer</Link>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>                                    
                                        </div>                                        
                                    </div>
                                </Col>
                                
        </React.Fragment>
    )
}

export default Sidebar
