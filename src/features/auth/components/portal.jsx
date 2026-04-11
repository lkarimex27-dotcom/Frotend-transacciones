import { useEffect, useState } from 'react';
import { listTransactions } from '../services/transaction.service';
import TransactionForm from './transactionForm';
import TransactionList from './transactionList';
import { Myaccount } from './Myaccount';
import { useAuth } from '../context/AuthContext';

// Nuevo: hook para mobile optimizado
function useIsMobile(breakpoint = 900) {
  const getMobile = () =>
    typeof window !== 'undefined'
      ? window.matchMedia(`(max-width:${breakpoint}px)`).matches
      : false;
  const [isMobile, setIsMobile] = useState(getMobile);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);

    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [breakpoint]);

  return isMobile;
}

export default function Portal() {
  const { isAuth, logout } = useAuth();
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);

  // Mejor manejo de mobile y tablet
  const isMobile = useIsMobile(750);
  const isTablet = useIsMobile(1050) && !isMobile;

  const loadData = async () => {
    if (!isAuth) return;
    try {
      setLoading(true);
      const res = await listTransactions({ q });
      setItems(res.data.items ?? res.data);
    } catch (err) {
      console.error('Error en la carga de datos', err);
      if (err.response?.status !== 401) alert('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuth) loadData();
    // eslint-disable-next-line
  }, [isAuth]);

  if (!isAuth) return <Myaccount />;

  return (
    <main
      style={{
        maxWidth: 1100,
        margin: isMobile
          ? '70px 0 20px 0'
          : isTablet
          ? '100px 8vw 30px 8vw'
          : '140px auto 50px auto',
        padding: isMobile
          ? '10vw 3vw'
          : isTablet
          ? '32px'
          : '40px',
        backgroundColor: '#ffffff',
        borderRadius: isMobile ? '12px' : isTablet ? '20px' : '24px',
        boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
        fontFamily: 'Inter, system-ui, sans-serif',
        width: isMobile ? '99vw' : 'initial',
        minHeight: 450,
        transition: 'all .25s',
      }}
    >
      {/* Encabezado súper responsivo */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'flex-start' : 'space-between',
          alignItems: isMobile ? 'stretch' : 'center',
          gap: isMobile ? '15px' : '20px',
          marginBottom: isMobile ? '24px' : '40px',
          paddingInline: isTablet && !isMobile ? '8px' : 0,
        }}
      >
        <div>
          <h1
            style={{
              color: '#111827',
              margin: 0,
              fontSize: isMobile ? '1.33rem' : isTablet ? '1.7rem' : '2rem',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Mi Actividad
          </h1>
          <p
            style={{
              color: '#6B7280',
              marginTop: '0.4em',
              fontSize: isMobile ? '13px' : '14px',
              maxWidth: 370,
              lineHeight: 1.4,
            }}
          >
            Gestiona tus transacciones en tiempo real
          </p>
        </div>
        <button
          onClick={logout}
          style={{
            width: isMobile ? '100%' : 'auto',
            background: '#F3F4F6',
            color: '#111827',
            border: 'none',
            padding: isMobile ? '12px 0' : '12px 24px',
            borderRadius: isMobile ? '12px' : '14px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: isMobile ? '1rem' : '1.1rem',
            boxShadow: isTablet || isMobile ? '0 1px 8px #0001' : 'none',
            transition: 'background 0.18s',
          }}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Grid ultra responsive */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : isTablet
            ? '2fr 1fr'
            : '1fr 340px',
          gap: isMobile ? '18px' : isTablet ? '26px' : '30px',
        }}
      >
        {/* Right/Sidebar Formulario: arriba en mobile, derecha en desktop */}
        <aside
          style={{
            order: isMobile ? 1 : 2,
            minWidth: 0,
            width: isMobile ? '100%' : 'initial',
          }}
        >
          <div
            style={{
              padding: isMobile ? '18px 14px' : '25px',
              backgroundColor: '#F9FAFB',
              borderRadius: isMobile ? '16px' : '20px',
              border: '1px solid #F3F4F6',
              position: isMobile ? 'static' : 'sticky',
              top: isTablet ? '80px' : '140px',
              boxShadow: isMobile ? 'none' : '0 2px 10px #0001',
              marginBottom: isMobile ? '0.5em' : 0,
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: isMobile ? '0.5em' : '0.8em',
                color: '#111827',
                fontSize: isMobile ? '1rem' : '1.13rem',
                fontWeight: 700,
                letterSpacing: '-0.5px',
              }}
            >
              Nueva Operación
            </h3>
            <TransactionForm onSaved={loadData} />
          </div>
        </aside>

        {/* Left Section: Buscador y Lista */}
        <section
          style={{
            order: isMobile ? 2 : 1,
            minWidth: 0,
            width: isMobile ? '100%' : 'initial',
          }}
        >
          <form
            onSubmit={e => {
              e.preventDefault();
              loadData();
            }}
            style={{
              display: 'flex',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
              gap: '10px',
              marginBottom: isMobile ? '8px' : '22px',
              alignItems: 'stretch',
            }}
            autoComplete="off"
          >
            <input
              placeholder="Buscar transacción..."
              value={q}
              onChange={e => setQ(e.target.value)}
              style={{
                flex: isMobile ? '1 1 100%' : '1 1 200px',
                padding: isMobile ? '14px 12px' : '15px 18px',
                border: '1px solid #E5E7EB',
                borderRadius: '14px',
                fontSize: isMobile ? '0.97rem' : '15px',
                outline: 'none',
                backgroundColor: '#F9FAFB',
                minWidth: 0,
                width: '100%',
              }}
            />
            <button
              type="submit"
              style={{
                flex: isMobile ? '1 1 100%' : '0 0 120px',
                padding: isMobile ? '12px 0' : '15px 25px',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '14px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: isMobile ? '1rem' : '1.05rem',
                minWidth: isMobile ? 'auto' : 110,
                marginTop: isMobile ? '6px' : 0,
                transition: 'background .18s',
                boxShadow: isTablet || isMobile ? '0 1px 5px #0002' : 'none',
              }}
            >
              Buscar
            </button>
          </form>

          <div
            style={{
              backgroundColor: '#FFF',
              borderRadius: isMobile ? '12px' : '16px',
              overflowX: 'auto',
              boxShadow: isMobile ? 'none' : '0 1px 10px #0000',
              minHeight: 110,
            }}
          >
            {loading ? (
              <p
                style={{
                  textAlign: 'center',
                  color: '#9CA3AF',
                  padding: '40px 0',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                }}
              >
                Cargando...
              </p>
            ) : (
              <TransactionList items={items} onChange={loadData} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}