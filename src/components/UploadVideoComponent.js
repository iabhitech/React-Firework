import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const UploadVideo = () => {
  const [videoName, setVedioName] = useState(null);
  const [videoFile, setVedioFile] = useState(null);
  const NameHandler = (value) => {
    if (value.length > 0) {
      setVedioName(value);
      document.getElementById("nameSpan").innerHTML = "";
    }
    if (value.length <= 0) {
      setVedioName(null);
      document.getElementById("nameSpan").innerHTML =
        "***Please Enter a Valid Movie Name/Caption***";
    }
  };
  const fileHandler = (file) => {
    setVedioFile(file);
    document.getElementById("fileSpan").innerHTML="";
  };
  const formSubmitHandler=async(e)=>{
    e.preventDefault();
    console.log("Api Calling");
    let formData = new FormData();
      formData.append('movie',videoFile);
      formData.append('movieName',videoName);
    const response = await axios({
      url:'http://localhost:8080/movieupload',
      data:formData,
      method:"POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin":"*",
      },
    });
    console.log(response)
    if(response.data==="Please Upload 6-60 sec videos..."){
      document.getElementById("fileSpan").innerHTML="Please Upload 6-60 sec video...";
      setVedioName(null)
    }
    else if(response.status===200){
      console.log(`Its working`);
      <Redirect to="/" />
    }
  }
  return (
    <Container>
      <Card
        className="m-auto"
        style={{ maxWidth: "45rem", display: "fixed", top: "200px" }}
      >
        <Card.Body>
          <Form>
            <Row>
              <Col md={4}>
                <div className="text-center border rounded">
                  <i
                    className="fa fa-upload fa-3x text-primary m-2"
                    aria-hidden="true"
                  ></i>
                  <h4>upload Here</h4>
                  <p>or</p>
                  <label htmlFor="uploadVideo">
                    <div className="btn btn-secondary">Choose File</div>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="uploadVideo"
                    name="video"
                    onChange={(e) => fileHandler(e.target.files[0])}
                    accept="video/*"
                    hidden
                  />
                  <p className="text-danger text-center text-sm" id="fileSpan"></p>
                  <hr />
                  <div className="small text-start ms-3">
                    <span>Upload Guidlines</span>
                    <ul className="ps-3">
                      <li>Video length: 06-60sec</li>
                      <li>MP4 format supported</li>
                      <li>Video ratio 9:16</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className="">
                  <h4>Video Details</h4>
                  <hr />
                  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Label>
                      Caption <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => NameHandler(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Use a suitable caption for your video
                    </Form.Text>
                    <p className="text-danger text-center" id="nameSpan"></p>
                  </Form.Group>
                  <div className="text-end">
                    <Button
                      variant="primary"
                      disabled={videoName && videoFile ? false : true}
                      onClick={e=>formSubmitHandler(e)}
                    >
                      Upload
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default React.memo(UploadVideo);
