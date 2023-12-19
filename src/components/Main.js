import Posts from './Posts';
import FormAddPost from './FormAddPost';
import { PostContext } from '../context/PostContext';
import { useContext } from 'react';

function Main() {
  const { posts, onAddPost } = useContext(PostContext);
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
