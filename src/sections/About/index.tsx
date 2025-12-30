import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from './styles';

export default function About() {
  const WHATSAPP_URL = 'https://wa.me/5581984135753';

  return (
    <Container>
      <section id="about">
        <div className="container">
          <div className="section-container">
            {/* LADO ESQUERDO: FOTO COM MOLDURA E ANIMAÇÃO */}
            <motion.div
              className="image-motion"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img src="fot01.png" alt="Advogado Marcello Rodrigo" />
            </motion.div>

            {/* LADO DIREITO: TEXTO E BOTÃO */}
            <article>
              <motion.h2
                className="highlight-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Por que confiar no nosso escritório?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Somos um escritório de advocacia com atuação em direito da
                saúde. Nosso escritório estará empenhado na defesa dos seus
                direitos. Prezamos pela comunicação pessoal e clara com nossos
                clientes. Está na hora de garantir seus direitos de saúde com a
                ajuda de especialistas! Clique no botão abaixo e dê o primeiro
                passo em direção à segurança e ao suporte que você merece. Nosso
                time de especialistas está pronto para lutar pelo que é seu por
                direito.
              </motion.p>

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button-main"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <FaWhatsapp /> Fale com um especialista
              </motion.a>
            </article>
          </div>
        </div>
      </section>
    </Container>
  );
}
