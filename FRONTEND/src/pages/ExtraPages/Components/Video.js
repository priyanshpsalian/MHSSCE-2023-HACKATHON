import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Video = () => {
    return (
        <React.Fragment>
                                    <Card className="mt-4" id="video">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Video</h5>  
                                        </div>
                                        <CardBody className="p-4">
                                            <div>
                                                <h6 className="card-title">Responsive Embed Video 16:9</h6>
                                                <p className="text-muted">Aspect ratios can be customized with modifier classes.</p>
                                                <div className="ratio ratio-16x9"> 
                                                    <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>  
                                                </div>
                                            </div> 
                                        </CardBody>
                                    </Card>
        </React.Fragment>
    )
}

export default Video
