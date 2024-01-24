import { defineStore } from "pinia";

export const useNumberStore = defineStore("numbers", {
  state: () => {
    return {
      number: [1, 2, 3, 4, 5],
    };
  },
  
});
