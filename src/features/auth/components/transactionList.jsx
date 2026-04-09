import TransactionItem from './transactionItem';

export default function TransactionList({ items, onChange }) {
    if (!items || !items.length) {
        return <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}><p>No hay transacciones registradas</p></div>;
    }

    return (
        <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                <thead>
                    <tr style={{ backgroundColor: '#2c3e50', color: '#ffffff' }}>
                        <th style={headerStyle}>UUID / Fecha</th>
                        <th style={headerStyle}>Origen</th>
                        <th style={headerStyle}>Destino</th>
                        <th style={headerStyle}>Monto</th>
                        <th style={headerStyle}>Tipo</th>
                        <th style={headerStyle}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((tr, index) => (
                        <TransactionItem 
                            key={tr._id} 
                            tr={tr} 
                            onChange={onChange}
                            style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa' }}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const headerStyle = { padding: '12px 15px', textAlign: 'left', fontSize: '12px', fontWeight: '600' };