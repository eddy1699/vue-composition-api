<template>
  <div class="home">
    <h1>Ref vs Reactive</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIronman">Cambiar Ironman</button>
    <button  @click="changeHulk">Cambiar Hulk</button>
  </div>
</template>

<script>
import { ref,reactive } from "vue";
// @ is an alias to /src

export default {
  name: "HomeView",

  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 50 });
    return {
      ironman,
      hulk,
      changeIronman: () => {
        (ironman.value.name = "Tony Stark"), (ironman.value.age = 55);
      },
      changeHulk: () => {
        (hulk.name = "Bruce Banner"), (hulk.age = 45);
      },
    };
  },
};
</script>
