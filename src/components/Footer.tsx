import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-3 mt-4">
            <Container className="text-center">
                <p className="mb-0">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
            </Container>
        </footer>
    )
}