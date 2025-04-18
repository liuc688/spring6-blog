import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '尚硅谷 spring6',
  description: 'A VitePress Site',
  ignoreDeadLinks: true, // ✅ 禁用死链接检查
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '尚硅谷 spring6', link: '/notes/spring6' },
    ],

    sidebar: [
      {
        text: '尚硅谷 spring6',
        items: [{ text: 'spring6', link: '/notes/spring6' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    outline: {
      level: [2, 6],
      label: '🦋ON THIS PAGE',
    },
  },
});
