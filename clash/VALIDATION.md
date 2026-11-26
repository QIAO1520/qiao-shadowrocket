# 转换检查记录

检查日期：2026-11-26（Asia/Shanghai）。源提交：637ffd6b6a3ddf68c4184d0a1dbc3cb92ed5459d。

## 已通过

- Node.js v24.22.3：扩展脚本语法检查；以合成 Shadowsocks 节点执行入口函数。
- 22 个原策略组的名称、顺序、Emoji 与源配置一致；新增 PROXY 在末尾。
- 全部顶层规则的目标策略存在；组内静态引用存在；无循环引用；规则位置保持，FINAL 转换为 MATCH 且位于末尾。
- AI 初始美国节点，苹果服务初始 DIRECT；手动组与测速组的提示节点排除；美国/香港/台湾/日本/新加坡/韩国/其他节点样例筛选。
- 无节点报错、单地区节点、动态 provider-only、重复运行、保留组名冲突报错等场景。
- 49 个上游规则集下载成功，转换后总计 521541 条；所有 IP 网段经 ipaddress 解析检查。
- Mihomo Meta v1.19.33 windows amd64：生成的合成配置通过 `-t` 检查。
- 使用本机现有 Country.mmdb、ASN.mmdb，在独立工作目录启动临时内核，控制接口仅监听 127.0.0.1，并在测试后关闭。通过 `/providers/rules` 核实 49 个本地 classical/text 规则集初始化成功，总 ruleCount 为 521541，无 error/fatal 日志。
- 再以 file 类型动态代理集输入相同合成节点，通过实际内核核实美国及其他地区成员，验证正则与 provider use/filter/exclude-filter 兼容。
- 快照清单包含每份输出的 SHA-256；173 条无法等价转换的规则逐条记入 manifest.json（159 USER-AGENT、14 URL-REGEX）。没有以其他匹配类型冒充替代。

## 尚未验证 / 实际限制

- 未读取或提交真实机场订阅，未验证真实节点协议参数、连通性、速度、UDP、地区解锁、订阅更新或凭据有效性。合成节点只用于配置解析，不用于互联网连通测试。
- 没有在 Clash Verge Rev 的界面中保存/应用脚本；入口形式依据官方文档，JavaScript 执行检查使用 Node.js。不同客户端版本、旧选择缓存与其他扩展可能影响结果。
- 内核加载测试使用本地快照。提交后的 raw GitHub HTTP 拉取、客户端网络访问、私有仓库匿名访问不由该测试证明。
- 上游规则是下载时快照，下载期间上游可能变化；原始来源及输出哈希可追溯，但不保证多个上游同一时刻版本。
- 未实测真实业务请求命中、误杀或跨规则集重叠。忠实保留原优先级，包括国内优化在广告前、AI 在广告前、GEOIP CN 在 Global 前；存在重叠时首次命中。
- 不等价部分：USER-AGENT、URL-REGEX、General 的系统层绕过与 DNS、Host、URL Rewrite、MITM；详见 README。geo 数据库与 Shadowrocket 原数据库也可能不同。
- 真实节点如通过 dialer-proxy 引用订阅旧组，需调整到新组；原节点名正则可能误分类，应在本机复核。无匹配静态节点时使用 REJECT；动态集尚未加载或无匹配时需要核对实际成员。

官方依据：[扩展脚本入口](https://www.clashverge.dev/guide/script.html)、[Mihomo classical 规则集](https://wiki.metacubex.one/en/config/rule-providers/content/)、[路由](https://wiki.metacubex.one/config/rules/)、[代理组](https://wiki.metacubex.one/config/proxy-groups/)。
