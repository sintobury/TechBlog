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
    <section >
      <CategotyList category={category}/>
      <ul >
        {postList.map((post)=> (
          <PostCard key={post.slug} post={post}/>
        ))}
      </ul>
    </section>
  )
}