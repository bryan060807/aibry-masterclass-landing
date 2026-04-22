module.exports = {
  apps: [
    {
      name: "aibry-masterclass-landing",
      cwd: __dirname,
      script: "./node_modules/serve/build/main.js",
      args: ["-s", "dist", "-l", "tcp://0.0.0.0:8083", "--no-clipboard"],
      interpreter: "node",
      env: {
        NODE_ENV: "production",
      },
      autorestart: true,
      watch: false,
      time: true,
    },
  ],
};
