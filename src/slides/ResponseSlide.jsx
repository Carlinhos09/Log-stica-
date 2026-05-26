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

export default function ResponseSlide({ isActive }) {
  const features = [
    {
      icon: '⚡',
      title: 'Agilidade',
      description: 'Responder rapidamente às mudanças de demanda, ajustando operações em tempo real para atender às necessidades do mercado.'
    },
    {
      icon: '📊',
      title: 'Informação em Tempo Real',
      description: 'Sistemas integrados que fornecem dados em tempo real sobre estoques, pedidos e movimentações ao longo de toda a cadeia.'
    },
    {
      icon: '🔄',
      title: 'Flexibilidade',
      description: 'Capacidade de adaptar rotas, volumes de produção e níveis de inventário conforme as condições de mercado mudam.'
    }
  ];

  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">02</span>
        <span className="slide-label">CONCEITO CENTRAL</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Capacidade de Resposta
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        A responsividade é a competência-chave que define a capacidade de uma cadeia de
        suprimentos em atender às demandas dos clientes de forma rápida, precisa e
        econômica. Ela envolve a integração de processos, tecnologia e pessoas.
      </motion.p>

      <motion.div className="content-grid three-col" variants={containerVariants}>
        {features.map((feature, index) => (
          <motion.div className="feature-card glass-card" key={index} variants={itemVariants}>
            <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="feature-icon-wrap">
              <span className="feature-icon">{feature.icon}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="highlight-box" variants={itemVariants}>
        <div className="highlight-icon">📖</div>
        <p>
          &ldquo;Quanto mais puxado for o design da cadeia de suprimentos, maior será a
          necessidade de informações precisas e oportunas sobre o comportamento de compra
          do consumidor final.&rdquo;
        </p>
      </motion.div>
    </motion.div>
  );
}
