import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

const AccordianContentLeft = () => {
    const [isCollapseFirst, setIsCollapseFirst] = useState(false);
    const toggleFirst = () => setIsCollapseFirst(!isCollapseFirst);

    const [isCollapseSecond, setIsCollapseSecond] = useState(false);
    const toggleSecond = () => setIsCollapseSecond(!isCollapseSecond);

    const [isCollapseThird, setIsCollapseThird] = useState(false);
    const toggleThird = () => setIsCollapseThird(!isCollapseThird);

    return (
        <React.Fragment>
            <div className="accordion-item mt-4 border-0">
                <h2 className="accordion-header" id="buyingone">
                    <button className="accordion-button" onClick={toggleFirst} type="button">
                        Where does it come from ?
                    </button>
                </h2>
                <Collapse isOpen={isCollapseFirst} id="buying-one">
                    <div className="accordion-body">
                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.
                    </div>
                </Collapse>
            </div>

            <div className="accordion-item mt-4 border-0">
                <h2 className="accordion-header" id="buyingtwo">
                    <button className="accordion-button" onClick={toggleSecond} type="button">
                        How Jobcy Work ?
                    </button>
                </h2>
                <Collapse isOpen={isCollapseSecond} id="buying-two">
                    <div className="accordion-body">
                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                    </div>
                </Collapse>
            </div>

            <div className="accordion-item mt-4 border-0">
                <h2 className="accordion-header" id="buyingthree">
                    <button className="accordion-button" onClick={toggleThird} type="button">
                        What is your shipping policy?
                    </button>
                </h2>
                <Collapse isOpen={isCollapseThird} id="buying-three">
                    <div className="accordion-body">
                        Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                    </div>
                </Collapse>
            </div>
        </React.Fragment>
    );
};

export default AccordianContentLeft;
