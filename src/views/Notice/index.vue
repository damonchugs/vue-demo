<template>
  <div class="notification">
		<div class="title-notification">
			<i :class="`iconfont ${typeChoose[type].icon}`" :style="`color: ${typeChoose[type].color};`"></i>
		</div>
		<div class="content-notification">
			<span>{{ msg }}</span>
		</div>
		<div class="close-btn-notification">
			<i class="iconfont iconshibai"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: "NOTIFICATION",
	props: {
		type: {
			type: String,
			default() { return 'danger' }
		},
		msg: {
			type: String,
			default() { return '这是一个成功的演示' }
		}
	},
	data() {
		return {
			typeChoose: {
				scuess: {
					icon: 'iconchenggong2',
					color: '#35d0ba'
				},
				error: {
					icon: 'iconshibaibiaoqing',
					color: '#84a9ac'
				},
				danger: {
					icon: 'iconjinggao',
					color: 'red'
				},
				warning: {
					icon: 'icontongzhi',
					color: '#00bcd4'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import 'https://at.alicdn.com/t/font_2013654_o3pgvhti3ah.css';
.notification {
	width: 300px;
	height: auto;
	padding: 20px;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 1px 1px 5px #ccc;
	position: fixed;
	top: 30px;
	right: 30px;
	display: flex;
	.title-notification i {
		font-size: 30px;
		line-height: 30px;
		font-weight: bold;
	}
	.content-notification {
		padding-left: 10px;
		span {
			font-size: 16px;
			line-height: 30px;
		}
	}
	.close-btn-notification {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
}
</style>