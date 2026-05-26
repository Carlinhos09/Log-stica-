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

const flowSteps = [
  { icon: '🛍️', label: 'Cliente faz o Pedido' },
  { icon: '📡', label: 'Sinal de Demanda' },
  { icon: '🏭', label: 'Produção Sob Demanda' },
  { icon: '🚀', label: 'Entrega Direta' }
];

const advantages = [
  'Redução de estoques',
  'Eliminação de desperdícios (Lean)',
  'Personalização',
  'Resposta a tendências',
  'Menor obsolescência'
];

const challenges = [
  'Necessidade de TI integrada',
  'Lead times maiores',
  'Dependência de fornecedores ágeis',
  'Custos de frete maiores',
  'Cadeia enxuta'
];

export default function PullSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">06</span>
        <span className="slide-label">MODELO DE RESPOSTA</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Modelo Puxado <span className="gradient-text-pull">(Pull)</span>
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        No modelo baseado na resposta, a produção e a distribuição são acionadas pela
        demanda real do consumidor. Os produtos são &ldquo;puxados&rdquo; pela cadeia à medida que
        os pedidos são realizados, reduzindo estoques e desperdícios.
      </motion.p>

      <motion.div className="pull-flow" variants={containerVariants}>
        {flowSteps.map((step, index) => (
          <motion.div key={index} className="flow-item" variants={itemVariants}>
            <div className="flow-step pull-step">
              <div className="flow-icon">{step.icon}</div>
              <div className="flow-label">{step.label}</div>
            </div>
            {index < flowSteps.length - 1 && (
              <div className="pull-arrow">→</div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="content-grid two-col" variants={containerVariants}>
        <motion.div className="glass-card" variants={itemVariants}>
          <h3 className="card-title-pull">✅ Vantagens</h3>
          <ul className="styled-list success-list">
            {advantages.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants}>
          <h3 className="card-title-pull">⚠️ Desafios</h3>
          <ul className="styled-list warning-list">
            {challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
