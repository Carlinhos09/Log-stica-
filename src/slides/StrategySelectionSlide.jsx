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

export default function StrategySelectionSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">11</span>
        <span className="slide-label">DIRETRIZES DE SELEÇÃO</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Como Escolher a Estratégia?
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        A escolha entre Push e Pull não deve ser arbitrária. Ela depende das características intrínsecas do produto e da volatilidade do mercado, conforme consagrado pelo clássico <strong>Modelo de Fisher</strong>.
      </motion.p>

      <motion.div className="content-grid two-col" variants={containerVariants}>
        <motion.div className="glass-card" variants={itemVariants} style={{ borderLeft: '3px solid var(--push-color)' }}>
          <div className="card-icon" style={{ fontSize: '1.8rem' }}>📦 Produtos Funcionais (Foco em Push)</div>
          <p style={{ fontSize: '0.88rem', margin: '10px 0 15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Produtos básicos do dia a dia, com demanda altamente previsível e longos ciclos de vida.
          </p>
          <ul className="styled-list success-list">
            <li><strong>Margens:</strong> Baixas (competição por preço)</li>
            <li><strong>Variedade:</strong> Baixa (padronização)</li>
            <li><strong>Taxa de Erro de Previsão:</strong> Menor que 10%</li>
            <li><strong>Estratégia Ideal:</strong> <em>Foco em Custo e Eficiência Físico-Produtiva (Push)</em></li>
          </ul>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants} style={{ borderLeft: '3px solid var(--pull-color)' }}>
          <div className="card-icon" style={{ fontSize: '1.8rem' }}>🎨 Produtos Inovativos (Foco em Pull)</div>
          <p style={{ fontSize: '0.88rem', margin: '10px 0 15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Produtos com alto grau de inovação, moda ou customização, ciclos curtos e alta volatilidade.
          </p>
          <ul className="styled-list success-list">
            <li><strong>Margens:</strong> Altas (valor agregado)</li>
            <li><strong>Variedade:</strong> Altíssima (personalização)</li>
            <li><strong>Taxa de Erro de Previsão:</strong> 40% a 100% (altíssima)</li>
            <li><strong>Estratégia Ideal:</strong> <em>Foco em Velocidade e Responsividade Logística (Pull)</em></li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div className="highlight-box" variants={itemVariants} style={{ borderLeft: '3px solid var(--accent-green)', background: 'rgba(52, 211, 153, 0.04)' }}>
        <div className="highlight-icon">⚖️</div>
        <div>
          <strong>Alinhamento Estratégico:</strong> Bowersox complementa que tentar forçar um modelo puxado em produtos commodities (funcionais) gera fretes caros e desnecessários. Já usar o modelo empurrado em produtos inovativos gera liquidações forçadas por excesso de estoque obsoleto.
        </div>
      </motion.div>
    </motion.div>
  );
}
