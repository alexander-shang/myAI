import Fuse from "fuse.js";

const vagueQuestionSamples = [
  "where should i put my bed",
  "how should i arrange my room",
  "where should my desk go",
  "what should i buy for my bathroom",
  "how do i decorate my living room"
];

// Set up Fuse.js for fuzzy searching
const fuse = new Fuse(vagueQuestionSamples, {
  threshold: 0.4 // Adjust similarity sensitivity (0 = strict match, 1 = very loose)
});
