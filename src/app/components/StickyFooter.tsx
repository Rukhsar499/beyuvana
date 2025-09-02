"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@mui/material";
import Image from "next/image";

import { useState } from "react";

export default function StickyFooter() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <footer
            className="fixed-bottom text-white shadow-lg"
            style={{ zIndex: 1030 }}
        >
            <div className="d-flex justify-content-between align-items-center">

                {/* WhatsApp Button */}
                <Link
                    href=""
                    target="_blank"
                    className="btn btn-success d-flex align-items-center gap-2 w-100 px-3 py-2  shadow"

                >
                    <Image
                        src="/assets/img/shopping-bag.png" // 👈 apni image ka path daalo
                        alt="Login Banner"
                        width={20}
                        height={20}
                        className="img-fluid"
                    />
                    Shop Now
                </Link>

                {/* Login Button - Highlighted */}
                <Button type="button" style={{ backgroundColor: "#1A2819", color: "#fff" }}
                    variant="contained"
                    onClick={handleClickOpen}

                    className="btn btn-warning  py-2 w-100"

                >
                    <Image
                        src="/assets/img/logout.png" // 👈 apni image ka path daalo
                        alt="Login Banner"
                        width={20}
                        height={20}
                        className="img-fluid me-2"
                    />
                    Login
                </Button >



            </div>

        </footer>
    );
}