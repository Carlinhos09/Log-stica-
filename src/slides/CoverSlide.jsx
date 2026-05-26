import { motion } from 'framer-motion';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

export default function CoverSlide({ isActive, onNext }) {
  return (
    <motion.div
      className="slide-content cover-slide"
      variants={stagger}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
      style={{ maxWidth: '1100px' }}
    >
      {/* Left column */}
      <div style={{ maxWidth: '600px' }}>
        <motion.div className="cover-badge" variants={fade}>
          <div className="badge-glow" />
          <span style={{ position: 'relative', zIndex: 1 }}>EQUIPE 6 &bull; CAPÍTULO 01</span>
        </motion.div>

        <motion.div className="cover-title" variants={fade}>
          <span className="title-line">Gestão Logística</span>
          <span className="title-line">da Cadeia de<br />
            <span className="title-accent">Suprimentos</span>
          </span>
        </motion.div>

        <motion.p className="cover-subtitle" variants={fade}>
          Uma análise técnica e estratégica dos modelos Push, Pull e Híbrido na cadeia de suprimentos moderna — baseado em Bowersox, Closs & Cooper.
        </motion.p>

        <motion.div className="cover-meta" variants={fade}>
          <div className="meta-item">
            <span className="meta-icon">📘</span>
            Bowersox, Closs & Cooper
          </div>
          <div className="meta-item">
            <span className="meta-icon">📄</span>
            4ª Ed. — Cap. 1, p. 21
          </div>
          <div className="meta-item">
            <span className="meta-icon">🏭</span>
            Engenharia de Produção
          </div>
        </motion.div>

        <motion.div className="cover-cta" variants={fade}>
          <button className="btn-primary" onClick={onNext}>
            Iniciar Apresentação →
          </button>
        </motion.div>
      </div>

      {/* Right stats column */}
      <motion.div className="cover-stat-bar" variants={stagger}>
        {[
          { value: '13', label: 'Slides de Conteúdo', accent: true },
          { value: '3', label: 'Modelos Analisados', accent: false },
          { value: '4ª', label: 'Edição Bowersox', accent: false },
        ].map((s, i) => (
          <motion.div key={i} className="cover-stat" variants={fade}>
            <span className="stat-value" style={{ color: s.accent ? 'var(--accent)' : 'var(--text)' }}>{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
