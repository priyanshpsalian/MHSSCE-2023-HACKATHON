import React,{useState} from 'react'
import { Card,CardBody,
    Modal,
    ModalBody,
    ModalFooter, } from 'reactstrap'

const Modals = () => {
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);

    function tog_modal() {
        setModal(!modal);        
      }

    return (
        <React.Fragment>
                            <Card className="mt-4" id="modals">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Modals</h5>
                                        </div>
                                        <CardBody className="p-4">                        
                                            <h6 className="card-title">Basic</h6>
                                            <p className="text-muted">Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>

                                            <button onClick={openModal}
                                              type="button" className="btn btn-primary waves-effect waves-light">Standard modal</button>
                                            
                                            <div id="myModal" className="modal fade" tabIndex="-1" aria-labelledby="myModalLabel"  aria-hidden="true">
                                                <Modal isOpen={modal} toggle={openModal} role="dialog" centered>
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title mt-0" id="myModalLabel">Modal Heading</h5>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                onClick={openModal}                        
                                                            ></button>
                                                        </div>
                                                        <ModalBody>
                                                            <p>Cras mattis consectetur purus sit amet fermentum.
                                                                Cras justo odio, dapibus ac facilisis in,
                                                                egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>                                    
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <button 
                                                            type="button" 
                                                            onClick={() => {
                                                                tog_modal();
                                                              }}
                                                            className="btn btn-secondary waves-effect" 
                                                            data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary waves-effect waves-light">Save changes</button>
                                                        </ModalFooter>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </CardBody>
                                    </Card>
        </React.Fragment>
    )
}

export default Modals
