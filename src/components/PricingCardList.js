import React from 'react';
import PricingCard from './PricingCard';
import '../styles/PricingCardList.css';

const PricingCardList = () => {
  const plans = [
    {
      plan: 'Free',
      price: '$0',
      features: [
        '300 emails/day',
        'Customizable email templates',
        'Drag & drop editor',
        'Transactional (API, SMTP, Webhooks)',
        'SMS & WhatsApp campaigns',
      ],
      link: '#',
    },
    {
      plan: 'Starter',
      price: '$15',
      features: [
        '1,000 emails/month',
        'Advanced email analytics',
        'A/B testing',
        'Basic CRM integration',
        'Email support',
      ],
      link: '#',
    },
    {
      plan: 'Business',
      price: '$49',
      features: [
        '10,000 emails/month',
        'Priority customer support',
        'Advanced CRM integration',
        'Marketing automation',
        'Custom branding',
      ],
      link: '#',
    },
    {
      plan: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        'Unlimited emails',
        'Dedicated account manager',
        'Custom API integrations',
        'Advanced security features',
        '24/7 support',
      ],
      link: '#',
    },
  ];

  return (
    <div className="pricing-card-list">
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PricingCardList;
