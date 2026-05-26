import { useState } from 'react';
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

const tableRows = [
  { criteria: 'Base de Decisão', push: 'Previsão de demanda', pull: 'Demanda real do cliente' },
  { criteria: 'Estoque', push: 'Alto (buffer)', pull: 'Baixo (just-in-time)' },
  { criteria: 'Lead Time', push: 'Curto para o cliente', pull: 'Pode ser maior' },
  { criteria: 'Personalização', push: 'Baixa (padronizado)', pull: 'Alta (sob demanda)' },
  { criteria: 'Risco', push: 'Excesso / obsolescência', pull: 'Ruptura / atraso' },
  { criteria: 'Foco', push: 'Eficiência operacional', pull: 'Responsividade ao cliente' },
  { criteria: 'Informação', push: 'Histórica / projetada', pull: 'Tempo real / POS' },
  { criteria: 'Exemplo', push: 'Indústria alimentícia', pull: 'E-commerce / Dell' }
];

const toggleData = {
  push: {
    pushPercent: 85,
    pullPercent: 15,
    description: 'Cadeia predominantemente empurrada: produção em larga escala baseada em previsões. Ideal para produtos com demanda estável e previsível.'
  },
  pull: {
    pushPercent: 15,
    pullPercent: 85,
    description: 'Cadeia predominantemente puxada: produção acionada pelo pedido real. Ideal para produtos customizados e mercados voláteis.'
  },
  hybrid: {
    pushPercent: 50,
    pullPercent: 50,
    description: 'Cadeia híbrida com ponto de desacoplamento: componentes básicos por previsão, montagem final por demanda. Equilíbrio entre eficiência e responsividade.'
  }
};

export default function ComparisonSlide({ isActive }) {
  const [activeToggle, setActiveToggle] = useState('hybrid');
  const current = toggleData[activeToggle];

  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">09</span>
        <span className="slide-label">ANÁLISE COMPARATIVA</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Push <span className="gradient-text">vs</span> Pull
      </motion.h2>

      <motion.div className="comparison-table-wrapper" variants={itemVariants}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Critério</th>
              <th className="push-col">Push (Empurrado)</th>
              <th className="pull-col">Pull (Puxado)</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr key={i}>
                <td data-label="Critério">{row.criteria}</td>
                <td data-label="Push" className="push-col">{row.push}</td>
                <td data-label="Pull" className="pull-col">{row.pull}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div className="interactive-toggle" variants={itemVariants}>
        <div className="toggle-label">Visualize o equilíbrio:</div>
        <div className="toggle-buttons">
          <button
            className={`toggle-btn ${activeToggle === 'push' ? 'active' : ''}`}
            onClick={() => setActiveToggle('push')}
          >
            <span className="toggle-dot push-dot" />
            Push
          </button>
          <button
            className={`toggle-btn ${activeToggle === 'hybrid' ? 'active' : ''}`}
            onClick={() => setActiveToggle('hybrid')}
          >
            <span className="toggle-dot hybrid-dot" />
            Híbrido
          </button>
          <button
            className={`toggle-btn ${activeToggle === 'pull' ? 'active' : ''}`}
            onClick={() => setActiveToggle('pull')}
          >
            <span className="toggle-dot pull-dot" />
            Pull
          </button>
        </div>

        <div className="toggle-visual">
          <div className="visual-bar">
            <motion.div
              className="bar-push"
              animate={{ width: `${current.pushPercent}%` }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              Push {current.pushPercent}%
            </motion.div>
            <div className="bar-divider" />
            <motion.div
              className="bar-pull"
              animate={{ width: `${current.pullPercent}%` }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              Pull {current.pullPercent}%
            </motion.div>
          </div>
          <p className="visual-desc">{current.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
