import React, { useState } from 'react';

const OrderForm = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  // WhatsApp number (replace with your number)
  const whatsappNumber = '250783172536';

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello! I would like to order ${quantity} of ${product}.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-semibold text-center">Place Your Order</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="product" className="block text-lg font-medium">
            Choose a Product
          </label>
          <select
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="" disabled>Select a product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
            <option value="Product 3">Product 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-lg font-medium">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Send Order to WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
