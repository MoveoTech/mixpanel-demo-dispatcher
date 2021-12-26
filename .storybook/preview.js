const customViewports = {
  mobile: {
    name: 'mobile',
    styles: {
      width: '375px',
      height: '670px',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '768px',
      height: '1025px',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1920px',
      height: '1400px'
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
