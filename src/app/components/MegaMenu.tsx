    "use client";

    import { useRef } from "react";
    import Link from "next/link";

    interface MegaMenuProps {
    title: string;
    openMenu: string | null;
    setOpenMenu: (menu: string | null) => void;
    }

    const MegaMenu: React.FC<MegaMenuProps> = ({ title, openMenu, setOpenMenu }) => {
    const isOpen = openMenu === title;
    const menuRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative">
        {/* Botón para desplegar el menú */}
        <button
            onClick={() => setOpenMenu(isOpen ? null : title)}
            className="flex items-center space-x-1 text-white"
        >
            {title}
            <svg width="12" height="6" viewBox="0 0 11 6" fill="none">
            <path stroke="currentColor" d="M10 1 5.374 5 1 1" />
            </svg>
        </button>

        {/* Contenido del Mega Menú - SHOP */}
        {isOpen && title === "SHOP" && (
            <div ref={menuRef} className="fixed left-1/2 top-[70px] w-full transform -translate-x-1/2 flex justify-between bg-black z-50 overflow-hidden px-6 py-4 transition-all duration-300 ease-in shadow-lg">
            <div className="flex flex-row justify-between items-center gap-8">
                <div className="flex flex-col justify-start gap-5 max-w-[300px] w-full">
                <p className="text-lg font-semibold">
                    Unparalleled skin regeneration at your fingertips
                </p>
                <Link href="#" className="btn-base w-fit text-blue-500 hover:underline">
                    SHOP ALL
                </Link>
                </div>
                <div className="flex gap-5">
                <div className="w-[180px]">
                    <Link href="#">
                    <img src="//pavise.com/cdn/shop/files/DAD-with-AwardSeals-updated.png?v=1738341533&width=600" alt="DYNAMIC AGE DEFENSE" className="w-full h-auto object-cover rounded-md" />
                    <p className="text-center mt-2 font-medium">DYNAMIC AGE DEFENSE</p>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        )}

        {/* Contenido para "SCIENCE" */}
        {isOpen && title === "SCIENCE" && (
            <div ref={menuRef} className="fixed left-1/2 top-[70px] w-full transform -translate-x-1/2 flex justify-center bg-black z-50 overflow-hidden px-6 py-4 transition-all duration-300 ease-in shadow-lg">
            <div className="flex flex-row items-center justify-center gap-12">
                <Link href="#" className="text-link label">Our biotechnology</Link>
                <Link href="#" className="text-link label">Safety</Link>
                <Link href="#" className="text-link label">Scientific team</Link>
            </div>
            </div>
        )}

        {/* Contenido para "IN THE LAB" */}
        {isOpen && title === "IN THE LAB" && (
            <div ref={menuRef} className="fixed left-1/2 top-[70px] w-full transform -translate-x-1/2 flex justify-between bg-black z-50 overflow-hidden px-6 py-4 transition-all duration-300 ease-in shadow-lg">
            <div className="flex flex-row justify-between items-center gap-8">
                <div className="flex flex-col justify-start gap-5 max-w-[300px] w-full">
                <p className="text-lg font-semibold">
                    Unparalleled skin regeneration at your fingertips
                </p>
                <Link href="/collections/all" className="btn-base w-fit text-blue-500 hover:underline">
                    SHOP ALL
                </Link>
                </div>
                <div className="flex gap-5">
                <div className="w-[180px]">
                    <Link href="#">
                    <img src="//pavise.com/cdn/shop/files/DAD-with-AwardSeals-updated.png?v=1738341533&width=600" alt="DYNAMIC AGE DEFENSE" className="w-full h-auto object-cover rounded-md" />
                    <p className="text-center mt-2 font-medium">DYNAMIC AGE DEFENSE</p>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
    );
    };

    export default MegaMenu;
