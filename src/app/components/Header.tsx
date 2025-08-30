'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@mui/material";
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log("Login button clicked!");
    };

    return (
        <header>
            <section className="header">
                <div className='logo-sec'>
                    <Link className="d-lg-block d-none" href="/">
                        <Image src="/assets/img/logo.png" alt="Beyuvana" width={150} height={70} />
                    </Link>
                </div>
                <div className='container'>
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
                            <Button className="btn btn-login" type="button"
                                variant="contained"
                                onClick={handleClickOpen} style={{ color: '#fff' }}>
                                <Image src="/assets/img/logout.png" alt="Login Icon" width={20} height={20} className="me-2" />
                                Login
                            </Button>
                            <Button className="btn btn-login" type="button"
                                variant="contained"
                                onClick={handleClickOpen} style={{ color: '#fff' }}>
                                <Image src="/assets/img/logout.png" alt="Login Icon" width={20} height={20} className="me-2" />
                                Register
                            </Button>

                        </div>
                    </nav>
                </div>
            </section>

        </header>

    );
}

export default Header;