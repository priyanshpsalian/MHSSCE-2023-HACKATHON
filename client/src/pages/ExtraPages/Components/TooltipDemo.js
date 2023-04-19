import React, { useState } from 'react'
import { Card, CardBody ,Tooltip} from 'reactstrap'

const TooltipDemo = () => {

    const [ttop, setttop] = useState(false);
    const [tbottom, settbottom] = useState(false);
    const [tleft, settleft] = useState(false);
    const [tright, settright] = useState(false);
    return (
        <React.Fragment>
                                    <Card className="mt-4" id="tooltip">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Tooltips</h5>  
                                        </div>
                                        <CardBody className="p-4">
                        
                                            <h6 className="card-title">Tooltips</h6>
                                            <p className="text-muted">Hover over the links below to see tooltips.</p>

                                            <div className="d-flex flex-wrap gap-2">
                                            <Tooltip
                                                    placement="top"
                                                    isOpen={ttop}
                                                    target="TooltipTop"
                                                    toggle={() => {
                                                        setttop(!ttop);
                                                    }}
                                                    >
                                                    Tooltip on Top
                                                    </Tooltip>
                                                    <Tooltip
                                                    placement="right"
                                                    isOpen={tright}
                                                    target="TooltipRight"
                                                    toggle={() => {
                                                        settright(!tright);
                                                    }}
                                                    >
                                                    Tooltip on Right
                                                    </Tooltip>
                                                    <Tooltip
                                                    placement="bottom"
                                                    isOpen={tbottom}
                                                    target="TooltipBottom"
                                                    toggle={() => {
                                                        settbottom(!tbottom);
                                                    }}
                                                    >
                                                    Tooltip on Bottom
                                                    </Tooltip>
                                                    <Tooltip
                                                    placement="left"
                                                    isOpen={tleft}
                                                    target="TooltipLeft"
                                                    toggle={() => {
                                                        settleft(!tleft);
                                                    }}
                                                    >
                                                    Tooltip on Left
                                                    </Tooltip>

                                                <button type="button" className="btn btn-primary" id="TooltipTop">
                                                    Tooltip on top
                                                </button>

                                                <button type="button" className="btn btn-primary" id="TooltipRight">
                                                    Tooltip on right
                                                </button>

                                                <button type="button" className="btn btn-primary" id="TooltipBottom">
                                                    Tooltip on bottom
                                                </button>

                                                <button type="button" className="btn btn-primary" id="TooltipLeft">
                                                    Tooltip on left
                                                </button>
                                            </div>
                                        </CardBody>
                                    </Card>
        </React.Fragment>
    )
}

export default TooltipDemo;
