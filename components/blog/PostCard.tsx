import Image from "next/image";

type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};
export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="rounded-xl p-4 shadow">
      <div className="relative w-full h-4/6">
        <Image
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          priority
          fill
          className="cursor-pointer object-cover"
        />
      </div>

      <div className="mt-5 bg-primary-900 px-2 py-1">
        Posted on {post.frontmatter.date}
      </div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.ezcerpt}</p>
    </div>
  );
}
