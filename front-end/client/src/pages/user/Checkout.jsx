import React, { useState } from "react";
import { CreditCard, Lock, Check, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems, clearCart }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + item.price * (1 - (item.discount || 0)) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipping = 15.0;
    return (subtotal + shipping).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
        <div className="bg-[#FFFFFF] rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <div className="bg-[#4CAF50] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} />
          </div>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
            Order Confirmed Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            We'll send the shipping details to your email shortly.
          </p>
          <div className="bg-[#F5F5F5] p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-500">Amount Paid</p>
            <p className="font-medium text-[#1A1A1A]">{calculateTotal()} SAR</p>
          </div>
          <Link
            to="/pharmacy"
            className="inline-block bg-[#4CAF50] text-white px-6 py-3 rounded-lg hover:bg-[#388E3C] transition-colors w-full"
          >
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans" dir="ltr">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Payment Details */}
          <div className="lg:w-2/3">
            <div className="bg-[#FFFFFF] rounded-2xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-6 border-b pb-3 text-left">
                Payment Details
              </h2>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 text-left">
                  Choose Payment Method
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("credit")}
                    className={`p-4 border rounded-xl flex items-center justify-center transition-all ${
                      paymentMethod === "credit"
                        ? "border-[#4CAF50] bg-[#F5F5F5]"
                        : "border-gray-200 hover:border-[#4CAF50]"
                    }`}
                  >
                    <CreditCard className="mr-2 text-[#1A1A1A]" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-4 border rounded-xl flex items-center justify-center transition-all ${
                      paymentMethod === "paypal"
                        ? "border-[#4CAF50] bg-[#F5F5F5]"
                        : "border-gray-200 hover:border-[#4CAF50]"
                    }`}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2504/2504801.png"
                      alt="PayPal"
                      className="h-6 mr-2"
                    />
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              {paymentMethod === "credit" && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1 text-left">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] border border-gray-200 text-left"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1 text-left">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            if (value.length <= 16) {
                              const formattedValue = value.replace(
                                /(\d{4})(?=\d)/g,
                                "$1 "
                              );
                              handleInputChange({
                                target: {
                                  name: "cardNumber",
                                  value: formattedValue,
                                },
                              });
                            }
                          }}
                          className="w-full bg-gray-50 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] border border-gray-200 text-left"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <CreditCard className="text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1 text-left">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "");
                            if (value.length > 2) {
                              value =
                                value.substring(0, 2) +
                                "/" +
                                value.substring(2);
                            }
                            if (value.length <= 5) {
                              handleInputChange({
                                target: {
                                  name: "expiry",
                                  value: value.substring(0, 5),
                                },
                              });
                            }
                          }}
                          className="w-full bg-gray-50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] border border-gray-200 text-left"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1 text-left">
                          CVV Code
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              if (value.length <= 4) {
                                handleInputChange({
                                  target: {
                                    name: "cvv",
                                    value: value,
                                  },
                                });
                              }
                            }}
                            className="w-full bg-gray-50 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] border border-gray-200 text-left"
                            maxLength={4}
                            required
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <Lock className="text-gray-400" size={16} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1 text-left">
                        Shipping Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] border border-gray-200 text-left"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>
                </form>
              )}

              {paymentMethod === "paypal" && (
                <div className="text-center py-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2504/2504801.png"
                    alt="PayPal"
                    className="h-16 mx-auto mb-6"
                  />
                  <p className="text-gray-600 mb-6">
                    You will be redirected to PayPal to complete the payment.
                  </p>
                  <button
                    onClick={handleSubmit}
                    className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg hover:bg-[#388E3C] transition-colors"
                  >
                    Pay with PayPal
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-[#FFFFFF] rounded-2xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-6 border-b pb-3 text-left">
                Order Summary
              </h2>

              {/* Products */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-start"
                  >
                    <div className="flex items-center">
                      <img
                        src={`http://localhost:5000${item.image}`}
                        alt={item.name}
                        className="w-12 h-12 object-contain mr-3"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-[#1A1A1A] text-left">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 text-left">
                          {item.quantity} ×{" "}
                          {(item.price * (1 - (item.discount || 0))).toFixed(2)}{" "}
                          SAR
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">
                      {(
                        item.price *
                        (1 - (item.discount || 0)) *
                        item.quantity
                      ).toFixed(2)}{" "}
                      SAR
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{calculateSubtotal()} SAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">15.00 SAR</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold text-lg text-[#1A1A1A]">
                    Total
                  </span>
                  <span className="font-bold text-lg text-[#4CAF50]">
                    {calculateTotal()} SAR
                  </span>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <div className="bg-[#4CAF50] text-white p-1 rounded-full mr-3">
                    <Lock size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-[#1A1A1A] font-medium text-left">
                      Secure & Encrypted Payment
                    </p>
                    <p className="text-xs text-gray-500 text-left">
                      Your information is protected with advanced encryption.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#4CAF50] text-white py-4 rounded-xl hover:bg-[#388E3C] transition-colors flex items-center justify-center gap-2 text-lg font-medium shadow-md"
              >
                <ShoppingCart className="mr-2" />
                Confirm Order & Pay
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By clicking the button above, you agree to the store's terms and
                conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
