import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Layout from "../src/components/layout";
import blur from "../src/image/blur.jpg";

const configuredSanityClient = sanityClient({
	projectId: 'nz3s72ab',
	dataset: 'production',
	useCdn: true
});

const builder = imageUrlBuilder(configuredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const Gallery = (props) => {
  const [show, setShow] = React.useState(false);
  const [id, setId] = React.useState(0);
  const { data } = props;
  const gallery = data.allGallery.filter(
    (gallery) => gallery.slug.current === data.slug
  );
  console.log(gallery);
  const { name, image, images, imagetext } = gallery[0];
  const imagesArray = images.map((image) => {
    return {
      thumbnail: urlFor(image.image).width(200).url(),
      original: urlFor(image.image).url(),
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
            <Col key={`col${i}`} xs={6} md={4} lg={3} className="p-2">
              <Image
                key={`img${i}`}
                src={urlFor(image.image).url()}
                alt={image.alt}
                title={image.title}
                description={image.description}
                layout="responsive"
                width="500"
                height="500"
                quality="100"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blur}
                loading="lazy"
                onClick={() => handleClick(i)}
              />
              <h1 hidden>{name}</h1>
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
                items={imagesArray}
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
