/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useLayoutEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Container from './styles';

export default function Header() {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

  useLayoutEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [active]);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Container>
      <header className={navbar ? 'header active' : 'header'}>
        <nav>
          <div id="logo">
            <a href="/">
              <img
                className="rounded-full w-20 h-20 object-cover"
                src="s.png"
                alt="serpa soluções em tecnologia"
                style={{ width: 220, height: 90 }}
              />
            </a>
          </div>
          <div className={active ? 'nav-menu  active' : 'nav-menu '}>
            <ul
              onClick={() => {
                setMode(false);
              }}
            >
              <li>
                <a href="#inicio">HOME</a>
              </li>
              <li>
                <a href="#skills">SERVIÇOS</a>
              </li>
              <li>
                <a href="#cliente">CLIENTES</a>
              </li>
              <li>
                <a href="#about">SOBRE</a>
              </li>
              <li>
                <a href="#contact">CONTATO</a>
              </li>
            </ul>

            <div
              className="social-links"
              onClick={() => {
                setMode(false);
              }}
            >
              <a
                href=" https://wa.me/5581995773197?text=Olá%2C%20gostaria%20de%20fazer%20um%20orçamento!"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href=" https://github.com/Felipeserpa"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href=" https://www.linkedin.com/in/felipe-serpa-149b88223/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:stecnologico@hotmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div
            className={active ? 'hamburger active' : 'hamburger'}
            id="one"
            onClick={toggleMode}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </nav>
      </header>
    </Container>
  );
}
