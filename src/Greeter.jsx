import { useState } from 'react'

function Greeter() {
    const [firstName, setFirstName] = useState('');

    const clearButton = () => {
        setFirstName('');
    }

    return (
        <>
            <input placeholder='Enter your name' value={firstName} onChange={e => setFirstName(e.target.value)} />
            {' '}
            <button onClick={clearButton}>Clear</button>
            <h4>Hello {firstName}! How are you?</h4>
        </>
    )
}

export default Greeter