<template>
	<div class="w-full min-h-[calc(100vh-160px)] text-left space-y-8">
		<div class="text-3xl font-bold">Офис в каком городе Вас интересует?</div>
		<div class="flex justify-between">

		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { setCurrentOffice } from '@/scripts/offices'

const officeId = useRoute().params.officeId as string

setCurrentOffice(+officeId)
</script>
