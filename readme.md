# 知了浏览器端

## 关联项目

- cicada_server: 知了服务端, 即将开源
- [cicada_electron](https://github.com/mebtte/cicada_electron): 知了桌面客户端
- cicada_expo: 知了移动客户端, 即将开源

## 开发/构建

### 配置

开发/构建之前需要进行配置, 在项目根目录创建配置文件 `config.json`, 支持的配置项请查看 [schema](./webpack/config_schema.js).

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
