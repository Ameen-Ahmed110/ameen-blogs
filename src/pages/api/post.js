import { useState } from "react";

const postsData = [
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknu5FGDIKCuT5-3TIyfM5feSjfXY3QzsImg&usqp=CAU",
    blogtitle: "Introducing Whisper",
    author: "Elon Musk",
    blogContent: `Whisper is an automatic speech recognition (ASR) system trained on
              680,000 hours of multilingual and multitask supervised data collected
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
    blogtitle: "Introducing Whisper",
    author: "Elon Musk",
    blogContent: `Whisper is an automatic speech recognition (ASR) system trained on
              680,000 hours of multilingual and multitask supervised data collected
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
    blogtitle: "Introducing Whisper",
    author: "Elon Musk",
    blogContent: `Whisper is an automatic speech recognition (ASR) system trained on
              680,000 hours of multilingual and multitask supervised data collected
              from the web. We show that the use of such a large and diverse dataset
              leads to improved robustness to accents, background noise and
              technical language. Moreover, it enables transcription in multiple
              languages, as well as translation from those languages into English.
              We are open-sourcing models and inference code to serve as a
              foundation for building useful applications and for further research
              on robust speech processing.`,
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
