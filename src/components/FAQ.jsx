import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Elysian?",
      answer:
        "Elysian is a premier event that brings together innovation, creativity, and celebration. It's a platform where ideas meet execution, and where every moment is crafted to inspire and engage.",
    },
    {
      question: "When and where will the event take place?",
      answer:
        "Elysian will be held from November 15-17, 2025. The venue details will be announced soon. Stay tuned to our social media channels for updates.",
    },
    {
      question: "How can I register for the event?",
      answer:
        "You can register by clicking the 'Register Now' button on our website. Fill out the registration form with your details, and you'll receive a confirmation email with further instructions.",
    },
    {
      question: "What are the ticket prices?",
      answer:
        "We offer various ticket categories including Early Bird, Standard, and VIP passes. Prices vary based on the category and benefits included. Check our registration page for detailed pricing.",
    },
    {
      question: "Will there be food and refreshments?",
      answer:
        "Yes! We'll have a variety of food stalls and refreshment areas throughout the venue. Special dietary requirements can be accommodated - please mention them during registration.",
    },
    {
      question: "Can I volunteer at Elysian?",
      answer:
        "Absolutely! We're always looking for enthusiastic volunteers. Visit our Team page or contact us directly to learn more about volunteer opportunities and how you can be part of the Elysian experience.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-blue-200 py-20 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Have any doubts?
          </h2>
          <p className="text-xl text-gray-700">
            Find answers to commonly asked questions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="text-purple-600 text-xl" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-800 text-lg mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Background Image at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
        <img
          src="/heroImage.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-200 via-blue-200/50 to-transparent" />
      </div>
    </div>
  );
}

export default FAQ;
