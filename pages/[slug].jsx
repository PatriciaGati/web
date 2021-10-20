import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Layout from "../src/components/layout";
import blur from "../src/image/blur.jpg";
import pati from "../src/image/pati.jpg";
import imageText from "../src/image/kezdolap.png";
import image1 from "../src/image/csaladi/IMG_5284.JPG";
import image2 from "../src/image/csaladi/IMG_5284.JPG";
import image3 from "../src/image/csaladi/IMG_5284.JPG";
import image4 from "../src/image/csaladi/IMG_5284.JPG";
import image5 from "../src/image/csaladi/IMG_5284.JPG";
import image6 from "../src/image/csaladi/IMG_5284.JPG";
import image7 from "../src/image/csaladi/IMG_5284.JPG";
import image8 from "../src/image/csaladi/IMG_5284.JPG";
import image9 from "../src/image/csaladi/IMG_5284.JPG";
const initialData = {
  data: {
    allGallery: [
      {
        name: "Családi",
        slug: { current: "csaladi" },
        seo: {
          metaKeyWords: "csaladi",
          metaDescription: "csaladi",
          structured_data: { title: "csaladi", alt: "csaladi" },
        },
        images: [
          {
            title: "1",
            alt: "1",
            description: "1",
            image: {
              asset: {
                url: image1,
              },
            },
          },
          {
            title: "2",
            alt: "2",
            description: "2",
            image: {
              asset: {
                url: image2,
              },
            },
          },
          {
            title: "3",
            alt: "3",
            description: "3",
            image: {
              asset: {
                url: image3,
              },
            },
          },
          {
            title: "4",
            alt: "4",
            description: "4",
            image: {
              asset: {
                url: image4,
              },
            },
          },
          {
            title: "5",
            alt: "5",
            description: "5",
            image: {
              asset: {
                url: image5,
              },
            },
          },
          {
            title: "6",
            alt: "6",
            description: "6",
            image: {
              asset: {
                url: image6,
              },
            },
          },
          {
            title: "7",
            alt: "7",
            description: "7",
            image: {
              asset: {
                url: image7,
              },
            },
          },
          {
            title: "8",
            alt: "8",
            description: "8",
            image: {
              asset: {
                url: image8,
              },
            },
          },
          {
            title: "9",
            alt: "9",
            description: "9",
            image: {
              asset: {
                url: image9,
              },
            },
          },
        ],
        image: {
          title: "családi",
          alt: "családi",
          description: "családi",
          image: {
            asset: {
              url: pati,
            },
          },
        },
        imagetext: {
          title: "image",
          alt: "image",
          description: "image",
          image: {
            asset: {
              url: imageText,
            },
          },
        },
      },
      {
        name: "Esküvői",
        slug: { current: "eskuvoi" },
        seo: {
          metaKeyWords: "eskuvoi",
          metaDescription: "eskuvoi",
          structured_data: { title: "eskuvoi", alt: "eskuvoi" },
        },
        images: [
          {
            title: "1",
            alt: "1",
            description: "1",
            image: {
              asset: {
                url: image1,
              },
            },
          },
          {
            title: "2",
            alt: "2",
            description: "2",
            image: {
              asset: {
                url: image2,
              },
            },
          },
          {
            title: "3",
            alt: "3",
            description: "3",
            image: {
              asset: {
                url: image3,
              },
            },
          },
          {
            title: "4",
            alt: "4",
            description: "4",
            image: {
              asset: {
                url: image4,
              },
            },
          },
          {
            title: "5",
            alt: "5",
            description: "5",
            image: {
              asset: {
                url: image5,
              },
            },
          },
          {
            title: "6",
            alt: "6",
            description: "6",
            image: {
              asset: {
                url: image6,
              },
            },
          },
          {
            title: "7",
            alt: "7",
            description: "7",
            image: {
              asset: {
                url: image7,
              },
            },
          },
          {
            title: "8",
            alt: "8",
            description: "8",
            image: {
              asset: {
                url: image8,
              },
            },
          },
          {
            title: "9",
            alt: "9",
            description: "9",
            image: {
              asset: {
                url: image9,
              },
            },
          },
        ],
        image: {
          title: "eskuvoi",
          alt: "eskuvoi",
          description: "eskuvoi",
          image: {
            asset: {
              url: pati,
            },
          },
        },
        imagetext: {
          title: "image",
          alt: "image",
          description: "image",
          image: {
            asset: {
              url: imageText,
            },
          },
        },
      },
    ],
    slug: "csaladi",
  },
};
const Gallery = (props) => {
  const [show, setShow] = React.useState(false);
  const [id, setId] = React.useState(0);
  //const { data } = props;
  const { data } = initialData;
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
                placeholder="blur"
                blurDataURL={blur}
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
