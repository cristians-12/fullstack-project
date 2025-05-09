import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <figure className="fixed bottom-5 bg-green-400 w-fit px-4 py-4 rounded-full right-10 cursor-pointer transform transition-transform hover:scale-110">
            <FaWhatsapp fill="white" size={50} />
        </figure>
    )
}