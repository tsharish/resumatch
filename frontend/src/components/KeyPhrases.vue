<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useJobStore } from '@/stores/job'
import { useKeyphrasesStore } from '@/stores/keyphrases'

const router = useRouter()
const storeJob = useJobStore()
const storeKeyphrases = useKeyphrasesStore()
</script>

<template>
    <Card>
        <template #title>
            Refine Key Phrases
        </template>
        <template #content>
            <p style="font-weight: bold;">Please remove keyphrases that are not relevant. You can also add keyphrases by
                typing them at the end and pressing 'Enter'.</p>
            <Chips v-model="storeKeyphrases.keyphrases" />
            <p style="font-weight: bold;">Job Description from the previous step:</p>
            <p>{{ storeJob.job }}</p>
        </template>
        <template #footer>
            <Button label="Previous" class="p-button-sm mr-3" @click="router.push({ name: 'jobDescription' })" />
            <Button label="Next" class="p-button-sm" @click="router.push({ name: 'resumeMatch' })" />
        </template>
    </Card>
</template>

<style>
.p-chips-token {
    margin-bottom: 0.5rem;
}
</style>