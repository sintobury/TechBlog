import { transferCategoryName } from "@/utils/post";
import Link from "next/link";

type Props = {
    post:post
}

interface post {
    category:string;
    content:string;
    title:string;
    date:Date;
    description:string;
    slug:string;
}

export default function PostCard({post}: Props) {
    return (
        <Link href={`/postDetail?category=${post.category}&slug=${post.slug}`}>
            <li className="flex flex-col border border-gray rounded-md overflow-hidden shadow-xl">
                <div className="p-4">
                    <img />
                </div>
                <div className="bg-box p-4 text-black dark:bg-black dark:text-white">
                    <h3 className="text-xl">{post.title}</h3>
                    <h4 className="text-base">{transferCategoryName(post.category)}</h4>
                    <h5 className="text-xs">{post.date.toLocaleDateString('ko-KR')}</h5>
                </div>
            </li>
        </Link>
    )
}