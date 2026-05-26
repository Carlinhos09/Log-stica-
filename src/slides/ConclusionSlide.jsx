import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const conclusions = [
  {
    number: '01',
    title: 'Capacidade de Resposta',
    description: 'A capacidade de resposta é a competência crítica que diferencia cadeias de suprimentos competitivas no cenário atual.'
  },
  {
    number: '02',
    title: 'Modelo Antecipatório',
    description: 'O modelo antecipatório (push) é ideal para cenários com demanda estável e previsível, maximizando economias de escala.'
  },
  {
    number: '03',
    title: 'Modelo de Resposta',
    description: 'O modelo de resposta (pull) é ideal para mercados voláteis, priorizando a redução de desperdícios e a personalização.'
  },
  {
    number: '04',
    title: 'Equilíbrio Híbrido',
    description: 'O equilíbrio híbrido push-pull representa a realidade moderna das cadeias de suprimentos mais eficientes do mundo.'
  }
];

export default function ConclusionSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">13</span>
        <span className="slide-label">CONCLUSÃO</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Considerações Finais
      </motion.h2>

      <motion.div className="conclusion-grid" variants={containerVariants}>
        {conclusions.map((item, index) => (
          <motion.div className="conclusion-item glass-card" key={index} variants={itemVariants}>
            <div className="conclusion-number">{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="content-grid two-col" variants={containerVariants} style={{ marginTop: '24px' }}>
        <motion.div className="conclusion-ref" variants={itemVariants} style={{ margin: 0 }}>
          <div className="ref-card glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '8px', fontSize: '0.9rem' }}>📚 Referência Bibliográfica</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              BOWERSOX, Donald J.; CLOSS, David J.; COOPER, M. Bixby.{' '}
              <strong>Gestão Logística da Cadeia de Suprimentos.</strong>{' '}
              4ª Ed. Porto Alegre: AMGH, 2014. Cap. 1, p. 21.
            </p>
          </div>
        </motion.div>

        <motion.div className="team-badge" variants={itemVariants}>
          <div className="team-glow" />
          <h3>EQUIPE 6</h3>
          <p>Obrigado pela atenção!</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
