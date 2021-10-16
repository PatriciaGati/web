import React from "react";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
const MyNavbar = () => {
  const [load, setLoad] = React.useState(true);
  const [galleryLinks, setGalleryLinks] = React.useState();

  React.useEffect(() => {
    getGalleryLinks();
  }, []);
  async function getGalleryLinks() {
    await axios({
      url: "https://nz3s72ab.api.sanity.io/v1/graphql/production/default",
      method: "post",
      data: {
        query: `
        query  {
          allGallery {
            _id
            name
            slug{
              current
            }
          }
        }
        
        `,
      },
    }).then((result) => {
      setGalleryLinks(result.data.data.allGallery);
      setLoad(false);
    });
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{position:"fixed",zIndex:"10",width:"100%"}}>
        <Nav className="me-auto">
          <Nav.Link href="/">
            {" "}
            <Link href="/"> Főoldal</Link>
          </Nav.Link>
          <Nav.Link href="/about">
            {" "}
            <Link href="/about"> Rólam</Link>
          </Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            {!load && !!galleryLinks
              ? galleryLinks.map((link) => {
                  return (
                    <Nav.Link href={`/${link.slug.current}`}>
                      {" "}
                      <Link
                        href={{
                          pathname: `/${link.slug.current}`,
                          query: { id: link._id },
                        }}
                      >
                        {link.name}
                      </Link>
                    </Nav.Link>
                  );
                })
              : null}
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
};
export default MyNavbar;
