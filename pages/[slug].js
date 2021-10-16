import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../src/components/layout";
const Home = (props) => {
  console.log(props);
  const { data } = props;
  const { name, image, images } = data.Gallery;
  return (
    <Layout image={image}>
      <Container>
        <Row>
          {images.map((image) => {
            return (
              <Col md={3} className="p-2">
                <Image
                  src={image.image.asset.url}
                  alt={image.alt}
                  title={image.title}
                  description={image.description}
                  layout="responsive"
                  width="500"
                  height="500"
                  quality="100"
                  objectFit="cover"
                />
              </Col>
            );
          })}
          <h1 style={{ display: "none" }}>{name}</h1>
        </Row>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const {id} = context.query
  const endpoint =
    "https://nz3s72ab.api.sanity.io/v1/graphql/production/default";
    const variables = {
      id: id,
    }
  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    query getGallery($id: ID!){
          Gallery(id:$id) {
            name
            seo {
              metaKeyWords
              metaDescription
              structured_data {
                title
                alt
              }
            }
            images {
              title
              alt
              description
              image {
                asset {
                  url
                }
              }
              
            }
            
            image {
              title
              alt
              description
              image {
                asset {
                  url
                }
              }
            }
          }
        
    }
  `;
  const data = await graphQLClient.request(query,variables);
  console.log(data)
  return {
    props: {data}, // will be passed to the page component as props
  };
}
export default Home;
