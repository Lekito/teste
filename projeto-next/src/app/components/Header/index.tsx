import React from "react";


export default function Header() {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <a href="#" className="flex items-center">
                    Pages
                </a>
                <a href="#" className="flex items-center">
                    Account
                </a>
                <a href="#" className="flex items-center">
                    Blocks
                </a>
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </ul>
        </div>
    )
}