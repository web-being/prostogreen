/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    fontFamily: {
      'sans': ['montserrat','ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',]
    },
    extend: {
      backgroundImage: {
        bannerApples: "url(../assets/banner-apples.png)",
        bannerRoses: "url(../assets/banner-roses.png)",
        stripes: "linear-gradient(108deg, #ff6161 21.95%, #d44e4e 21.95%, #d44e4e 50%, #ff6161 50%, #ff6161 71.95%, #d44e4e 71.95%, #d44e4e 100%);",
        shadow: "radial-gradient(closest-side, rgba(0,0,0,.5), rgba(0,0,0,0));"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
