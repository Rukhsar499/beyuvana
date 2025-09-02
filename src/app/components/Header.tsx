'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@mui/material";

import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
import MarqueeBar from "../components/MarqueeBar";

function Header() {
    return (
        <>
            <header>
                <section className="header">
                    <div className='logo-sec d-lg-block d-none'>
                        <Link className="" href="/">
                            <Image src="/assets/img/logo.png" alt="Beyuvana" width={150} height={70} />
                        </Link>
                    </div>
                    <div className="container bvcs">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <Link className="navbar-brand d-lg-none d-flex" href="/">
                                    <Image src="/assets/img/logo.png" alt="Beyuvana" width={140} height={70} />
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
                                            <Link className="nav-link" href="/">Product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/">Contact</Link>
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

            {/* 👇 MarqueeBar header ke bahar rakh diya */}
            <MarqueeBar />
        </>
    );
}

export default Header;
