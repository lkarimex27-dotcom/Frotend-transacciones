import { useEffect, useState } from 'react';
import { listTransactions } from '../services/transaction.service'; 
import TransactionForm from './transactionForm';     
import TransactionList from './transactionList';     
import { Myaccount } from './Myaccount';
import { useAuth } from '../../../../AuthContext';

export default function Portal() {
  const { isAuth, logout } = useAuth();
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);
  
  // 📱 Estado para detectar si es móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  }, [isAuth]);

  if (!isAuth) return <Myaccount />; 

  return (
    <main style={{ 
      maxWidth: 1100, 
      margin: isMobile ? '80px 15px 30px 15px' : '140px auto 50px auto', 
      padding: isMobile ? '20px' : '40px',
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      {/* Encabezado Responsivo */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div>
          <h1 style={{ color: '#111827', margin: 0, fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 800 }}>
            Mi Actividad
          </h1>
          <p style={{ color: '#6B7280', marginTop: '4px', fontSize: '14px' }}>Gestiona tus transacciones en tiempo real</p>
        </div>
        <button 
          onClick={logout} 
          style={{ 
            width: isMobile ? '100%' : 'auto',
            background: '#F3F4F6', color: '#111827', border: 'none', 
            padding: '12px 24px', borderRadius: '12px', fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Grid que cambia a 1 columna en móvil */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 350px', 
        gap: '30px' 
      }}>
        
        {/* Lado Derecho (Formulario) - En móvil sale ARRIBA para facilitar el uso */}
        <aside style={{ order: isMobile ? 1 : 2 }}>
          <div style={{ 
            padding: '25px', 
            backgroundColor: '#F9FAFB', 
            borderRadius: '20px', 
            border: '1px solid #F3F4F6',
            position: isMobile ? 'static' : 'sticky',
            top: '140px'
          }}>
            <h3 style={{ marginTop: 0, color: '#111827', fontSize: '1.1rem' }}>Nueva Operación</h3>
            <TransactionForm onSaved={loadData} />
          </div>
        </aside>

        {/* Lado Izquierdo (Buscador y Lista) */}
        <section style={{ order: isMobile ? 2 : 1 }}>
          <form onSubmit={(e) => { e.preventDefault(); loadData(); }} 
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
            <input
              placeholder="Buscar transacción..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              style={{ 
                flex: '1 1 200px', padding: '15px', border: '1px solid #E5E7EB', 
                borderRadius: '14px', fontSize: '15px', outline: 'none',
                backgroundColor: '#F9FAFB'
              }}
            />
            <button type="submit" style={{ 
              flex: isMobile ? '1 1 100%' : '0',
              padding: '15px 25px', background: '#000', color: '#fff', 
              border: 'none', borderRadius: '14px', cursor: 'pointer', fontWeight: 600
            }}>
              Buscar
            </button>
          </form>

          <div style={{ backgroundColor: '#FFF', borderRadius: '16px', overflowX: 'auto' }}>
            {loading ? (
              <p style={{ textAlign: 'center', color: '#9CA3AF', padding: '40px' }}>Cargando...</p>
            ) : (
              <TransactionList items={items} onChange={loadData} />
            )}
          </div>
        </section>

      </div>
    </main>
  );
}