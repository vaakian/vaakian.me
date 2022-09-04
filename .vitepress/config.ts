import { defineConfig } from 'vitepress';
// import Unocss from 'unocss/vite';
export default defineConfig({
  title: 'vaakian',
  themeConfig: {
    logo: '/images/avatar.jpeg',
    sidebar: {},
    nav: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vaakian' },
      // { icon: 'twitter', link: '#' },
    ],
  },
  vite: {
    // plugins: [Unocss()],
  },
});
