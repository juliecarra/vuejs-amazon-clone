module.exports = {
  devServer: {
    proxy: {
      "^/api/": {
        target: "http://localhost:9090",
        ws: true,
        secure: false,
      },
    },
  },
};
