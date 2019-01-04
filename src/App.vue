<template>
  <el-row class="tac">
    <h5 class="title">
			<img alt="Flutter" height="37" width="129" src="./assets/flutter-lockup.svg">
			<img alt="i am whoami" height="110" width="90" class="whoami" src="./assets/git1.png">
			<!-- https://xxoojs.github.io/jser.github.io/ -->
		</h5>
    <el-col :span="4">
      	<el-menu
			default-active="0"
			:default-openeds="[0, 1, 2]"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			v-for="(menu, idx) in menus"
		>
			<el-submenu :index="idx + ''">
				<template slot="title">
					<i :class="menu.icon"></i>
					<span>{{menu.title}}</span>
				</template>
				<el-menu-item-group v-for="group in menu.children">
					<template slot="title" v-if="group.title">{{group.title}}</template>
					<template v-for="(subMenu, index) in group.children">
					<router-link v-if="subMenu.route" :to="subMenu.route">
						<el-menu-item :index="index + ''">
						{{subMenu.title}}
						</el-menu-item>
					</router-link>
					<el-menu-item v-else :index="index + ''">
						{{subMenu.title}}
					</el-menu-item>
					</template>
				</el-menu-item-group>
			</el-submenu>
      	</el-menu>
    </el-col>
    <el-col :span="20">
		<div class="container">
			<router-view></router-view>
		</div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data(){
		return {
			menus: [{
				icon: 'el-icon-bell',
				title: '开发指南',
				children: [{
					title: '功能总览',
					children: [{
					title: 'Overview',
					route: 'overview'
					}]
				}],
			}, {
				icon: 'el-icon-picture',
				title: '基础控件',
				children: [{
				title: '基础',
				children: [{
					title: '图片 Image',
					route: 'image'
				},{
					title: '文本 Text'
				},{
					title: '图标 Icon'
				},{
					title: '按钮 Button'
				},{
					title: '提示 Placeholder'
				},{
					title: '喽狗 Logo'
				}]
			},{
				title: '带把儿',
				children: [{
					title: '带头把儿 AppBar'
				},{
					title: '二级把儿 TabBar'
				},{
					title: '底部把儿 BottomNavigationBar'
				}]
			}]
			},{
				icon: 'el-icon-menu',
				title: '如何布局',
				children: [{
					title: '盒模型',
					children: [{
						title: '容器 Container'
					},{
						title: '斯卡佛得 Scaffold'
					},{
						title: '行 Row'
					},{
						title: '列 Column'
					}]
				}]
			}]
		};
    },
    methods: {
		handleOpen(){},
		handleClose(){}
    }
  }
</script>

<style scoped>
	.title{
		color: #1389FD;
		font-size: 12px;
		margin-bottom: 30px;
		padding: 10px 20px 10px;
			font-family: "Google Sans", "Roboto", sans-serif;
		border-bottom: 1px solid #EBEEF5;
			box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
	}
	.container{
		margin: 15px 20px;
	}
  	a{
		text-decoration: none;
		color: #303133;
	}
	.whoami{
		border-radius: 50%;
		position: absolute;
		right: 20px;
		top: 0;
	}
</style>