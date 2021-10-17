import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyNavbar from "../navbar";

const Layout = (props) => {
  const { children, image, imagetext } = props;

  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Row style={{ backgroundColor: "black" }}>
          <Col md={6}>
            <Image
              src={image.image.asset.url}
              alt={image.alt}
              title={image.title}
              description={image.description}
              layout="responsive"
              width="500"
              height="800"
              quality="100"
              objectFit="cover"
              placeholder="skeleton"
              loading="lazy"
            />
          </Col>
          <Col md={6} className="text-image">
            <Image
              src={imagetext.image.asset.url}
              alt={imagetext.alt}
              title={imagetext.title}
              description={imagetext.description}
              layout="responsive"
              width="500"
              height="300"
              quality="100"
              objectFit="contain"
              placeholder="skeleton"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>

      <Container>{children}</Container>
    </>
  );
};

export default Layout;
