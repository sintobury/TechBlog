import { MDXRemote } from "next-mdx-remote/rsc";
import Link from 'next/link';
import { getPost, transferCategoryName } from "../../utils/post";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

type props = {
  searchParams : {category: string, slug:string}
}

export default async function Post({searchParams}:props) {
  const post = await getPost(searchParams.category,searchParams.slug);
  return (
    <div className="prose m-5">
      <header className="flex flex-col justify-center items-center gap-4 p-4 border-b border-gray">
        <h2 className="text-xl">{post.title}</h2>
        <Link href={`/blog/${post.category}`}>
          <h3 className="text-base">{transferCategoryName(post.category)}</h3>
        </Link>
        <h4 className="text-xs">{post.date.toLocaleDateString('ko-KR')}</h4>
      </header>
      <div className="p-4">
        <MDXRemote 
          source={post.content} 
          options={{
            mdxOptions: {
              remarkPlugins: [
                // mdx 1줄 개행 지원
                remarkBreaks, 
                // github flavored markdown 지원
                remarkGfm],
              rehypePlugins: [
                //code block design
                [rehypePrettyCode],
                // h 태그에 id부여
                rehypeSlug]
            }
          }}/>
        {/* todo: mdx plugin install & design */}
      </div>
    </div>
  )
}