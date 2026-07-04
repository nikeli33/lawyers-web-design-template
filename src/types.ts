export type Language = 'RU' | 'EN' | 'ZH';

export interface Translation {
  // Logo
  logoTitle: string;
  logoSubtitle: string;

  // Navigation Links
  navHome: string;
  navServices: string;
  navProjects: string;
  navBlog: string;
  navAcademy: string;
  navResources: string;
  navMedia: string;
  navInnovations: string;
  navTools: string;

  // CTA Buttons
  ctaText: string;

  // Hero Section
  heroBadge: string;
  heroHeadingRow1: string;
  heroHeadingRow2: string;
  heroHeadingRow3: string;
  heroSubtitle: string;

  // Awards
  award1Title: string;
  award1Subtitle: string;
  award1Note: string;

  // Award 2
  award2Title: string;
  award2Subtitle: string;
  award2Note: string;

  // Expertise Section
  expertiseTitle: string;
  expertiseYears: string;
  expertiseYearsLabel: string;
  expertiseDesc: string;
  commonLearnMore: string;

  // Services
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;

  // Footer
  footerCtaTitleLine1: string;
  footerCtaTitleLine2: string;
  commonConsultation: string;
  footerContacts: string;
  footerSocials: string;
  footerRequisites: string;

  // Requisites labels and values
  requisitesIpLabel: string;
  requisitesIpValue: string;
  requisitesInnLabel: string;
  requisitesOgrnipLabel: string;
  requisitesRknLabel: string;
  requisitesOkvedLabel: string;
  requisitesOkvedValue: string;

  // Footer Bottom Links
  footerLegalInfo: string;
  footerPrivacyPolicy: string;

  // Consultation Form
  consultationTitle: string;
  consultationPlaceholder: string;
  consultationSubmit: string;

  // Tracking Section
  trackingTitle: string;
  trackingText: string;
  trackingLink: string;
}

