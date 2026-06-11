import{ useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1);
    };
    const handleReset = () => {
        setCount(0);
    };

    return (
        <div>
            <h4>The current count is {count}</h4>
            <button type='button' className='counter' onClick={handleClick}>Increment</button>
            {' '}
            <button type='button' className='counter' onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter