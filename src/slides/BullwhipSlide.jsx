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

const levels = [
  { role: 'Varejo', variance: '± 5%', color: '#34d399', desc: 'Demanda real estável' },
  { role: 'Distribuição', variance: '± 15%', color: '#60a5fa', desc: 'Pedidos consolidados' },
  { role: 'Fábrica', variance: '± 35%', color: '#f59e0b', desc: 'Produção em grandes lotes' },
  { role: 'Fornecedor', variance: '± 80%', color: '#ef4444', desc: 'Superdimensionamento' }
];

export default function BullwhipSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">05</span>
        <span className="slide-label">DESAFIOS DO MODELO PUSH</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Efeito Chicote <span className="gradient-text-push">(Bullwhip Effect)</span>
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        O maior risco de uma cadeia puramente empurrada é o Efeito Chicote: um fenômeno onde pequenas flutuações nas vendas aos consumidores finais geram distorções massivas à medida que os pedidos sobem na cadeia de suprimentos.
      </motion.p>

      {/* Amplification Diagram */}
      <motion.div 
        className="push-flow" 
        style={{ 
          background: 'rgba(239, 68, 68, 0.03)', 
          borderColor: 'rgba(239, 68, 68, 0.15)',
          padding: '24px 16px',
          marginBottom: '28px'
        }}
        variants={containerVariants}
      >
        {levels.map((lvl, index) => (
          <motion.div key={index} style={{ display: 'flex', alignItems: 'center' }} variants={itemVariants}>
            <div className="flow-step" style={{ background: 'rgba(239, 68, 68, 0.06)', borderColor: 'rgba(239, 68, 68, 0.2)', minWidth: '130px' }}>
              <div className="flow-label" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', marginBottom: '4px' }}>{lvl.role}</div>
              <div style={{ color: lvl.color, fontWeight: '700', fontSize: '1.1rem', fontFamily: 'var(--font-display)' }}>{lvl.variance}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '2px' }}>{lvl.desc}</div>
            </div>
            {index < levels.length - 1 && (
              <div className="flow-arrow" style={{ color: '#ef4444' }}>⚡</div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="content-grid two-col" variants={containerVariants}>
        <motion.div className="glass-card" variants={itemVariants}>
          <h3 style={{ color: '#ef4444', fontFamily: 'var(--font-display)', marginBottom: '12px' }}>⚠️ Principais Causas</h3>
          <ul className="styled-list warning-list">
            <li><strong>Falta de Comunicação:</strong> Ausência de dados de vendas em tempo real</li>
            <li><strong>Políticas de Lote:</strong> Pedidos consolidados para economizar no frete</li>
            <li><strong>Flutuações de Preço:</strong> Descontos promocionais gerando compras especulativas</li>
            <li><strong>Racionamento e Escassez:</strong> Pedidos duplicados por medo de falta de produto</li>
          </ul>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants}>
          <h3 style={{ color: '#fb923c', fontFamily: 'var(--font-display)', marginBottom: '12px' }}>📉 Consequências para o Negócio</h3>
          <ul className="styled-list warning-list">
            <li><strong>Excessos e Quebras:</strong> Altos estoques de itens lentos e faltas de itens rápidos</li>
            <li><strong>Custos Logísticos:</strong> Armazenagem cara e fretes de emergência</li>
            <li><strong>Planejamento Caótico:</strong> Programação de fábrica ineficiente e instável</li>
            <li><strong>Margens Espremidas:</strong> Perda de rentabilidade devido a liquidações forçadas</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
