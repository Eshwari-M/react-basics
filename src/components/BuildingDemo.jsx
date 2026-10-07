import { useState } from "react";

export default function BindingDemo() {
    const [name, setName] = useState("");

    return (
        <div>
            <h2>Data Binding</h2>

            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <h3>Hello {name}</h3>
        </div>
    );
}