import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
      <Navbar.Brand href="/">
            <img
              src="https://www.engdict.com/data/dict/media/images_public/shark-00083901_normal.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Brand href="/">root path</Navbar.Brand>
        <Navbar.Brand href="/page2">Products </Navbar.Brand>
        <Navbar.Brand href="/page3">Solutions </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbar1;