import { deleteTransaction, updateTransaction } from '../services/transaction.service';

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

    const onEdit = async () => {
        // 1. Pedimos los nuevos valores
        const nuevoMonto = prompt("Nuevo monto:", tr.monto);
        const nuevaDestino = prompt("Nueva cuenta destino:", tr.cuenta_destino);
        const nuevoTipo = prompt("Nuevo tipo (Transferencia, Deposito, Retiro):", tr.tipo);

        // 2. Validamos que no estén vacíos
        if (nuevoMonto && nuevaDestino && nuevoTipo) {
            try {
                const dataToUpdate = { 
                    cuenta_origen: tr.cuenta_origen, 
                    cuenta_destino: nuevaDestino,
                    monto: Number(nuevoMonto), 
                    tipo: nuevoTipo // <-- Ahora incluimos el tipo actualizado
                };

                await updateTransaction(tr._id, dataToUpdate);
                
                alert("Transacción actualizada con éxito");
                onChange?.(); 
            } catch (err) {
                const errorMsg = err.response?.data?.errors?.[0]?.msg || 
                                 err.response?.data?.message || 
                                 "Error de validación";
                
                alert(`No se pudo actualizar: ${errorMsg}`);
                console.error("Detalle:", err.response?.data);
            }
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
                {/* Aquí se verá reflejado el nuevo tipo después de actualizar */}
                <span style={{ padding: '4px 8px', borderRadius: '4px', background: '#eee', fontSize: '11px' }}>
                    {tr.tipo}
                </span>
            </td>
            <td style={cellStyle}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={onEdit} style={{ color: '#f39c12', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                        Editar
                    </button>
                    <button onClick={onDelete} style={{ color: '#e74c3c', border: 'none', background: 'none', cursor: 'pointer' }}>
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}

const cellStyle = { padding: '12px 15px', borderBottom: '1px solid #eee' };