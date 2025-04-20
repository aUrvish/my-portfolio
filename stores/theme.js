export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme : 'Dark',
        isDark : true
    }),
    actions : {
        setTheme(mode = 'Dark') {
            this.theme = mode

            if (mode == 'Light') {
                this.isDark = false;
              } else if (mode === 'System') {
                this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              } else {
                this.isDark = true;
            }
        },
        getTheme() {
            return {
                theme : this.theme,
                is_dark : this.isDark
            }
        }
    },
    persist: true,
})