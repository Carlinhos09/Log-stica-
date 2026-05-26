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
  { icon: '📈', label: 'Previsão de Demanda' },
  { icon: '🏭', label: 'Produção em Lote' },
  { icon: '📦', label: 'Estoque Armazenado' },
  { icon: '🚚', label: 'Distribuição ao Mercado' },
  { icon: '🛒', label: 'Cliente Compra' }
];

const advantages = [
  'Economia de escala',
  'Disponibilidade imediata',
  'Planejamento centralizado',
  'Negociação de preços em volumes',
  'Eficiência produtiva'
];

const challenges = [
  'Risco de excesso de estoque',
  'Alto custo de manutenção',
  'Dependência de previsões',
  'Menor personalização',
  'Efeito chicote'
];

export default function PushSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">04</span>
        <span className="slide-label">MODELO ANTECIPATÓRIO</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Modelo Empurrado <span className="gradient-text-push">(Push)</span>
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        No modelo antecipatório, a produção e a distribuição são baseadas em previsões de
        demanda. Os produtos são &ldquo;empurrados&rdquo; ao longo da cadeia de suprimentos antes
        que a demanda real do consumidor seja conhecida.
      </motion.p>

      <motion.div className="push-flow" variants={containerVariants}>
        {flowSteps.map((step, index) => (
          <motion.div key={index} style={{ display: 'flex', alignItems: 'center' }} variants={itemVariants}>
            <div className="flow-step">
              <div className="flow-icon">{step.icon}</div>
              <div className="flow-label">{step.label}</div>
            </div>
            {index < flowSteps.length - 1 && (
              <div className="flow-arrow">→</div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="content-grid two-col" variants={containerVariants}>
        <motion.div className="glass-card" variants={itemVariants}>
          <h3 className="card-title-push">✅ Vantagens</h3>
          <ul className="styled-list success-list">
            {advantages.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants}>
          <h3 className="card-title-push">⚠️ Desafios</h3>
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
