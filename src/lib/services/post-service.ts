export type Post = {
  date: string;
  description: string;
  title: string;
  imageURL: string;
  liked: boolean;
};

const API_URL =
  "https://api.nasa.gov/planetary/apod?api_key=l7pBZ7ulf3kTf8ylh9nZuawrgk9vM17gtU9dsAgJ";

const getSome = (count: number): Promise<Post[]> => {
  return fetch(`${API_URL}&count=${count}`)
    .then((response) => response.json())
    .then((rawPosts) =>
      rawPosts.map((rawPost) => ({
        date: rawPost.date,
        description: rawPost.explanation,
        title: rawPost.title,
        imageURL: rawPost.url,
        liked: false,
      }))
    );
};

const postService = {
  getSome,
};

export default postService;
