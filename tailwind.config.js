module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      primary: "Raleway, sans-serif",
      body: "Work Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: "#050402",
        secondary: "#1C1D24",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#e81c2e",
          hover: "#dc3545",
        },
        paragraph: "#878e99",
        primaryRed: "#e81c2e",
        lightRed: "#dc3545",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://kalvin.netlify.app/images/background/home-banner-bg.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
