import http from "./http";

const fetchComments = async () => {
  try {
    const response = await http.get("/comments"); // Fetch comments
    return response.data; // Return the data
  } catch (error) {
    throw error; // Throw the error for handling
  }
};

export { fetchComments };
