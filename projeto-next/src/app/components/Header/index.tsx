"use client"

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Varos from "../../../../public/varos.svg";
import IconMob from "../../../../public/icons.svg"
import Carrinho from "../../../../public/Vector.svg";
export default function Header() {

    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreensNavigation = () => {
        setIcon(!menuIcon);
    }

    return (
        <header className="bg-slate-400 w-full ease-in duration-300 fixed top-0 left-0 z-10">
            <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4" >
                <div>
                    <Link href='/' onClick={handleSmallerScreensNavigation}>
                        <span className="font-extrabold text-3xl md: text-2xl xl:text-3xl "><Image src={Varos} alt={"Logo"} /></span>
                    </Link>
                </div>

                {/** Desktop & table */}
                <ul className="hidden md:flex Uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
                    <li className="mr-4 lg:mr-8 hover:text-green"><Link href="/">Produtos</Link></li>
                    <li className="mr-4 lg:mr-8 hover:text-green"><Link href="/">Blog</Link></li>
                    <li className="mr-4 lg:mr-8 hover:text-green"><Link href="/">Conteúdos</Link></li>
                    <li className=" hover:text-green"><Link href="/">Quem somos</Link></li>
                </ul>

                <div className="hidden md:flex">
                    <div className="flex">
                        <Link href="/assinaragora">
                            <button className="flex justify-between items-center p-4 mr-5 text-slate-800 hover:text-slate-800 hover:text-green uppercase font-bold px-8 py-2"><Image src={Carrinho} alt={"Carrinho de compra"} className=" py-1 mr-1 " />Assinar Agora
                            </button>
                        </Link>

                        <Link href="/">
                            <button className="uppercase font-bold px-8 py-2">Entrar</button>
                        </Link>
                    </div>
                </div>

                {/** celular */}
                <div onClick={handleSmallerScreensNavigation} className='flex md:hidden'>
                    <Image src={IconMob} alt={"Icon Mobile"} />

                </div>
            </nav>
        </header>

    )
}