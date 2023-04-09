import { useLayoutTheme } from '@/compsables/layout-theme'
import { layoutThemeConfig } from '@/config/layout-theme'

export const useAppstore = defineStore('app', () => {
  const defaultTheme = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme()
  const layout = reactive(unref(defaultTheme))
  const visible = ref(false)
  const toggleVisible = (val: boolean) => {
    visible.value = val
  }
  const toggleCollapsed = (val: boolean) => {
    layout.collapsed = val
  }
  return {
    layout,
    visible,
    toggleVisible,
    toggleCollapsed,
  }
})
