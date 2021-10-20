import { GraphQLClient, gql } from "graphql-request";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../src/components/layout";
import pati from "../src/image/pati.jpg";
import imageText from "../src/image/kezdolap.png";
const initialData = {
  allPrice: [
    {
      name: "Árak",
      header: "Árak",
      seo: {
        metaKeyWords: "Árak",
        metaDescription: "Árak",
        structured_data: { title: "Árak", alt: "Árak" },
      },
      image: {
        title: "Árak",
        alt: "Árak",
        description: "Árak",
        image: {
          asset: {
            url: pati,
          },
        },
      },
      imagetext: {
        title: "Árak",
        alt: "Árak",
        description: "Árak",
        image: {
          asset: {
            url: imageText,
          },
        },
      },
    },
  ],
};
const Prices = (props) => {
  //const { data } = props;

  //const { name, image, imagetext, text } = data.allMain[0];
  const { name, image, imagetext, text } = initialData.allPrice[0];

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

{
  /*export async function getServerSideProps() {
  const endpoint =
    "https://nz3s72ab.api.sanity.io/v1/graphql/production/default";

  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    query {
      allPrice {
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
}*/
}

export default Prices;
