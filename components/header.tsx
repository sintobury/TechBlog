import Link from "next/link";
import { BLOG_TITLE } from "../config/const";

export default function Header() {

    return (
        <>
            <header className="flex justify-between p-4 max-w-7xl w-full bg-primary">
                <Link href={'/'}>
                    <h1 className="text-gray">{BLOG_TITLE}</h1>
                </Link>
            </header>
        </>
    )
}