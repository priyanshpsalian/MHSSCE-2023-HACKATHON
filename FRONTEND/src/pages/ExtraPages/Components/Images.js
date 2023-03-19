import React from 'react';
import { Card, CardBody } from 'reactstrap';

// import images 
import userImage2 from '../../../assets/images/user/img-02.jpg'

const Images = () => {
    return (
        <React.Fragment>
            <Card className="mt-4" id="images">
                <div className="p-4 border-bottom">
                    <h5 className="mb-0">Images </h5> 
                </div>
                <CardBody className="p-4">
                    <h6 className="card-title">Image Sizes</h6>
                    <p className="text-muted">Use classes <code>.avatar-*</code>.</p>
                    <div>
                        <img src={userImage2} alt="" className="avatar-xs" />
                        <img src={userImage2} alt="" className="avatar-sm" />
                        <img src={userImage2} alt="" className="avatar-md" />
                        <img src={userImage2} alt="" className="avatar-lg" />
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default Images
