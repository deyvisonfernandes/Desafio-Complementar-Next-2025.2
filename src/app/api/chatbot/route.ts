import { openai } from "@ai-sdk/openai"; //npm i @ai-sdk/openai para instalar os modulos da OpenAI
import {convertToModelMessages, streamText} from "ai";  //npm i ai para instalar os modulos da Vercel AI SDK

export async function POST(request: Request){
    const { messages } = await request.json();

    const modelMessages = convertToModelMessages(messages);

    const result = streamText({
        model: openai("gpt-4o"),
        system: 'Você é um chatbot que só irá responder e conversar sobre psicologia, principalmente benefícios e características da profissão. Sobre qualquer outro tema, você deverá dizer que é um chat apenas sobre psicologia',
        messages: modelMessages,


    });

    return result.toUIMessageStreamResponse()

}