import { GraphQLClient, gql } from "graphql-request";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../src/components/layout";
const Home = (props) => {
  const { data } = props;

  const { image} = data.allMain[0];
  const { name, imagetext, text } = initialData.allMain[0];
  return (
    <Layout image={image} imagetext={imagetext}>
      <Row>
        <Col>
          <h1 hidden>{name}</h1>
          <p>{text}</p>
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
      allMain {
        name
        header
        text
        button_text
        seo {
          metaKeyWords
          metaDescription
          structured_data {
            title
            alt
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
export default Home;