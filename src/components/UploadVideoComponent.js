import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
const uploadVideo = (props) => (
  <Container>
    <Card className="m-auto mt-5" style={{ "max-width": "45rem" }}>
      <Card.Body>
        <Form>
          <Row>
            <Col md={4}>
              <div className="text-center">
                <i class="fa fa-upload fa-3x text-primary m-2" aria-hidden="true"></i>
                <h4>Drag and drop here to upload</h4>
                <p>or</p>
                <label for="uploadVideo">
                  <div class="btn btn-secondary">Choose File</div>
                </label>
                <input type="file" className="form-control" id="uploadVideo" name="video" hidden />
                <hr />
                <div class="small text-start ms-3">
                  <span>Upload Guidlines</span>
                  <ul className="ps-3">
                    <li>Max file 25mb</li>
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
                  <Form.Control type="text" />
                  <Form.Text className="text-muted">Use a suitable caption for your video</Form.Text>
                </Form.Group>
                <div className="text-end">
                  <Button variant="primary" type="submit">
                    Upload
                  </Button>
                </div>
                <div className="mt-2">
                  <small className="text-muted p-3">By posting, I agree to Firework community guidlines & terms</small>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  </Container>
);

export default uploadVideo;
