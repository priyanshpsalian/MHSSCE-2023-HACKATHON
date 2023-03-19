import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea,
    MDBFile
} from 'mdb-react-ui-kit';

import FileBase from 'react-file-base64';


const JobVacancyPost2 = () => {
    //Apply Now Model
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);
    const [details, setDetails] = useState({
        name: "",
        jobTitle: "",
        message: "",
        image: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
    }

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='9' className='my-5'>

                    <h1 class="text-white mb-4">Apply for a job</h1>

                    <MDBCard>
                        <MDBCardBody className='px-4'>

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Full name</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput value={details.name} onChange={(e) => {setDetails({...details, name: e.target.value})}} label='Name' size='lg' id='form1' type='text' />
                                </MDBCol>

                            </MDBRow>

                            <hr className="mx-n3" />

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Enter Job Title</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput value={details.jobTitle} onChange={(e) => {setDetails({...details, jobTitle: e.target.value})}} label='Job Title' size='lg' id='form2' type='text' />
                                </MDBCol>

                            </MDBRow>

                            <hr className="mx-n3" />

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Message</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBTextArea value={details.message} onChange={(e) => {setDetails({...details, message: e.target.value})}} label='Message' id='textAreaExample' rows={3} />
                                </MDBCol>

                            </MDBRow>

                            <hr className="mx-n3" />

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Upload CV</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setDetails({ ...details, image: base64 })} />
                                    <div className="small text-muted mt-2">Upload your Image. Max file size 50 MB</div>
                                </MDBCol>

                            </MDBRow>

                            <hr className="mx-n3" />

                            <MDBBtn className='my-4' size='lg' onClick={handleSubmit}>Upload Blog</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default JobVacancyPost2;
