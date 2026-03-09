"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import BlogCardTwo from "@/components/sections/blog/BlogCardTwo";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Linkedin, Mail, Phone, BookOpen } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
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
            { name: "Проекты", id: "/blog" },
            { name: "Оборудование", id: "/equipment" },
            { name: "Блог", id: "/blog" },
            { name: "О нас", id: "/" },
          ]}
          button={{ text: "Связаться с нами", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          blogs={[
            {
              id: "1",
              category: ["Производство", "Здоровье"],
              title: "Сыр — богатый источник кальция",
              excerpt: "Полезные свойства натурального сыра и его роль в питании. Современные методы производства для сохранения качества",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-cheese-making-process-showi-1773033990978-5b7e060a.png",
              imageAlt: "Производство сыра",
              authorName: "Inventa",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-industrial-manager-portrait-1773033990226-bdc0bbaa.png",
              date: "15.01.2026",
            },
            {
              id: "2",
              category: ["Технология", "Оборудование"],
              title: "Почему оборудование Inventa выбирают профессионалы?",
              excerpt: "Качество, надежность и инновационные технологии молочного оборудования. Почему лидирующие заводы выбирают наши решения",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-guide-showcasing-various-mi-1773033996615-651f03e7.png",
              imageAlt: "Оборудование для молочного производства",
              authorName: "Inventa",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-business-partner-portrait-f-1773033989571-ecaa6ede.png",
              date: "15.01.2026",
            },
            {
              id: "3",
              category: ["Производство", "Технология"],
              title: "Оборудование для прессования творога",
              excerpt: "Современные технологии прессования творога для получения идеальной консистенции и качества",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/curd-pressing-equipment-and-process-for--1773033990660-1ccdff99.png",
              imageAlt: "Оборудование для прессования творога",
              authorName: "Inventa",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-project-manager-portrait-fo-1773033990124-8dca2cc3.png",
              date: "12.07.2025",
            },
          ]}
          title="Блог и статьи"
          description="Информация о молочном производстве, технологиях и лучших практиках"
          tag="Ресурсы"
          tagIcon={BookOpen}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Решения Inventa полностью преобразили наше производство. Качество, надежность и профессионализм команды превзошли все ожидания. Рекомендуем как лучшего партнера в молочной промышленности."
          rating={5}
          author="Директор проекта, HOLA FOODS"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-business-executive-portrait-1773033989558-d3a641e0.png",
              alt: "Клиент 1",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-industrial-manager-portrait-1773033990226-bdc0bbaa.png",
              alt: "Клиент 2",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-business-partner-portrait-f-1773033989571-ecaa6ede.png",
              alt: "Клиент 3",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-project-manager-portrait-fo-1773033990124-8dca2cc3.png",
              alt: "Клиент 4",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-production-director-portrai-1773033990571-d5b0244e.png",
              alt: "Клиент 5",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-dairy-business-owner-portra-1773033990751-a5090500.png",
              alt: "Клиент 6",
            },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
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