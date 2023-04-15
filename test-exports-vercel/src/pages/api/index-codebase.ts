// utils/api.ts
import axios from "axios";

interface IndexCodebaseResponse {
  // Define the shape of your API response here
  success: boolean;
  message: string;
}
export async function indexCodebase(
  gitUrl: string
): Promise<IndexCodebaseResponse> {
  try {
    const normalizedGitUrl = gitUrl.endsWith(".git") ? gitUrl : `${gitUrl}.git`;
    const response = await axios.post<IndexCodebaseResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/index_codebase`,
      { git_url: normalizedGitUrl }
    );
    return response.data;
  } catch (error) {
    console.error("Error while indexing the codebase:", error);
    throw error;
  }
}
