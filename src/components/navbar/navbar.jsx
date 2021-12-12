import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";



const MyNavbar = () => {
  const [load, setLoad] = React.useState(true);
  const [galleryLinks, setGalleryLinks] = React.useState();

  React.useEffect(() => {
    getGalleryLinks();
    setLoad(false);
  }, []);
  
    async function getGalleryLinks() {
    const endpoint =
      "https://nz3s72ab.api.sanity.io/v1/graphql/production/default";
    const graphQLClient = new GraphQLClient(endpoint);
    const query = gql`
      query {
        allGallery {
          _id
          name
          slug {
            current
          }
        }
      }
    `;
    const data = await graphQLClient.request(query);
    setGalleryLinks(data.allGallery);
    setLoad(false);
  }
  
  return (
    <>
      <Navbar
        collapseOnSelect
        variant="dark"
        expand="lg"
        style={{ position: "fixed", zIndex: "10", width: "100%" }}
      >
        <Container>
          <Link href="/">
            <Navbar.Brand href="/">Brand link</Navbar.Brand>
          </Link>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto p-4">
              <Link href="/">
                <Nav.Link href="/">Főoldal</Nav.Link>
              </Link>
              <Link href="/rolam">
                <Nav.Link href="/rolam">Rólam</Nav.Link>
              </Link>
              <NavDropdown title="Munkáim" id="navbarScrollingDropdown">
                {!load && !!galleryLinks
                  ? galleryLinks.map((link, i) => {
                      return (
                        <Link key={`nl${i}`} href={`/${link.slug.current}`}>
                          <Nav.Link
                            className="dropdown-link"
                            href={`/${link.slug.current}`}
                            key={`l${i}`}
                          >
                            {link.name}
                          </Nav.Link>
                        </Link>
                      );
                    })
                  : null}
              </NavDropdown>
              <Link href="/arak">
                <Nav.Link href="/arak">Árak</Nav.Link>
              </Link>
              <Link href="/kapcsolat">
                <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;
