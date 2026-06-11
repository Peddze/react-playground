import Bill from './Bill.jsx'
import { useState, Fragment } from 'react'

function AddBillForm() {
    const [bills, setBills] = useState([]);
    const [billName, setBillName] = useState('');
    const [billAmount, setBillAmount] = useState('');
    const [billOwner, setBillOwner] = useState('');

    const addBill = () => {
        setBills([...bills, {
            id: Date.now(),
            name: billName,
            amount: Number(billAmount),
            owner: billOwner
        }])
        setBillName('')
        setBillAmount('')
        setBillOwner('')
    }

    const removeBill = (id) => {
        setBills(bills.filter((bill) => bill.id !== id))
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {bills.map((bill) => (
                <Fragment key={bill.id}>
                    <Bill name={bill.name} amount={bill.amount} owner={bill.owner} />
                    <button 
                        type='button'
                        onClick={() => removeBill(bill.id)}
                    > 
                        Remove bill
                    </button>
                </Fragment>
            ))}
            </div>
            <hr />
            <form>
                <label>Name of the bill:
                    <input type='text' value={billName} onChange={e => setBillName(e.target.value)}/>
                </label>

                <label>Amount of the bill:
                    <input type='text' value={billAmount} onChange={e => setBillAmount(e.target.value)}/>
                </label>
                
                <label>Owner of the bill:
                    <input type='text' value={billOwner} onChange={e => setBillOwner(e.target.value)}/>
                </label>

                <button 
                    type='button'
                    onClick={addBill}
                > 
                    Add bill
                </button>
            </form>
            <p>The total sum of the bills is {bills.reduce((sum, bill) => sum + bill.amount, 0)}</p>
        </>
    )
}

export default AddBillForm;