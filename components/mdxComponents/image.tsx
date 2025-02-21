import Image, { ImageProps } from "next/image";

export const MdxImage = (props: ImageProps) => {
    const alt = props.alt;
    return (
        <>
            <Image width={100} height={100} style={{ width:'100%', height:'auto' }} className="rounded-md" {...props as ImageProps}/>
            {alt !== '' && (
                <span className="text-center text-xs text-gray">
                    {alt}
                </span>
            )}
        </>
    )
}