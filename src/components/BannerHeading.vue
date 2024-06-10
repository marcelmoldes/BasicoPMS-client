<template>
  <div class="h-14 m-8">
    <div class=".5 -4">
      <div class="gap-3 flex">
        <button @click="$emit('showGrid')" type="button">List</button>

        <button @click="$emit('showCard')" type="button">Cards</button>

        <button type="button">Calendar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["showCard", "showGrid"],
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  font-family: monospace;
  margin: 3px;
  font-size: 16px;
  font-weight: 150;
  height: 45px;
  letter-spacing: 1px;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:after {
  content: "";
  background-color: lightblue;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

button:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  button {
    padding: 13px 50px 13px;
  }
}
</style>
