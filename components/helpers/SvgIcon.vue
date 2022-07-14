<template>
	svg-icon

</template>

<script>
export default {
	name: 'svg-icon',
	props: {
		name: {
			type: String,
			required: true
		},
		
		title: {
			type: String,
			default: null
		}
	},
	
	computed: {
		iconPath() {
			let icon = require(`~/assets/svg-sprites/svg/${this.name}.svg`);
			if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
				icon = icon.default;
			}
			
			return icon;
		},
		
		className() {
			return 'svg-icon svg-icon--' + this.name;
		}
	},
	methods: {
		getItem() {
			let icon = require(`~/assets/svg-sprites/svg/${this.name}.svg`);
			if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
				icon = icon.default;
			}
			
			console.log(icon.url)
		}
	},
	mounted() {
		this.getItem()
	}
};
</script>

<style>
.svg-icon {
	width: 24px;
	height: 24px;
	fill: currentColor;
}
</style>
