// src/utils/github-api.ts
export const getGistById = async (gistId: string): Promise<any> => {
    const response = await fetch(`https://api.github.com/gists/${gistId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch gist with ID ${gistId}`);
    }
    return response.json();
  };
  