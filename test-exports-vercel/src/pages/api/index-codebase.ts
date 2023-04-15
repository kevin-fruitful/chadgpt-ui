// utils/api.ts
import axios from "axios";

const API_URL = "http://localhost:5000";

interface IndexCodebaseResponse {
  // Define the shape of your API response here
  success: boolean;
  message: string;
}

export async function indexCodebase(
  gitUrl: string
): Promise<IndexCodebaseResponse> {
  try {
    const response = await axios.post<IndexCodebaseResponse>(
      `${API_URL}/api/index_codebase`,
      { git_url: gitUrl }
    );
    return response.data;
  } catch (error) {
    console.error("Error while indexing the codebase:", error);
    throw error;
  }
}
