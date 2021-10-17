import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Layout from "../src/components/layout";

const Gallery = (props) => {
  const [show, setShow] = React.useState(false);
  const [id, setId] = React.useState(0);
  const { data } = props;
  const gallery = data.allGallery.filter(
    (gallery) => gallery.slug.current === data.slug
  );
  const { name, image, images, imagetext } = gallery[0];
  const images3 = images.map((image) => {
    return {
      thumbnail: image.image.asset.url,
      original: image.image.asset.url,
    };
  });
  function handleClick(i) {
    setShow(true);
    setId(i);
  }
  return (
    <Layout image={image} imagetext={imagetext}>
      <Row>
        {images.map((image, i) => {
          return (
            <Col key={`col${i}`} md={3} className="p-2">
              <Image
                key={`img${i}`}
                src={image.image.asset.url}
                alt={image.alt}
                title={image.title}
                description={image.description}
                layout="responsive"
                width="500"
                height="500"
                quality="100"
                objectFit="cover"
                placeholder="skeleton"
                loading="lazy"
                onClick={() => handleClick(i)}
              />
              <h1>{name}</h1>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ImageGallery
                showThumbnails={false}
                lazyLoad={true}
                items={images3}
                startIndex={id}
              />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const endpoint =
    "https://nz3s72ab.api.sanity.io/v1/graphql/production/default";

  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    query {
      allGallery {
        name
        slug {
          current
        }
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

  data.slug = slug;
  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Gallery;
