import { COPYRIGHT } from "../config/const";


export default function Footer() {
    return (
        <>
            <footer className="flex items-center h-10 p-4 bg-secondary">
                <h4 className="text-gray">{COPYRIGHT}</h4>
            </footer>
        </>
    )
}