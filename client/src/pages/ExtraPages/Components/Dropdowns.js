import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    } from 'reactstrap'

const Dropdowns = () => {
  //Primary Button Dropdown
  const [primarydropdownOpen, setPrimaryDropdownOpen] = useState(false);

  const Primarytoggle = () => setPrimaryDropdownOpen((prevState) => !prevState);

  //Secondary Button Dropdown
  const [secondarydropdownOpen, setSecondaryDropdownOpen] = useState(false);

  const Secondarytoggle = () => setSecondaryDropdownOpen((prevState) => !prevState);

  //Info Button Dropdown
  const [infodropdownOpen, setInfoDropdownOpen] = useState(false);

  const Infotoggle = () => setInfoDropdownOpen((prevState) => !prevState);

  //Success Button Dropdown
  const [successdropdownOpen, setSuccessDropdownOpen] = useState(false);

  const Successtoggle = () => setSuccessDropdownOpen((prevState) => !prevState);

  //Success Button Dropdown
  const [warningdropdownOpen, setWarningDropdownOpen] = useState(false);

  const Warningtoggle = () => setWarningDropdownOpen((prevState) => !prevState);

  //Success Button Dropdown
  const [dangerdropdownOpen, setDangerDropdownOpen] = useState(false);

  const Dangertoggle = () => setDangerDropdownOpen((prevState) => !prevState);

  //Success Button Dropdown
  const [darkdropdownOpen, setDarkDropdownOpen] = useState(false);

  const Darktoggle = () => setDarkDropdownOpen((prevState) => !prevState);
    return (
        <React.Fragment>
                                    <Card className="mt-4" id="dropdowns">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Dropdowns</h5>  
                                        </div>
                                        <CardBody className="p-4">
                                            <p className="card-title-desc">
                                                Any single <code className="highlighter-rouge">.btn</code> can be turned into a dropdown
                                                toggle with some markup changes. Here’s how you can put them to work
                                                with either <code className="highlighter-rouge">&lt;button&gt;</code>
                                                elements:
                                            </p>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Dropdown                                                   
                                                    isOpen={primarydropdownOpen}
                                                    toggle={Primarytoggle}>
                                                    <DropdownToggle  color="primary" className="btn btn-primary" type="button" id="dropdownMenuprimary">
                                                    Primary
                                                    <span className="arrow-down"></span>
                                                    </DropdownToggle>
                                                    <DropdownMenu >
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else</Link></li>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                <Dropdown
                                                    isOpen={secondarydropdownOpen}
                                                    toggle={Secondarytoggle}>
                                                    <DropdownToggle className="btn btn-secondary" type="button" id="dropdownMenusecondary" >
                                                    Secondary
                                                    <span className="arrow-down"></span>
                                                    </DropdownToggle>
                                                    <DropdownMenu >
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else</Link></li>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                <Dropdown
                                                    isOpen={infodropdownOpen}
                                                    toggle={Infotoggle}>
                                                    <DropdownToggle className="btn btn-info" type="button" id="dropdownMenuinfo" >
                                                    Info
                                                    <span className="arrow-down"></span>
                                                    </DropdownToggle>
                                                    <DropdownMenu >
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else</Link></li>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                <Dropdown
                                                    isOpen={successdropdownOpen}
                                                    toggle={Successtoggle}>
                                                    <DropdownToggle className="btn btn-success" type="button" id="dropdownMenusuccess" >
                                                    Success
                                                    <span className="arrow-down"></span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else</Link></li>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                <Dropdown
                                                    isOpen={warningdropdownOpen}
                                                    toggle={Warningtoggle}>
                                                    <DropdownToggle className="btn btn-warning" type="button" id="dropdownMenuwarning" >
                                                    Warning
                                                    <span className="arrow-down"></span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else</Link></li>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                <Dropdown
                                                    isOpen={dangerdropdownOpen}
                                                    toggle={Dangertoggle}>
                                                    <DropdownToggle className="btn btn-danger" type="button" id="dropdownMenudanger">
                                                    Danger
                                                    <span className="arrow-down"></span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else</Link></li>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                <Dropdown
                                                    isOpen={darkdropdownOpen}
                                                    toggle={Darktoggle}>
                                                    <DropdownToggle className="btn btn-dark" type="button" id="dropdownMenudark" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dark
                                                    <span className="arrow-down"></span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else</Link></li>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </CardBody>
                                    </Card>
        </React.Fragment>
    )
}

export default Dropdowns
