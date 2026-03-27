import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ShowProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.title}</h2>

      <p><strong>Name:</strong> {product.title}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>

      <Link className="btn btn-secondary me-2" to="/products">Back</Link>
      <Link className="btn btn-warning"
        to={`/products/edit/${product.id}`}>
        Edit
      </Link>
    </div>
  );
}

export default ShowProduct;