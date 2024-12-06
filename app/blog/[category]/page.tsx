import PostList from "@/components/postComponents/postList"

export default async function CategoryPage({params}:{params:Promise<{category:string}>}) {
    const { category } = await params

    return (
        <>
          <PostList category={category}/>
        </>
    )

}