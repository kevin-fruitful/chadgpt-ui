import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

interface SendQuestionResponse {
  answer: string;
}
export interface ChatHistoryEntry {
  question: string;
  answer: string;
}
export async function sendQuestion(
  question: string,
  chatHistory: ChatHistoryEntry[]
): Promise<SendQuestionResponse> {
  try {
    const response = await axios.post<SendQuestionResponse>(
      `${API_URL}/api/chat`,
      {
        question,
        chat_history: chatHistory,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error while sending the question:", error);
    throw error;
  }
}
