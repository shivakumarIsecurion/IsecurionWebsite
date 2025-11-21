const config = {
  plugins: ["@tailwindcss/postcss"],
};



/** @type {import('postcss').Processor} */
module.exports = {
  plugins: {
    tailwindcss: {

    },
    autoprefixer: {},
  },

};
export default config;
