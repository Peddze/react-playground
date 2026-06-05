function Bill({ name, amount, owner }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Amount: ${amount}</p>
            <p>Owner: {owner}</p>
        </div>
    )
}

export default Bill;