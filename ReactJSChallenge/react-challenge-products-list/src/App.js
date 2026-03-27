import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ShowProduct from './pages/ShowProduct';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/show/:id" element={<ShowProduct />} />
          <Route path="/products/new" element={<CreateProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;