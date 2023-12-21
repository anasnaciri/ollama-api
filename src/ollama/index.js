import { Ollama } from "langchain/llms/ollama";

//instanciate ollama
const ollama = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "llama2",
});

export default ollama;
