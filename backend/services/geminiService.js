const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const generateServiceContent = async (
  title,
  category,
  description
) => {
const prompt = `
Generate content for a medical diagnostic service.

Title: ${title}
Category: ${category}
Description: ${description}

Rules:
- Generate shortTitle (maximum 8 characters)
- Generate exactly 4 benefits
- Generate exactly 3 uses
- Benefits must be SHORT (2-4 words)
- Uses must be SHORT (2-4 words)
- Do NOT write sentences
- Return JSON only

Example:

{
  "shortTitle": "PET CT",
  "benefits": [
    "High Accuracy",
    "Early Detection",
    "Cancer Staging",
    "Treatment Monitoring"
  ],
  "uses": [
    "Cancer Detection",
    "Disease Staging",
    "Response Assessment"
  ]
}
`;
    console.log("Calling Gemini...");
  const result = await model.generateContent(prompt);

  let response = result.response.text();

  response = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(response);
  } catch (error) {
    console.log("Gemini JSON Error:", response);

    return {
  shortTitle: title
    .split(" ")
    .slice(0, 2)
    .join(" ")
    .toUpperCase(),

  benefits: [
    "High Accuracy",
    "Fast Reports",
    "Expert Team",
    "Advanced Technology",
  ],

  uses: [
    "Disease Detection",
    "Health Assessment",
    "Medical Evaluation",
  ],
};
  }
};

module.exports = {
  generateServiceContent,
};