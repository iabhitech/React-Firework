import { Card, Container, Row, Col, Dropdown } from "react-bootstrap";

const RenderVideoCard = ({ video }) => (
  <Card style={{ maxWidth: "20rem" }}>
    <div className="d-flex">
      <a href={video.link} target="_blank">
        <Card.Img variant="top" width="100%" src={video.thumbnail} alt="Video Thumbnail" className="m-auto" />
      </a>
    </div>
    <Card.Body>
      <Card.Title className="d-flex justify-content-between align-items-center">
        <h4 className="m-0">{video.name}</h4>
        <Dropdown>
          <Dropdown.Toggle bsPrefix="noicon" variant="light text-black">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href={video.link}>Open</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Title>
    </Card.Body>
  </Card>
);

const allVideos = ({ videos }) => {
  return (
    <Container className="my-5 m-auto" style={{ maxWidth: "45rem" }}>
      <h1>All Videos</h1>
      <hr />
      <Row sm={2} md={3}>
        {videos.map((video) => {
          return (
            <Col className="p-2" key={video.id}>
              <RenderVideoCard video={video} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default allVideos;
