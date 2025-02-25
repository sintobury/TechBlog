import { getCategoryList, getCategoryListData, getPostQuantity, transferCategoryName } from "@/utils/post";
import Link from "next/link"

interface CategoryProps {
    category?:string
}

export default async function CategotyList (category:CategoryProps) {
    const selectedCategory = category.category;
    const categorylist = getCategoryList();
    const categoryData = await getCategoryListData();
    const allPostQuantity = await getPostQuantity();
    return (
        <ul className="flex flex-row items-center gap-4 p-4 rounded-md">
            <Link href={'/blog'}>
                <li className={`px-3 py-4 rounded-md ${selectedCategory === undefined ? 
                    "font-bold bg-secondary text-gray dark:bg-box dark:text-white" :
                    "bg-box text-black dark:bg-white"}`}>
                        {`All (${allPostQuantity})`}
                </li>
            </Link>
            {categorylist.map((category:string)=> (
                <Link href={`/blog/${category}`} key={category}>
                    <li className={`px-3 py-4 rounded-md ${selectedCategory === category ?
                        "font-bold bg-secondary text-gray dark:bg-box dark:text-white" :
                        "bg-box text-black dark:bg-white"}` }>
                            {`${transferCategoryName(category)} (${categoryData[category]})`}
                    </li>
                </Link>
            ))}
        </ul>
    )
}