# verify-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




git commit 是最常用的命令之一，它可以触发四个 hook ，分别是 pre-commit, prepare-commit-msg, commit-msg 和 post-commit。 从字面上猜测着四个 hook 分别对应了 “commit 之前”，“准备 commit log message 的时候”，“生成 commit log message 的时候”，“commit 之后”四个阶段。
而我们要解决我们的问题，其实只需要在 'pre-commit' 这个阶段去写一段脚本，就能解决我们检测代码的问题。
