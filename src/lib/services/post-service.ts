export type IPost = {
  id: string;
  date: string;
  description: string;
  title: string;
  imageURL: string;
  liked: boolean;
};

const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;

const getSome = (count: number): Promise<IPost[]> => {
  return fetch(`${API_URL}&count=${count}`)
    .then((response) => response.json())
    .then((rawPosts) =>
      rawPosts.map(
        (rawPost): IPost => ({
          id: Date.now() + rawPost.url,
          date: rawPost.date,
          description: rawPost.explanation,
          title: rawPost.title,
          imageURL: rawPost.url,
          liked: false,
        })
      )
    );
};

const postService = {
  getSome,
};

export default postService;
