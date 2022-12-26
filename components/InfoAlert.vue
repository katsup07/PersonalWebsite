<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 30%;
  left: 0%;
  width: 30%;
  font-weight: 400;
  background: rgb(96, 202, 153);
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  border: 0.1px solid grey;
  border-radius: 0.1rem;
}
</style>
