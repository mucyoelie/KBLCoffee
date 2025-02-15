import React, { useState, useEffect } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleConfirmOrder = () => {
    if (!selectedProduct || quantity < 1) return;

    const totalPrice = (selectedProduct.price * quantity).toFixed(2);
    const message = `New Coffee Order!\n\nProduct: ${selectedProduct.title}\nQuantity: ${quantity}\nPrice per unit: $${selectedProduct.price}\nTotal: $${totalPrice}\n\nGet ready to enjoy premium coffee!`;
    const whatsappURL = `https://wa.me/250787490069?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setShowPopup(false);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1); // Ensure quantity is at least 1
    setQuantity(value);
  };

  const handleClosePopup = (e) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <section className="bg-white py-20 px-5 w-full"> 
     <div className="text-center">
  <h2 className="text-4xl font-bold text-[#006242] mb-6">Popular Products</h2>
  <p className="text-gray-500 mb-8">Discover our premium range of coffee products</p>
  <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 w-full ">
    {products.map((product, index) => (
      <div
        key={index}
        className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 group w-full sm:w-[90%] mx-auto"
      >
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform transform hover:scale-110"
          />
          <button
            onClick={() => handleAddToCart(product)}
            className="absolute inset-0 flex w-[10rem] h-[3rem] m-auto items-center justify-center bg-[#006242] text-white px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-[#006242]">{product.title}</h3>
        <p className="mt-2 text-gray-600 text-center">{product.description}</p>
        <p className="mt-2 text-lg font-bold text-gray-800">${product.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-yellow-500 ${
                i < Math.floor(product.rating) ? 'fas fa-star' : 'far fa-star'
              }`}
            ></span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClosePopup}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold">Confirm Order</h2>
            <p className="mt-2 font-semibold text-gray-700">{selectedProduct.title}</p>
            <label className="block mt-4 font-medium text-gray-600">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-full p-2 border rounded text-center"
            />
            <p className="mt-4 text-lg font-bold text-gray-800">Total: ${(selectedProduct.price * quantity).toFixed(2)}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmOrder}
                className="bg-[#006242] text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Confirm
              </button>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;