# 开发区块

### Vue区块物料开发演示

### Step 1

clone官方仓库，切换开发分支

```
#私有物料仓库
git clone git@github.com/xxx.git

cd xxx

# 切换开发分支
git checkout -b block/OrderList
```

### Step 2

选择物料开发模板，按照提示操作，生成物料文件
::: tip
物料名称为大驼峰写法，例如OrderList, Card
:::

```
pandora add
```

生成的物料文件
::: tip
下载区块时，只会包含区块的src文件夹，所以区块的所有源码都应位于src目录下，这意味着你的所有外部依赖都应位于该目录下，
比如一张图片，工具函数等，使用第三方npm包的方式不变
:::

```
-blocks
    -OrderList
        --public // index.html和网站图标，一般不用修改
        --src  // 区块的所有源码位于该目录
            --index.vue // 文件名最好不要修改，否则要同时修改main.js中的App路径
            ...
        --main.js // 主入口，可以做一下初始化操作，使用三方库等
        --babel.config.js // babel配置
        --vue.config.js // vue配置文件 
        --README.md // 说明文件
        --package.json // 版本信息，名称，维护人等信息
```   

### Step 3

进入生成的区块物料文件夹，安装依赖，启动开发环境http://localhost:8222，开始开发
```
cd blocks/UserInfo && npm i

npm run serve
```

### Step 4

开发完成后，新开一个终端，在当前区块开发路径下（./blocks/OrderList）执行pandora sh，按照提示进行截图，截图用于区块预览，
也可自行截图，并把图片的网络地址添加到物料数据文件materials.json中的screenshot字段

::: tip
截图时不可关闭开发环境
:::

```
# -p 指定开发环境端口，可选，默认8222。
pandora sh -p 8333

# 查看帮助
pandora sh -h
```

### Step 5

物料数据文件位于根目录下的materials.json，确认无误后，提交代码，提mr等待合并即可

```
{
	"name": "vue-materials",
	"alias": "Vue物料",
	"gitPath": "git@git.github.com:xxx.git",
	"list": {
		"blocks": [
			{
				"framework": "vue",
				"type": "block",
				"tags": "mobile, element ui",
				"name": "OrderList",
				"description": "订单列表",
				"sourceCode": "xxx",
				"screenshot": "xxx"
			}
		],
		"components": []
	}
}
```



