<template>
	<div class="skilllist" v-show="isActiveTab(tabname)">
		<div v-for="(skill, index) in skills" class="skilllist__cell">
			<div :class="skill.familarity">{{skill.name}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'skilllist',
		props: ['tabname', 'skills'],
		methods: {
		    isActiveTab: function(val) {
		      	return this.tabname === val;
		    },
		    styleCell: function(val) {
		    	let col, col_end = 2, row, row_end = 2;
		    	
	    		col = Math.floor(val % 3) + 1;
		    	row = Math.floor(val / 3) + 1;
		    	console.log("col " + col + " row " + row);		    	
		    	if (col === 2 || col === 3){
		    		col_end = 3;
		    	}
		    	if (row === 2 || row === 3){
		    		row_end = 3;
		    	}
		    	
		    	return "grid-column-start: "+col+";grid-column-end:"+col_end+";grid-row-start: "+row+";grid-row-end: "+row_end+";";
		    }
		}
	}
</script>

<style lang="scss">
$cellN: 10;
	@mixin dimension($color, $shadow) {
		content: "";
		display: block;
		float: left;
		height: 1em;
		width: 1em;
		border-radius: 50%;
		margin-left: 4.5em;
		background-color: $color;
		box-shadow: 0 0 0.5em $shadow;
	}
	div .low {
		&:before {
			@include dimension(rgb(181, 73, 97), rgba(181, 73, 97, 0.6));
		}
	}

	div .mid {
		&:before {
			@include dimension(rgb(249, 191, 69), rgba(249, 191, 69, 0.6));	
		}	
			
	}

	div .high {
		&:before {
			@include dimension(rgb(190, 194, 63), rgba(190, 194, 63, 0.6));
		}
	}

	.skilllist {
padding-left: 5em;
		margin: 1em;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		&__cell {
			height: 1.5em;
			width: 14.5em;
		}
	}
</style>