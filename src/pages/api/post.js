import { useState } from "react";

const postsData = [
  {
    imgURL:
      "https://images.unsplash.com/photo-1600812227435-d194ea36937d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    blogtitle: "Introducing Whisper",
    author: "Imran khan-August 19th, 2023",
    blogContent: `Introducing Whisper, OpenAI's cutting-edge speech synthesis technology. Whisper goes beyond traditional text-to-speech, producing remarkably natural and expressive AI-generated voices. Trained on diverse datasets, it captures emotion, accents, and context, bridging the gap between human and AI communication. Whisper's versatility and authenticity make it a game-changer for audiobooks, virtual assistants, and more, enhancing user experience and engagement in voice interactions.`,
  },
  {
    imgURL:
      "https://images.unsplash.com/photo-1600812227435-d194ea36937d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    blogtitle: "An Action Button Could Be Coming to the Iphone 15",
    author: "Inzimam MAlik-August 19th, 2023",
    blogContent: `The iPhone 15 is rumored to introduce an "action button," a dedicated physical button with customizable functions. This button could offer quicker access to apps, shortcuts, voice assistants, or modes. While details are yet to be confirmed by Apple, this potential addition aligns with their focus on improving user experience and device interactiong.`,
  },
  {
    imgURL:
      "https://images.unsplash.com/photo-1600812227435-d194ea36937d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    blogtitle: "Introducing ChatGPt",
    author: "Ishaq-August 19th, 2023",
    blogContent: `Allow me to introduce ChatGPT, an advanced conversational AI powered by the GPT-3.5 architecture, created by OpenAI. This innovative language model has been trained on a wide range of text sources up until September 2021. ChatGPT is designed to understand and generate human-like text, making it capable of engaging in natural and coherent conversations on various topics. Its abilities span from answering questions and offering explanations to assisting with writing, brainstorming, and more. With its extensive knowledge base and language skills, ChatGPT serves as a versatile tool for diverse communication needs.
    .`,
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request (fetching data)
    res.status(200).json(postsData);
  } else if (req.method === "POST") {
    // Handle POST request (posting data)
    const { title, content, userId } = req.body;
    const newPost = {
      id: Date.now(),
      title,
      content,
      userId,
    };
    postsData.push(newPost);
    res.status(201).json(newPost);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
