import Header from './components/Header'
import Post from './components/Post'
import Sidebar from './components/Sidebar'

import styles from './App.module.css'

function App() {
 return (
  <>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>

        <Post 
        author="Carlos Oliveira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quae saepe libero labore alias dolorum ad sapiente. Perspiciatis non et, suscipit animi officia asperiores itaque eligendi culpa consectetur ullam enim."
      />

      <Post
        author="Fulano Oliveira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quae saepe libero labore alias dolorum ad sapiente. Perspiciatis non et, suscipit animi officia asperiores itaque eligendi culpa consectetur ullam enim."
      />
      
      <Post
        author="Ciclano Oliveira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quae saepe libero labore alias dolorum ad sapiente. Perspiciatis non et, suscipit animi officia asperiores itaque eligendi culpa consectetur ullam enim."
      />

        </main>
      </div>
      
    </>
 )
}

export default App
