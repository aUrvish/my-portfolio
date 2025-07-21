// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Urvish Mandaliya",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
  ],
  imports: {
    imports: [
      {
        from: "vee-validate",
        name: "useForm",
        as: "useForm",
      },
      {
        from: "vee-validate",
        name: "useField",
        as: "useField",
      },
      {
        from: "vee-validate",
        name: "useFieldArray",
        as: "useFieldArray",
      },
      {
        from: "vee-validate",
        name: "defineRule",
        as: "defineRule",
      },
      {
        from: "yup",
        name: "object",
        as: "object",
      },
      {
        from: "yup",
        name: "string",
        as: "string",
      },
      {
        from: "yup",
        name: "number",
        as: "number",
      },
      {
        from: "yup",
        name: "boolean",
        as: "boolean",
      },
      {
        from: "yup",
        name: "array",
        as: "array",
      },
    ],
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      crispWebsiteId: process.env.CRISP_WEBSITE_ID,
      formSubmitKey: process.env.FORM_SUBMIT_KEY,
    },
  },
});
