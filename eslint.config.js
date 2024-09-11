import antfu from "@antfu/eslint-config";

export default antfu({
  // enable UnoCSS support
  // https://unocss.dev/integrations/vscode
  unocss: true,

  ignores: [
    ".github",
    ".vscode",
    "dist",
    "public",
    "scripts",
    "src/assets",
    "node_modules",
  ],
  formatters: {
    css: true,
  },
});
