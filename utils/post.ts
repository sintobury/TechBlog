import fs from 'fs'
import path from 'path'
import { sync } from 'glob'
import matter from 'gray-matter'

type postMatter = {
    title: string;
    date: Date;
    description: string;
    slug: string;
    thumbnail: string;
}

const basepath = '/posts'
const postpath = path.join(process.cwd(),basepath)

export const parsePost = async (postPath:string) => {
    const mdx = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(mdx);
    const category = await parsePostCategory(postPath)
    const frontMatter = data as postMatter
    //data 타입 지정해줘야 함 ->typescript error 유발
    return {content, category, ...frontMatter}
};

const parsePostCategory = async (path:string) => {
    const category = path.slice(path.indexOf(basepath)).split('/')[2];
    return category;
}

const getPostPath = (category?:string) => {
    const boundary = category || '**'
    const paths:string[] = sync(`${postpath}/${boundary}/**/*.mdx`)
    return paths;
} 

export const getPostList = async (category?:string) => {
    const paths = getPostPath(category)
    const posts = await Promise.all(paths.map((postpath)=>parsePost(postpath)))
    const sortedPosts = (posts).sort((a,b) => {
        if(a.date < b.date) {
            return 1; 
        } else {
            return -1;
        }
    })
    return sortedPosts
}

export const getPost = async (category:string,slug:string) => {
    const file = `${postpath}/${category}/${slug}.mdx`
    const post = parsePost(file);
    return post
}

export const getCategoryList = () => {
    const categoryPaths:string[] = sync(`${postpath}/*`)
    const categoryList = categoryPaths.map((path)=>path.split('/').slice(-1)?.[0])
    return categoryList
}

export const getCategoryListData = async () => {
    const categoryList = getCategoryList()
    const categoryListData :{ [key:string]: number } = {}
    for (const category of categoryList) {
        categoryListData[category] = await getPostQuantity(category)
    }
    return categoryListData
} 

export const getPostQuantity = async (category?:string) => {
    const posts = await getPostList(category)
    const quantity = posts.length
    return quantity
}

export const transferCategoryName = (category:string) => {
    const transferedName = category.replace('_',' ')
    return transferedName;
}

export const parseId = (content:string) => {
    const regex = /^(##|###) (.*$)/gim;
    const hTagList = content.match(regex);
    return (
        hTagList?.map((hTag:string) => ({
            id:"#"+
                hTag.replace("# ","")
                    .replace("#","")
                    .replace(/[\[\]:!@#$/%^&*()+=,.]/g,"")
                    .replace(/ /g,"-")
                    .toLowerCase()
                    .replace("?",""),
            text: hTag.replace("##","").replace("#",""),
            tag:hTag.match(/#/g)?.length || 3
        })) || []
    )
}