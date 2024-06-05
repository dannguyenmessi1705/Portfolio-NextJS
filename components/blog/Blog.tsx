import PostCard from "./PostCard";

type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};
export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div className="container mx-auto mt-[30px] grid grid-cols-[1fr] gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
}
