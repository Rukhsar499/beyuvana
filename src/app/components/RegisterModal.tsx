"use client";

import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Image from "next/image";

export default function RegisterModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Trigger Button */}
            <Button
                className="btn btn-login d-flex align-items-center"
                type="button"
                onClick={handleShow}
                style={{ color: "#292D32", backgroundColor: "#E5DDD5", border: "none" }}
            >
                <Image
                    src="/assets/img/setting.png"
                    alt="Login Icon"
                    width={20}
                    height={20}
                    className="me-2"
                />
                Register
            </Button>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="login-modal">
                <button className="btn-close-custom" onClick={handleClose}>
                    ✕
                </button>
                <div className="d-flex">
                    {/* Left Side Image */}
                    <div className="login-left">
                        <Image
                            src="/assets/img/login-img.png" // 👈 apni image ka path daalo
                            alt="Login Banner"
                            width={350}
                            height={400}
                            className="img-fluid h-100 w-100 object-fit-cover"
                        />
                    </div>

                    {/* Right Side Form */}
                    <div className="login-right p-4 d-flex flex-column justify-content-center">
                        <h4 className="mb-3 text-success regis">Register Now!</h4>
                        <hr className="green-line" />

                        <Form>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Control type="email" placeholder="Enter Email ID" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Control type="email" placeholder="Enter Phone Number" />
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
                </div>
            </Modal>
        </>
    );
}
