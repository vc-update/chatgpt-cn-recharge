import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ChatGPT代充 - 国内ChatGPT Plus/Pro代充值平台｜支付宝微信充值120元/月',
  description: '2026年最靠谱的ChatGPT代充平台，支持支付宝/微信充值ChatGPT Plus会员仅120元/月，Token自助代充不需要账号密码，5分钟到账安全不封号。ChatGPT代充值首选GPTBuy',

  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: 'https://chatgpt-cn-recharge.com'
  },

  head: [
    // Favicon - multiple formats for all browsers/devices
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    // 关键词
    ['meta', { name: 'keywords', content: 'ChatGPT代充,ChatGPT代充值,ChatGPT充值,ChatGPT Plus代充,ChatGPT Plus充值,ChatGPT Plus代充值,ChatGPT Pro充值,ChatGPT代充靠谱,ChatGPT代充安全,国内ChatGPT充值,ChatGPT充值平台,ChatGPT代充推荐,ChatGPT充值支付宝,ChatGPT代充多少钱' }],
    // Open Graph
    ['meta', { property: 'og:title', content: 'ChatGPT代充 - 国内ChatGPT Plus/Pro代充值平台｜120元/月' }],
    ['meta', { property: 'og:description', content: '2026年最靠谱的ChatGPT代充平台，支付宝/微信充值ChatGPT Plus仅120元/月，Token自助不需要密码，5分钟到账安全不封号' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://chatgpt-cn-recharge.com' }],
    ['meta', { property: 'og:site_name', content: 'ChatGPT代充 - GPTBuy' }],
    ['meta', { property: 'og:image', content: 'https://chatgpt-cn-recharge.com/android-chrome-512x512.png' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'ChatGPT代充 - 国内ChatGPT Plus/Pro代充值平台' }],
    ['meta', { name: 'twitter:description', content: '支付宝/微信充值ChatGPT Plus仅120元/月，Token自助不需要密码，5分钟到账安全不封号' }],
    ['meta', { name: 'twitter:image', content: 'https://chatgpt-cn-recharge.com/android-chrome-512x512.png' }],
    // Canonical
    ['link', { rel: 'canonical', href: 'https://chatgpt-cn-recharge.com' }],
    // Robots
    ['meta', { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' }],
    // Bing Webmaster 验证
    ['meta', { name: 'msvalidate.01', content: '283F4ED132291BB65C882E27214A15B8' }],
    // JSON-LD Structured Data - WebSite
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ChatGPT代充 - GPTBuy",
      "alternateName": ["ChatGPT代充值", "ChatGPT充值", "GPTBuy"],
      "url": "https://chatgpt-cn-recharge.com",
      "description": "2026年最靠谱的ChatGPT代充平台，支付宝/微信充值ChatGPT Plus仅120元/月",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://chatgpt-cn-recharge.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })],
    // JSON-LD Structured Data - Organization
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GPTBuy - ChatGPT代充",
      "url": "https://chatgpt-cn-recharge.com",
      "logo": "https://chatgpt-cn-recharge.com/android-chrome-512x512.png",
      "description": "专业的ChatGPT代充值服务平台",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "Chinese"
      }
    })],
    // JSON-LD Structured Data - FAQPage
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ChatGPT代充安全吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "安全。我们使用Token自助代充模式，不需要你的ChatGPT账号密码。Token是临时验证凭证，只能用于确认身份，无法登录账号或查看聊天记录。"
          }
        },
        {
          "@type": "Question",
          "name": "ChatGPT代充会封号吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "不会。Token代充走的是合规支付渠道，不涉及异常登录或IP变化，OpenAI无法区分代充和官方直充。"
          }
        },
        {
          "@type": "Question",
          "name": "ChatGPT代充多少钱？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT Plus代充120元/月，比官方汇率价（约145元）更便宜。支持支付宝和微信支付。"
          }
        },
        {
          "@type": "Question",
          "name": "ChatGPT代充后功能和官方有区别吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "没有任何区别。代充后你的账号就是正常的Plus/Pro账号，拥有GPT-5.4、o3推理、DALL·E等全部功能和额度。"
          }
        }
      ]
    })],
    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e3f5c9f50c34190ae43b4c3dd61195e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
  ],

  themeConfig: {
    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '💳 ChatGPT充值服务',
        items: [
          { text: 'Plus会员充值（120元/月）', link: '/service/plus' },
          { text: 'Pro会员充值', link: '/service/pro' },
        ]
      },
      {
        text: '📖 充值教程',
        items: [
          { text: '新手指南', link: '/guide/getting-started' },
          { text: '充值流程', link: '/guide/recharge-process' },
          { text: '常见问题', link: '/guide/faq' },
        ]
      },
      { text: '📰 最新资讯', link: '/news/' },
      { text: '📞 关于我们', link: '/about' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '充值教程',
          items: [
            { text: '新手指南', link: '/guide/getting-started' },
            { text: '充值流程', link: '/guide/recharge-process' },
            { text: '常见问题', link: '/guide/faq' },
          ]
        }
      ],
      '/news/': [
        {
          text: '🔥 最新文章',
          items: [
            { text: '资讯列表', link: '/news/' },
            { text: '🆕 充值哪种方法最安全？4种方式安全对比', link: '/news/chatgpt-plus-chongzhi-na-zhong-fangfa-zui-anquan-2026' },
            { text: '🆕 2026年4月最新充值攻略：4种方法亲测对比', link: '/news/chatgpt-plus-chongzhi-gonglue-2026-zuixin-si-zhong-jiaocheng' },
            { text: '🆕 第一次代充怎么做？新手零失误完整指南', link: '/news/chatgpt-daichong-di-yi-ci-xin-shou-wan-quan-zhinan-2026' },
            { text: '🆕 代充会封号吗？2026封号真相+零封号指南', link: '/news/chatgpt-daichong-fenghao-fengxian-zhensiang-2026' },
            { text: '🆕 代充多久到账？到账时间详解+慢了怎么办', link: '/news/chatgpt-daichong-duojiu-daozh-daozh-shuoming-2026' },
            { text: '🆕 Pro代充安全吗？价格+步骤+防坑指南', link: '/news/chatgpt-pro-daichong-anquan-jiage-quanglue-2026' },
            { text: '🆕 ChatGPT代充怎么操作？自助代充全流程', link: '/news/chatgpt-daichong-zenme-caozuo-zijhu-quanliu-2026' },
            { text: '🆕 ChatGPT代充完整攻略：3种方式安全对比', link: '/news/chatgpt-daichong-wanzheng-gonglue-3zhong-fangshi-anquan-duibi-2026' },
            { text: '🆕 ChatGPT Pro代充教程：国内怎么订阅Pro？', link: '/news/chatgpt-pro-daichong-jiaocheng-guonei-dingyue-2026' },
            { text: '🆕 ChatGPT代充值靠谱吗？亲测避坑指南', link: '/news/chatgpt-daichong-kaopuma-bikeng-zhinan-2026' },
            { text: '🆕 ChatGPT国内如何升级PLUS？最全代充指南', link: '/news/chatgpt-guonei-shengji-plus-daichong-zhinan-2026' },
            { text: '🆕 ChatGPT代充哪个平台靠谱？平台评测', link: '/news/chatgpt-daichong-pingtai-pingce-2026' },
            { text: '🆕 ChatGPT代充后怎么用？Plus功能教程', link: '/news/chatgpt-daichong-plus-features-guide-2026' },
            { text: '🆕 【亲测可行】2026年4月ChatGPT代充教程', link: '/news/chatgpt-daichong-2026-newest-guide' },
            { text: '🆕 Plus和免费版10大区别完整对比', link: '/news/chatgpt-plus-vs-free-qubie-2026' },
          ]
        },
        {
          text: '📚 代充教程',
          items: [
            { text: 'ChatGPT国内怎么充值？代充方案全解析', link: '/news/chatgpt-china-how-to-recharge-2026' },
            { text: 'ChatGPT代充靠谱吗？5000+用户验证', link: '/news/chatgpt-daichong-reliable-review' },
            { text: 'ChatGPT代充安全吗？封号风险解析', link: '/news/chatgpt-daichong-anquan-fengxian-fenghao-2026' },
            { text: 'ChatGPT代充常见骗局大揭秘', link: '/news/chatgpt-recharge-scam-guide' },
            { text: 'ChatGPT代充行业真相揭秘', link: '/news/chatgpt-daichong-industry-truth-2026' },
            { text: 'ChatGPT代充值（支付宝/微信）攻略', link: '/news/chatgpt-daichongzhi-gonglue-zhifubao-weixin-2026' },
            { text: '【亲测】ChatGPT PLUS/PRO代充完整指南', link: '/news/chatgpt-plus-pro-recharge-tutorial-2026' },
            { text: 'ChatGPT怎么充值？5种方式真实对比', link: '/news/chatgpt-chongzhi-fangshi-duibi-2026' },
            { text: '2026年ChatGPT充值教程：国内5种方式', link: '/news/chatgpt-recharge-guide-2026' },
            { text: 'ChatGPT代充值安全吗？靠谱平台怎么选', link: '/news/chatgpt-recharge-safety' },
            { text: 'ChatGPT国内能用吗？完整使用攻略', link: '/news/chatgpt-china-guide' },
          ]
        },
        {
          text: '💰 价格与套餐',
          items: [
            { text: 'ChatGPT代充值多少钱？价格渠道对比', link: '/news/chatgpt-daichong-price-comparison-2026' },
            { text: 'ChatGPT Plus代充价格完整指南', link: '/news/chatgpt-plus-recharge-price-guide' },
            { text: 'ChatGPT Plus vs Pro vs Team怎么选？', link: '/news/chatgpt-plus-vs-pro-vs-team-comparison' },
            { text: 'ChatGPT会员哪个值得买？全套餐横评', link: '/news/chatgpt-membership-comparison-2026' },
            { text: 'ChatGPT Plus和Pro区别对比', link: '/news/chatgpt-plus-vs-pro' },
            { text: 'ChatGPT Team vs Plus vs Pro对比', link: '/news/chatgpt-team-vs-plus-vs-pro' },
            { text: 'ChatGPT Pro值得买吗？$200/月深度评测', link: '/news/chatgpt-pro-worth-it-2026' },
            { text: 'ChatGPT Plus值得买吗？深度体验评价', link: '/news/chatgpt-plus-worth-it' },
          ]
        },
        {
          text: '📖 订阅与充值',
          items: [
            { text: 'ChatGPT Plus会员订阅全指南', link: '/news/chatgpt-plus-subscription-guide' },
            { text: 'ChatGPT Plus充值失败？7个解决方案', link: '/news/chatgpt-plus-recharge-failure-solutions' },
            { text: 'ChatGPT充值被拒？8种原因及解决', link: '/news/chatgpt-recharge-declined-solutions' },
            { text: 'ChatGPT订阅付款失败完整解决方案', link: '/news/chatgpt-subscription-payment-failed-guide' },
            { text: '2026年ChatGPT Plus充值攻略（全四种）', link: '/news/chatgpt-plus-recharge-guide-2026' },
            { text: 'ChatGPT Plus代充后如何验证升级成功？', link: '/news/chatgpt-plus-after-recharge-verification' },
            { text: 'ChatGPT Plus代充一次能用多久？续费详解', link: '/news/chatgpt-plus-recharge-duration-renewal' },
            { text: 'ChatGPT Plus会员到期了怎么续费？', link: '/news/chatgpt-plus-renewal-guide' },
            { text: 'ChatGPT Plus订阅怎么取消？退款全教程', link: '/news/chatgpt-cancel-subscription-refund' },
            { text: 'ChatGPT企业版Team/Enterprise充值教程', link: '/news/chatgpt-team-enterprise-recharge-guide' },
            { text: 'ChatGPT API充值教程：国内开发者指南', link: '/news/chatgpt-api-recharge-guide' },
          ]
        },
        {
          text: '🚀 功能与使用',
          items: [
            { text: 'ChatGPT Plus一个月能用多少次？额度指南', link: '/news/chatgpt-plus-usage-limits-guide' },
            { text: 'ChatGPT免费版和Plus版区别完整对比', link: '/news/chatgpt-free-vs-plus-comparison' },
            { text: 'ChatGPT 5.4深度评测：最强AI模型', link: '/news/chatgpt-gpt54-review-2026' },
            { text: 'GPT-5来了！Plus用户能用GPT-5吗？', link: '/news/chatgpt-gpt5-plus-features' },
            { text: 'ChatGPT o3和o4-mini使用完整指南', link: '/news/chatgpt-o3-o4-mini-guide' },
            { text: 'ChatGPT 4o怎么用？免费版和Plus区别', link: '/news/chatgpt-4o-guide' },
            { text: '用ChatGPT写论文：学生党升级Plus指南', link: '/news/chatgpt-plus-for-students-writing-guide' },
          ]
        },
        {
          text: '👤 账号与安全',
          items: [
            { text: 'ChatGPT账号注册教程：国内3分钟完成', link: '/news/chatgpt-register-guide-china-2026' },
            { text: '没有账号怎么代充？从注册到充值教程', link: '/news/chatgpt-register-then-recharge-guide' },
            { text: 'ChatGPT账号安全和封号风险完整指南', link: '/news/chatgpt-account-security-ban-guide' },
            { text: 'ChatGPT Plus学生优惠？省钱充值攻略', link: '/news/chatgpt-student-discount-guide' },
          ]
        },
        {
          text: '📰 行业资讯',
          items: [
            { text: '2026年ChatGPT最新动态：OpenAI重大更新', link: '/news/openai-chatgpt-updates-timeline-2026' },
          ]
        },
      ],
      '/service/': [
        {
          text: '充值服务',
          items: [
            { text: 'Plus会员充值（120元/月）', link: '/service/plus' },
            { text: 'Pro会员充值', link: '/service/pro' },
          ]
        }
      ]
    },

    footer: {
      message: '微信客服：Luv12203 ｜ 每天 9:00-23:00 在线 ｜ <a href="https://gptbuys.com/?ref=SNAKE" target="_blank">自助充值商城</a>',
      copyright: '© 2024-2026 ChatGPT代充 - GPTBuy | chatgpt-cn-recharge.com'
    },

    socialLinks: [],

    outline: {
      label: '本文目录',
      level: [2, 3]
    },

    lastUpdated: {
      text: '更新于'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    }
  }
})
