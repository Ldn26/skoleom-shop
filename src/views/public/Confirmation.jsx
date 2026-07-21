
import { useLocation, useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const { state } = useLocation();
  const nav = useNavigate();
  const number = state?.number || 'SK-29482';
  return (
    <section className="view on">
      <div
        className="wrap"
        style={{ maxWidth: 620, textAlign: 'center', padding: '80px 22px', margin: '0 auto' }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'var(--lime)',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 26px',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#07080c"
            strokeWidth="3"
            style={{ width: 38, height: 38 }}
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="anton" style={{ fontSize: 42, marginBottom: 14 }}>
          COMMANDE CONFIRMÉE
        </h2>
        <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.6, marginBottom: 8 }}>
          Merci Alex ! Votre commande <b style={{ color: 'var(--lime)' }}>#{number}</b> est
          confirmée.
        </p>
        <p style={{ color: 'var(--dim)', fontSize: 14, marginBottom: 30 }}>
          📦 Livraison express estimée : <b style={{ color: 'var(--text)' }}>demain avant 13 h</b> ·
          Suivi en temps réel disponible.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-lime" onClick={() => nav('/compte')}>
            Suivre ma commande
          </button>
          <button className="btn btn-dark" onClick={() => nav('/')}>
            Continuer mes achats
          </button>
        </div>
      </div>
    </section>
  );
}
