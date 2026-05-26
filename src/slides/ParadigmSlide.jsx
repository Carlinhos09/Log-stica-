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

export default function ParadigmSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">03</span>
        <span className="slide-label">EVOLUÇÃO HISTÓRICA</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Paradigma de Operações
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        Nas últimas décadas, a gestão logística passou por uma revolução profunda. A concorrência global e a tecnologia mudaram o foco das empresas da eficiência interna para a satisfação ágil da demanda.
      </motion.p>

      <motion.div className="content-grid two-col" variants={containerVariants}>
        <motion.div className="glass-card" variants={itemVariants}>
          <div className="card-icon">🏭</div>
          <h3>Paradigma de Estoque Tradicional</h3>
          <ul className="styled-list warning-list">
            <li><strong>Foco Interno:</strong> Otimização da capacidade das máquinas</li>
            <li><strong>Produção em Massa:</strong> Grandes lotes para diluir custos fixos</li>
            <li><strong>Estoque Amortecedor:</strong> Proteção contra falhas e incertezas</li>
            <li><strong>Visão Histórica:</strong> Planejamento baseado em dados passados</li>
          </ul>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants}>
          <div className="card-icon">🎯</div>
          <h3>Paradigma de Resposta Rápida</h3>
          <ul className="styled-list success-list">
            <li><strong>Foco Externo:</strong> Alinhamento com a necessidade do cliente</li>
            <li><strong>Agilidade Operacional:</strong> Lotes menores e setups rápidos</li>
            <li><strong>Fluxo Contínuo:</strong> Redução drástica de estoques parados</li>
            <li><strong>Visão de Futuro:</strong> Compartilhamento de informações online</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div className="highlight-box" variants={itemVariants} style={{ borderLeft: '3px solid var(--accent-purple)', background: 'rgba(168, 85, 247, 0.04)' }}>
        <div className="highlight-icon">🔄</div>
        <div>
          <strong>A Grande Transição:</strong> De acordo com Bowersox, a cadeia tradicional operava sob a lógica de <em>"vender o que está estocado"</em> (Push). A cadeia moderna busca a lógica de <em>"comprar/produzir o que foi demandado"</em> (Pull).
        </div>
      </motion.div>
    </motion.div>
  );
}
