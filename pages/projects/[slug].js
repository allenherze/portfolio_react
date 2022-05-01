import Image from 'next/image';
import Nav from '../../components/Navbar';
import postStyles from '../../styles/Post.module.css';

export default function Post(data) {
  const post = data.post;

  console.log(data.post);

  return (
    <div className='container'>
      <Nav />
      <div className={postStyles.post}>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.content }} className={postStyles.content}></article>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('https://wptest69.000webhostapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
      variables: {
        id: context.params.slug,
        idType: 'SLUG',
      },
    }),
  });

  const json = await res.json();

  return {
    props: {
      post: json.data.post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://wptest69.000webhostapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
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
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
