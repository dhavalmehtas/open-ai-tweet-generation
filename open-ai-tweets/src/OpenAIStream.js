import PropTypes from "prop-types";
import React from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export async function OpenAIStream(Payload) {
  const openai = new OpenAIApi(configuration);

  const res = await openai.createCompletion({
    model: Payload.model,
    prompt: Payload.prompt,
  });

  try {
    return res?.data.choices[0]?.text || "";
  } catch (e) {
    return e;
  }
}
OpenAIStream.Payload = {
  model: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};
