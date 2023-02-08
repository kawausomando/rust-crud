import styles from './page.module.css'
import Posts from '@/feature/post/Posts';

async function fetchPosts() {
  const res = await fetch(`${process.env.REACT_APP_CRUD_ENDPOINT}`);
  return res.json();
}

export default async function Home() {
  const response = await fetchPosts();
  const posts = response.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      body: item.body,
    } 
  });
  
  return (
    <main className={styles.main}>
      <Posts posts={posts} />
    </main>
  )
}
