import { useEffect, useRef, useState } from "react"

export const useObserver = (query:string) => {
    const observer = useRef<IntersectionObserver>(null);
    const [targetIdList, setTargetIdList] = useState<string[]>([]);
    const [recentTargetId, setRecentTargetId] = useState<string>("");
    
    useEffect(() => {
        const handleObserver:IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                const targetId = `#${entry.target.id}`;
                if(entry.isIntersecting) {
                    setTargetIdList((prev) => [...prev, targetId])
                    setRecentTargetId(targetId)
                } else {
                    setTargetIdList((prev) => {
                        return prev.filter((element)=> element !== targetId)
                    })
                }
            })
        }

        const options = {rootMargin : "-32px 0px -80px 0px"};

        observer.current = new IntersectionObserver(handleObserver, options)

        const elements = document.querySelectorAll(query)
        elements.forEach((element) => observer.current?.observe(element));

        return () => observer.current?.disconnect();
    },[query])

    return [...targetIdList, recentTargetId];
}