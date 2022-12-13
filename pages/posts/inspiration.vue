<template>
 <div class="pic_container"> 
     <img src="https://picsum.photos/1400?random=1"/>
    <img src="https://picsum.photos/1400?random=2"/>
    <img src="https://picsum.photos/1400?random=3"/>
    <img src="https://picsum.photos/1400?random=4"/>
    <img src="https://picsum.photos/1400?random=5"/>
    <img src="https://picsum.photos/1400?random=6"/>
    <img src="https://picsum.photos/1400?random=7"/>
    <img src="https://picsum.photos/1400?random=8"/>
    <img src="https://picsum.photos/1400?random=9"/>
    <img src="https://picsum.photos/1400?random=10"/>
    <img src="https://picsum.photos/1400?random=11"/>
    <img src="https://picsum.photos/1400?random=12"/>
    <img src="https://picsum.photos/1400?random=13"/>
    <img src="https://picsum.photos/1400?random=14"/>
    <img src="https://picsum.photos/1400?random=15"/>
    <img src="https://picsum.photos/1400?random=16"/>
    <img src="https://picsum.photos/1400?random=17"/>
    <img src="https://picsum.photos/1400?random=18"/>
    <img src="https://picsum.photos/1400?random=19"/>
    <img src="https://picsum.photos/1400?random=20"/>
    <img src="https://picsum.photos/1400?random=21"/>
    <img src="https://picsum.photos/1400?random=22"/>
    <img src="https://picsum.photos/1400?random=23"/>
    <img src="https://picsum.photos/1400?random=24"/>
    <img src="https://picsum.photos/1400?random=25"/>
    <img src="https://picsum.photos/1400?random=26"/>
    <img src="https://picsum.photos/1400?random=27"/>
    <img src="https://picsum.photos/1400?random=28"/>
    <img src="https://picsum.photos/1400?random=29"/>
    <img src="https://picsum.photos/1400?random=30"/>
    <img src="https://picsum.photos/1400?random=31"/>
    <img src="https://picsum.photos/1400?random=32"/>
    <img src="https://picsum.photos/1400?random=33"/>
    <img src="https://picsum.photos/1400?random=34"/>
    <img src="https://picsum.photos/1400?random=35"/>
    <img src="https://picsum.photos/1400?random=36"/>
    <img src="https://picsum.photos/1400?random=37"/>
    <img src="https://picsum.photos/1400?random=38"/>
    <img src="https://picsum.photos/1400?random=39"/>
    <img src="https://picsum.photos/1400?random=40"/>
    <img src="https://picsum.photos/1400?random=41"/>
    <img src="https://picsum.photos/1400?random=42"/>
  </div>
</template>
<style scoped>
.pic_container {
  background: black;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

div img{
  width: 100%;
  object-fit: cover;
}


@media screen and (min-width: 1601px){
  .pic_container img:nth-of-type(3) {
    grid-column: 4 / 6;
    grid-row: 2 / 4;
  }

  .pic_container img:nth-of-type(4) {
    grid-column: 1 / 3;
    grid-row: 5 / 7;
  }
}


@media screen and (min-width: 925px) and (max-width: 1600px){
  .pic_container {
    grid-template-columns: repeat(3, 1fr);
  }

}


@media screen and (min-width: 568px) and (max-width: 924px){
  .pic_container {
    grid-template-columns: repeat(2, 1fr);

  }
}



@media screen and (max-width: 567px){
  .pic_container {
    grid-template-columns: 1fr;
  }

}
</style>