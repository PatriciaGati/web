import axios from "axios";
import Layout from "../src/components/layout"
const About = (props) => {
  const { data } = props;
  const { name, image } = data.allAbout[0];

  return (
    <Layout image={image}>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await axios({
    url: "https://nz3s72ab.api.sanity.io/v1/graphql/production/default",
    method: "post",
    data: {
      query: `
        query  {
          allAbout {
            name
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
          }
        }
        `,
    },
  }).then((result) => {
    return result.data;
  });
  return {
    props: data, // will be passed to the page component as props
  };
}
export default About;
