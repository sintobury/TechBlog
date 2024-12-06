import { MDXRemote } from "next-mdx-remote/rsc";
import Link from 'next/link';
import { getPost, transferCategoryName } from "../../utils/post";

type props = {
  searchParams : {category: string, slug:string}
}

export default async function Post({searchParams}:props) {
  const post = await getPost(searchParams.category,searchParams.slug);
  return (
    <div>
      <div>
        <h2>{post.title}</h2>
        <Link href={`/blog/${post.category}`}>
          <h3>{transferCategoryName(post.category)}</h3>
        </Link>
        <h4>{post.date.toLocaleDateString('ko-KR')}</h4>
      </div>
      <div>
        <MDXRemote source={post.content}/>
      </div>
    </div>
  )
}