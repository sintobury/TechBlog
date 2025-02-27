import Link from "next/link";
import { BLOG_TITLE } from "../config/const";
import Switch from "@/themes/switch";

export default function Header() {

    return (
        <>
            <header className="flex justify-center p-4 w-full bg-primary">
                <div className="flex justify-between max-w-7xl w-full">
                    <Link href={'/'}>
                        <h1 className="text-gray dark:text-white">{BLOG_TITLE}</h1>
                    </Link>
                    <Switch/>
                </div>
            </header>
        </>
    )
}