import { Header } from "./components/Header";
import { Post } from "./Post";

export function App() {
  return (
    <>
      <Header />
      
      <Post
        author="Erick Nunes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quos molestiae? Eius aliquam ipsum voluptates, distinctio inventore doloremque ut iste, perferendis repudiandae neque non, atque reprehenderit consequatur labore consectetur praesentium."
      />
    </>
    
  )
}