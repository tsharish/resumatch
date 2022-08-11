import { defineStore } from "pinia"

export const useKeyphrasesStore = defineStore({
    id: 'keyphrases',
    state: () => ({
        keyphrases: [] as string[]
    }),
    actions: {
        resetKeyphrases() {
            this.keyphrases = []
        },
        removeItem(index: number) {
            this.keyphrases.splice(index, 1)
        }
    }
})