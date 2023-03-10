import {
  Header,
  Home,
  Footer,
  About,
  Education,
  Experience,
  Skillsset,
  Contact,
} from "../sections";
import { Row, Col, Container } from "react-bootstrap";
import ScrollTopArrow from "./ScrollTopArrow";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Container>
          <Row>
            <Col md={6}>
              <Education />
            </Col>
            <Col md={6}>
              <Experience />
            </Col>
          </Row>
        </Container>
        <Skillsset />
        <Contact />
      </main>
      <Footer />
      <ScrollTopArrow />
    </>
  );
}

export default App;
