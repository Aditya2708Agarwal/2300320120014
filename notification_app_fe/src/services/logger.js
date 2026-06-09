import axios from "axios";

export const Log = async (
  stack,
  level,
  pkg,
  message
) => {
  try {
    await axios.post(
      "http://localhost:5000/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      }
    );
  } catch (error) {
    console.error(error);
  }
};