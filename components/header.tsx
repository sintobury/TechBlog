import Link from "next/link";
import { BLOG_TITLE } from "../config/const";

export default function Header() {

    return (
        <>
            <header >
                <Link href={'/'}>
                    <h1 >{BLOG_TITLE}</h1>
                </Link>
            </header>
        </>
    )
}