export interface LayoutTheme {
  title: string
  layout: 'mix' | 'side' | 'top'
  headerHeight: number
}

export const layoutThemeConfig: LayoutTheme = {
  title: 'naive admin',
  layout: 'mix',
  headerHeight: 48,
}
