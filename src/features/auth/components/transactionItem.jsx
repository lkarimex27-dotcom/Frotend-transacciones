import { deleteTransaction } from '../services/transaction.service';

export default function TransactionItem({ tr, onChange, style }) {
    const onDelete = async () => {
        if (!confirm('¿Eliminar registro de esta transacción?')) return;
        try {
            await deleteTransaction(tr._id);
            onChange?.();
        } catch (err) {
            alert('Error al eliminar');
        }
    };

    return (
        <tr style={style}>
            <td style={cellStyle}>
                <div style={{fontSize: '11px', color: '#7f8c8d'}}>{tr.transaccion_uuid}</div>
                <div style={{fontSize: '12px'}}>{new Date(tr.fecha_hora).toLocaleString()}</div>
            </td>
            <td style={cellStyle}>{tr.cuenta_origen}</td>
            <td style={cellStyle}>{tr.cuenta_destino}</td>
            <td style={{...cellStyle, fontWeight: 'bold', color: '#27ae60'}}>${tr.monto}</td>
            <td style={cellStyle}>
                <span style={{ padding: '4px 8px', borderRadius: '4px', background: '#eee', fontSize: '11px' }}>
                    {tr.tipo}
                </span>
            </td>
            <td style={cellStyle}>
                <button onClick={onDelete} style={{ color: '#e74c3c', border: 'none', background: 'none', cursor: 'pointer' }}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

const cellStyle = { padding: '12px 15px', borderBottom: '1px solid #eee' };