import React from "react";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";

const pricingPlans = [
  {
    id: "monthly",
    title: "Pro - Monthly",
    price: "$10.99",
    features: ["Get Full Integrations", " Advanced Reports","Ad-Free"],
    buttonText: "Select Monthly",
  },
  {
    id: "lifetime",
    title: "Lifetime - Founders",
    price: "$179",
    subtitle: "one-time payment",
    features: [
      "All Premium features",
      "New features added regularly — included with your subscription",
    ],
    buttonText: "Select Lifetime",
    progress: 38.7,
    progressText: "387 of 1000 claimed",
    limitedText: "Limited to first 1000 supporters",
  },
  {
    id: "annual",
    title: "Pro - Annual",
    price: "$98.99/yr",
    subtitle: "$8.25/month • Save 25%",
    features: ["All Premium features", "2 months free"],
    buttonText: "Select Annual",
  },
];

const PricingCard = ({ plan }) => {
  const isLifetime = plan.id === "lifetime";

  return (
    <div className="relative py-16 px-10 w-[350px] rounded-[15px] overflow-hidden bg-[#0077c4cc] flex flex-col items-center justify-between p-8">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h3 className="font-semibold text-white text-2xl mb-2">{plan.title}</h3>
        <div className="font-bold text-white text-[32px]">{plan.price}</div>
        {plan.subtitle && (
          <p className="font-medium text-white text-lg mt-1">{plan.subtitle}</p>
        )}
      </div>

      {/* Progress Section for Lifetime */}
      {isLifetime && (
        <div className="text-center mb-6 w-full">
          <p className="text-white text-lg mb-2">{plan.limitedText}</p>
          <Progress
            value={plan.progress}
            className="w-full h-[13px] bg-white rounded-[15px] mb-2"
          />
          <p className="text-white text-lg">{plan.progressText}</p>
        </div>
      )}

      {/* Features List */}
      <div className="w-full mb-6">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 mb-4 last:mb-0">
            <div className="w-5 h-5 bg-[#0cbf02] rounded-full mt-1" />
            <p className="text-white text-lg flex-1">{feature}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <Button className="w-full h-[51px] rounded-[10px] bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 text-white font-semibold border-none hover:opacity-90 transition">
        {plan.buttonText}
      </Button>
    </div>
  );
};

export const UniqueSellingPointsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[617px] bg-white flex flex-col items-center justify-center">
      {/* Pricing Cards Wrapper */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Decorative Elements */}
      {/* <div className="mt-6">
        <p className="text-[#0077c4] text-sm text-center">
          All plans include 30-day money-back guarantee
        </p>
      </div> */}
    </section>
  );
};
