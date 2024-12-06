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
            <li >
                <div >
                    <img ></img>
                </div>
                <div >
                    <h3 >{post.title}</h3>
                    <h4 >{transferCategoryName(post.category)}</h4>
                    <h5 >{post.date.toLocaleDateString('ko-KR')}</h5>
                </div>
            </li>
        </Link>
    )
}