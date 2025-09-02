"use client";

import Link from "next/link";


import Image from "next/image";
import { Modal, Button, Form } from "react-bootstrap";

import { useState } from "react";

export default function StickyFooter() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                     onClick={handleShow}

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
                <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="login-modal">
        <button className="btn-close-custom" onClick={handleClose}>
          ✕
        </button>
       
         {/* Right Side Form */}
          <div className="login-right login-hgf p-4 d-flex flex-column justify-content-center">
            <h4 className=" text-success regis">Login Now!</h4>
            <hr className="green-line" />
            

            <Form>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>
              <p className="text-muted small mt-3">
            
              By continuing, you agree to Beyuvana’s Terms of use and Privacy Policy.
            </p>
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: "#2CA24C", border: "none" }}
              >
                Continue
              </Button>
            </Form>
           
          </div>
    
      </Modal>
            </div>
        </footer>
    );
}