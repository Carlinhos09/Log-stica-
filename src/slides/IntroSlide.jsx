import { motion } from 'framer-motion';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function IntroSlide({ isActive }) {
  return (
    <motion.div className="slide-content" variants={stagger} initial="hidden" animate={isActive ? 'visible' : 'hidden'}>
      <motion.div className="slide-header" variants={fade}>
        <span className="slide-number">01</span>
        <span className="slide-label">Introdução</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={fade}>
        O Papel Estratégico<br />da Logística
      </motion.h2>

      <motion.p className="slide-description" variants={fade}>
        A logística moderna deixou de ser uma função de suporte para se tornar um vetor de vantagem competitiva. Empresas que dominam sua cadeia de suprimentos controlam custo, tempo e satisfação do cliente.
      </motion.p>

      <motion.div className="content-grid two-col" variants={stagger}>
        <motion.div className="glass-card content-card" variants={fade}>
          <div className="card-icon">🌐</div>
          <h3>O que é Logística?</h3>
          <p>
            Processo de planejar, implementar e controlar o fluxo eficiente de mercadorias, serviços e informações do ponto de origem ao ponto de consumo, atendendo os requisitos do cliente.
          </p>
        </motion.div>

        <motion.div className="glass-card content-card" variants={fade}>
          <div className="card-icon">🔗</div>
          <h3>Cadeia de Suprimentos</h3>
          <p>
            Rede integrada de organizações, pessoas, atividades, informações e recursos envolvidos no movimento de um produto ou serviço do fornecedor até o consumidor final.
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="info-banner" variants={fade}>
        <div className="banner-icon">📌</div>
        <div className="banner-content">
          <strong>Bowersox et al.:</strong> "O equilíbrio entre os modelos push e pull é a essência da gestão logística eficiente. A escolha errada gera excesso de estoque ou ruptura — ambos custam caro."
        </div>
      </motion.div>
    </motion.div>
  );
}
