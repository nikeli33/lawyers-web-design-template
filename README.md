<div align="center">

<img src="./assets/.aistudio/image.png" alt="Lawyers Web Design Template" width="800" />

<br>

# Lawyers Web Design Template

**Современный лендинг для юридической компании на React 19 + TypeScript + Vite**

![React 19](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Vite 6](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.21-000?style=flat-square&logo=express&logoColor=white)

[Быстрый запуск](#-быстрый-запуск) · [Структура](#-структура) · [Команды](#-команды) · [Переменные окружения](#-переменные-окружения)

</div>

---

## ⚡ Быстрый запуск

```bash
# 1. Установка зависимостей
npm install

# 2. Запуск dev-режима (фронтенд + бэкенд одновременно)
npm run dev
# → Frontend: http://localhost:3000

# 3. Сборка для продакшна
npm run build

# 4. Предпросмотр продакшн-сборки
npm run preview
```

### Переменные окружения

Создайте файл `.env` в корне проекта (см. `.env.example`):

```env
# Ключ Gemini AI для встроенного AI-функционала
GEMINI_API_KEY="your-gemini-api-key"

# URL приложения (для Cloud Run / деплоя)
APP_URL="https://your-domain.com"
```

---

## 📁 Структура

```
├── src/                          # Frontend (React + TypeScript)
│   ├── components/               # Переиспользуемые компоненты
│   │   ├── IPShield.tsx          # SVG-компонент щита (логотип)
│   │   └── ...                   # UI-компоненты
│   │
│   ├── App.tsx                   # Корневой компонент (весь лендинг)
│   ├── main.tsx                  # Точка входа
│   ├── index.css                 # Глобальные стили (Tailwind + кастомные)
│   └── types.ts                  # Типы и переводы (TRANSLATIONS)
│
├── assets/                       # Статические ассеты
│   └── .aistudio/                # Изображения и файлы AI Studio
│
├── index.html                    # HTML-шаблон
├── vite.config.ts                # Конфигурация Vite (React + Tailwind)
├── tsconfig.json                 # TypeScript-конфигурация
├── tailwind.config.js            # Конфигурация Tailwind CSS
├── postcss.config.js             # PostCSS-конфигурация
├── eslint.config.js              # ESLint-правила
├── package.json                  # Зависимости и скрипты
├── .env.example                  # Пример переменных окружения
└── .gitignore                    # Игнорируемые файлы
```

---

## 🛠 Команды

| Команда           | Описание                                |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Запуск dev-сервера (порт 3000)          |
| `npm run build`   | Vite-сборка продакшна                   |
| `npm run preview` | Предпросмотр продакшн-сборки            |
| `npm run lint`    | Проверка типов TypeScript (`tsc --noEmit`) |
| `npm run clean`   | Очистка dist и server.js                |

---

## 🎨 Ключевые технологии

### Frontend

| Библиотека         | Назначение                               |
| ------------------ | ---------------------------------------- |
| **React 19**       | UI-библиотека                            |
| **TypeScript 5.8** | Типизация                                |
| **Vite 6**         | Сборщик и dev-сервер                     |
| **Tailwind CSS 4** | Утилитарный CSS-фреймворк                |
| **Motion**         | Анимации (Framer Motion API)             |
| **Lucide React**   | Иконки (Award, Cpu, ArrowRight, и др.)   |
| **Express**        | Лёгкий API-сервер                        |
| **dotenv**         | Управление переменными окружения         |
| **@google/genai**  | Интеграция с Gemini AI                   |

---

## 🌍 Локализация

Три языка через объект `TRANSLATIONS`:

```tsx
import { TRANSLATIONS, Language } from './types';

const t = TRANSLATIONS[lang];

// Использование
<h1>{t.heroTitle}</h1>
<button>{t.ctaText}</button>
```

**Поддерживаемые языки:**
- 🇷🇺 **RU** — Русский
- 🇬🇧 **EN** — Английский
- 🇨🇳 **ZH** — Китайский

Переключение языка — через интерфейс в хедере сайта.

---

## 🔧 Конфигурация

| Файл               | Назначение                               |
| ------------------ | ---------------------------------------- |
| `vite.config.ts`   | Плагины React + Tailwind, алиас `@/`     |
| `tsconfig.json`    | Строгие настройки TypeScript, JSX        |
| `.env`             | Переменные окружения (не коммитить!)     |
| `.env.example`     | Шаблон переменных окружения              |

---

## 📄 Лицензия

Проект является собственностью автора. Все права защищены.

---

<div align="center">

**Lawyers Web Design Template** — современный лендинг для юридических услуг

</div>
