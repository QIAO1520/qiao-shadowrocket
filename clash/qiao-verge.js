// Generated from JIOZZself.conf @ 637ffd6b6a3ddf68c4184d0a1dbc3cb92ed5459d
// No subscription URLs or credentials. Paste into the subscription extension script.
const QIAO = {
  "groups": [
    {
      "name": "👋手动选择",
      "type": "select",
      "members": [
        "DIRECT",
        "PROXY"
      ],
      "opts": {
        "policy-regex-filter": "^(?!.*(剩余|官网|建议|套餐)).*$"
      }
    },
    {
      "name": "🌟自动选择",
      "type": "url-test",
      "members": [],
      "opts": {
        "select": "0",
        "url": "http://www.gstatic.com/generate_204",
        "policy-regex-filter": "^(?!.*(剩余|官网|建议|套餐)).*$",
        "timeout": "5",
        "tolerance": "0",
        "interval": "600"
      }
    },
    {
      "name": "🇺🇸美国节点",
      "type": "url-test",
      "members": [],
      "opts": {
        "select": "0",
        "url": "http://www.gstatic.com/generate_204",
        "policy-regex-filter": "US|USA|America|america|United States|美国|凤凰城|洛杉矶|西雅图|芝加哥|纽约|沪美|美",
        "timeout": "5",
        "tolerance": "0",
        "interval": "600"
      }
    },
    {
      "name": "🇺🇸美国节点手动",
      "type": "select",
      "members": [],
      "opts": {
        "policy-regex-filter": "US|USA|America|america|United States|美国|凤凰城|洛杉矶|西雅图|芝加哥|纽约|沪美|美"
      }
    },
    {
      "name": "🇭🇰香港节点",
      "type": "url-test",
      "members": [],
      "opts": {
        "select": "0",
        "url": "http://www.gstatic.com/generate_204",
        "policy-regex-filter": "HK|Hong|hong|香港|深港|沪港|京港|港",
        "timeout": "5",
        "tolerance": "0",
        "interval": "600"
      }
    },
    {
      "name": "🇨🇳台湾节点",
      "type": "url-test",
      "members": [],
      "opts": {
        "select": "0",
        "url": "http://www.gstatic.com/generate_204",
        "policy-regex-filter": "TW|Taiwan|taiwan|台湾|台北|台中|新北|彰化",
        "timeout": "5",
        "tolerance": "0",
        "interval": "600"
      }
    },
    {
      "name": "🇯🇵日本节点",
      "type": "url-test",
      "members": [],
      "opts": {
        "select": "0",
        "url": "http://www.gstatic.com/generate_204",
        "policy-regex-filter": "JP|Japan|japan|Tokyo|tokyo|日本|东京|大阪|京日|苏日|沪日|上日|川日|深日|广日",
        "timeout": "5",
        "tolerance": "0",
        "interval": "600"
      }
    },
    {
      "name": "🇸🇬新加坡节点",
      "type": "url-test",
      "members": [],
      "opts": {
        "select": "0",
        "url": "http://www.gstatic.com/generate_204",
        "policy-regex-filter": "SG|Sing|sing|新加坡|狮城|沪新|京新|深新|杭新|广新",
        "timeout": "5",
        "tolerance": "0",
        "interval": "600"
      }
    },
    {
      "name": "🇰🇷韩国节点",
      "type": "url-test",
      "members": [],
      "opts": {
        "select": "0",
        "url": "http://www.gstatic.com/generate_204",
        "policy-regex-filter": "KR|Korea|korea|KOR|韩国|首尔|韩|韓|春川",
        "timeout": "5",
        "tolerance": "0",
        "interval": "600"
      }
    },
    {
      "name": "🌐其他节点",
      "type": "url-test",
      "members": [],
      "opts": {
        "url": "http://www.gstatic.com/generate_204",
        "interval": "600",
        "tolerance": "0",
        "timeout": "5",
        "policy-regex-filter": "^((?!(US|USA|America|america|United States|美国|凤凰城|洛杉矶|西雅图|芝加哥|纽约|沪美|美|HK|Hong|hong|香港|深港|沪港|京港|港|TW|Taiwan|taiwan|台湾|台北|台中|新北|彰化|JP|Japan|japan|Tokyo|tokyo|日本|东京|大阪|京日|苏日|沪日|上日|川日|深日|广日|SG|Sing|sing|新加坡|狮城|沪新|京新|深新|杭新|广新|KR|Korea|korea|KOR|韩国|首尔|韩|韓|春川)).)*$"
      }
    },
    {
      "name": "AI",
      "type": "select",
      "members": [
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "🇺🇸美国节点"
      }
    },
    {
      "name": "YOUTUBE",
      "type": "select",
      "members": [
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "TWITTER",
      "type": "select",
      "members": [
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "TELEGRAM",
      "type": "select",
      "members": [
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "META",
      "type": "select",
      "members": [
        "DIRECT",
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "谷歌服务",
      "type": "select",
      "members": [
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "微软服务",
      "type": "select",
      "members": [
        "DIRECT",
        "PROXY",
        "👋手动选择",
        "🇺🇸美国节点手动",
        "🌟自动选择",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "苹果服务",
      "type": "select",
      "members": [
        "DIRECT",
        "PROXY",
        "👋手动选择",
        "🇺🇸美国节点手动",
        "🌟自动选择",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "DIRECT"
      }
    },
    {
      "name": "苹果推送",
      "type": "select",
      "members": [
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "DIRECT"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "游戏平台",
      "type": "select",
      "members": [
        "DIRECT",
        "PROXY",
        "👋手动选择",
        "🇺🇸美国节点手动",
        "🌟自动选择",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "TIKTOK",
      "type": "select",
      "members": [
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    },
    {
      "name": "海外媒体",
      "type": "select",
      "members": [
        "PROXY",
        "👋手动选择",
        "🌟自动选择",
        "🇺🇸美国节点手动",
        "🇭🇰香港节点",
        "🇨🇳台湾节点",
        "🇯🇵日本节点",
        "🇸🇬新加坡节点",
        "🇰🇷韩国节点",
        "🇺🇸美国节点"
      ],
      "opts": {
        "policy-select-name": "PROXY"
      }
    }
  ],
  "rules": [
    "RULE-SET,qiao-01,DIRECT",
    "DOMAIN-SUFFIX,quark.cn,DIRECT",
    "DOMAIN-SUFFIX,quark.sm.cn,DIRECT",
    "DOMAIN-KEYWORD,quark,DIRECT",
    "DOMAIN-SUFFIX,uc.cn,DIRECT",
    "DOMAIN-SUFFIX,ucweb.com,DIRECT",
    "DOMAIN-SUFFIX,alicdn.com,DIRECT",
    "DOMAIN-SUFFIX,alibabausercontent.com,DIRECT",
    "RULE-SET,qiao-02,DIRECT",
    "RULE-SET,qiao-03,DIRECT",
    "RULE-SET,qiao-04,DIRECT",
    "RULE-SET,qiao-05,DIRECT",
    "RULE-SET,qiao-06,DIRECT",
    "RULE-SET,qiao-07,DIRECT",
    "RULE-SET,qiao-08,DIRECT",
    "RULE-SET,qiao-09,DIRECT",
    "RULE-SET,qiao-10,DIRECT",
    "RULE-SET,qiao-11,DIRECT",
    "RULE-SET,qiao-12,DIRECT",
    "RULE-SET,qiao-13,DIRECT",
    "RULE-SET,qiao-14,DIRECT",
    "RULE-SET,qiao-15,DIRECT",
    "RULE-SET,qiao-16,DIRECT",
    "DOMAIN-SUFFIX,adobestats.io,REJECT",
    "DOMAIN,lcs-cops.adobe.io,DIRECT",
    "DOMAIN-SUFFIX,adobe.io,REJECT",
    "DOMAIN-SUFFIX,muse.ai,AI",
    "DOMAIN-SUFFIX,meta.ai,AI",
    "DOMAIN-SUFFIX,metaaivm.com,AI",
    "DOMAIN-SUFFIX,metaaiusercontent.com,AI",
    "DOMAIN-SUFFIX,ecto1usercontent.com,AI",
    "DOMAIN,auth.meta.com,AI",
    "DOMAIN,nest-static.fbcdn.net,AI",
    "DOMAIN,genai-graph.facebook.com,AI",
    "DOMAIN-SUFFIX,openai.com,AI",
    "DOMAIN-SUFFIX,chatgpt.com,AI",
    "DOMAIN-SUFFIX,oaistatic.com,AI",
    "DOMAIN-SUFFIX,notebooklm.google,AI",
    "RULE-SET,qiao-17,AI",
    "RULE-SET,qiao-18,AI",
    "RULE-SET,qiao-19,AI",
    "RULE-SET,qiao-20,AI",
    "RULE-SET,qiao-21,🇺🇸美国节点",
    "RULE-SET,qiao-22,REJECT",
    "RULE-SET,qiao-23,REJECT",
    "RULE-SET,qiao-24,REJECT",
    "RULE-SET,qiao-25,海外媒体",
    "RULE-SET,qiao-26,海外媒体",
    "RULE-SET,qiao-27,海外媒体",
    "DOMAIN-SUFFIX,litix.io,海外媒体",
    "DOMAIN-SUFFIX,discomax.com,海外媒体",
    "DOMAIN-SUFFIX,brightline.tv,海外媒体",
    "RULE-SET,qiao-28,海外媒体",
    "RULE-SET,qiao-29,海外媒体",
    "RULE-SET,qiao-30,TELEGRAM",
    "RULE-SET,qiao-31,TWITTER",
    "RULE-SET,qiao-32,META",
    "RULE-SET,qiao-33,META",
    "RULE-SET,qiao-34,META",
    "RULE-SET,qiao-35,游戏平台",
    "RULE-SET,qiao-36,游戏平台",
    "RULE-SET,qiao-37,游戏平台",
    "RULE-SET,qiao-38,游戏平台",
    "RULE-SET,qiao-39,游戏平台",
    "RULE-SET,qiao-40,游戏平台",
    "RULE-SET,qiao-41,微软服务",
    "RULE-SET,qiao-42,谷歌服务",
    "RULE-SET,qiao-43,苹果推送",
    "RULE-SET,qiao-44,苹果服务",
    "RULE-SET,qiao-45,TIKTOK",
    "RULE-SET,qiao-46,PROXY",
    "RULE-SET,qiao-47,DIRECT",
    "GEOIP,CN,DIRECT",
    "RULE-SET,qiao-48,PROXY",
    "RULE-SET,qiao-49,PROXY",
    "MATCH,PROXY"
  ],
  "providers": {
    "qiao-01": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-01.list",
      "path": "./ruleset/qiao-01.list",
      "interval": 86400
    },
    "qiao-02": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-02.list",
      "path": "./ruleset/qiao-02.list",
      "interval": 86400
    },
    "qiao-03": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-03.list",
      "path": "./ruleset/qiao-03.list",
      "interval": 86400
    },
    "qiao-04": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-04.list",
      "path": "./ruleset/qiao-04.list",
      "interval": 86400
    },
    "qiao-05": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-05.list",
      "path": "./ruleset/qiao-05.list",
      "interval": 86400
    },
    "qiao-06": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-06.list",
      "path": "./ruleset/qiao-06.list",
      "interval": 86400
    },
    "qiao-07": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-07.list",
      "path": "./ruleset/qiao-07.list",
      "interval": 86400
    },
    "qiao-08": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-08.list",
      "path": "./ruleset/qiao-08.list",
      "interval": 86400
    },
    "qiao-09": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-09.list",
      "path": "./ruleset/qiao-09.list",
      "interval": 86400
    },
    "qiao-10": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-10.list",
      "path": "./ruleset/qiao-10.list",
      "interval": 86400
    },
    "qiao-11": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-11.list",
      "path": "./ruleset/qiao-11.list",
      "interval": 86400
    },
    "qiao-12": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-12.list",
      "path": "./ruleset/qiao-12.list",
      "interval": 86400
    },
    "qiao-13": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-13.list",
      "path": "./ruleset/qiao-13.list",
      "interval": 86400
    },
    "qiao-14": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-14.list",
      "path": "./ruleset/qiao-14.list",
      "interval": 86400
    },
    "qiao-15": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-15.list",
      "path": "./ruleset/qiao-15.list",
      "interval": 86400
    },
    "qiao-16": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-16.list",
      "path": "./ruleset/qiao-16.list",
      "interval": 86400
    },
    "qiao-17": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-17.list",
      "path": "./ruleset/qiao-17.list",
      "interval": 86400
    },
    "qiao-18": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-18.list",
      "path": "./ruleset/qiao-18.list",
      "interval": 86400
    },
    "qiao-19": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-19.list",
      "path": "./ruleset/qiao-19.list",
      "interval": 86400
    },
    "qiao-20": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-20.list",
      "path": "./ruleset/qiao-20.list",
      "interval": 86400
    },
    "qiao-21": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-21.list",
      "path": "./ruleset/qiao-21.list",
      "interval": 86400
    },
    "qiao-22": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-22.list",
      "path": "./ruleset/qiao-22.list",
      "interval": 86400
    },
    "qiao-23": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-23.list",
      "path": "./ruleset/qiao-23.list",
      "interval": 86400
    },
    "qiao-24": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-24.list",
      "path": "./ruleset/qiao-24.list",
      "interval": 86400
    },
    "qiao-25": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-25.list",
      "path": "./ruleset/qiao-25.list",
      "interval": 86400
    },
    "qiao-26": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-26.list",
      "path": "./ruleset/qiao-26.list",
      "interval": 86400
    },
    "qiao-27": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-27.list",
      "path": "./ruleset/qiao-27.list",
      "interval": 86400
    },
    "qiao-28": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-28.list",
      "path": "./ruleset/qiao-28.list",
      "interval": 86400
    },
    "qiao-29": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-29.list",
      "path": "./ruleset/qiao-29.list",
      "interval": 86400
    },
    "qiao-30": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-30.list",
      "path": "./ruleset/qiao-30.list",
      "interval": 86400
    },
    "qiao-31": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-31.list",
      "path": "./ruleset/qiao-31.list",
      "interval": 86400
    },
    "qiao-32": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-32.list",
      "path": "./ruleset/qiao-32.list",
      "interval": 86400
    },
    "qiao-33": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-33.list",
      "path": "./ruleset/qiao-33.list",
      "interval": 86400
    },
    "qiao-34": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-34.list",
      "path": "./ruleset/qiao-34.list",
      "interval": 86400
    },
    "qiao-35": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-35.list",
      "path": "./ruleset/qiao-35.list",
      "interval": 86400
    },
    "qiao-36": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-36.list",
      "path": "./ruleset/qiao-36.list",
      "interval": 86400
    },
    "qiao-37": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-37.list",
      "path": "./ruleset/qiao-37.list",
      "interval": 86400
    },
    "qiao-38": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-38.list",
      "path": "./ruleset/qiao-38.list",
      "interval": 86400
    },
    "qiao-39": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-39.list",
      "path": "./ruleset/qiao-39.list",
      "interval": 86400
    },
    "qiao-40": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-40.list",
      "path": "./ruleset/qiao-40.list",
      "interval": 86400
    },
    "qiao-41": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-41.list",
      "path": "./ruleset/qiao-41.list",
      "interval": 86400
    },
    "qiao-42": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-42.list",
      "path": "./ruleset/qiao-42.list",
      "interval": 86400
    },
    "qiao-43": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-43.list",
      "path": "./ruleset/qiao-43.list",
      "interval": 86400
    },
    "qiao-44": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-44.list",
      "path": "./ruleset/qiao-44.list",
      "interval": 86400
    },
    "qiao-45": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-45.list",
      "path": "./ruleset/qiao-45.list",
      "interval": 86400
    },
    "qiao-46": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-46.list",
      "path": "./ruleset/qiao-46.list",
      "interval": 86400
    },
    "qiao-47": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-47.list",
      "path": "./ruleset/qiao-47.list",
      "interval": 86400
    },
    "qiao-48": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-48.list",
      "path": "./ruleset/qiao-48.list",
      "interval": 86400
    },
    "qiao-49": {
      "type": "http",
      "behavior": "classical",
      "format": "text",
      "url": "https://raw.githubusercontent.com/QIAO1520/qiao-shadowrocket/main/clash/rules/qiao-49.list",
      "path": "./ruleset/qiao-49.list",
      "interval": 86400
    }
  }
};
function main(config) {
  const nodes = Array.isArray(config.proxies) ? config.proxies : [];
  const uses = Object.keys(config['proxy-providers'] || {});
  const reserved = QIAO.groups.map(g => g.name).concat(['PROXY','DIRECT','REJECT','GLOBAL']);
  const names = nodes.map(p => p.name);
  if (names.some((n,i) => !n || names.indexOf(n)!==i || reserved.indexOf(n)>=0))
    throw new Error('节点名称为空、重复或与策略组重名，请先修改订阅节点名称');
  if (!names.length && !uses.length) throw new Error('请先导入 Clash/Mihomo 格式的机场订阅');
  const ignored = '剩余|官网|建议|套餐';
  const regionPatterns = QIAO.groups.filter(g => g.opts['policy-regex-filter'] && g.name !== '🌐其他节点' && g.name !== '👋手动选择' && g.name !== '🌟自动选择').map(g => g.opts['policy-regex-filter']);
  const groups = QIAO.groups.map(spec => {
    const g = { name: spec.name, type: spec.type };
    const pattern = spec.opts['policy-regex-filter'];
    if (pattern) {
      const all = spec.name === '👋手动选择' || spec.name === '🌟自动选择';
      const other = spec.name === '🌐其他节点';
      const positive = all || other ? '' : pattern;
      const negative = other ? regionPatterns.join('|') : all ? ignored : '';
      g.proxies = names.filter(n => (!positive || new RegExp(positive).test(n)) && (!negative || !new RegExp(negative).test(n)));
      if (uses.length) { g.use = uses.slice(); if(positive) g.filter = positive; if(negative) g['exclude-filter'] = negative; }
    } else {
      g.proxies = spec.members.slice();
      const preferred = spec.opts['policy-select-name'];
      if (preferred && g.proxies.indexOf(preferred)>=0) g.proxies = [preferred].concat(g.proxies.filter(n => n!==preferred));
    }
    if (!g.proxies.length && !uses.length) g.proxies = ['REJECT'];
    if (spec.type === 'url-test') { g.url=spec.opts.url; g.interval=600; g.tolerance=0; g.timeout=5000; g.lazy=true; }
    return g;
  });
  groups.push({ name:'PROXY', type:'select', proxies:['🌟自动选择'].concat(names.filter(n=>!new RegExp(ignored).test(n))) });
  config['proxy-groups'] = groups;
  config['rule-providers'] = QIAO.providers;
  config.rules = QIAO.rules.slice();
  config.mode = 'rule';
  // Transport, DNS, TUN, proxy definitions and provider credentials stay local and unchanged.
  return config;
}
