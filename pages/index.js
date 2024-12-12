import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>My Notion Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.properties.Name.title[0]?.text.content}</li>
        ))}
      </ul>
    </div>
  );
}



