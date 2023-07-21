<template>
  <div class="editPage" style="margin-top: 90px">
    <div class="title-header" style="display: flex;width: 100%;margin-bottom:10px;">
      <span style="display:inline-block;width:auto;line-height:32px"><strong>标题&nbsp;&nbsp;&nbsp;</strong></span>
      <a-input style="flex:1;margin-right:10px;"></a-input>
      <a-button type="primary"  @click="showModal"  style="width:70px">发布</a-button>
    </div>

    <v-md-editor
      class="editor"
      @copy-code-success="handleCopyCodeSuccess"
      :disabled-menus="[]"
      v-model="text"
      height="80vh"
    ></v-md-editor>
  </div>
  <a-modal v-model:open="open" cancelText="取消" okText="发布文章" title="发布文章" style="width:600px" @ok="handleOk">
   <a-form
    :wrapper-col="wrapperCol"
    layout="horizontal"
    style="max-width: 600px"
  >
  <a-form-item label= "文章标签"  :rules="[{ required: true, message: 'Please select your country!' }]"> 
    <a-tag color="blue" closable = true>前端</a-tag>
    <a-tag color="default" @click="tagList">
       <PlusOutlined />
       添加文章标签
    </a-tag>
  </a-form-item>
  <a-form-item label="添加封面"  :rules="[{ required: true, message: 'Please select your country!' }]">
      <a-upload action="/upload.do" list-type="picture-card">
        <div>
          <PlusOutlined />
          <div style="margin-top: 8px">添加文章封面</div>
        </div>
      </a-upload>
    </a-form-item>
  </a-form>
  </a-modal>
  <a-modal title="选择文章标签" v-model:open="openTag" cancelText="取消" ></a-modal>
</template>
 
<script setup>
import { ref } from "vue";
import { PlusOutlined} from "@ant-design/icons-vue";
const text = ref("");
const open = ref(false);
const openTag = ref(false);

const handleCopyCodeSuccess = (code) => {
  console.log(code);
};
const showModal = () =>{
  open.value = true;
}
const handleOk = () =>{
  open.value = false
}
const wrapperCol = {
  span: 14,
};
const tagList = () =>{
  openTag.value = true;
}
</script>
 
<style lang="scss">
.editPage {
  width: 100%;
  padding: 0 30px;
}
.ant-tag{
  height: 28px;
    line-height: 25px;
}
</style>