# 自定义物料

### step 1

首页在github或其它代码托管平台上新建一个仓库，仓库只要符合以下目录及文件规范即可

```
-根目录
    -blocks // 存放区块目录
    -components // 存放组件目录
    --materials.json // 物料数据文件，具体见下文
    --README.md // 说明文件
    --package.json // 物料仓库信息
```

#### materials.json示例

```
{
	"name": "my-materials",
	"alias": "我的自定义物料",
	"gitPath": "git@git.souche-inc.com:xx/xxx.git",
    "type": "React",
    "description": "描述信息",
	"list": {
		"blocks": [], // 新建区块物料时自动生成，无需手动添加，详见上一章节
		"components": []
	}
}
```

### step 2

开始开发物料，参考下一章
[开发区块](/pandora-doc/guide/block)


### step 3

导入私有物料
![导入私有物料](//img.souche.com/f2e/b2bec58ae4d27354696752b43d63da7f.jpg)
