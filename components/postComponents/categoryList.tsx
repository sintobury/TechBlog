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
        <ul>
            <Link href={'/blog'}>
                <li >{`All (${allPostQuantity})`}</li>
            </Link>
            {categorylist.map((category:string)=> (
                <Link href={`/blog/${category}`} key={category}>
                    <li >{`${transferCategoryName(category)} (${categoryData[category]})`}</li>
                </Link>
            ))}
        </ul>
    )
}