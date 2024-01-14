import { watch } from "vue";
import { search } from "./App.vue";

watch(search, () => {
  console.log("Hello from watch ");
});
