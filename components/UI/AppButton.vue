<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.button {
  font: inherit;
  background-color: rgb(35, 35, 35);
  color: white;
  padding: 5px;
  margin-top: 0.1rem;
  cursor: pointer;
  border: 1px solid rgba(113, 224, 159, 0.749);
  border-radius: 0.1rem;
}

.button:hover,
.button:active {
  background-color: rgb(66, 66, 66);
}

.inverted {
  background-color: white;
  color: black;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: white;
  border: 1px solid transparent;
}

.confirm {
  background-color: rgb(46, 176, 228);
  color: white;
  border: 1px solid rgba(113, 224, 159, 0.749);
}

.confirm:hover,
.confirm:active {
  background-color: rgba(46, 176, 228, 0.767);
  color: white;
}
</style>
