const host = "https://jsonplaceholder.typicode.com/posts";

export default async function getPosts() {
  try {
    const response = await fetch(host);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Server error");
    }
  } catch (err) {
    console.log(err);
  }
}
