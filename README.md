# stylish
基于 stylus 书写的常见组件库。

## webpack 配置

1. 在 webpack 5.x 里，不需要再在 `package.json` 里使用 webpack-dev-server 来启动开发者服务器，而是直接使用 webpack serve 即可，但是 仍然需要安装 webpack-dev-server，因为 webpack serve 需要这个插件。

2. 在 vue 3.x 里，为了解析书写的 *.vue 单文件，在 vue 2.x 里需要安装 vue-loader 和 vue-template-compiler。在 vue 3.x 里，安装 vue-loader@next 和 @vue/compiler-sfc，然后在配置 webpack 打包规则的时候，需要和 VueLoaderPlugin 一起使用。

3. 别忘了安装 typescript 和 ts-loader，并编写 tsconfig.json。

## 遇到一个问题

启动项目后控制台报错 `uncaught referenceerror cannot access '__webpack_default_export__' before initialization`，谷歌了很久，没找到什么方法，然后就自己尝试解决。最后发现是因为 `*.vue` 文件里的 script 标签 lang 属性是 ts 简写的原因，改为 typescript 就不再报错。
