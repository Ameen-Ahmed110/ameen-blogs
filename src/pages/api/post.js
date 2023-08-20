import { useState } from "react";

const postsData = [
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknu5FGDIKCuT5-3TIyfM5feSjfXY3QzsImg&usqp=CAU",
    blogtitle: "Introducing Whisper",
    author: "Elon Musk-August 19th, 2023",
    blogContent: `Whisper is an automatic speech recognition (ASR) system trained on
              680,800 hours of multilingual and multitask supervised data collected
              from the web. We show that the use of such a large and diverse dataset
              leads to improved robustness to accents, background noise and
              technical language. Moreover, it enables transcription in multiple
              languages, as well as translation from those languages into English.
              We are open-sourcing models and inference code to serve as a
              foundation for building useful applications and for further research
              on robust speech processing.`,
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknu5FGDIKCuT5-3TIyfM5feSjfXY3QzsImg&usqp=CAU",
    blogtitle: "An Action Button Could Be Coming to the Iphone 15",
    author: "Inzimam MAlik-August 19th, 2023",
    blogContent: `The iPhone 15 is rumored to introduce an "action button," a dedicated physical button with customizable functions. This button could offer quicker access to apps, shortcuts, voice assistants, or modes. While details are yet to be confirmed by Apple, this potential addition aligns with their focus on improving user experience and device interactiong.`,
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknu5FGDIKCuT5-3TIyfM5feSjfXY3QzsImg&usqp=CAU",
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
