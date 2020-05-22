module.exports = {
    title: 'Pandora',
    description: 'Just playing around',
    dest: 'dist',
    base: '/pandora-doc/',
    themeConfig: {
        sidebarDepth: 1,
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/introduction/' },
            { text: 'GitLab', link: 'https://git.souche-inc.com/loan/magic-park/showbox' }
        ],
        sidebar: [
            ['/introduction/', '介绍'],
            ['/install/', '安装使用'],
            ['/recommend/', '推荐物料'],
            {
                title: '开发指南',
                collapsable: true,
                children: [
                    ['/guide/block.md', '开发区块']
                ]
            }
        ]
    },
    configureWebpack: config => {
        config.output.publicPath = './';
    }
}
