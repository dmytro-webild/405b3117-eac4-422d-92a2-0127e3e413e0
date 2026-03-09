"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Linkedin, Mail, Phone, Package, TrendingUp, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function EquipmentPage() {
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

      <div id="equipment" data-section="equipment">
        <ProductCardFour
          title="Наше оборудование"
          description="Профессиональное оборудование для переработки молока и производства молочных продуктов"
          tag="Каталог"
          tagIcon={Package}
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Резервуар охлаждения молока",
              price: "По запросу",
              variant: "Высокоемкость, полная стерилизация",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-stainless-steel-milk-coolin-1773033990077-b9db6fba.png?_wi=3",
              imageAlt: "Резервуар охлаждения молока",
              isFavorited: false,
            },
            {
              id: "2",
              name: "Сепаратор молока",
              price: "По запросу",
              variant: "Центрифужный, высокая точность",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/modern-centrifugal-separator-for-dairy-p-1773033990844-29882dec.png?_wi=2",
              imageAlt: "Сепаратор молока",
            },
            {
              id: "3",
              name: "Пастеризатор",
              price: "По запросу",
              variant: "Система контроля температуры",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-pasteurization-equipment-wi-1773033990766-01e90238.png?_wi=2",
              imageAlt: "Оборудование для пастеризации",
            },
            {
              id: "4",
              name: "Гомогенизатор",
              price: "По запросу",
              variant: "Высокое давление, точная эмульсия",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/advanced-homogenizer-equipment-for-dairy-1773033989752-80cbd4fb.png?_wi=2",
              imageAlt: "Гомогенизатор молока",
            },
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Наш опыт и достижения"
          description="Два десятилетия инноваций и надежного партнерства в молочной промышленности"
          tag="Статистика успеха"
          tagIcon={TrendingUp}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "17+",
              title: "Лет опыта",
              description: "Лидирующий поставщик с 2008 года",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-dairy-processing-workflow-s-1773033990882-ec842b30.png?_wi=3",
              imageAlt: "Опыт в молочном производстве",
            },
            {
              id: "2",
              value: "100+",
              title: "Завершено проектов",
              description: "От мини-заводов до промышленных комплексов",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/modern-completed-dairy-processing-facili-1773033991118-2dd6f8bf.png?_wi=3",
              imageAlt: "Завершенные проекты молочных заводов",
            },
            {
              id: "3",
              value: "50+",
              title: "Активных клиентов",
              description: "Партнеры по всему миру",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-stainless-steel-milk-coolin-1773033990077-b9db6fba.png?_wi=4",
              imageAlt: "Клиентская база Inventa",
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "Какие услуги предоставляет Inventa?",
              content: "Мы предоставляем полный спектр услуг: от проектирования молочных заводов до поставки оборудования, монтажа и ввода в эксплуатацию. Наши решения охватывают отдельное оборудование, модульные системы и полные комплексы «под ключ».",
            },
            {
              id: "2",
              title: "Какой опыт у компании Inventa?",
              content: "Компания работает с 2008 года и успешно реализовала более 100 проектов в молочной промышленности. Наш опыт охватывает проекты любого размера — от мини-заводов до крупных промышленных комплексов.",
            },
            {
              id: "3",
              title: "Какое гарантийное обслуживание предоставляется?",
              content: "Мы предоставляем комплексную гарантию на все поставляемое оборудование, а также техническую поддержку и обслуживание. Наша команда готова помочь с обучением персонала и оптимизацией процессов.",
            },
            {
              id: "4",
              title: "Как начать сотрудничество?",
              content: "Свяжитесь с нашей командой через форму контактов на сайте или позвоните по указанному номеру. Мы проведем консультацию, обсудим ваши требования и предложим оптимальное решение.",
            },
            {
              id: "5",
              title: "Предоставляете ли вы услуги по всему миру?",
              content: "Да, мы работаем с клиентами по всему миру. Помимо проектирования и поставки, мы обеспечиваем доставку, установку и запуск оборудования в любой точке планеты.",
            },
            {
              id: "6",
              title: "Какие технологические стандарты соблюдаются?",
              content: "Все наши решения соответствуют международным стандартам качества и пищевой безопасности. Мы используем передовые технологии и лучшие практики в молочной промышленности.",
            },
          ]}
          title="Часто задаваемые вопросы"
          description="Ответы на основные вопросы о наших услугах, оборудовании и процессе реализации проектов"
          tag="Помощь"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
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