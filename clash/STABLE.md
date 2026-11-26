# 建议先用：轻量分流版

入口：`qiao-verge-stable.js`。上一版 `qiao-verge.js` 完整保留。

## 参考与判断

已读取 XVSVTsama/XVSVT-Clash-Config 的 mihomo.yaml（blob c5cd3b191cc48c7a28776cd45dca2f117c42b2a0）及 script_override.js，并对照 Mihomo 官方示例和 Verge 官方脚本文档。公开配置存在不等于已在本用户网络成功验证。

- 参考案例使用 rule-providers、MRS 及按功能开关的组织方式；其脚本声明主要面向 Bettbox，不能据此认定在 Clash Verge Rev 中已经实测成功。
- 参考 YAML 包含作者自己的 DNS 端点、认证值、监听端口、局域网开放与 TUN 设置，未复制这些参数。其配置也会随仓库更新变化。
- 本版使用官方支持的 main(config) 扩展入口及 classical/text 规则。MRS 仅适用于 domain/ipcidr；现有规则含 DOMAIN-KEYWORD、IP-ASN 等，不能直接把 format 改成 mrs。若日后改成 MRS，需按类型拆分并重新验证，不应只改文件后缀。

## 本版改变

1. 默认 `ENABLE_AD_BLOCKING = false`，不加载 qiao-22/23/24 三份广告集。自有规则从 521541 条减至 15338 条（约减少 97.1%），顶层规则 73 条、规则集 46 份。原来的 Adobe REJECT 等内联规则仍然保留；这不是完全禁用所有拒绝规则。
2. 原分组名称、Emoji、顺序及其余业务规则次序保留；PROXY 仍作为末尾新增组。大规模广告过滤属于明确关闭的功能差异，不声称与原配置完全等价。
3. 保留本机输入中的 DNS、TUN、端口、监听设置及机场节点参数；合并保留订阅自带 rule-providers，减少 DNS/sniffer 等引用失效。若原订阅本身还有大型规则集，实际加载总量会更多。
4. 发现顶层节点/provider 的 dialer-proxy、DNS 指向将被移除的旧组时提前报错，避免已知的悬空引用。无法检查未下载的远程节点或所有自定义扩展字段，不是完整依赖审计。
5. 在副本上生成配置，失败时不修改调用者传入对象。不保证客户端在脚本报错后如何回退，应保留无扩展的原订阅。

## 使用与回退

1. 保留当前正常工作的原订阅；在订阅页复制一份作为测试配置。不要先在全局脚本应用。若当前全局脚本已含上一版，需要先备份并移除该段，避免重复覆写。
2. 只给测试订阅粘贴 qiao-verge-stable.js 全文，启用规则模式；先保持现有系统代理、DNS 和 TUN 设置。不要同时启用旧脚本与新脚本。
3. 检查生成配置及日志，确认节点列表和各地区组有可用成员。先测国内网页、微信/WPS，再测 AI、海外网站、Telegram；核对连接页的实际策略命中。
4. 如有打不开、误分流、DNS 报错或资源异常，切回保留的原订阅并关闭测试订阅的扩展脚本。测试前后的速度、资源、错误率应在同一网络和同一节点上比较。
5. 稳定使用后才考虑将脚本首行 ENABLE_AD_BLOCKING 改成 true；会恢复约 50 万条广告规则，可能增加加载/更新及内存开销，也可能误拦截。现阶段没有实测用户真实网络下的额外延迟或内存差值，不作速度保证。

## 本次实际验证（2026-11-26）

- Node.js 语法与执行测试通过：开关默认值、73 条规则、46 份自有规则集、保留原 DNS/TUN/provider、不修改输入、旧 DNS/dialer-proxy 引用报错。
- 本机 Mihomo v1.19.33 `-t` 配置检查通过。
- 独立目录以合成节点启动临时内核，通过本机控制接口确认 46 份规则集实际加载共 15338 条，测试后关闭内核。规则文件使用已下载的本地快照。
- 未修改当前运行的 Clash 配置，未读取机场订阅秘密。未在 Verge 界面应用脚本、未实测真实节点或业务流量，未完成用户网络的远程规则拉取及性能对照。原 VALIDATION.md 中的不等价事项仍适用。

参考：
- https://github.com/XVSVTsama/XVSVT-Clash-Config/blob/main/mihomo.yaml
- https://github.com/XVSVTsama/XVSVT-Clash-Config/blob/main/script_override.js
- https://github.com/MetaCubeX/mihomo/blob/Meta/docs/config.yaml
- https://www.clashverge.dev/guide/script.html
- https://wiki.metacubex.one/config/rule-providers/
