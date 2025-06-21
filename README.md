# 🏡 EliteLux Homes – Luxury Real Estate Website
# 🏡 EliteLux Homes

**Live Site:** [https://real-estate-bf031.web.app](https://real-estate-bf031.web.app/)

EliteLux Homes is a luxury real estate website featuring high-end properties such as penthouses, private islands, resorts, and villas. The site provides a smooth user experience with authentication, protected routes, and dynamic property browsing.

---

## 🚀 Features

- 🔐 **Firebase Authentication** — Email/password, Google, and GitHub login.
- 📦 **Protected Routes** — Only logged-in users can access sensitive pages like profile and estate details.
- 🏘️ **Dynamic Property Data** — Loads property data from a local JSON file hosted in `public/`.
- 🧑‍💼 **User Profile Editing** — Users can edit name and photo using Firebase `updateProfile`.
- 📱 **Responsive Design** — Fully responsive on mobile, tablet, and desktop.
- 🎞️ **Swiper Slider** — Carousel for showcasing featured properties.
- 🎉 **Toast Feedback** — Real-time success/error feedback with `react-toastify`.
- ⚠️ **404 Page** — Custom not-found route for invalid URLs.
- 📄 **Dynamic Titles** — Managed via Context API.

---

## 📦 Packages Used

- [`firebase`](https://www.npmjs.com/package/firebase) – Authentication & user management.
- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) – Routing & route protection.
- [`react-toastify`](https://www.npmjs.com/package/react-toastify) – For showing notifications.
- [`aos`](https://www.npmjs.com/package/aos) – Animate On Scroll for visual effects.
- [`swiper`](https://www.npmjs.com/package/swiper) – Swiper slider for featured estates.
- [`daisyui`](https://www.npmjs.com/package/daisyui) – UI components & theme toggle.
- [`tailwindcss`](https://www.npmjs.com/package/tailwindcss) – Utility-first styling.


---

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/faisalnur7/real-estate-react.git

# Install dependencies
npm install

# Run the development server
npm run dev
