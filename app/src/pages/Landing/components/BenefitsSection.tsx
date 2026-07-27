import React from 'react';

// Import image assets from src/assets
import flowerImg from '../../../assets/flower.jpg';
import leafImg from '../../../assets/leaf.jpg';
import grasslandImg from '../../../assets/grassland.jpg';
import blueImg from '../../../assets/blue.jpg';


interface BenefitCardProps {
  bgImage: string;
  text: string;
  className?: string;
  overlayStyle?: string;
}

function BenefitCard({ bgImage, text, className = '', overlayStyle = 'bg-black/25' }: BenefitCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 flex items-start transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${className}`}
    >
      {/* Background Image with Scale Animation on Hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark tint overlay for readable text */}
      <div className={`absolute inset-0 transition-opacity duration-300 group-hover:opacity-80 ${overlayStyle}`} />

      {/* Text Overlay */}
      <p className="relative z-10 text-white font-medium text-xs sm:text-sm lg:text-base leading-relaxed tracking-wide drop-shadow-sm max-w-lg">
        {text}
      </p>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section 
      className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-16 text-white font-sans transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-benefits-section, #2e5142)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 sm:mb-12">
          Why should you invest with us?
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* LEFT COLUMN (Columns 1 to 6 on Desktop) */}
          <div className="md:col-span-6 flex flex-col gap-5 sm:gap-6">
            
            {/* Top-Left Card: Flower Background */}
            <BenefitCard
              bgImage={flowerImg}
              text="We are dedicated fixed income specialists with deep bond market experience. Perfect if you seek portfolio stability, regular income and professional bond market expertise."
              className="min-h-[220px] sm:min-h-[280px]"
            />

            {/* Bottom-Left Split Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Bottom-Left Card 1: Grassland */}
              <BenefitCard
                bgImage={grasslandImg}
                text="Licensed and regulated by the Securities Commission Malaysia"
                className="min-h-[200px] sm:min-h-[240px]"
              />

              {/* Bottom-Left Card 2: Shadow Pattern */}
              <BenefitCard
                bgImage={grasslandImg}
                text="Trusted by Institutional and Individual investors"
                className="min-h-[200px] sm:min-h-[240px]"
                overlayStyle="bg-black/35"
              />
            </div>
          </div>

          {/* RIGHT COLUMN (Columns 7 to 12 on Desktop) */}
          <div className="md:col-span-6 flex flex-col gap-5 sm:gap-6">
            
            {/* Top-Right Tall Card: Leaf Background */}
            <BenefitCard
              bgImage={leafImg}
              text="We have diverse investment options, including conventional, Shariah-compliant, and ESG-focused portfolios, providing options that best align with your financial goals, risk preferences and personal values."
              className="min-h-[280px] sm:min-h-[380px] flex-1"
            />

            {/* Bottom-Right Banner Card: Blue Gradient */}
            <BenefitCard
              bgImage={blueImg}
              text="With over 15 years of experience and knowledge of the fixed income space, you can trust us to ensure your investments are in good hands."
              className="min-h-[160px] sm:min-h-[180px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}