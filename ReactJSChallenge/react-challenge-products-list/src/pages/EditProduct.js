import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    title: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
	  const newErrors = {};

	  if (!form.title?.trim()) {
	    newErrors.title = "Title is required";
	  }

	  if (!form.price) {
	    newErrors.price = "Price is required";
	  } else if (isNaN(form.price) || Number(form.price) <= 0) {
	    newErrors.price = "Price must be a positive number";
	  }

	  if (!form.description?.trim()) {
	    newErrors.description = "Description is required";
	  }

	  return newErrors;
	};

  const handleSubmit = (e) => {
      e.preventDefault();

	  const validationErrors = validate();
	  setErrors(validationErrors);

	  if (Object.keys(validationErrors).length > 0) return;

	  fetch(`https://fakestoreapi.com/products/${id}`, {
	    method: 'PUT',
	    body: JSON.stringify(form),
	    headers: {
	      'Content-Type': 'application/json'
	    }
	  })
	    .then(res => res.json())
	    .then(() => navigate('/products'));
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" />
          {errors.title && <small className="text-danger">{errors.title}</small>}

        <input name="price" value={form.price} onChange={handleChange} className="form-control mb-2" />
          {errors.price && <small className="text-danger">{errors.price}</small>}

        <textarea name="description" value={form.description} onChange={handleChange} className="form-control mb-2" />
          {errors.description && ( <small className="text-danger">{errors.description}</small> )}
        <br />
        <Link className="me-2" to={`/products/show/${id}`}>Show</Link> 
        &nbsp; | &nbsp; 
        <Link className="me-2" to="/">Home</Link>
        <br />
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditProduct;