import { MDXRemote } from "next-mdx-remote/rsc";
import Link from 'next/link';
import { getPost, transferCategoryName } from "../../utils/post";

type props = {
  searchParams : {category: string, slug:string}
}

export default async function Post({searchParams}:props) {
  const post = await getPost(searchParams.category,searchParams.slug);
  return (
    <div className="m-5">
      <div className="flex flex-col justify-center items-center gap-4 p-4 border-b border-gray">
        <h2 className="text-xl">{post.title}</h2>
        <Link href={`/blog/${post.category}`}>
          <h3 className="text-base">{transferCategoryName(post.category)}</h3>
        </Link>
        <h4 className="text-xs">{post.date.toLocaleDateString('ko-KR')}</h4>
      </div>
      <div className="p-4">
        <MDXRemote source={post.content}/>
      </div>
    </div>
  )
}