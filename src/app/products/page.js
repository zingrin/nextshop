"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <h2 className="text-3xl font-bold text-amber-600 mb-8 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product._id} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition relative group">
            <img src={product.image} alt={product.name} className="w-full h-64 object-contain p-4"/>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-amber-600 font-bold mt-2">{product.price}</p>
              <p className="text-gray-500 text-sm mt-1">{product.category}</p>
            </div>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
              <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 font-medium"
                onClick={() => alert(`${product.name} added to cart!`)}>Add to Cart</button>
              <button className="px-4 py-2 bg-white text-amber-500 rounded-lg hover:bg-gray-100 font-medium"
                onClick={() => setSelectedProduct(product)}>Quick View</button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-11/12 max-w-2xl p-6 relative">
            <button className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-800"
              onClick={() => setSelectedProduct(null)}>✖</button>
            <div className="flex flex-col md:flex-row gap-6">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full md:w-1/2 h-64 object-contain rounded-xl"/>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
                <p className="text-amber-600 font-bold mt-2">{selectedProduct.price}</p>
                <p className="text-gray-500 mt-2">{selectedProduct.category}</p>
                <p className="text-gray-700 mt-4">{selectedProduct.description}</p>
                <button className="mt-6 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 font-semibold"
                  onClick={() => {alert(`${selectedProduct.name} added to cart!`); setSelectedProduct(null);}}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
