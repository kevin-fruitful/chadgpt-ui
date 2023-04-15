// components/IndexCodebaseForm.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { indexCodebase } from "../api/index-codebase";
import styles from "@/styles/Home.module.css";

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
    <form onSubmit={handleSubmit} className={styles.urlForm}>
      <input
        type="text"
        value={gitUrl}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setGitUrl(e.target.value)
        }
        className={styles.gitUrlInput}
        placeholder="Enter github repo link or prompt"
      />
      <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
        {isSubmitting ? "Chadifying..." : "Chadify My Contract"}
      </button>
    </form>
  );
}

export default IndexCodebaseForm;
