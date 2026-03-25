"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Crown, Rocket, Shield, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="Electra"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "downward-rays-static-grid",
      }}
      logoText="Electra"
      description="Discover the next generation of electronic devices. Innovation at your fingertips."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/a-sleek-futuristic-electronic-device-pos-1774437041328-2785c23a.png"
      imageAlt="Futuristic electronic device"
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Innovation at Your Fingertips"
      description="We are dedicated to bringing you the most advanced and reliable electronic devices, designed to enhance your daily life and productivity. Our commitment to cutting-edge technology ensures you always have access to the future, today."
      bulletPoints={[
        {
          title: "Unmatched Quality",
          description: "Every device is meticulously crafted and rigorously tested for superior performance and durability.",
          icon: ShieldCheck,
        },
        {
          title: "Seamless Experience",
          description: "Our products offer intuitive interfaces and effortless integration for a truly connected lifestyle.",
          icon: Zap,
        },
        {
          title: "Future-Ready Technology",
          description: "Stay ahead with devices built on the latest advancements, ready for tomorrow's challenges.",
          icon: Rocket,
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/close-up-of-a-hand-interacting-with-a-ho-1774437042092-8e0b80a3.png"
      imageAlt="Hand interacting with holographic tech interface"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: 1,
          tag: "Performance",
          title: "Next-Gen Processors",
          subtitle: "Blazing Fast Speed",
          description: "Equipped with the latest processors, our devices handle demanding tasks with effortless speed and responsiveness.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/an-intricately-designed-microchip-or-pro-1774437041211-77794c19.png",
          imageAlt: "Microchip processor",
        },
        {
          id: 2,
          tag: "Durability",
          title: "Extended Battery Life",
          subtitle: "Power Through Your Day",
          description: "Optimized for longevity, our batteries provide extended usage, keeping you connected longer.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/a-stylized-depiction-of-a-long-lasting-b-1774437042680-428151ea.png",
          imageAlt: "Long lasting battery",
        },
        {
          id: 3,
          tag: "Security",
          title: "Advanced Data Protection",
          subtitle: "Your Privacy, Our Priority",
          description: "Robust encryption and biometric security features safeguard your personal information against threats.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/a-digital-shield-icon-or-a-lock-symbol-s-1774437041893-cadf7ba1.png",
          imageAlt: "Digital security shield",
        },
      ]}
      title="Experience Unrivaled Performance"
      description="Our devices are engineered for excellence, delivering power, efficiency, and intelligence in every interaction."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Electra X Pro Smartphone",
          price: "$999",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/a-high-end-bezel-less-smartphone-with-a--1774437043611-173a91f8.png",
          imageAlt: "Electra X Pro Smartphone",
        },
        {
          id: "p2",
          name: "Electra Aura Smartwatch",
          price: "$299",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/a-stylish-smartwatch-with-a-glowing-cust-1774437041388-41a75b68.png",
          imageAlt: "Electra Aura Smartwatch",
        },
        {
          id: "p3",
          name: "Electra Flow Headphones",
          price: "$199",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/premium-wireless-over-ear-headphones-sle-1774437041163-96f8695e.png",
          imageAlt: "Electra Flow Headphones",
        },
        {
          id: "p4",
          name: "Electra Max Laptop",
          price: "$1499",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/a-thin-powerful-laptop-with-a-backlit-ke-1774437044806-563d713d.png",
          imageAlt: "Electra Max Laptop",
        },
      ]}
      title="Explore Our Latest Innovations"
      description="Discover cutting-edge smartphones, smartwatches, and audio devices designed for the modern world."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          badgeIcon: Shield,
          price: "$49/year",
          subtitle: "Basic coverage for peace of mind",
          features: [
            "1-year extended warranty",
            "Standard customer support",
            "Accidental damage protection",
          ],
        },
        {
          id: "premium",
          badge: "Premium",
          badgeIcon: Crown,
          price: "$99/year",
          subtitle: "Comprehensive protection and VIP service",
          features: [
            "2-year extended warranty",
            "Priority 24/7 support",
            "Accidental damage & theft protection",
            "Free annual device check-up",
          ],
        },
      ]}
      title="Protect Your Investment"
      description="Choose a protection plan that fits your needs and keeps your devices covered."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          handle: "@TechEnthusiast",
          testimonial: "Electra's devices are truly revolutionary. The quality and performance exceed all expectations. My new smartphone is a game-changer!",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/professional-portrait-of-a-young-tech-ce-1774437043243-ba702ad7.png",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "2",
          name: "Michael Chen",
          handle: "@GadgetGuru",
          testimonial: "I've tried many brands, but Electra stands out. Their smartwatch integrates flawlessly with my life, keeping me connected and organized.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/professional-portrait-of-a-male-software-1774437040869-62c2bc49.png",
          imageAlt: "Michael Chen",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          handle: "@DigitalNomad",
          testimonial: "The Electra headphones deliver unparalleled sound quality. Perfect for work and relaxation, they are my essential travel companion.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/professional-portrait-of-a-female-digita-1774437041599-518da996.png",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "4",
          name: "David Kim",
          handle: "@InnovateDaily",
          testimonial: "Electra's commitment to innovation is evident in every product. Their devices are not just gadgets, they're experiences.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/professional-portrait-of-a-male-product--1774437041979-269732b3.png",
          imageAlt: "David Kim",
        },
      ]}
      title="What Our Customers Say"
      description="Real stories from people who love their Electra devices."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What is Electra's warranty policy?",
          content: "All Electra devices come with a standard 1-year manufacturer's warranty. Extended warranty plans are available for purchase.",
        },
        {
          id: "2",
          title: "How do I contact customer support?",
          content: "You can reach our customer support team via email at support@electra.com or by phone at 1-800-ELECTRA during business hours.",
        },
        {
          id: "3",
          title: "Are your products eco-friendly?",
          content: "We are committed to sustainability. Our products are designed with recyclable materials, and we strive to minimize our environmental footprint.",
        },
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Find quick answers to the most common questions about our products and services."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Products",
          items: [
            {
              label: "Smartphones",
              href: "#products",
            },
            {
              label: "Smartwatches",
              href: "#products",
            },
            {
              label: "Headphones",
              href: "#products",
            },
            {
              label: "Laptops",
              href: "#products",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#",
            },
            {
              label: "Warranty",
              href: "#pricing",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Electra. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
