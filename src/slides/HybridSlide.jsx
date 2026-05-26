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

const examples = [
  {
    icon: '💻',
    title: 'Dell',
    description: 'Componentes padronizados são estocados por previsão (push), enquanto a montagem final é feita sob encomenda do cliente (pull).'
  },
  {
    icon: '🚗',
    title: 'Toyota (TPS)',
    description: 'Peças padronizadas são produzidas por previsão (push), mas o sistema Kanban puxa a montagem conforme a demanda real (pull).'
  },
  {
    icon: '👗',
    title: 'Zara',
    description: 'Tecidos básicos são adquiridos por previsão (push), enquanto o design e a produção final respondem às tendências em tempo real (pull).'
  }
];

export default function HybridSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">10</span>
        <span className="slide-label">ESTRATÉGIA MODERNA</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        O Modelo Híbrido <span className="gradient-text">Push-Pull</span>
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        Segundo Bowersox, a maioria das cadeias de suprimentos modernas opera em um modelo
        híbrido, combinando elementos push e pull separados por um ponto de desacoplamento
        estratégico que equilibra eficiência e responsividade.
      </motion.p>

      <motion.div className="hybrid-diagram" variants={containerVariants}>
        <motion.div className="hybrid-side push-side" variants={itemVariants}>
          <h4 className="card-title-push">🔶 Push</h4>
          <p>Matéria-prima e componentes básicos por previsão</p>
          <div className="hybrid-items">
            <div className="h-item">📦 Estoque estratégico</div>
            <div className="h-item">🏭 Produção em escala</div>
            <div className="h-item">📈 Previsão de demanda</div>
          </div>
        </motion.div>

        <motion.div className="hybrid-center" variants={itemVariants}>
          <motion.div
            className="decoupling-point"
            animate={isActive ? {
              boxShadow: [
                '0 0 0px rgba(99, 102, 241, 0.4)',
                '0 0 30px rgba(99, 102, 241, 0.8)',
                '0 0 0px rgba(99, 102, 241, 0.4)'
              ]
            } : {}}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <span className="dp-icon">⚡</span>
          </motion.div>
          <span className="dp-label">Ponto de Desacoplamento</span>
        </motion.div>

        <motion.div className="hybrid-side pull-side" variants={itemVariants}>
          <h4 className="card-title-pull">🔷 Pull</h4>
          <p>Montagem final e entrega pelo pedido real</p>
          <div className="hybrid-items">
            <div className="h-item">🛍️ Pedido do cliente</div>
            <div className="h-item">🎨 Customização</div>
            <div className="h-item">🚀 Entrega rápida</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="content-grid three-col" variants={containerVariants}>
        {examples.map((example, index) => (
          <motion.div className="glass-card example-card" key={index} variants={itemVariants}>
            <div className="example-icon">{example.icon}</div>
            <h3>{example.title}</h3>
            <p>{example.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
