import Header from './components/Header'
import Post from './components/Post'

function App() {
 return (
  <>
      <Header/>
      
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
    </>
 )
}

export default App
