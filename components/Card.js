import Image from 'next/image';
import Link from 'next/link';
import CardStyles from '../styles/Card.module.css';

export default function Card({ posts }) {
  return (
    <div className={CardStyles.section}>
      {posts.nodes.map((post) => {
        return (
          <Link href={`/projects/${post.slug}`}>
            <div className={CardStyles.card} key={post.slug}>
              <Image src={post.featuredImage.node.sourceUrl} className={CardStyles.image} width='200%' height='200%' objectFit='contain' />
              <h2>{post.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
