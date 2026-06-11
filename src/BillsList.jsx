import Bill from './Bill.jsx'

function BillsList() {
    const bills = [
        { id: 1, name: 'Rent', amount: 725, owner: 'Shared' },
        { id: 2, name: 'Internet', amount: 34, owner: 'Shared' },
        { id: 3, name: 'Netflix', amount: 12, owner: 'Pedro' },
        { id: 4, name: 'Claude', amount: 18, owner: 'Pedro' },
      ]

    const total = bills.reduce((sum, bill) => sum + bill.amount, 0)

    return (
        <>
            {bills.map((bill) => (
                <Bill key={bill.id} name={bill.name} amount={bill.amount} owner={bill.owner} />
            ))}

            <p>The total sum of these bills are {total}</p>
        </>
    )
}

export default BillsList;