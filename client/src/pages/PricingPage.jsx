import React, { useState } from "react";

const plans = [
  {
    id: "prarambh",
    title: "Prarambh",
    subtitle: "The Beginning",
    price: 99,
    interval: "month",
    description: "Perfect for beginners and those with a flexible schedule",
    features: [
      "8 Classes per Month",
      "Access to all regular batches",
      "Mat & Prop Rental included",
    ],
    buttonText: "Start Your Journey",
  },
  {
    id: "sadhana",
    title: "Sadhana",
    subtitle: "Dedicated Practice",
    price: 199,
    interval: "month",
    description: "Ideal for committed learners seeking depth and routine.",
    features: [
      "8 Classes per Month",
      "Access to all regular + special batches",
      "10% discount on Workshops & Events",
      "5% Merchandise Discount",
      "Mat and Prop rental included",
    ],
    buttonText: "Deepen Your Practice",
    popular: true,
  },
  {
    id: "ananda",
    title: "Ananda",
    subtitle: "Total Bliss",
    price: 349,
    interval: "month",
    description: "The ultimate holistic experience for complete well-being.",
    features: [
      "Unlimited Classes",
      "Access to all batches + priority booking",
      "One free workshop per month",
      "2 Guest Passes per month",
      "One complementary 1-on-1 session per quarter",
      "15% Discount on all Merchandise",
      "Mat and Prop rental included",
    ],
    buttonText: "Embrace Wellness",
  },
];

const paymentOptions = [
  {
    method: "card",
    label: "Credit / Debit Card",
    icon: (
      <svg
        className="w-6 h-6 text-[#9743c8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    method: "paypal",
    label: "PayPal",
    icon: (
      <img
        src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
        alt="PayPal"
        className="w-6 h-6 object-contain"
      />
    ),
  },
  {
    method: "upi",
    label: "UPI",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/825/825454.png"
        alt="UPI"
        className="w-6 h-6 object-contain"
      />
    ),
  },
];

const PricingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("card");

  const handlePaymentClick = (planId) => {
    setShowModal(true); // Always open modal for all plans
  };

  return (
    <section className="min-h-screen bg-babyPink py-12 px-4 sm:px-6 lg:px-20 text-black">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-gray-700 max-w-xl mx-auto text-sm sm:text-base">
          Find the perfect plan for your wellness journey
        </p>
      </header>

      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-10 md:items-stretch max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col justify-between rounded-2xl border p-6 pt-10 shadow-sm w-full max-w-sm md:w-80 transition-all duration-300 hover:shadow-lg overflow-visible min-h-[600px] ${
              plan.popular
                ? "border-[3px] border-[#9743c8] bg-gradient-to-br from-[#f19ad2] via-[#ab4ee1] to-[#9743c8] text-white shadow-lg scale-105"
                : "border-gray-300 bg-white"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-[#9743c8] text-white text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>
            )}

            <div>
              <h2 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-black"}`}>
                {plan.title}
              </h2>
              <p className={`text-sm mb-4 ${plan.popular ? "text-pink-100" : "text-gray-700"}`}>
                {plan.subtitle}
              </p>

              <div className="text-4xl font-bold mb-2">
                ${plan.price}
                <span className="text-base font-normal ml-1">/{plan.interval}</span>
              </div>

              <p className={`italic mb-6 ${plan.popular ? "text-white" : "text-gray-800"}`}>
                {plan.description}
              </p>

              <ul className={`mb-6 space-y-2 text-sm ${plan.popular ? "text-white" : "text-gray-900"}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 mt-1 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-pinkAccent"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handlePaymentClick(plan.id)}
              aria-label={`Select ${plan.title} plan`}
              className={`w-full rounded-md py-2 font-semibold border transition-colors duration-300 ${
                plan.popular
                  ? "bg-white text-[#9743c8] border-white hover:bg-pink-100"
                  : "bg-pinkAccent text-black border-black hover:bg-pink-300"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
            <h2 className="text-xl font-bold mb-5 text-[#9743c8] text-center">Choose Payment Method</h2>

            <div className="space-y-3">
              {paymentOptions.map(({ method, label, icon }) => (
                <label
                  key={method}
                  className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer transition-all ${
                    selectedMethod === method
                      ? "border-[#9743c8] bg-gradient-to-r from-[#f19ad2] via-[#ab4ee1] to-[#9743c8] text-white"
                      : "border-gray-300 bg-white hover:border-[#9743c8]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={selectedMethod === method}
                      onChange={() => setSelectedMethod(method)}
                      className="accent-[#9743c8]"
                    />
                    {icon}
                    <span className="ml-2">{label}</span>
                  </div>
                </label>
              ))}
            </div>

            <button
              onClick={() => {
                setShowModal(false);
                alert(`Dummy Payment with ${selectedMethod} submitted!`);
              }}
              className="mt-6 w-full py-2 rounded-md font-semibold text-white bg-gradient-to-r from-[#f19ad2] via-[#ab4ee1] to-[#9743c8] hover:opacity-90 transition"
            >
              Pay Now
            </button>

            <div className="flex justify-center mt-3">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingPage;
