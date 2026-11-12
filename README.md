# Домашнее задание к блоку «Компоненты высшего порядка (HOC)» — Задача «HOC для контроля доступа»

Веб-приложение на React 19 и TypeScript 5, реализующее компонент высшего порядка `withAuthorization` для разграничения прав доступа к защищённым компонентам на основе ролей пользователя.

[![Build Status](https://github.com/ivantr033/ra16-homeworks-authorization/actions/workflows/deploy.yml/badge.svg)](https://github.com/ivantr033/ra16-homeworks-authorization/actions/workflows/deploy.yml)

## 🌐 Ссылка на развертывание (GitHub Pages)

* **Authorization HOC App:** [Открыть приложение](https://ivantr033.github.io/ra16-homeworks-authorization/)

## ⚙️ Реализованные требования и технические характеристики

* **HOC `withAuthorization`:** Принимает оборачиваемый компонент `WrappedComponent` и массив разрешённых ролей `allowedRoles`. Типизирован с использованием дженериков (`<P extends WithAuthorizationProps>`), сохраняя строгую типизацию пропсов без использования `any`.
* **Проверка прав и оптимизация:** Вычисление доступа мемоизировано через `useMemo` с проверкой пересечения ролей пользователя и списка `allowedRoles`. При отсутствии нужной роли или объекта `currentUser` отображается компонент-заглушка `AccessDenied`.
* **Отладка (`displayName`):** Обёрнутый компонент сохраняет исходное имя в формате `withAuthorization(ComponentName)`.
* **Интерактивная проверка:** В корневом компоненте `App` реализовано переключение ролей (Администратор, Пользователь, Гость) для демонстрации всех сценариев доступа.

## 🛠️ Технологический стек

* **Фронтенд:** React 19
* **Язык:** TypeScript 5
* **Сборщик:** Vite 8
* **CI/CD:** GitHub Actions (автоматический деплой на ветку `gh-pages`)

## 🔧 Инструкция по установке и запуску

1. Клонируйте репозиторий и перейдите в папку проекта:

   ```bash
   git clone https://github.com/ivantr033/ra16-homeworks-authorization
   cd ra16-homeworks-authorization
   ```

2. Установите зависимости:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Запустите проект в режиме разработки:

   ```bash
   npm run dev
   ```

   Приложение откроется локально по адресу `http://localhost:5173`.

4. Для создания production-сборки выполните:

   ```bash
   npm run build
   ```
