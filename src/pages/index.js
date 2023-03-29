import Head from 'next/head'
import { useState } from 'react'
import MainSection from '@/components/MainSection/main'
import axios from 'axios'


export default function Home({ data }) {
  const [isLoading, setIsLoading] = useState(false) 
  
  return (
    <>
      <Head>
        <title>ElonsWebtoon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <MainSection isLoading={isLoading} />
      </main>
    </>
  )
}

// export async function getServerSideProps(){
//   let data = []
//   try {
//     const response = await axios.get('https://api.jikan.moe/v4/seasons/now')
//     data = await response.data
//   } catch (error) {
//     console.log(error);
//   }
  
//   return {
//     props: {data}
//   }
// }