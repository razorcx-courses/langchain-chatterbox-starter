<template>
  <section id="chat" class="pt-4 px-4 h-full">
    <div
      id="chat-card"
      class="flex flex-col max-w-sm md:max-w-lg mx-auto rounded-md overflow-hidden"
    >
      <div class="flex justify-center items-center bg-black py-3 text-white">
        <p class="text-xs font-semibold">
          LangChain -
          <span class="font-medium text-pink-400">
            chatter<span class="text-white font-bold">Box</span>
          </span>
        </p>
      </div>
      <div
        id="response"
        class="bg-gray-200 p-3 pb-0 text-white h-44 md:h-64 flex flex-col"
      >
        <div
          class="border-l-0 border border-solid border-b-gray-400 text-xs text-gray-800 flex justify-left items-center rounded-t-sm overflow-hidden"
        >
          <p class="bg-gray-300 py-1 px-3 rounded-t-sm">AI Response</p>
        </div>
        <div
          class="h-[140px] md:h-full p-3 bg-gray-300 rounded-b-sm text-sm overflow-x-auto overflow-y-auto text-gray-800"
        >
          <template v-if="response">
            <p
              class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
            >
              Setup
            </p>
            <p class="ml-3 mb-3">{{ response.setup }}</p>
            <p
              class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
            >
              Punchline
            </p>
            <p class="ml-3">{{ response.punchline }}</p>
          </template>
        </div>
      </div>
      <div id="prompt" class="bg-gray-200 text-sm p-3 flex flex-col rounded-b-sm ">
        <div
          class="border-l-0 border border-solid border-b-gray-400 text-xs text-gray-800 flex justify-left items-center rounded-t-sm overflow-hidden"
        >
          <p class="bg-white py-1 px-3 rounded-t-sm">Human Prompt</p>
        </div>
        <textarea
          v-model="modelValue"
          class="text-gray-800 w-full overflow-y-auto p-3 rounded-sm"
          rows="3" style="resize: none;"
        >
        </textarea>
      </div>
      <div class="flex justify-center items-center">
        <button
          @click="$emit('getResponse')"
          class="bg-pink-400 py-1 px-4 text-sm rounded-sm mt-2"
        >
          Send
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  response: {},
});
const modelValue = defineModel();
</script>
