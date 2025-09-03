# Woma Brand Website

This project is a single-page corporate website for **Woma**, a men's clothing brand based in Helwan, Cairo. It's built with React and TypeScript, and styled with Tailwind CSS. The website is designed to be fully responsive, accessible, and highly optimized for search engines (SEO).

## ✨ Features

- **Modern & Clean UI:** A minimalist black, white, and gray color scheme that focuses on the brand identity.
- **Fully Responsive:** Adapts seamlessly to all screen sizes, from mobile phones to desktops. It includes a dedicated, user-friendly mobile navigation menu.
- **Highly SEO Optimized:** 
  - Includes all necessary meta tags for search engines and social media platforms (Open Graph).
  - Implements **JSON-LD Structured Data** to provide rich context to search engines, improving search visibility and how the link appears when shared.
- **Useful & Informative:** A dedicated "Why Us" section clearly communicates the brand's value propositions.
- **Interactive:** Features smooth transitions and hover effects for a better user experience.
- **WhatsApp Integration:** Allows users to easily contact the brand or place orders directly via WhatsApp through multiple call-to-action buttons and a contact form.
- **Component-Based Architecture:** Built with reusable React components for better maintainability.
- **Well-Documented:** The codebase is thoroughly documented with JSDoc comments for clarity and ease of maintenance.

## 📁 Project Structure

The project is organized into the following main directories:

- **`/` (root):** Contains the main entry points `index.html`, `index.tsx`, and configuration files like `metadata.json`.
- **`/components`:** Contains all the reusable React components that make up the UI.
- **`/constants`:** Stores static data used throughout the application, such as key selling points.
- **`/types`:** Contains TypeScript type definitions for the application's data structures.

---

## 🧩 Component Breakdown

- **`App.tsx`**: The main component that assembles all the pages and layouts.
- **`Header.tsx`**: The sticky navigation bar at the top of the page, including the brand logo, navigation links, and a "Order Now" button. It also includes a fully functional mobile menu.
- **`Hero.tsx`**: The main introductory section (the "hero" section) that grabs the user's attention.
- **`WhyUs.tsx`**: A section highlighting the key benefits of choosing the Woma brand.
- **`About.tsx`**: A section that provides information about the Woma brand.
- **`Contact.tsx`**: A contact section with company details, a contact form that integrates with WhatsApp, and an embedded Google Map.
- **`Footer.tsx`**: The footer of the page, containing copyright information and social media links.
