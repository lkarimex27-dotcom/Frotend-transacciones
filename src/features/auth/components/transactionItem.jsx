import { deleteTransaction, updateTransaction } from '../services/transaction.service';

export default function TransactionItem({ tr, onChange, style }) {
    
    // Función para ELIMINAR
    const onDelete = async () => {
        if (!confirm('¿Eliminar registro de esta transacción?')) return;
        try {
            await deleteTransaction(tr._id);
            onChange?.();
        } catch (err) {
            alert('Error al eliminar');
        }
    };

    // Función para EDITAR mejorada
    const onEdit = async () => {
        const nuevoMonto = prompt("Nuevo monto:", tr.monto);
        const nuevaDestino = prompt("Nueva cuenta destino:", tr.cuenta_destino);

        if (nuevoMonto && nuevaDestino) {
            try {
                // Preparamos los datos asegurando que el monto sea numérico
                const dataToUpdate = { 
                    cuenta_origen: tr.cuenta_origen, // Se envían para pasar la validación del backend
                    cuenta_destino: nuevaDestino,
                    monto: Number(nuevoMonto), 
                    tipo: tr.tipo 
                };

                await updateTransaction(tr._id, dataToUpdate);
                
                alert("Actualizado correctamente");
                onChange?.(); 
            } catch (err) {
                // Mostramos el error específico que devuelve el servidor
                const errorMsg = err.response?.data?.errors?.[0]?.msg || 
                                 err.response?.data?.message || 
                                 "Error de red o servidor";
                
                alert(`Error al actualizar: ${errorMsg}`);
                console.error("Detalle del error:", err.response?.data);
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
                <span style={{ padding: '4px 8px', borderRadius: '4px', background: '#eee', fontSize: '11px' }}>
                    {tr.tipo}
                </span>
            </td>
            <td style={cellStyle}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={onEdit} 
                        style={{ color: '#f39c12', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Editar
                    </button>
                    
                    <button 
                        onClick={onDelete} 
                        style={{ color: '#e74c3c', border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}

const cellStyle = { padding: '12px 15px', borderBottom: '1px solid #eee' };