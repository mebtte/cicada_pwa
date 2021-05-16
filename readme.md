![](./src/static/logo.png)

# 知了

知了是一个开源并且支持自定义部署的在线音乐播放器, 更多信息请查看 [https://cicada.mebtte.com](https://cicada.mebtte.com).

## 关联项目

- cicada_server: 知了服务端, 即将开源
- cicada_electron: 知了 Electron 客户端, 即将开源

## 开发/构建

### 配置

项目开发之前需要进行配置, 在项目根目录创建配置文件 `config.json`, 支持的配置项请查看 [schema](./webpack/config_schema.js).

### 开发

```bash
npm install
npm run dev # localhost:8000
```

### 构建

```bash
npm run build # 构建后资源位于 build 目录
```

## 开源协议

[GPL](./LICENSE)
