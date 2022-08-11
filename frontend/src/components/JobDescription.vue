<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useJobStore } from '@/stores/job'
import { useKeyphrasesStore } from '@/stores/keyphrases'
import axios from 'axios'

const router = useRouter()
const storeJob = useJobStore()
const storeKeyphrases = useKeyphrasesStore()
const jobDescription = ref('')
const loading = ref(false)
const api = axios.create({
    baseURL: import.meta.env.DEV ? 'http://127.0.0.1:8000/api/v1' : '/api/v1',
    params: {
        top_n: 100
    }
})

async function getKeyphrases() {
    if (jobDescription.value !== storeJob.job) {    //Only hit the backend if the job description has changed
        loading.value = true
        storeJob.job = jobDescription.value
        try {
            const response = await api.post('/', storeJob.job)
            storeKeyphrases.resetKeyphrases()
            for (const item of response.data) {
                storeKeyphrases.keyphrases.push(item[0])
            }
        } catch (error) {
            console.log(error)
        }
        loading.value = false
    }
    router.push({ name: 'keyPhrases' })
}
</script>

<template>
    <Card>
        <template #title>
            Enter Job Description
        </template>
        <template #content>
            <div class="p-fluid">
                <ProgressBar v-if="loading" mode="indeterminate" style="height: .3em" />
                <Textarea v-model="jobDescription" :autoResize="true" rows="5" cols="50" :disabled="loading" />
            </div>
        </template>
        <template #footer>
            <Button label="Next" class="p-button-sm" @click="getKeyphrases"
                :disabled="jobDescription.length == 0 || loading" />
        </template>
    </Card>
</template>