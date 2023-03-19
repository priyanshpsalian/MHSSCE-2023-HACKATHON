import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Buttons = () => {
    return (
        <React.Fragment>
                                    <Card className="card mt-4" id="buttons">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Button</h5> 
                                        </div>
                                        <CardBody className="p-4">
                                            <h6 className="card-title">Basic Buttons</h6>
                                            <p className="text-muted">
                                                Bootstrap includes six predefined button styles, each serving its own semantic purpose..
                                            </p>
                                            <div className="d-flex flex-wrap gap-2">
                                                <button type="button" className="btn btn-primary">Primary</button>
                                                <button type="button" className="btn btn-secondary">Secondary</button>
                                                <button type="button" className="btn btn-success">Success</button>
                                                <button type="button" className="btn btn-info">Info</button>
                                                <button type="button" className="btn btn-warning">Warning</button>
                                                <button type="button" className="btn btn-danger">Danger</button>
                                                <button type="button" className="btn btn-purple">Purple</button>
                                                <button type="button" className="btn btn-dark">Dark</button>
                                                <button type="button" className="btn btn-light">Light</button>
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="card-title">Soft Buttons</h6>
                                                <p className="text-muted">
                                                    Use <code>.bg-soft-*</code> class for a badge lighten.
                                                </p>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <button type="button" className="btn btn-soft-primary">Primary</button>
                                                    <button type="button" className="btn btn-soft-secondary">Secondary</button>
                                                    <button type="button" className="btn btn-soft-success">Success</button>
                                                    <button type="button" className="btn btn-soft-info">Info</button>
                                                    <button type="button" className="btn btn-soft-warning">Warning</button>
                                                    <button type="button" className="btn btn-soft-danger">Danger</button>
                                                    <button type="button" className="btn btn-soft-purple">Purple</button>
                                                    <button type="button" className="btn btn-soft-dark">Dark</button>
                                                    <button type="button" className="btn btn-soft-light">Light</button>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="card-title">Outline Buttons</h6>
                                                <p className="text-muted">Replace the default modifier classes with the <code className="highlighter-rouge">           .btn-outline-*</code> ones to remove all background images and colors on any button.</p>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <button type="button" className="btn btn-outline-primary">Primary</button>
                                                    <button type="button" className="btn btn-outline-secondary">Secondary</button>
                                                    <button type="button" className="btn btn-outline-success">Success</button>
                                                    <button type="button" className="btn btn-outline-info">Info</button>
                                                    <button type="button" className="btn btn-outline-warning">Warning</button>
                                                    <button type="button" className="btn btn-outline-danger">Danger</button>
                                                    <button type="button" className="btn btn-outline-purple">Purple</button>
                                                    <button type="button" className="btn btn-outline-dark">Dark</button>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="card-title">Rounded Buttons</h6>
                                                <p className="text-muted">
                                                    Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
                                                </p>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <button type="button" className="btn btn-primary rounded-pill">Primary</button>
                                                    <button type="button" className="btn btn-secondary rounded-pill">Secondary</button>
                                                    <button type="button" className="btn btn-success rounded-pill">Success</button>
                                                    <button type="button" className="btn btn-info rounded-pill">Info</button>
                                                    <button type="button" className="btn btn-warning rounded-pill">Warning</button>
                                                    <button type="button" className="btn btn-danger rounded-pill">Danger</button>
                                                    <button type="button" className="btn btn-purple rounded-pill">Purple</button>
                                                    <button type="button" className="btn btn-dark rounded-pill">Dark</button>
                                                    <button type="button" className="btn btn-light rounded-pill">Light</button>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
        </React.Fragment>
    )
}

export default Buttons
