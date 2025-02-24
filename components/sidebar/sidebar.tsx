'use client'
import { useObserver } from "@/utils/observer"
import Link from "next/link";

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

    console.log(observedIdList, idList);
    return (
        <aside className="not-prose absolute -top-[200px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block">
            <div className="sticky bottom-0 top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px]">
                <div className="mb-4 border-l px-4 py-2">
                    <span>on this page</span>
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
                        {/* 사이드바 버튼 만들기 */}
                </div>
            </div>
        </aside>
    )
}