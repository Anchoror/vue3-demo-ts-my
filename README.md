# vue3 + ts 开发用的模板

## 项目简介
这是一个基于 Vue 3 和 TypeScript 的开发模板，集成了多种高效的插件和工具，旨在提升开发效率和代码质量。

## 项目主要功能插件
以下是项目中使用的主要插件及其功能说明：

1. **Pinia**  
   Pinia 状态管理，提供简单、灵活且类型安全的全局状态管理解决方案。

2. **Vue Router**  
   Vue 3 的路由管理工具，支持动态路由、路由守卫等功能。

3. **UnoCSS**  
   CSS 原子化工具，支持按需加载和动态生成样式。

4. **Element Plus**  
   Vue 3 的组件库，提供丰富的 UI 组件，支持按需引入。

5. **@VueUse**  
   提供一系列常用的 Vue 3 Hooks，简化开发中的常见逻辑。

6. **unplugin-vue-components**  
   自动引入 Vue 组件，无需手动导入。

7. **unplugin-auto-import**  
   自动引入 API（如 Vue、Pinia 等），减少重复导入代码。

8. **unplugin-vue-router**  
   路由自动生成插件，根据文件结构自动生成路由配置。

9. **unplugin-icons**  
   图标自动引入插件，支持多种图标库的按需加载。

10. **@unhead/vue**  
    用于 SEO 的插件，支持动态更新页面的 meta 信息。

11. **vite-plugin-vue-devtools**  
    Vue 3 的调试工具插件，提升开发调试体验。

12. **vite-plugin-sitemap**  
    自动生成 Sitemap 文件，便于 SEO 优化。

12. **unplugin-preprocessor-directives** 
   - 支持差量编译（Conditional Compilation），通过预处理指令（如 #ifdef 和 #endif）实现代码的按需编译
   - 可以根据环境变量或其他条件动态编译代码，减少不必要的代码打包，提高构建效率。

## 开发环境预处理
项目对开发环境进行了以下优化和预处理：

1. **环境变量管理**  
   使用 `.env` 文件管理不同环境（开发、生产、测试）的变量，支持按需加载。

2. **Vite 配置优化**  
   - 在 `vite.config.ts` 中配置了别名、代理等功能。
   - 使用模块化配置对构建过程进行优化。

3. **自动化引入**  
   - 自动引入组件、API 和路由，减少手动配置的繁琐。
   - 支持按需加载样式和图标，优化打包体积。

4. **CSS 原子化**  
   使用 UnoCSS 提供的原子化样式，减少冗余 CSS 文件，提高样式复用性。

5. **调试工具集成**  
   集成了 Vue Devtools 和其他调试工具，方便开发过程中快速定位问题。

6. **代码质量保障**  
   - 使用 ESLint 和 Prettier 进行代码格式化和静态检查。
   - 配置了 TypeScript 严格模式，确保类型安全。


## 工具函数
1. **useListLoad**
   - 封装了列表加载的逻辑，支持分页加载、下拉刷新等功能。
   - 适用于需要分页加载数据的场景，例如商品列表、文章列表等。

2. **useWxSdk**
   - 封装了微信 JSSDK 的初始化和分享配置逻辑。
   - 适用于需要在微信环境中运行的项目，例如微信小程序或公众号页面。

3. **useCozeApi**
   - 封装了对 @coze/api 的调用逻辑，支持开发环境和生产环境的不同处理方式。
   - 适用于需要与 Coze API 交互的场景，例如用户认证、数据获取等。


## 快速开始
1. 安装依赖：
   ```bash
   pnpm install
   ```
2. 启动开发服务器：
   ```bash
   pnpm dev
   ```
3. 构建测试环境：
  ```bash
  pnpm build:test
  ```
4. 构建生产环境：
  ```bash
  pnpm build:prod
  ```

## 目录结构
```
vue3-ts-template/
src/
  ├── api/               # API 接口定义
  ├── assets/            # 静态资源
  ├── components/        # 公共组件
  ├── layout/            # 布局组件
  ├── pages/             # 页面组件
  ├── router/            # 路由配置
  ├── stores/            # 状态管理
  ├── styles/            # 全局样式
  ├── utils/             # 工具函数

```

## 其他说明
更多插件和功能的使用方法，请参考各插件的官方文档。