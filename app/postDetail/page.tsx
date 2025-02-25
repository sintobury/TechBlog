import { MDXRemote } from "next-mdx-remote/rsc";
import Link from 'next/link';
import { getPost, parseId, transferCategoryName } from "../../utils/post";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { MdxComponents } from "@/components/mdxComponents/mdxComponents";
import Image from "next/image";
import { Sidebar } from "@/components/sidebar/sidebar";

type props = {
  searchParams : {category: string, slug:string}
}

export default async function Post({searchParams}:props) {
  const param = await searchParams;
  const post = await getPost(param.category, param.slug);
  const hTagIdList = parseId(post.content);
  return (
    <div className="prose m-5 dark:prose-invert">
      <header className="flex flex-col justify-center items-center p-4 border-b border-gray">
        <Image width={100} height={100} src={post.thumbnail} alt={`${post.title} thumbnail`} 
        style={{width:'100%',  height:'auto'}} priority className="rounded-md my-0"/>
        <h1 className="text-xl">{post.title}</h1>
        <Link href={`/blog/${post.category}`} className="not-prose">
          <span className="text-base">{transferCategoryName(post.category)}</span>
        </Link>
        <span className="text-xs">{post.date.toLocaleDateString('ko-KR')}</span>
      </header>
      <article className="relative">
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
            }}
            components={MdxComponents}
          />
        </div>
        <Sidebar idList={hTagIdList} />
      </article>
    </div>
  )
}