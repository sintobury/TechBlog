import PostCard from "./postCard";
import CategotyList from './categoryList';
import { getPostList } from "@/utils/post";

interface postListProps {
  category?:string;
}

export default async function PostList ({category}:postListProps) {
  const postList = await getPostList(category);
  console.log(postList)
  return (
    <section className="flex flex-col gap-5">
      <CategotyList category={category}/>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {postList.map((post)=> (
          <PostCard key={post.slug} post={post}/>
        ))}
      </ul>
    </section>
  )
}