import { defineStore } from "pinia";
import { type AppThemes, isTheme } from "../types/themes";

const THEME = 'theme';

type Preferences = {
    theme: AppThemes
}

export const usePreferences = defineStore("preferences", {
    state: (): Preferences => {
        const savedTheme = localStorage.getItem(THEME);
        return {
            theme: isTheme(savedTheme) ? savedTheme : 'light'
        }
    },

    getters: {
        getTheme: (state) => state.theme
    },

    actions: {
        setTheme(theme: AppThemes) {
            this.theme = theme;
            localStorage.setItem(THEME, theme);

            document.body.classList.forEach((cls) => {
                if (/^theme-/.test(cls)) document.body.classList.remove(cls);
            });

            document.body.classList.add(`theme-${theme}`);
        }
    }
});