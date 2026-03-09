"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import MediaAbout from "@/components/sections/about/MediaAbout";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import BlogCardTwo from "@/components/sections/blog/BlogCardTwo";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  Building2,
  Package,
  Briefcase,
  BookOpen,
  HelpCircle,
  Linkedin,
  Mail,
  Phone,
  Factory,
  Cog,
  BarChart3,
  Droplet,
  Zap,
  Wind,
  CircleDollarSign,
  ArrowLeftRight,
  Send,
} from "lucide-react";

export default function HomePage() {
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
            { name: "Проекты", id: "projects" },
            { name: "Оборудование", id: "equipment" },
            { name: "Блог", id: "blog" },
            { name: "О нас", id: "about" },
          ]}
          button={{
            text: "Связаться с нами",
            href: "#contact",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Полные решения для переработки молока «под ключ»"
          description="От мини-заводов до крупных промышленных комплексов. Проектирование, поставка оборудования, монтаж и ввод в эксплуатацию молочных перерабатывающих заводов с 2008 года."
          tag="Надежный партнер в молочной промышленности"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Просмотреть проекты",
              href: "/projects",
            },
            {
              text: "Узнать больше",
              href: "#about",
            },
          ]}
          background={{
            variant: "grid",
          }}
          dashboard={{
            title: "Молочный завод «Inventa»",
            logoIcon: Factory,
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/modern-dairy-processing-factory-with-sta-1773033990783-cf4a37d7.png",
            searchPlaceholder: "Поиск оборудования...",
            buttons: [
              {
                text: "Получить консультацию",
                href: "#contact",
              },
              {
                text: "Скачать каталог",
                href: "#",
              },
            ],
            sidebarItems: [
              { icon: Factory },
              { icon: Cog },
              { icon: BarChart3 },
            ],
            stats: [
              {
                title: "Завершено проектов",
                values: [50, 75, 100],
                description: "Успешно реализовано",
              },
              {
                title: "Производительность",
                values: [500, 750, 1000],
                valueSuffix: "т/день",
                description: "Общий объем",
              },
              {
                title: "Клиентов",
                values: [25, 50, 100],
                description: "По всему миру",
              },
            ],
            chartTitle: "Объем производства",
            chartData: [
              { value: 45 },
              { value: 62 },
              { value: 78 },
              { value: 55 },
              { value: 88 },
            ],
            listTitle: "Типы оборудования",
            listItems: [
              {
                icon: Droplet,
                title: "Резервуары охлаждения молока",
                status: "В наличии",
              },
              {
                icon: Zap,
                title: "Сепараторы молока",
                status: "Доступно",
              },
              {
                icon: Wind,
                title: "Гомогенизаторы",
                status: "Готово",
              },
            ],
          }}
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
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-dairy-processing-workflow-s-1773033990882-ec842b30.png",
              imageAlt: "Опыт в молочном производстве",
            },
            {
              id: "2",
              value: "100+",
              title: "Завершено проектов",
              description: "От мини-заводов до промышленных комплексов",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/modern-completed-dairy-processing-facili-1773033991118-2dd6f8bf.png",
              imageAlt: "Завершенные проекты молочных заводов",
            },
            {
              id: "3",
              value: "50+",
              title: "Активных клиентов",
              description: "Партнеры по всему миру",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-stainless-steel-milk-coolin-1773033990077-b9db6fba.png",
              imageAlt: "Клиентская база Inventa",
            },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Комплексные решения для молочной промышленности"
          description="INVENTA — надежный партнер в переработке молока и производстве пищевых продуктов. Мы предоставляем полный спектр услуг: от отдельных машин и оборудования до готовых заводов и комплексных решений «под ключ». Наши передовые технологии и многолетний опыт гарантируют высокое качество вашей продукции и максимальную эффективность производства."
          tag="О компании"
          tagIcon={Building2}
          buttons={[
            {
              text: "Наши услуги",
              href: "#equipment",
            },
            {
              text: "Связаться",
              href: "#contact",
            },
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-dairy-processing-workflow-s-1773033990882-ec842b30.png"
          imageAlt="Процесс переработки молока Inventa"
          useInvertedBackground={false}
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
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-stainless-steel-milk-coolin-1773033990077-b9db6fba.png",
              imageAlt: "Резервуар охлаждения молока",
              isFavorited: false,
            },
            {
              id: "2",
              name: "Сепаратор молока",
              price: "По запросу",
              variant: "Центрифужный, высокая точность",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/modern-centrifugal-separator-for-dairy-p-1773033990844-29882dec.png",
              imageAlt: "Сепаратор молока",
            },
            {
              id: "3",
              name: "Пастеризатор",
              price: "По запросу",
              variant: "Система контроля температуры",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/professional-pasteurization-equipment-wi-1773033990766-01e90238.png",
              imageAlt: "Оборудование для пастеризации",
            },
            {
              id: "4",
              name: "Гомогенизатор",
              price: "По запросу",
              variant: "Высокое давление, точная эмульсия",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ah9MKFPAiLYJWPEswu8WowW7kP/advanced-homogenizer-equipment-for-dairy-1773033989752-80cbd4fb.png",
              imageAlt: "Гомогенизатор молока",
            },
          ]}
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

      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "Какие услуги предоставляет Inventa?",
              content:
                "Мы предоставляем полный спектр услуг: от проектирования молочных заводов до поставки оборудования, монтажа и ввода в эксплуатацию. Наши решения охватывают отдельное оборудование, модульные системы и полные комплексы «под ключ».",
            },
            {
              id: "2",
              title: "Какой опыт у компании Inventa?",
              content:
                "Компания работает с 2008 года и успешно реализовала более 100 проектов в молочной промышленности. Наш опыт охватывает проекты любого размера — от мини-заводов до крупных промышленных комплексов.",
            },
            {
              id: "3",
              title: "Какое гарантийное обслуживание предоставляется?",
              content:
                "Мы предоставляем комплексную гарантию на все поставляемое оборудование, а также техническую поддержку и обслуживание. Наша команда готова помочь с обучением персонала и оптимизацией процессов.",
            },
            {
              id: "4",
              title: "Как начать сотрудничество?",
              content:
                "Свяжитесь с нашей командой через форму контактов на сайте или позвоните по указанному номеру. Мы проведем консультацию, обсудим ваши требования и предложим оптимальное решение.",
            },
            {
              id: "5",
              title: "Предоставляете ли вы услуги по всему миру?",
              content:
                "Да, мы работаем с клиентами по всему миру. Помимо проектирования и поставки, мы обеспечиваем доставку, установку и запуск оборудования в любой точке планеты.",
            },
            {
              id: "6",
              title: "Какие технологические стандарты соблюдаются?",
              content:
                "Все наши решения соответствуют международным стандартам качества и пищевой безопасности. Мы используем передовые технологии и лучшие практики в молочной промышленности.",
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