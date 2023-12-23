import { useEffect, useState } from 'react';
import { PostProvider, usePosts } from './context/PostContext';
// import { faker } from '@faker-js/faker';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Archive from './components/Archive';
import createRandomPost from './utils/createRandomPost';

// function createRandomPost() {
//   return {
//     title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
//     body: faker.hacker.phrase(),
//   };
// }

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode');
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? '☀️' : '🌙'}
      </button>

      <PostProvider>
        <Header />
        <Main />
        <Archive onCreateRandomPost={createRandomPost} />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
