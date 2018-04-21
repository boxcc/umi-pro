# umi-pro
- 使用[umi](https://github.com/umijs/umi)，结合[dva](https://github.com/dvajs/dva)，重构[ant-design-pro](https://github.com/ant-design/ant-design-pro)
- 使用[react-intl](https://github.com/yahoo/react-intl)支持多语言
- 部分功能参考[react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## TODO
- [x] Ant Design Pro的页面
- [x] 权限相关模块
- [x] 登入注册页面
- [x] 支持多语言
- [x] 命令行生成components
- [x] 命令行生成containers
- [x] 命令行生成多语言json
- [ ] 根据 [umi#351](https://github.com/umijs/umi/pull/351), 修改权限路由
- [ ] 命令行生成pages

## BUG
- ~~页面设置权限后,进入页面. 再退出登入没权限的角色, 进入页面. 再退出入有权限角色, 进入页面显示403~~