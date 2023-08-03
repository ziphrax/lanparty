const { override } = require("customize-cra");
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
  "base-uri": "'self'",
  "object-src": "'none'",
  "script-src": [
    "'unsafe-inline'",
    "'self'",
    "'unsafe-eval'",
    "http://localhost:5126",
    "http://localhost:8080",
  ],
  "style-src": ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
};

function addCspHtmlWebpackPlugin(config) {
  if (process.env.NODE_ENV === "production") {
  }

  config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));

  return config;
}

module.exports = {
  webpack: override(addCspHtmlWebpackPlugin),
};
