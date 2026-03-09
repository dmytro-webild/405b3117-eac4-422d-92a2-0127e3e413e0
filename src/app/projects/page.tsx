"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import BlogCardTwo from "@/components/sections/blog/BlogCardTwo";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import {
  Briefcase,
  HelpCircle,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export default function ProjectsPage() {
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
          navItems={[
            { name: "Проекты", id: "/" },
            { name: "Оборудование", id: "/" },
            { name: "Блог", id: "/" },
            { name: "О нас", id: "/" },
          ]}
          button={{
            text: "Связаться с нами",
            href: "#contact",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="projects" data-section="projects">
        <BlogCardTwo
          title="Завершенные проекты"
          description="Портфолио успешно реализованных молочных заводов и производственных комплексов"
          tag="Кейсы"
          tagIcon={Briefcase}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: ["Молочный завод", "2023"],
              title: "HOLA FOODS - Модульный молочный комплекс",
              excerpt:
                "Комплексное решение под ключ для производства молочных продуктов с полной автоматизацией и контролем качества",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/modern-completed-dairy-processing-facili-1773033991118-2dd6f8bf.png?_wi=2",
              imageAlt: "Проект HOLA FOODS",
              authorName: "Inventa Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-dairy-processing-expert-eng-1773033990173-6ef76f5e.png",
              date: "2023",
            },
            {
              id: "2",
              category: ["Молочный завод", "2022"],
              title: "MUSA SERVIS - Интегрированная система производства",
              excerpt:
                "Полностью оборудованный молочный комплекс с линией упаковки и системой контроля качества",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-dairy-processing-facility-m-1773033990711-8b78b137.png",
              imageAlt: "Проект MUSA SERVIS",
              authorName: "Inventa Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/operations-manager-professional-portrait-1773033990825-932aef2f.png",
              date: "2022",
            },
            {
              id: "3",
              category: ["Органическое производство", "2022"],
              title: "BIO NATURAL FOOD - Натуральное молочное производство",
              excerpt:
                "Экологичное производство органических молочных продуктов с соответствием международным стандартам",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/bio-natural-food-facility-showcasing-org-1773033990920-d52e27e5.png",
              imageAlt: "Проект BIO NATURAL FOOD",
              authorName: "Inventa Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-business-executive-portrait-1773033989558-d3a641e0.png",
              date: "2022",
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "Какой был размер проекта HOLA FOODS?",
              content:
                "Проект HOLA FOODS включал полный молочный комплекс производительностью 500 тонн молока в день с четырьмя линиями обработки и автоматизированной системой упаковки.",
            },
            {
              id: "2",
              title: "Сколько времени заняла реализация MUSA SERVIS?",
              content:
                "Проект MUSA SERVIS был реализован за 14 месяцев от проектирования до полного ввода в эксплуатацию, включая обучение персонала и оптимизацию процессов.",
            },
            {
              id: "3",
              title: "Какие стандарты используются в BIO NATURAL FOOD?",
              content:
                "BIO NATURAL FOOD соответствует европейским стандартам органического производства, включая ECOCERT, а также сертификациям ISO 22000 для систем управления безопасностью пищевых продуктов.",
            },
          ]}
          title="Часто задаваемые вопросы о проектах"
          description="Дополнительная информация о наших завершенных проектах"
          tag="Информация"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Обсудить ваш проект"
          description="Заинтересованы в похожем проекте? Свяжитесь с нами, и наша команда экспертов поможет реализовать ваше видение молочного завода."
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
            placeholder: "Расскажите о вашем проекте молочного завода...",
            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-business-meeting-in-modern--1773033989728-1ee45ec2.png?_wi=2"
          imageAlt="Проектное обсуждение"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Отправить запрос о проекте"
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