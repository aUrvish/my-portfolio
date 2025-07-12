export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = useRuntimeConfig().public.crispWebsiteId

    const script = document.createElement("script")
    script.src = "https://client.crisp.chat/l.js"
    script.async = true
    document.head.appendChild(script)
  }
})