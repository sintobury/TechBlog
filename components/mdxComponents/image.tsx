interface imageProps {
    src: string;
    alt: string;
}

export const Image = ({src,alt}: imageProps) => {
    return (
        <>
            <img src={src} alt={alt} className="rounded-md"/>
            {alt !== '' && (
                <span className="text-center text-xs text-gray">
                    {alt}
                </span>
            )}
        </>
    )
}