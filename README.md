# Movie Recommendation App

A **real-world movie recommendation application** built as part of the **ProDev Frontend program**, designed to showcase scalable, user-focused development practices. This project leverages modern frontend technologies to deliver an engaging experience for browsing, saving, and recommending movies.

---

## Overview

This application allows users to:

* Browse trending and recommended movies.
* View detailed movie pages via **dynamic routing**.
* Save their favorite movies locally or through an API backend.
* Interact with a responsive, visually appealing dashboard.

---

## Project Goals

1. **Dynamic Routing**

   * Implement detailed movie pages using Next.js routing.

2. **User Personalization**

   * Allow users to save and manage their favorite movies locally or via API.

3. **Interactive Dashboard**

   * Build a responsive and engaging UI for exploring movies and recommendations.

---

## Technologies Used

* **Next.js** (React Framework) → for SSR, routing, and performance.
* **React Native (optional PWA/Mobile)** → cross-platform flexibility.
* **TypeScript** → type safety and scalability.
* **Styled Components** → clean and reusable styling.

---

## Key Features

1. **API Integration**

   * Fetch trending/recommended movies from a public movie API.
   * Implement error handling and loading states.

2. **Dynamic Routing**

   * Fast, SEO-friendly detailed movie pages.

3. **Save Favorite Movies**

   * Local storage support for quick saving.
   * Optional backend API integration.

4. **Responsive & Interactive UI**

   * Works seamlessly across desktop and mobile.
   * Smooth animations, hover states, and polished movie cards.

---

## Implementation Process

### Git Commit Workflow

* **Initial Setup**

  * `feat: initialize Next.js project with TypeScript`
  * `feat: integrate movie API for fetching data`

* **Feature Development**

  * `feat: implement detailed movie pages with dynamic routing`
  * `feat: add functionality to save favorite movies`

* **UI Enhancements**

  * `style: design UI using Styled Components`

* **Bug Fixes**

  * `fix: resolve rendering issues on dynamic pages`

* **Documentation**

  * `docs: add API setup and usage instructions`

---

## Installation & Setup

Follow these steps to run the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/movie-recommendation-app.git
   cd movie-recommendation-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file in the project root and add:

   ```env
   NEXT_PUBLIC_API_BASE_URL=https://api.example.com
   ```

4. **Run Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## Deployment

* Deploy using **Vercel** or **Netlify** for easy access and testing.

---

💡 *This project is a hands-on learning journey into building real-world, scalable frontend applications that combine API integration, modern frameworks, and interactive design.*
