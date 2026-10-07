import { useState } from "react";

export default function StateDemo() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>State Demo</h2>
            <h3>Cart Items : {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Add to Cart
            </button>

            <br></br>
            <br></br>

            <button onClick={() => setCount(count - 1)}>
                Remove from Cart
            </button>
        </div>
    );
}