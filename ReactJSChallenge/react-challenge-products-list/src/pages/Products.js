import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        setProducts(products.filter(p => p.id !== id));
      });
  };

  return (
    <div>
      <h2>Products</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="10%">Name</th>
            <th width="60%">Description</th>
            <th width="10%">Price</th>
            <th width="20%">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>

              <td>
                <Link className="me-2"
                  to={`/products/show/${product.id}`}>
                  Show
                </Link>
                &nbsp; | &nbsp;
                <Link className="me-2"
                  to={`/products/edit/${product.id}`}>
                  Edit
                </Link>
                &nbsp; | &nbsp;
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-primary mb-3" to="/products/new">Add Product</Link>
    </div>
  );
}

export default Products;