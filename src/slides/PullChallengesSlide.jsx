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

export default function PullChallengesSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">07</span>
        <span className="slide-label">DESAFIOS DO MODELO PULL</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Desafios &amp; Requisitos <span className="gradient-text-pull">(Pull)</span>
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        Embora o modelo puxado seja o ideal teórico de eficiência (Estoques Zero), ele é extremamente difícil de ser implementado e apresenta riscos críticos de vulnerabilidade.
      </motion.p>

      <motion.div className="content-grid three-col" variants={containerVariants}>
        <motion.div className="glass-card" variants={itemVariants}>
          <div className="card-icon">⚡</div>
          <h3>1. Vulnerabilidade</h3>
          <p style={{ marginTop: '8px', fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Como opera sem estoques de segurança significativos, qualquer quebra ou atraso de fornecedores, greves de transporte ou picos de demanda causam <strong>ruptura imediata de estoque</strong> e perda de vendas.
          </p>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants}>
          <div className="card-icon">📡</div>
          <h3>2. Dependência Tecnológica</h3>
          <p style={{ marginTop: '8px', fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Exige investimento maciço em TI integrado (sistemas ERP, conexão API com fornecedores, coletores RFID e dados de PDV em tempo real). Falhas de sinal paralisam o abastecimento.
          </p>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants}>
          <div className="card-icon">🤝</div>
          <h3>3. Alinhamento de Cadeia</h3>
          <p style={{ marginTop: '8px', fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Requer fornecedores extremamente flexíveis e geograficamente próximos. Exige contratos baseados em <strong>confiança absoluta e colaboração mútua</strong>, quebrando barreiras corporativas tradicionais.
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="highlight-box" variants={itemVariants} style={{ borderLeft: '3px solid var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.04)' }}>
        <div className="highlight-icon">💡</div>
        <div>
          <strong>Visão de Bowersox:</strong> A cadeia puxada transfere o risco de obsolescência de estoque para o risco de indisponibilidade de produto. A chave de sucesso é a <strong>Velocidade de Ciclo</strong> e não apenas o corte de custos de armazenagem.
        </div>
      </motion.div>
    </motion.div>
  );
}
