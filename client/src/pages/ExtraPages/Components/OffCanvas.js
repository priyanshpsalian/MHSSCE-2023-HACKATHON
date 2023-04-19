import React, { useState } from "react";

//import styles
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
import
{
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
}
from "reactstrap";

const OffCanvas = () => {
  //OffCanvas  
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  //Dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggledropDown = () => {
       setDropdownOpen(!dropdownOpen);
};

  return (
    <>
      <div className="card mt-4" id="offcanvas">
        <div className="p-4 border-bottom">
          <h5 className="mb-0">Offcanvas</h5>
        </div>
        <div className="card-body p-4">
          <p className="text-muted">
            Use the buttons below to show and hide an offcanvas element via
            JavaScript that toggles the <code>.show</code> class on an element
            with the <code>.offcanvas</code> class.
          </p>

          <div className="d-flex flex-wrap gap-2">
            <Link
              onClick={toggleOffCanvas}
              className="btn btn-primary"
              data-bs-toggle="offcanvas"
              to="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              Link with href
            </Link>
            <Button
              onClick={toggleOffCanvas}
              className="btn btn-primary"
              color="primary"
            >
              Button with data-bs-target
            </Button>
          </div>
          <Offcanvas
            isOpen={isOpen}
            toggle={toggleOffCanvas}
            className="offcanvas-start"            
          >
            <OffcanvasHeader toggle={toggleOffCanvas}>
              <div className="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </div>              
            </OffcanvasHeader>
            <OffcanvasBody>
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <Dropdown 
                className="mt-3"
                isOpen={dropdownOpen}
                toggle={toggledropDown}
                >
                <DropdownToggle
                  color="primary"
                  type="button"
                  role="button"
                >
                  Dropdown button <i className="mdi mdi-chevron-down"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </DropdownMenu>
              </Dropdown>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
