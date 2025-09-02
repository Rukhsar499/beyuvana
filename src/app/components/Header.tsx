'use client';

import Image from 'next/image';
import Link from 'next/link';
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";


function Header() {
    return (
        <>
            <header>
                <section className="header">
                    <div className='logo-sec d-lg-block d-none'>
                        <Link className="" href="/">
                            <Image src="/assets/img/logo.png" alt="Beyuvana" width={130} height={60} />
                        </Link>
                    </div>
                    <div className="container bvcs">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <Link className="navbar-brand d-lg-none d-flex" href="/">
                                    <Image src="/assets/img/logo.png" alt="Beyuvana" width={100} height={50} />
                                </Link>

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/about-us">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/products">Products</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <Image
                                    src="/assets/img/shopping-cart.png"
                                    alt="Login Banner"
                                    width={25}
                                    height={25}
                                    className="img-fluid me-3 d-lg-flex d-none"
                                />
                                <LoginModal />
                                <RegisterModal />
                            </div>
                        </nav>
                    </div>
                </section>
            </header>

           
          
        </>
    );
}

export default Header;
