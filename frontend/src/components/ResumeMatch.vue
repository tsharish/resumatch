<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useJobStore } from '@/stores/job'
import { useKeyphrasesStore } from '@/stores/keyphrases'

const router = useRouter()
const resume = ref('')
const storeJob = useJobStore()
const storeKeyphrases = useKeyphrasesStore()
const score = ref(0)
const notFound = ref<string[]>([])

function calculateResults(resume: string) {
    let count = 0
    let tempNotFound = [] as string[]
    for (const item of storeKeyphrases.keyphrases) {
        if (resume.toLowerCase().includes(item.toLowerCase())) {
            count++
        } else {
            tempNotFound.push(item)
        }
    }
    const rawScore = (count / storeKeyphrases.keyphrases.length) * 100
    score.value = parseFloat(rawScore.toFixed(0))
    notFound.value = [...tempNotFound]
}

watch(resume, (newValue) => {
    calculateResults(newValue)
})

router.beforeEach(() => {
    if (resume.value.length > 0) {
        calculateResults(resume.value)
    }
})

function startOver() {
    storeJob.resetJob()
    storeKeyphrases.resetKeyphrases()
    resume.value = ''
    score.value = 0
    notFound.value = []
    router.push({ name: 'jobDescription' })
}
</script>

<template>
    <Card>
        <template #title>
            Match with Resume
        </template>
        <template #content>
            <div class="p-fluid">
                <div class="flex mb-3">
                    <Knob v-model="score" disabled :strokeWidth="10" v-if="score > 0" />
                    <div v-if="notFound.length > 0" class="ml-5">
                        <p style="font-weight: bold">Not Found Keyphrases:</p>
                        <Chip v-for="item in notFound" :label="item" :key="item" class="mr-1" />
                    </div>
                </div>
                <div class="field">
                    <label>Paste your resume below:</label>
                    <Textarea v-model="resume" :autoResize="true" rows="5" cols="50" />
                </div>
            </div>
        </template>
        <template #footer>
            <Button label="Previous" class="p-button-sm mr-3" @click="router.push({ name: 'keyPhrases' })" />
            <Button label="Start Over" class="p-button-sm" @click="startOver" />
        </template>
    </Card>
</template>