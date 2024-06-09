import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchPost = async (id) => {
  const response = await axios.get(`https://dummyjson.com/posts/${id}`);
  return response.data;
};

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const post = await fetchPost(id);
        setPost(post);
      };

      getPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;