export const TRANSLATIONS: Record<Language, Translation> = {
  RU: {
    logoTitle: 'КОДЕКС',
    logoSubtitle: 'IT Право',
    navHome: 'Главная',
    navServices: 'Направления',
    navProjects: 'Проекты',
    navBlog: 'Статьи',
    navAcademy: 'Академия',
    navResources: 'Ресурсы',
    navMedia: 'Медиа',
    navInnovations: 'Инновации',
    navTools: 'Инструменты',
    ctaText: 'Обсудить задачу',
    heroBadge: 'Практика интеллектуального права',
    heroHeadingRow1: 'Создаем',
    heroHeadingRow2: 'уверенность',
    heroHeadingRow3: 'в завтрашнем дне',
    heroSubtitle: 'для вашего бизнеса и интеллектуальных активов',
    award1Title: 'Входим в число ведущих команд России',
    award1Subtitle: 'по защите интеллектуальных прав',
    award1Note: 'рейтинги Право 300 и «Коммерсантъ»',
    award2Title: 'Развиваем направление LegalTech',
    award2Subtitle: '«Цифровой юридический ассистент»',
    award2Note: 'совместно с Инновационным центром «Ломоносов»',
    
    expertiseTitle: 'Направления деятельности',
    expertiseYears: '15+ лет',
    expertiseYearsLabel: 'успешной практики',
    expertiseDesc: 'Специализированная правовая поддержка для технологических компаний, стартапов и правообладателей интеллектуальной собственности по всей России и СНГ.',
    commonLearnMore: 'Подробнее о направлении',

    service1Title: 'Интеллектуальная собственность',
    service1Desc: 'Регистрация товарных знаков, депонирование, защита программных кодов, патентование IT-решений и защита авторских прав в судах.',
    service2Title: 'IT-контракты и аудит',
    service2Desc: 'Разработка лицензионных соглашений, договоров на разработку ПО (NDA, SLA) и комплексный правовой аудит интеллектуальных активов.',
    service3Title: 'LegalTech инновации',
    service3Desc: 'Разработка цифровых юридических помощников, интеграция ИИ и смарт-контрактов для автоматизации внутренних процессов вашего бизнеса.',
    service4Title: 'Корпоративное IT-право',
    service4Desc: 'Сопровождение M&A сделок, структурирование опционов сотрудников, подготовка к привлечению инвестиций и налоговое планирование.',

    footerCtaTitleLine1: 'Готовы обсудить',
    footerCtaTitleLine2: 'ваш проект?',
    commonConsultation: 'Получить консультацию',
    footerContacts: 'Контакты',
    footerSocials: 'Мы в соцсетях',
    footerRequisites: 'Реквизиты',

    requisitesIpLabel: 'ИП',
    requisitesIpValue: 'Акулинин Николай Владимирович',
    requisitesInnLabel: 'ИНН',
    requisitesOgrnipLabel: 'ОГРНИП',
    requisitesRknLabel: 'РКН',
    requisitesOkvedLabel: 'ОКВЭД',
    requisitesOkvedValue: '62.01 (основной), 62.02, 62.09',

    footerLegalInfo: 'Юридическая информация',
    footerPrivacyPolicy: 'Политика конфиденциальности',

    consultationTitle: 'Запишитесь на юридическую\nконсультацию',
    consultationPlaceholder: 'Введите ваш номер телефона',
    consultationSubmit: 'ОТПРАВИТЬ',

    trackingTitle: 'Контролируйте ход дела\nв режиме реального времени\n24/7',
    trackingText: 'Мы сделали юридические услуги полностью прозрачными. В личном кабинете вы можете отслеживать каждый этап работы над вашим делом, мгновенно согласовывать подготовленные документы и получать прямые отчеты от ведущего адвоката без лишних звонков.',
    trackingLink: 'Личный кабинет',
  },
  EN: {
    logoTitle: 'CODEX',
    logoSubtitle: 'IT Law',
    navHome: 'Home',
    navServices: 'Services',
    navProjects: 'Projects',
    navBlog: 'Blog',
    navAcademy: 'Academy',
    navResources: 'Resources',
    navMedia: 'Media',
    navInnovations: 'Innovations',
    navTools: 'Tools',
    ctaText: 'Discuss a project',
    heroBadge: 'Intellectual Property Practice',
    heroHeadingRow1: 'Building',
    heroHeadingRow2: 'confidence',
    heroHeadingRow3: 'in tomorrow',
    heroSubtitle: 'for your business and intellectual assets',
    award1Title: "Among Russia's leading legal teams",
    award1Subtitle: 'in intellectual property protection',
    award1Note: 'Pravo 300 & Kommersant rankings',
    award2Title: 'Pioneering LegalTech',
    award2Subtitle: '"Digital Legal Assistant"',
    award2Note: 'in partnership with Lomonosov Innovation Center',

    expertiseTitle: 'Areas of Practice',
    expertiseYears: '15+ years',
    expertiseYearsLabel: 'of successful practice',
    expertiseDesc: 'Specialized legal support for tech companies, startups, and intellectual property rights holders in Russia, CIS and globally.',
    commonLearnMore: 'Learn more about this area',

    service1Title: 'Intellectual Property',
    service1Desc: 'Trademark registration, IP escrow, software code defense, patenting of software solutions and copyright enforcement in courts.',
    service2Title: 'IT Contracts & Audits',
    service2Desc: 'Drafting software license agreements, SaaS, NDA, SLA, and comprehensive legal audit (due diligence) of intellectual assets.',
    service3Title: 'LegalTech Innovation',
    service3Desc: 'Development of digital legal assistants, integration of AI and smart contracts to automate legal workflows and operations.',
    service4Title: 'Corporate IT Law',
    service4Desc: 'M&A transaction support, employee stock option structuring (ESOP), investment preparation, and international tax planning.',

    footerCtaTitleLine1: 'Ready to discuss',
    footerCtaTitleLine2: 'your project?',
    commonConsultation: 'Get consultation',
    footerContacts: 'Contacts',
    footerSocials: 'We are in social networks',
    footerRequisites: 'Requisites',

    requisitesIpLabel: 'IE',
    requisitesIpValue: 'Akulinin Nikolay Vladimirovich',
    requisitesInnLabel: 'TAX ID (INN)',
    requisitesOgrnipLabel: 'OGRNIP',
    requisitesRknLabel: 'RKN ID',
    requisitesOkvedLabel: 'OKVED',
    requisitesOkvedValue: '62.01 (primary), 62.02, 62.09',

    footerLegalInfo: 'Legal Information',
    footerPrivacyPolicy: 'Privacy Policy',

    consultationTitle: 'Sign up for a legal\nconsultation',
    consultationPlaceholder: 'Enter your phone number',
    consultationSubmit: 'SEND',

    trackingTitle: 'Only with us you can\nmonitor the process online\n24/7',
    trackingText: 'We provide clients with access to a private portal where you can monitor the progress of your case in real time, view prepared documents, and communicate with your lead attorney.',
    trackingLink: 'Client Dashboard',
  },
  ZH: {
    logoTitle: '法典',
    logoSubtitle: 'IT法律',
    navHome: '首页',
    navServices: '服务领域',
    navProjects: '项目案例',
    navBlog: '文章',
    navAcademy: '学院',
    navResources: '资源',
    navMedia: '媒体',
    navInnovations: '创新',
    navTools: '工具',
    ctaText: '咨询项目',
    heroBadge: '知识产权法律实践',
    heroHeadingRow1: '构建',
    heroHeadingRow2: '信心',
    heroHeadingRow3: '面向未来',
    heroSubtitle: '为您的业务和知识产权资产保驾护航',
    award1Title: '俄罗斯领先的法律团队之一',
    award1Subtitle: '专注于知识产权保护',
    award1Note: 'Pravo 300 和《商人报》排名',
    award2Title: '发展法律科技',
    award2Subtitle: '“数字法律助手”',
    award2Note: '与罗蒙诺索夫创新中心合作',

    expertiseTitle: '业务实践方向',
    expertiseYears: '15+ 年',
    expertiseYearsLabel: '成功执业经验',
    expertiseDesc: '为俄罗斯、独联体及全球范围内的技术公司、初创企业和知识产权所有者提供专业的法律支持。',
    commonLearnMore: '了解该领域详情',

    service1Title: '知识产权保护',
    service1Desc: '商标注册、知识产权托管、软件代码保护、IT解决方案专利申请以及法庭版权维权。',
    service2Title: 'IT合同与法律审计',
    service2Desc: '起草软件许可协议、SaaS合同、NDA、SLA，以及知识产权资产的全面法律审计与尽职调查。',
    service3Title: '法律科技创新',
    service3Desc: '开发数字法律助手，融合人工智能和智能合约，推动企业内部流程的智能化、自动化。',
    service4Title: 'IT企业合规与并购',
    service4Desc: '企业并购（M&A）交易支持、员工期权（ESOP）结构设计、投融资合规整改与全球税务规划。',

    footerCtaTitleLine1: '准备好讨论',
    footerCtaTitleLine2: '您的项目了吗？',
    commonConsultation: '获取专家咨询',
    footerContacts: '联系方式',
    footerSocials: '社交媒体',
    footerRequisites: '企业工商信息',

    requisitesIpLabel: '个体工商户',
    requisitesIpValue: 'Akulinin Nikolay Vladimirovich',
    requisitesInnLabel: '税号 (INN)',
    requisitesOgrnipLabel: '国家登记号 (OGRNIP)',
    requisitesRknLabel: '监管机构注册号 (RKN)',
    requisitesOkvedLabel: '行业代码 (OKVED)',
    requisitesOkvedValue: '62.01 (主要), 62.02, 62.09',

    footerLegalInfo: '法律声明与信息',
    footerPrivacyPolicy: '隐私政策服务条款',

    consultationTitle: '预约法律\n咨询服务',
    consultationPlaceholder: '请输入您的电话号码',
    consultationSubmit: '发送',

    trackingTitle: '只有在我们这里，您才能\n24/7在线追踪\n案件进程',
    trackingText: '我们为客户提供专属私人后台。您可以实时监督案件进展，查看准备好的法律文件，并与您的主审律师进行高效沟通。',
    trackingLink: '客户后台管理',
  },
};
