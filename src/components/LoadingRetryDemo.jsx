import { useEffect, useState } from "react";

export default function LoadingRetryDemo({ title }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function getProducts() {
        try {
            setLoading(true);
            setError("");

            const response = await fetch("https://dummyjson.com/products");

            if (!response.ok) {
                throw new Error("Could not load products");
            }

            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            setError("Something went wrong. Please try again...");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h1>{title}</h1>

            {loading && <p>Loading Products</p>}

            {error && (
                <div>
                    <p>{error}</p>
                    <button onClick={getProducts}>Retry</button>
                </div>
            )}

            {!loading && !error && (
                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <p>Price: {product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}