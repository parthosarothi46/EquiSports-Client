import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle the subscription logic here (e.g., API call)
      console.log(`Subscribed with email: ${email}`);
      setIsSubscribed(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-gradient-to-t from-purple-200 via-purple-50 to-purple-50 py-20 px-4">
      <div className="max-w-4xl w-full mx-auto text-center">
        <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 leading-[45px]">
          Subscribe Our Newsletter
        </h2>
        <p className="text-base text-gray-600">
          Stay updated with our latest news and exclusive offers. Join our
          community today!
        </p>

        {isSubscribed ? (
          <p className="mt-6 text-green-600 font-semibold">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="mt-12 bg-white flex items-center sm:p-4 p-2 max-w-xl mx-auto rounded-2xl border border-gray-300"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent py-4 px-2 text-gray-800 text-base border-none outline-none"
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white text-base font-semibold py-4 px-4 sm:px-8 rounded-xl focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
