<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
	{
		label: 'Job Description',
		to: '/'
	},
	{
		label: 'Key Phrases',
		to: '/keyphrases'
	},
	{
		label: 'Resume Match',
		to: '/resumematch'
	}
])
</script>

<template>
	<div>
		<div class="card mb-3 bg-primary-reverse">
			<Steps :model="items" class="py-3" />
		</div>
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</div>
</template>
