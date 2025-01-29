"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} href="/">
                <Image src="/images/white_next.png" alt="Logo" width={90} height={14} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} href="/">Home</Nav.Link>
                    <Nav.Link as={Link} href="/about">About</Nav.Link>
                    <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
                </Nav>
                <Button variant="outline-primary" size="sm">RSB</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}