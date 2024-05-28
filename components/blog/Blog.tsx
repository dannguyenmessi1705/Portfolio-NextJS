import PostCard from "./PostCard";

type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};
export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[30px]">
      {posts.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
}
