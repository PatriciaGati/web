import { GraphQLClient, gql } from "graphql-request";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../src/components/layout";
const Contact = (props) => {
  const { data } = props;
  const { name, image, imagetext } = data.allContact[0];

  return (
    <Layout image={image} imagetext={imagetext}>
      <Row>
        <Col>
          <h1>{name}</h1>
        </Col>
      </Row>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const endpoint =
    "https://nz3s72ab.api.sanity.io/v1/graphql/production/default";

  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    query {
      allContact {
        name
        image {
          image {
            asset {
              url
            }
          }
        }
        imagetext {
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
  const data = await graphQLClient.request(query);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Contact;
