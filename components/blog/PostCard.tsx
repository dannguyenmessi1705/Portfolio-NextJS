type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};
export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="p-4 rounded-xl shadow">
      <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />

      <div className="bg-primary-900 mt-5 py-1 px-2">
        Posted on {post.frontmatter.date}
      </div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.ezcerpt}</p>
    </div>
  );
}
