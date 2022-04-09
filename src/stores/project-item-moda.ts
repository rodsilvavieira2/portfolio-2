import { defineStore } from "pinia";

export const useProjectItemModal = defineStore({
  id: "projectItemModal",
  state: () => ({
    isOpen: false,
    projectItemId: "",
  }),
});
