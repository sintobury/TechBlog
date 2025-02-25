
export const ScrollTopButton = () => {
    const scrollTop = () => {
        window.scrollTo({ top:0 });
    }
    const ScrollTopIcon = () => (
        <svg fill="none" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-black dark:fill-white" d="M10.5303 1.71967C10.2374 1.42678 9.76256 1.42678 9.46967 1.71967L5.46967 5.71967C5.17678 6.01256 5.17678 6.48744 5.46967 6.78033C5.76256 7.07322 6.23744 7.07322 6.53033 6.78033L9.25 4.06066V14.25C9.25 14.6642 9.58579 15 10 15C10.4142 15 10.75 14.6642 10.75 14.25V4.06066L13.4697 6.78033C13.7626 7.07322 14.2374 7.07322 14.5303 6.78033C14.8232 6.48744 14.8232 6.01256 14.5303 5.71967L10.5303 1.71967ZM4.5 16.5C4.08579 16.5 3.75 16.8358 3.75 17.25C3.75 17.6642 4.08579 18 4.5 18H15.5C15.9142 18 16.25 17.6642 16.25 17.25C16.25 16.8358 15.9142 16.5 15.5 16.5H4.5Z"/>
        </svg>
    )

    return (
        <button onClick={scrollTop} className="border border-gray hover:cursor-pointer rounded-md p-2">
            <ScrollTopIcon />
        </button>
    )
}