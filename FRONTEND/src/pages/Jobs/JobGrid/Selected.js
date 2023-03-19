import React from 'react';
import { Col, Row } from 'reactstrap';
import Select from 'react-select';
// import { colourOptions } from '../data'


const options = [
    { value: 'design', label: 'design' },
    { value: 'marketing', label: 'marketing' },
    { value: 'developer', label: 'developer' }

  ]
  
const Selected = () => {
    return (
        <React.Fragment>
             <Row className="mt-4">
                <Col lg={12} >
                    <h6 className="fs-16 mb-3">Your Selected</h6>
                    <div className="selecte-tag position-relative">
                    <Select                    
                    defaultValue={[options[0], options[1]]}
                    isMulti
                    color="primary"
                    name="colors"
                    options={options}
                    className="selecte-tag position-relative"
                    classNamePrefix="select"
                    />
                    </div>
                </Col>
                <Col lg={12} >
                    <div className="mt-4">
                        <h6 className="fs-16">Showing all results</h6>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Selected;
