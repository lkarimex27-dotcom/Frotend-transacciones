import { useState } from 'react'
import { createTransaction } from '../services/transaction.service'

export default function TransactionForm({ onSaved }) {
  const [form, setForm] = useState({
    cuenta_origen: '', cuenta_destino: '', monto: '', tipo: 'Transferencia'
  });
  const [saving, setSaving] = useState(false);
  
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.cuenta_origen || !form.cuenta_destino || !form.monto) {
      return alert('Todos los campos son obligatorios.');
    }
  
    try {
      setSaving(true);
      await createTransaction(form);
      setForm({ cuenta_origen: '', cuenta_destino: '', monto: '', tipo: 'Transferencia' });
      onSaved?.();
    } catch (err) {
      console.error(err);
      alert('Error al realizar la transacción');
    } finally {
      setSaving(false);
    }
  };

  const inputStyle = { padding: '12px', border: '1px solid #cbd5e0', borderRadius: '6px', width: '100%', boxSizing: 'border-box' };
  
  return (
    <form onSubmit={onSubmit} style={{ padding: '20px 0', marginBottom: 24 }}>
      <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Nueva Transacción Bancaria</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <input name="cuenta_origen" placeholder="Cuenta Origen *" style={inputStyle} value={form.cuenta_origen} onChange={onChange} required />
        <input name="cuenta_destino" placeholder="Cuenta Destino *" style={inputStyle} value={form.cuenta_destino} onChange={onChange} required />
        <input name="monto" type="number" placeholder="Monto ($) *" style={inputStyle} value={form.monto} onChange={onChange} required />
        <select name="tipo" style={inputStyle} value={form.tipo} onChange={onChange}>
            <option value="Transferencia">Transferencia</option>
            <option value="Deposito">Depósito</option>
            <option value="Retiro">Retiro</option>
        </select>
      </div>
      <button type="submit" disabled={saving} style={{ marginTop: '20px', width: '100%', padding: '12px', backgroundColor: saving ? '#bdc3c7' : '#27ae60', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
        {saving ? 'Procesando envío...' : 'Realizar Transacción'}
      </button>
    </form>
  );
}