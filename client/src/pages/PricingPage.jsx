import React from "react";

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

const PricingPage = () => {
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
            className={`relative flex flex-col justify-between rounded-2xl border p-6 pt-10 shadow-sm w-full max-w-sm md:w-80 transition-all duration-300 hover:shadow-lg ${
              plan.popular ? "border-pinkAccent shadow-md" : "border-gray-200"
            } overflow-visible min-h-[600px]`}
            style={{
              background: "linear-gradient(to bottom right, #ffe6f0, #ffb6c1)",
            }}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-pinkAccent text-black text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full shadow-sm">
                Most Popular
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold mb-1">{plan.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{plan.subtitle}</p>

              <div className="text-4xl font-bold mb-2">
                ${plan.price}
                <span className="text-base font-normal text-gray-800">
                  /{plan.interval}
                </span>
              </div>

              <p className="text-gray-800 italic mb-6">{plan.description}</p>

              <ul className="mb-6 space-y-2 text-gray-900 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-pinkAccent mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              aria-label={`Select ${plan.title} plan`}
              className="w-full rounded-md py-2 font-semibold bg-pinkAccent text-black border border-black-600 hover:bg-pink-400 transition-colors duration-300"
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
