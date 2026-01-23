const themes = ['light', 'dark', 'lightRed', 'darkRed'] as const;

export type AppThemes = typeof themes[number];
export function isTheme(v: unknown): v is AppThemes {
  return typeof v === "string" && (themes as readonly string[]).includes(v);
}