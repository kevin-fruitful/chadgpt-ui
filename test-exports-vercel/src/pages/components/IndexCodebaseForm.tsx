// components/IndexCodebaseForm.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { indexCodebase } from "../api/index-codebase";

function IndexCodebaseForm() {
  const [gitUrl, setGitUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await indexCodebase(gitUrl);
      console.log("Indexing result:", result);
      // Handle the result as needed, e.g., show a success message or update the UI
    } catch (error) {
      console.error("Error while indexing the codebase:", error);
      // Handle the error as needed, e.g., show an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={gitUrl}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setGitUrl(e.target.value)
        }
        placeholder="Enter Git URL"
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Indexing..." : "Index Codebase"}
      </button>
    </form>
  );
}

export default IndexCodebaseForm;
