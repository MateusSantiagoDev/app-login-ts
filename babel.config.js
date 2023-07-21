module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
