import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import axios from "axios";
import { useForm } from "react-hook-form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import Layout from "../src/components/layout";
import pati from "../src/image/pati.jpg";
import imageText from "../src/image/kezdolap.png";

const Contact = (props) => {
  const { data } = props;
  console.log(data.allContact[0]);
  const { name, image, imagetext, text } = data.allContact[0];
  const [messageData, setMessageData] = React.useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Sending");
    axios("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setMessageData({});
        }
      })
      .catch((err) => console.log(err));
  };
 
  return (
    <Layout image={image} imagetext={imagetext}>
      <Row>
        <Col>
          <h1>{name}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formLastname">
                  <Form.Label>Vezetéknév</Form.Label>
                  <Form.Control
                    name="lastname"
                    {...register("lastname", { required: true })}
                    type="text"
                    placeholder="Vezetéknév"
                  />
                  {errors.lastname && (
                    <span className="danger">This field is required</span>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formFirstname">
                  <Form.Label>Keresztnév</Form.Label>
                  <Form.Control
                    name="firstname"
                    {...register("firstname", { required: true })}
                    type="text"
                    placeholder="Keresztnév"
                  />
                  {errors.lastname && (
                    <span className="danger">This field is required</span>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
              />
              {errors.lastname && (
                <span className="danger">This field is required</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Tárgy</Form.Label>
              <Form.Control
                name="subject"
                {...register("subject", { required: true })}
                type="text"
                placeholder="Tárgy"
              />
              {errors.lastname && (
                <span className="danger">This field is required</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Üzenet</Form.Label>
              <Form.Control
                name="message"
                {...register("message", { required: true })}
                as="textarea"
                rows={3}
                placeholder="Üzenet"
              />
              {errors.lastname && (
                <span className="danger">This field is required</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Stack direction="horizontal" gap={3}>
              <Button variant="primary" type="submit" className="mx-auto">
                Submit
              </Button>
            </Stack>
          </Form>
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
