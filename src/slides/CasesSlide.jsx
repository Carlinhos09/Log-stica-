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

export default function CasesSlide({ isActive }) {
  return (
    <motion.div
      className="slide-content"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <motion.div className="slide-header" variants={itemVariants}>
        <span className="slide-number">12</span>
        <span className="slide-label">ESTUDO DE CASOS</span>
      </motion.div>

      <motion.h2 className="slide-title" variants={itemVariants}>
        Logística na Prática
      </motion.h2>

      <motion.p className="slide-description" variants={itemVariants}>
        Como as maiores referências industriais do planeta utilizam os conceitos de Push, Pull e Ponto de Desacoplamento para dominar seus mercados globais.
      </motion.p>

      <motion.div className="content-grid three-col" variants={containerVariants}>
        <motion.div className="glass-card" variants={itemVariants}>
          <div className="card-icon" style={{ fontSize: '2rem' }}>👗</div>
          <h3 style={{ color: 'var(--accent-magenta)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>Zara (Moda Rápida)</h3>
          <p style={{ fontSize: '0.82rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Estratégia híbrida com <strong>Postponement (Adiantamento)</strong>. A Zara adquire fios e tecidos sem tingir com antecedência (push). O tingimento, corte e costura finais ocorrem em oficinas locais na Espanha e Portugal em apenas 15 dias, <strong>puxados em tempo real</strong> pelos relatórios de venda das lojas.
          </p>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants}>
          <div className="card-icon" style={{ fontSize: '2rem' }}>🚗</div>
          <h3 style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>Toyota (Kanban)</h3>
          <p style={{ fontSize: '0.82rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Pioneira do <strong>Just-In-Time (JIT)</strong>. A Toyota substitui estoques intermediários pelo sistema Kanban (cartões visuais). O processo seguinte puxa do processo anterior apenas a quantidade exata de autopeças necessária para montar o veículo vendido, reduzindo o desperdício a zero.
          </p>
        </motion.div>

        <motion.div className="glass-card" variants={itemVariants}>
          <div className="card-icon" style={{ fontSize: '2rem' }}>💻</div>
          <h3 style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>Dell (Customização)</h3>
          <p style={{ fontSize: '0.82rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Modelo <strong>Assemble to Order (ATO)</strong> pioneiro. Os fornecedores da Dell mantêm peças padronizadas estocadas colados às suas plantas de montagem. O computador só começa a ser fisicamente montado após o cliente realizar a customização e confirmar o pagamento no e-commerce (pull).
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="highlight-box" variants={itemVariants} style={{ borderLeft: '3px solid var(--accent-blue)', background: 'rgba(59, 130, 246, 0.04)' }}>
        <div className="highlight-icon">📈</div>
        <div>
          <strong>O Fator de Sucesso Comum:</strong> Todas essas líderes não tentam ser 100% empurradas ou puxadas às cegas. Elas desenharam de forma cirúrgica onde colocar o seu <strong>Ponto de Desacoplamento</strong> para obter o máximo de eficiência operacional e velocidade competitiva.
        </div>
      </motion.div>
    </motion.div>
  );
}
