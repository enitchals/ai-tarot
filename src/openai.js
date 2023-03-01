import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
  apiKey: process.env.OPEN_API_KEY
})

const openai = new OpenAIApi(config)

export const getTarotReading = async(card, orientation) => { 
  console.log(process.env)
  const reading = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a four sentence, second-person tarot reading for the card ${card} ${orientation === 1 ? 'reversed\n' : '\n'}. Don't include the name of the card.`,
    temperature: 0.99,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.49,
  })
  return reading.data.choices[0].text;
}