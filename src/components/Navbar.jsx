import React, { useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        gsap.from(".logo", {
            y: 70,
            opacity: 0,
            duration: 1
        })

        const checkSize = () => {
            if (window.innerWidth > 768) {
                setOpenMenu(true);
            } else {
                setOpenMenu(false);
            }
        };

        window.addEventListener("resize", checkSize);
        checkSize();

        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, []);

    useEffect(() => {
        if (menuRef.current) {
            if (openMenu) {
                gsap.from(menuRef.current.children, {
                    x: -30,
                    opacity: 0,
                    duration: .5,
                    stagger: 0.2
                }
                );
            } else {
                gsap.to(menuRef.current.children, {
                    opacity: 0,
                    x: 30,
                    duration: 1,
                    stagger: 0.3
                }
                );
            }
        }
    }, [openMenu]);

    const toggleMenu = () => {
        setOpenMenu(prev => !prev);
    };

    return (
        <div className='p-4 overflow-hidden bg-[#00000098] '>
            <nav className='flex justify-between '>

                <Link to="/">
                    <div className="logo font-semibold text-2xl md:text-3xl font-mono text-green-400">
                        <i className="fa-solid fa-dumbbell text-white px-2 text-xl md:text-2xl"></i>
                        FitHive
                    </div></Link>


                <i className="fa-solid fa-bars md:hidden text-2xl px-4 text-white" onClick={toggleMenu}></i>

                {openMenu && (
                    <ul
                        ref={menuRef}
                        className='px-4 absolute md:relative top-14 md:top-0 flex flex-col md:flex-row text-lg'
                    >
                        <li className='p-4 md:py-2 px-10 md:px-4'>
                            <HashLink className='text-white font-serif font-semibold hover:text-green-500 hover:underline underline-offset-4' smooth to="/#reviews">Reviews</HashLink>
                        </li>
                        <li className='p-4 md:py-2 px-10 md:px-4'>
                            <HashLink className='text-white font-serif font-semibold hover:text-green-500 hover:underline underline-offset-4' smooth to="/#category">
                                Category
                            </HashLink>
                        </li>
                        <li className='p-4 md:py-2 px-10 md:px-4'>
                            <HashLink className='text-white font-serif font-semibold hover:text-green-500 hover:underline underline-offset-4' smooth  to="/#visions">Visions</HashLink>
                        </li>
                        <li className='p-4 md:py-2 px-10 md:px-4'>
                            <HashLink className='text-white font-serif font-semibold hover:text-green-500 hover:underline underline-offset-4' smooth to="/#faqs">FAQs</HashLink>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
