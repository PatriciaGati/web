import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyNavbar from "../navbar";

const Layout = (props) => {
  const { children, image } = props;

  return (
    <>
     <MyNavbar />
      <Container fluid>
        <Row>
          <Col>
           
            <Image
              src={image.image.asset.url}
              alt={image.alt}
              title={image.title}
              description={image.description}
              layout="responsive"
              width="500"
              height="300"
              quality="100"
              objectFit="cover"
            />
            
          </Col>
        </Row>
      </Container>
     
      <Container>
        <Row className="justify-content-md-center" >{children}</Row>
      </Container>
    </>
  );
};

export default Layout;
