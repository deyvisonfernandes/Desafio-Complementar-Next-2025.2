'use client'

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"; //baixar o shadcn --> npx shadcn@latest add textarea/button/spinner
import { useChat } from "@ai-sdk/react"; //npm i @ai-sdk/react 
import { useState } from "react";

export default function ChatbotOpenAi(){

    const[input, setInput] = useState("");

    const { messages, sendMessage } = useChat();

    const handleSubmit = (e) => {
        e.preventDefault();

        sendMessage({
            text: input
        });
        setInput("")
    };
    


//<pre key={message.id}>{JSON.stringify(message,null,2)}</pre>
    return(
        <div className="flex flex-col w-100 z-10 justify-center ">
            <div className="bg-gray-400">Mensagens
                {messages.map((message) => {
                    const textParts = message.parts.filter(part => part.type === 'text')

                    const textContent = textParts[0]?.text

                    return(
                        <pre key={message.id}>{textContent}</pre>
                    )
                })}

            </div>

            <form onSubmit={handleSubmit}>

            <Textarea placeholder="Como posso te ajudar?" onChange={(e) => setInput(e.target.value)} value={input}>

            </Textarea>
            <Button type="submit">Enviar</Button>
            </form>

        </div>
    );

    
}