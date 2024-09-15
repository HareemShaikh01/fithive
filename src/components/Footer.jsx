import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='text-white p-4 md:p-20'>
            <HashLink smooth to="/#">
                <h1 className='logohead font-bold text-4xl md:text-5xl text-white tracking-widest font-mono my-5'>
                    Fit<span className='text-green-500 text-5xl md:text-6xl'>H</span>ive
                </h1></HashLink>


            <div>
                <h1 className='text-xl md:text-2xl py-4'>Quik Links</h1>
                <ul>
                    <li className='p-1'><HashLink smooth className=' hover:text-green-500 md:text-xl' to="/#reviews">Reviews</HashLink></li>
                    <li className='p-1'><HashLink smooth className=' hover:text-green-500 md:text-xl' to="/#faqs">FAQs</HashLink></li>
                    <li className='p-1'><HashLink smooth className=' hover:text-green-500 md:text-xl' to="/#categories">Categories</HashLink></li>
                    <li className='p-1'><HashLink smooth className=' hover:text-green-500 md:text-xl' to="/#visions">Vision</HashLink></li>
                </ul>
            </div>
            <div className='py-6 flex justify-between max-w-[200px]'>
                <a className='text-3xl text-green-400' href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a className=' text-3xl text-green-400' href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a className=' text-3xl text-green-400' href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a className=' text-3xl text-green-400' href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>

            <div>
                <hr />
                <p className='text-center py-4 text-xl'>&copy; 2024 FitHive. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
