module.exports = {
    title: 'Pandora',
    description: 'Just playing around',
    dest: 'dist',
    base: '/pandora-doc/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        sidebarDepth: 1,
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/introduction/' },
            { text: 'github', link: 'https://github.com/ideagay/pandora' }
        ],
        sidebar: [
            ['/introduction/', '介绍'],
            ['/install/', '安装使用'],
            {
                title: '开发指南',
                collapsable: true,
                children: [
                    ['/guide/custom_material.md', '自定义物料'],
                    ['/guide/block.md', '开发区块']
                ]
            }
        ]
    },
    configureWebpack: config => {
        config.output.publicPath = '/pandora-doc/';
    }
}
