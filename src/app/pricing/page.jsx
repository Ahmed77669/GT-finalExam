'use client'
import React from 'react';
import { Poppins } from "next/font/google";
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const pricingPlans = [
  { plan: 'Economy', price: '50 EGP', attempts: '10 Attempts' },
  { plan: 'Gold', price: '150 EGP', attempts: '40 Attempts' },
  { plan: 'Premium', price: '299 EGP', attempts: '100 Attempts' },
];

const PricingCard = ({ plan, price, attempts }) => (
  <div className={`pricing ${poppins.className}`}>
    <div className="pricing-plan">{plan}</div>
    <div className="price">{price}</div>
    <div className="attemps-number">{attempts}</div>
    <button className="get-it">Get it</button>
  </div>
);
const pageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};


const Pricing = () => {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
    <section>
      <div className={`head ${poppins.className}`} style={{ fontWeight: '400', marginBottom: '80px', color: '#006565' }}>
        Choose the right plan for you
      </div>
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <Footer />
    </section>
    </motion.div>
  );
};

export default Pricing;