import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Top Travel Destinations</title>
        <meta name="Webapp sharing top travel destinations" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <h2 className="page-heading destinations">Top Travel Destinations</h2>
        <section className='gallery-container'>
        <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/South_Island" target="_blank" rel="noopener noreferrer">
              <Image
               src="/resources/NZ.jpg" 
               alt="icy green mountains and clear lake" 
               width='300'
               height='271'
               layout='responsive'
              />
            </a>
            <figcaption className="figcaption">South Islands, New Zealand</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/Paris" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/Paris.jpg" 
                alt="The Eiffel Tower"
                width='300'
                height='271'
                layout='responsive' 
              />
            </a>
            <figcaption className="figcaption">Paris</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/Bora_Bora" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/Bora-Bora.jpg" 
                alt="cozy huts on the ocean" 
                width='300'
                height='271'
                layout='responsive' 
              />
              </a>
            <figcaption className="figcaption">Bora Bora</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/Glacier_National_Park_(U.S.)" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/GNP.jpg"
                alt="beautiful mountains with a glacial lake bvelow" 
                width='300'
                height='271'
                layout='responsive'
              />
            </a>
            <figcaption className="figcaption">Glacier National Park</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/London" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/London.jpg"
                alt="Big Ben" 
                width='300'
                height='271'
                layout='responsive'
              />
            </a>
            <figcaption className="figcaption">London</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/Maui" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/Maui.jpg"
                alt="Palrm tree resort" 
                width='300'
                height='271'
                layout='responsive'
              />
            </a>
            <figcaption className="figcaption">Maui</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/Tahiti" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/Tahiti.jpg"
                alt="huts over the ocean"
                width='300'
                height='271'
                layout='responsive'
              />
            </a>
            <figcaption className="figcaption">Tahiti</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/Tokyo" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/Tokyo.jpg"
                alt="Tokyo city at night"
                width='300'
                height='271'
                layout='responsive' 
              />
            </a>
            <figcaption className="figcaption">Tokyo</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/Rome" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/Rome.jpg" 
                alt="the Colloseum" 
                width='300'
                height='271'
                layout='responsive'
              />
            </a>
            <figcaption className="figcaption">Rome</figcaption>
          </fig>
          <fig className="gallery">
            <a href="https://en.wikipedia.org/wiki/Phuket_Province" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/resources/Phuket.jpg"
                alt="Ocean Mountains"
                width='300'
                height='271'
                layout='responsive' 
              />
            </a>
            <figcaption className="figcaption">Phuket</figcaption>
          </fig>
        </section>
      </main>
    </>
  )
}
