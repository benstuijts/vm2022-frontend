import Head from 'next/head'

export default function Home() {

  

  return (
    <>
    
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <div>
          <h1>WELKOM</h1>
          
        </div>

        <h1 className="title mt-5">
          Welcome to VM website
        </h1>

        <p>
          {process.env.NEXT_PUBLIC_ADRES}
        </p>

        
      </main>

      

      
    </div>
    </>
  )
}
