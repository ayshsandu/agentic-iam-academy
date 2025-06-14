
import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, X, LoaderCircle } from "lucide-react";
import { getSiteContent } from "@/data/siteContent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Chatbot = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [tempApiKey, setTempApiKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; parts: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedApiKey = localStorage.getItem("gemini_api_key");
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSaveApiKey = () => {
    if (tempApiKey) {
      localStorage.setItem("gemini_api_key", tempApiKey);
      setApiKey(tempApiKey);
      setMessages([
        { role: 'model', parts: "Great! I'm ready. Ask me anything about the content on this site." }
      ]);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || !apiKey || isLoading) return;

    const userMessage = { role: 'user' as const, parts: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        generationConfig: {
            temperature: 0.2,
            topP: 0.9,
            maxOutputTokens: 1000,
        },
        safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        ]
      });

      const siteContent = getSiteContent();
      const systemInstruction = `You are a helpful AI assistant for the 'IAM for Agentic AI Academy' website. Your goal is to answer questions based ONLY on the provided context, which is the entire content of the website. Do not use any external knowledge. If the user's question cannot be answered from the context, politely state that the information is not available on the site. Be concise and helpful. Here is the site content: \n\n${siteContent}`;
      
      const chat = model.startChat({
        history: [{ role: "user", parts: [{ text: systemInstruction }] }, {role: "model", parts: [{text: "I understand. I will only use the provided context to answer questions."}]}],
      });
      
      const result = await chat.sendMessage(input);
      const response = result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: 'model', parts: text }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = (error instanceof Error && error.message.includes("API key not valid"))
        ? "Your API key is not valid. Please check it and try again."
        : "An error occurred. Please try again later.";
      setMessages((prev) => [...prev, { role: 'model', parts: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderApiKeyPrompt = () => (
    <div className="p-6">
      <DialogHeader>
        <DialogTitle>Gemini API Key Required</DialogTitle>
        <DialogDescription>
          To use the AI assistant, please enter your Google Gemini API key. You can get one from Google AI Studio. This key will be stored securely in your browser's local storage.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-4 flex gap-2">
        <Input
          type="password"
          placeholder="Enter your Gemini API Key"
          value={tempApiKey}
          onChange={(e) => setTempApiKey(e.target.value)}
        />
        <Button onClick={handleSaveApiKey}>Save</Button>
      </div>
    </div>
  );
  
  const renderChat = () => (
    <div className="flex h-[60vh] flex-col">
      <DialogHeader>
        <DialogTitle>AI Assistant</DialogTitle>
      </DialogHeader>
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><Bot size={18}/></AvatarFallback>
                </Avatar>
              )}
              <div className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                {msg.parts}
              </div>
              {msg.role === 'user' && (
                 <Avatar className="h-8 w-8">
                  <AvatarFallback><User size={18}/></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback><Bot size={18}/></AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg px-3 py-2">
                <LoaderCircle className="animate-spin" size={20} />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <DialogFooter className="p-4 border-t">
        <form
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <Input
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </DialogFooter>
    </div>
  );

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-7 w-7" />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 gap-0 max-w-lg">
          {!apiKey ? renderApiKeyPrompt() : renderChat()}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Chatbot;
