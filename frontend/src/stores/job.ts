import { defineStore } from "pinia"

export const useJobStore = defineStore({
    id: 'job',
    state: () => ({
        job: ''
    }),
    actions: {
        resetJob() {
            this.job = ''
        }
    }
})