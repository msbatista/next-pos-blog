const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    sw: "sw.js",
    disable: process.env.NODE_ENV === "development",
    register: true,
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
});
