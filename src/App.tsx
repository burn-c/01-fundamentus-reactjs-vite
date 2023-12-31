import Header from './components/Header';
import Post, { PostProps } from './components/Post';
import Sidebar from './components/Sidebar';

import styles from './App.module.css';

const posts: PostProps[] = [
  {
    id: 13452345,
    author: {
      avatarUrl: 'https://github.com/burn-c.png',
      name: 'Carlos Oliveira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-03 20:00:00'),
  },
  {
    id: 2523452345243,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'João Roberto',
      role: 'Backend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-16 20:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts?.map((post) => (
            <Post key={post?.id} author={post?.author} content={post?.content} publishedAt={post?.publishedAt} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
