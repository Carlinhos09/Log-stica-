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

const strategies = [
  { acronym: 'MTS', name: 'Make to Stock', push: 'Fábrica → Estoque Final', pull: 'Venda direta ao Cliente', desc: 'Produzir para estoque básico. Entrega rápida, mas alto risco de obsolescência.' },
  { acronym: 'ATO', name: 'Assemble to Order', push: 'Fabricação de Módulos', pull: 'Montagem Final pelo Pedido', desc: 'Montagem sob encomenda (ex: Dell). Componentes padrão estocados, montagem rápida pós-venda.' },
  { acronym: 'MTO', name: 'Make to Order', push: 'Matéria-prima Estocada', pull: 'Produção e Entrega Total', desc: 'Produção sob encomenda. Estoque apenas de insumos básicos; lead time de entrega maior.' },
  { acronym: 'ETO', name: 'Engineer to Order', push: 'Nenhum (ou insumos gerais)', pull: 'Projeto, Compra, Fábrica e Entrega', desc: 'Projetado sob encomenda. Customização extrema (ex: navios, maquinário pesado).' }
];

export default function DecouplingSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">08</span>
        <span className="slide-label">ESTRUTURA CONCEITUAL</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Ponto de Desacoplamento <span className="gradient-text">(Decoupling Point)</span>
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        O Ponto de Desacoplamento é a fronteira física e de informação na cadeia de suprimentos que separa as atividades puramente empurradas (baseadas em previsão) das atividades puxadas (acionadas por pedidos firmes).
      </motion.p>

      <motion.div className="comparison-table-wrapper" variants={itemVariants}>
        <table className="comparison-table" style={{ fontSize: '0.82rem' }}>
          <thead>
            <tr>
              <th style={{ width: '80px' }}>Sigla</th>
              <th style={{ width: '150px' }}>Estratégia</th>
              <th style={{ color: 'var(--push-color)' }}>Fase Empurrada (Push)</th>
              <th style={{ color: 'var(--pull-color)' }}>Fase Puxada (Pull)</th>
              <th>Descrição e Aplicação</th>
            </tr>
          </thead>
          <tbody>
            {strategies.map((strat, i) => (
              <tr key={i}>
                <td data-label="Sigla" style={{ fontWeight: 'bold', color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)' }}>{strat.acronym}</td>
                <td data-label="Estratégia"><strong>{strat.name}</strong></td>
                <td data-label="Fase Push" style={{ color: 'rgba(249, 115, 22, 0.8)' }}>{strat.push}</td>
                <td data-label="Fase Pull" style={{ color: 'rgba(6, 182, 212, 0.8)' }}>{strat.pull}</td>
                <td data-label="Aplicação" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{strat.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div className="highlight-box" variants={itemVariants} style={{ borderLeft: '3px solid var(--accent-magenta)', background: 'rgba(244, 114, 182, 0.04)' }}>
        <div className="highlight-icon">🎯</div>
        <div>
          <strong>Posicionamento Estratégico:</strong> Quanto mais para a esquerda (MTS) estiver o ponto de desacoplamento, maior é a dependência de previsões. Quanto mais para a direita (MTO/ETO), maior é a responsividade e a personalização, porém os prazos de entrega do cliente aumentam.
        </div>
      </motion.div>
    </motion.div>
  );
}
