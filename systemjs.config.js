SystemJS.config({
  baseURL: "node_modules",
  paths: {
      "src/": "./src/",
      "xp-ribbons/": "./src/"
  },
  packageConfigPaths: [
    "*/package.json",
    "@webcomponents/*/package.json"
  ],
  transpiler: "systemjs-plugin-babel",
  meta: {
    "*.js": {
      "babelOptions": {
        "es2015": false
      }
    }
  }
});
