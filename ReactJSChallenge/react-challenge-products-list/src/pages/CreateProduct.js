import { useState } from 'react';
import { useNavigate, Link  } from 'react-router-dom';


function CreateProduct() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
   e.preventDefault();

	  const validationErrors = validate();
	  setErrors(validationErrors);

	  if (Object.keys(validationErrors).length > 0) return;

	  fetch('https://fakestoreapi.com/products', {
	    method: 'POST',
	    body: JSON.stringify(form),
	    headers: {
	      'Content-Type': 'application/json'
	    }
	  })
	    .then(res => res.json())
	    .then(() => navigate('/products'));
  };

  const validate = () => {
	  const newErrors = {};

	  if (!form.title.trim()) {
	    newErrors.title = "Title is required";
	  }

	  if (!form.price) {
	    newErrors.price = "Price is required";
	  } else if (isNaN(form.price) || Number(form.price) <= 0) {
	    newErrors.price = "Price must be a positive number";
	  }

	  if (!form.description.trim()) {
	    newErrors.description = "Description is required";
	  }

	  return newErrors;
  };

  return (
    <div>
      <h2>New Product</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Name" className="form-control mb-2" onChange={handleChange} />
        {errors.title && <small className="text-danger">{errors.title}</small>}

        <input name="price" placeholder="Price" className="form-control mb-2" onChange={handleChange} />
        {errors.price && <small className="text-danger">{errors.price}</small>}

        <textarea name="description" placeholder="Description" className="form-control mb-2" onChange={handleChange} />
        {errors.description && ( <small className="text-danger">{errors.description}</small> )}
        <br />

        <Link className="btn btn-secondary me-2" to="/products">Back</Link>
        <button className="btn btn-success">Create</button>
      </form>
    </div>
  );
}

export default CreateProduct;