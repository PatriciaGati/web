import Image from "next/image";
import { ThemeProvider } from "styled-components";
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import GlobalStyle from "../../../styles/globasstyle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyNavbar from "../navbar";
import { defaultTheme } from "../../../themes/theme";

const configuredSanityClient = sanityClient({
	projectId: 'nz3s72ab',
	dataset: 'production',
	useCdn: true
});

const builder = imageUrlBuilder(configuredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const Layout = (props) => {
  const { children, image, imagetext } = props;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MyNavbar />
      <Container fluid>
        <Row style={{ backgroundColor: "black" }}>
          <Col md={{ span: 3, offset: 1 }}>
            <Image
              src={urlFor(image.image).url()}
              alt={image.alt}
              title={image.title}
              description={image.description}
              layout="responsive"
              width="500"
              height="800"
              quality="100"
              objectFit="cover"
              placeholder={() => <div style={{ backgroundColor: "grey" }} />}
              loading="lazy"
            />
          </Col>
          <Col className="text-image" md={{ span: 3, offset: 3 }}>
            <Image
              src={urlFor(imagetext.image).url()}
              alt={imagetext.alt}
              title={imagetext.title}
              description={imagetext.description}
              layout="responsive"
              width="500"
              height="200"
              quality="100"
              objectFit="contain"
              placeholder={() => <div style={{ backgroundColor: "grey" }} />}
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>

      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
