<template>
  <div class="editPage" style="margin-top: 90px">
    <div class="title-header" style="display: flex;width: 100%;margin-bottom:10px;">
      <span style="display:inline-block;width:auto;line-height:32px"><strong>标题&nbsp;&nbsp;&nbsp;</strong></span>
      <a-input style="flex:1;margin-right:10px;"></a-input>
      <a-button type="primary"  style="width:70px">发布</a-button>
    </div>

    <v-md-editor
      class="editor"
      @copy-code-success="handleCopyCodeSuccess"
      :disabled-menus="[]"
      v-model="text"
      height="80vh"
    ></v-md-editor>
  </div>
</template>
 
<script setup>
// export default {
//   // components: { QuillEditor },
//   data(){
//     return {
//       text:"",

//   },
// },
// };
import { ref } from "vue";
const text = ref("");

const handleCopyCodeSuccess = (code) => {
  console.log(code);
};
</script>
 
<style lang="scss">
.editPage {
  width: 100%;
  padding: 0 30px;
}
</style>