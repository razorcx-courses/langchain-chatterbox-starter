<template>
  <ChatBox
    :response="response"
    v-model="modelValue"
    @getResponse="onGetResponse"
  ></ChatBox>
</template>

<script setup>
import { ref } from "vue";
import { getJokeResponse } from "../lib/jokes";
import ChatBox from "./ChatBox.vue";

const response = ref("");
const modelValue = ref("pigeon");

const onGetResponse = async () => {
  response.value = await getJokeResponse(modelValue.value);
  console.log(response.value);
};
</script>
