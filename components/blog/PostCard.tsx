type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};
export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="rounded-xl p-4 shadow">
      <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />

      <div className="mt-5 bg-primary-900 px-2 py-1">
        Posted on {post.frontmatter.date}
      </div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.ezcerpt}</p>
    </div>
  );
}
