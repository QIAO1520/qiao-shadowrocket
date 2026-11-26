# Clash Verge Rev / Mihomo

从 `JIOZZself.conf`（main: `637ffd6b6a3ddf68c4184d0a1dbc3cb92ed5459d`）转换。仅增加 clash/ 文件；不含机场订阅、节点密码、证书或令牌。

## 使用

1. 在 Clash Verge Rev 的订阅页面导入机场提供的 **Clash/Mihomo YAML 订阅**。Shadowrocket 配置和 ss:// 等节点链接不是本脚本的输入。
2. 打开该订阅的「扩展脚本」（具体菜单名称随版本变化），将 `qiao-verge.js` 全文粘贴并保存。也可放入全局扩展脚本，但会影响所有订阅。不要当作 YAML 配置导入，不需要在脚本里填写机场地址。
3. 启用此订阅，使用规则模式，检查生成配置的策略组和日志。远程规则从本仓库 `main/clash/rules/` 下载，需要能够访问 raw.githubusercontent.com。若仓库为私有，匿名 raw URL 不可用；不要把访问令牌写进脚本，应改为本机可访问的规则地址。
4. 先选择可用节点，再检查 AI、海外媒体、国内直连等实际流量；AI 初始选美国节点，苹果服务初始直连。已有本地选择缓存可能覆盖初始值。
5. 订阅更新后脚本重新运行，节点信息仍来自本机机场订阅。规则为转换时快照；provider 的每日更新只同步本仓库快照，不自动追踪原上游。

## 转换约定与差异

- 22 个原策略组的名称、Emoji 和组顺序保留。末尾新增 `PROXY`，承接 Shadowrocket 内置代理策略，初始选择「🌟自动选择」。不引用手动组，避免循环。
- 保留每个原规则集的匹配位置，不合并跨位置规则，76 条顶层规则末尾为 `MATCH,PROXY`。包括原有 YouTube 走「海外媒体」；`YOUTUBE` 组虽存在，原规则没有引用它，不擅自改路由。
- 49 份远程 classical/text 规则集，521541 条兼容规则。`IP6-CIDR` 改为 `IP-CIDR6`。完整源 URL、文件哈希、数量及被排除的规则见 `manifest.json`。
- 排除 159 条 USER-AGENT 与 14 条 URL-REGEX：Mihomo 路由不能按 HTTP 用户代理或完整 URL 等价匹配。相关请求仍可命中其他域名/IP 规则，但无法保证与 Shadowrocket 完全一致。
- 原地区正则在 JavaScript 中筛选静态节点；动态 proxy-provider 使用正向 `filter` 和 `exclude-filter`，避免将负向前瞻传给 Mihomo 的正则引擎。保留原匹配大小写和关键词语义；「其他节点」原本也会包含未匹配地区的套餐提示节点，未擅自改变。
- 原 select 的 `policy-select-name` 通过把首选项放到该组候选首位实现；候选顺序因此可能调整，组本身顺序不变。Mihomo 已保存的选择可能优先。
- 无对应静态地区节点且无动态 provider 时该组用 REJECT，避免意外直连；provider 为空或过滤后为空时应在本机检查日志及节点列表。PROXY 初始为自动组；可手动改选。
- 原机场的 `proxies`、`proxy-providers` 和连接参数保留。原订阅的策略组、规则及 rule-providers 被本方案替换；若机场节点自身通过 dialer-proxy 等字段引用旧组，需要先调整。节点名为空、重复或与本方案保留组名冲突时脚本报错，不自动改名。
- 自动测速间隔 600 秒、容差 0、超时 5000ms。节点协议和 UDP 能力由机场及所用 Mihomo 版本决定，本脚本不转换节点协议、不添加证书例外。
- 本方案仅转换策略组与分流。原 General、Host、URL Rewrite、MITM 没有照搬；DNS、TUN、系统绕过、IPv6、Google 重写、HTTPS 解密等由本机自行配置。因此系统层绕过与 DNS 行为可能不同。Mihomo 按从上到下首次命中，不额外按规则类型重排。

## 检查

见 `VALIDATION.md`。不在真实机场节点上验证，不包含真实订阅测试输出。

参考官方文档：[Verge 脚本](https://www.clashverge.dev/guide/script.html)、[Mihomo 规则集](https://wiki.metacubex.one/config/rule-providers/)、[路由规则](https://wiki.metacubex.one/config/rules/)、[策略组](https://wiki.metacubex.one/config/proxy-groups/)。
