const baseUrl = 'http://localhost:3000';
const paths = ['/', '/isr', '/ssg', '/ssr', '/ssr-cache'];

module.exports = {
  ci: {
    collect: {
      url: paths.map(p => baseUrl + p),
      startServerCommand: 'npm start',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
  },
};
