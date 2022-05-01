import Card from '../components/Card';
import Nav from '../components/Navbar';
import Project from '../styles/Project.module.css';

export async function getStaticProps() {
  const res = await fetch('https://wptest69.000webhostapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query HomePageQuery {
        posts {
          nodes {
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      `,
    }),
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
    },
  };
}

export default function Projects({ posts }) {
  return (
    <div className='container'>
      <Nav />
      <h1 className={Project.header}>Projects</h1>
      <Card posts={posts} />
    </div>
  );
}
