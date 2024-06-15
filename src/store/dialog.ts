import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    showAddMessageDialog: false
  }),
  actions: {
    openAddMessageDialog() {
      this.showAddMessageDialog = true
    },
    closeAddMessageDialog() {
      this.showAddMessageDialog = false
    }
  }
})
