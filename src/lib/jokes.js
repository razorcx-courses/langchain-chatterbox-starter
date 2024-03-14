import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { StructuredOutputParser } from "@langchain/core/output_parsers";

const model = new ChatOpenAI({
  openAIApiKey: import.meta.env.VITE_APP_OPEN_API_KEY,
  temperature: 0,
});

const prompt = PromptTemplate.fromTemplate(
  "Tell me a joke about \n{format_instructions}\n{input}"
);

export const getJokeResponse = async (input) => {
  const functionSchema = [
    {
      name: "joke",
      description: "A joke",
      parameters: {
        type: "object",
        properties: {
          setup: {
            type: "string",
            description: "The setup for the joke",
          },
          punchline: {
            type: "string",
            description: "The punchline for the joke",
          },
        },
        required: ["setup", "punchline"],
      },
    },
  ];

  model.bind({
    functions: functionSchema,
    function_call: { name: "joke" },
  });

  //const stringParser = new StringOutputParser();

  const structuredParser = StructuredOutputParser.fromNamesAndDescriptions({
    setup: "The setup for the joke",
    punchline: "The punchline for the joke",
  });

  const chain = RunnableSequence.from([prompt, model, structuredParser]);

  // const result = await chain.invoke({ input: input.value });

  const result = await chain.invoke({
    input: input,
    format_instructions: structuredParser.getFormatInstructions(),
  });

  return result;
};
