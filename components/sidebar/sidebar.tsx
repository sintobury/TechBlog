'use client'
import { useObserver } from "@/utils/observer"
import Link from "next/link";
import { ScrollTopButton } from "./scrollTopButton";

interface Props {
    idList: HtagIdList[]
}

interface HtagIdList {
    id:string;
    text:string;
    tag:number;
}

export const Sidebar = ({idList} :Props) => {
    const observedIdList = useObserver('h2, h3');
    return (
        <aside className="not-prose absolute -top-[320px] left-full h-[calc(100%+160px)] hidden xl:block">
            <div className="sticky z-10 top-[200px] ml-[5rem] w-[200px]">
                <div className="mb-4 border-l-gray border-l px-4 py-2">
                    <span className="text-sm">Summary</span>
                    <ul className="text-xs">
                        {idList.map((element) => {
                            const isH3 = element.tag === 3;
                            const isIntersecting = observedIdList.includes(element.id);
                            return (
                                <li key={element.id} 
                                    className={
                                        `${isH3 && "ml-3"} 
                                        mt-0 my-0 py-1`}>
                                    <Link href={element.id} 
                                        className={
                                            `no-underline 
                                            ${isIntersecting && "font-bold text-primary"} `}>
                                        {element.text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <ScrollTopButton />
                </div>
            </div>
        </aside>
    )
}