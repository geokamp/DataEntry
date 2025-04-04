import Hero from "@/components/heroPage/Hero";
import Head from "next/head";

export default function Home() {
 

  return (
    <>
    
      <Head>
        <title>Data Entry</title>
        <meta
          name="description"
          content="Data for you!"
        />
      </Head>
    
      <Hero/>
    
    </>
    
  );
}
