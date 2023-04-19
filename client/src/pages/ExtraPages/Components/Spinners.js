import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Spinners = () => {
    return (
        <React.Fragment>
                                    <Card className="mt-4" id="spinner">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Spinners</h5>  
                                        </div>
                                        <CardBody className="p-4">                        
                                            <h6 className="card-title">Border</h6>
                                            <p className="text-muted">Add <code>text-*</code> color for a Spinner color variation.</p>
                                            <div>
                                                <div className="spinner-border text-primary m-1" role="status">                                                                        
                                                </div>
                                                <div className="spinner-border text-secondary m-1" role="status">
                    
                                                </div>
                                                <div className="spinner-border text-success m-1" role="status">
                    
                                                </div>
                                                <div className="spinner-border text-info m-1" role="status">
                    
                                                </div>
                                                <div className="spinner-border text-warning m-1" role="status">
                    
                                                </div>
                                                <div className="spinner-border text-danger m-1" role="status">
                    
                                                </div>
                                                <div className="spinner-border text-dark m-1" role="status">
                                                
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="card-title">Growing</h6>
                                                <p className="text-muted">Switch to the grow spinner.it does repeatedly grow Continue!</p>

                                                <div>
                                                    <div className="spinner-grow text-secondary m-1" role="status">
                                                    
                                                    </div>
                                                    <div className="spinner-grow text-success m-1" role="status">
                                                    
                                                    </div>
                                                    <div className="spinner-grow text-info m-1" role="status">
                                                    
                                                    </div>
                                                    <div className="spinner-grow text-warning m-1" role="status">
                                                    
                                                    </div>
                                                    <div className="spinner-grow text-danger m-1" role="status">
                                                    
                                                    </div>
                                                    <div className="spinner-grow text-dark m-1" role="status">
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
        </React.Fragment>
    )
}

export default Spinners
