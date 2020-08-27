<template>
  <div class="grid-container">
    <div v-for="(t, index) in grid" :key="index">
        <p>
            {{ t.name }}
            <span>-</span> <span>{{ t.style }}</span>
            <span v-if="t.style2"><br />{{ t.style2 }}</span>
            <span v-if="t.style3"><br />{{ t.style3 }}</span>
        </p>
        <div :class="`grid grid-${index + 1}`" :style="t.style">
            <div :style="`${t.style2 ? t.style2 : ''}${t.style3 ? t.style3 : ''}`">1</div>
            <div :style="`${t.style2 ? t.style2 : ''}`">2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GRID",
  data() {
      return {
          grid: [
              { name: 'grid', style: 'grid-template-columns: 20% 20% 20%; grid-template-rows: 50px 50px 50px;'},
              { name: 'inline-grid', style: 'grid-template-columns: repeat(3, 50px); grid-template-rows: repeat(3, 50px);'},
              { name: 'repeat', style: 'grid-template-columns: repeat(2, 50px 100px 80px); grid-template-rows: repeat(1, 50px);'},
              { name: 'auto-fill', style: 'grid-template-columns: repeat(auto-fill, 500px);'},
              { name: 'fr', style: 'grid-template-columns: 100px 1fr 2fr;'},
              { name: 'minmax', style: 'grid-template-columns: 1fr 2fr minmax(100px, 1fr);'},
              { name: 'auto ', style: 'grid-template-columns: 1fr auto 2fr;'},
              { name: '网格线的名称 ', style: 'grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];'},
              { name: 'grid-gap1', style: 'grid-template-columns: repeat(3, 50px);grid-row-gap: 20px;grid-column-gap: 20px;'},
              { name: 'grid-gap2', style: 'grid-template-columns: repeat(3, 50px);grid-gap: 20px 20px;'},
              { name: 'grid-template-areas', style: 'grid-template-columns: repeat(3, 50px);grid-template-rows: repeat(3, 50px); grid-template-areas: "a b c" "d e f" "g h i";'},
              { name: 'grid-auto-flow', style: 'grid-template-columns: repeat(3, 50px);grid-template-rows: repeat(3, 50px); grid-auto-flow: row;', style2: 'grid-column-start: 1;grid-column-end: 3;'},
              { name: 'grid-auto-flow dense', style: 'grid-template-columns: repeat(3, 50px);grid-template-rows: repeat(3, 50px); grid-auto-flow: row dense;', style2: 'grid-column-start: 1;grid-column-end: 3;'},
              { name: 'justify-items', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);justify-items: start;'},
              { name: 'align-items', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);align-items: start;'},
              { name: 'place-items', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);place-items: start;'},
              { name: 'grid-auto-rows', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);grid-auto-rows: 50px;'},
              { name: 'grid-column-start', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);', style3: 'grid-column-start: 1; grid-column-end: 3; grid-row-start: 2; grid-row-end: 4;'},
              { name: 'grid-column-start span', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);', style3: 'grid-column-start: span 2;'},
              { name: 'grid-column grid-row', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);', style3: 'grid-column: 1 / span 2;grid-row: 1 / span 2'},
              { name: 'grid-area', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);grid-template-areas: "a b c" "d e f" "g h i";', style3: 'grid-area: e;'},
              { name: 'justify-self align-self place-self', style: 'grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(3, 100px);', style3: 'justify-self: start;'},
          ]
      }
  }
};
</script>

<style lang="scss" scoped>
.grid-container {
  width: 90%;
  height: 100%;
  padding: 10px 5%;
  p {
    font-size: 24px;
    line-height: 60px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    span {
        font-size: 16px;
        line-height: 60px;
    }
  }
  .grid {
    display: grid;
    padding: 20px 20px;
    & > div {
      border: 1px solid black;
      line-height: 50px;
    }
  }
}
</style>