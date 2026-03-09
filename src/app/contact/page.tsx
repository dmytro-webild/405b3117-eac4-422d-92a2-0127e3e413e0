"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const navItems = [
    { name: "Проекты", id: "projects" },
    { name: "Оборудование", id: "equipment" },
    { name: "Блог", id: "blog" },
    { name: "О нас", id: "about" },
  ];

  const handleContactSubmit = (data: Record<string, string>) => {
    console.log("Contact form submitted:", data);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSmallSizeLargeTitles"
      background="grid"
      cardStyle="soft-shadow"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Inventa"
          navItems={navItems}
          button={{
            text: "Связаться с нами",
            href: "#contact",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Свяжитесь с нами"
          description="Готовы обсудить ваш молочный проект? Заполните форму или позвоните нам. Наша команда экспертов ответит на все вопросы и поможет найти идеальное решение."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Ваше имя",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email адрес",
              required: true,
            },
            {
              name: "company",
              type: "text",
              placeholder: "Название компании",
              required: false,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Номер телефона",
              required: false,
            },
          ]}
          textarea={{
            name: "message",
            placeholder: "Опишите ваш проект и задачи...",
            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-business-meeting-in-modern--1773033989728-1ee45ec2.png"
          imageAlt="Контакт и консультация"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Отправить запрос"
          onSubmit={handleContactSubmit}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Inventa"
          copyrightText="© 2025 Inventa. Все права защищены. Решения для переработки молока."
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/inventa",
              ariaLabel: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:info@inventa.uz",
              ariaLabel: "Email",
            },
            {
              icon: Phone,
              href: "tel:+998900000000",
              ariaLabel: "Телефон",
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}