import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

const AccordianContentRight = () => {
    //Collapse Tab    

    const [isCollapseFourth, setIsCollapseFourth] = useState(false);
    const toggleFourth = () => setIsCollapseFourth(!isCollapseFourth);

    const [isCollapseFifth, setIsCollapseFifth] = useState(false);
    const toggleFifth = () => setIsCollapseFifth(!isCollapseFifth);

    const [isCollapseSixth, setIsCollapseSixth] = useState(false);
    const toggleSixth = () => setIsCollapseSixth(!isCollapseSixth);
    return (
        <React.Fragment>
            <div className="accordion-item mt-4 border-0">
                <h2 className="accordion-header" id="generalfour">
                    <button className="accordion-button" onClick={toggleFourth} type="button" >
                        Where To Place A FAQ Page
                    </button>
                </h2>
                <Collapse isOpen={isCollapseFourth} id="general-four">
                    <div className="accordion-body">
                        Just as the name suggests, a FAQ page is all about simple questions and answers. Gather common questions your customers have asked from your support team and include them in the FAQ, Use categories to organize questions related to specific topics.
                    </div>
                </Collapse>
            </div>

            <div className="accordion-item mt-4 border-0">
                <h2 className="accordion-header" id="generalfive">
                    <button className="accordion-button" onClick={toggleFifth} type="button">
                        Why do we use it ?
                    </button>
                </h2>
                <Collapse isOpen={isCollapseFifth} id="general-five">
                    <div className="accordion-body">
                        It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.
                    </div>
                </Collapse>
            </div>

            <div className="accordion-item mt-4 border-0">
                <h2 className="accordion-header" id="generalsix">
                    <button className="accordion-button" onClick={toggleSixth} type="button">
                        Where can I get some ?
                    </button>
                </h2>
                <Collapse isOpen={isCollapseSixth} id="general-six">
                    <div className="accordion-body">
                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                    </div>
                </Collapse>
            </div>
        </React.Fragment>
    );
};

export default AccordianContentRight;
