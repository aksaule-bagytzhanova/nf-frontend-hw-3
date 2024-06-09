import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const fetchPosts = async () => {
  const response = await axios.get('https://dummyjson.com/posts');
  return response.data.posts;
};

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
