<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 10%;
  left: 0%;
  max-width: 100%;
  font-weight: 500;
  padding: 0.5rem;
  background: rgba(51, 51, 51, 0.801);
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  border: 0.1px solid rgba(113, 224, 159, 0.749);
  color: rgba(113, 224, 159, 0.749);
  border-radius: 0.2rem;
}

@media (max-width: 600px){
  dialog{
  font-size: 0.8rem;
  }
}
@media (max-width: 350px){
  dialog{
  font-size: 0.6rem;
  }
}
</style>
