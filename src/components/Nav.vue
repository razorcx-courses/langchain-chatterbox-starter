<template>
  <nav
    class="sticky top-0 text-sm px-3 h-8 flex justify-between items-center bg-black text-white"
  >
    <a href="/"
      ><h2 class="text-md font-medium text-pink-400">
        chatter<span class="text-white font-bold">Box</span>
      </h2></a
    >

    <div class="flex justify-between items-center gap-3 md:gap-6">
      <a href="https://js.langchain.com/docs/expression_language/cookbook"
        ><p>LangChain</p></a
      >
      <a href="https://vuejs.org/guide/introduction.html"><p>Vue</p></a>
      <a href="https://tailwindcss.com/"><p>TailwindCSS</p></a>
    </div>
    <button
      class="flex justify-center items-center bg-pink-400 py-1 px-3 rounded-sm text-xs"
    >
      LOGIN
    </button>
  </nav>
</template>
