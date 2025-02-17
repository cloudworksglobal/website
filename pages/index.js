import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen">
      <Header />
      <main className="container mx-auto p-4 text-center text-white">
        <section className="mt-8">
          <h1 className="text-4xl font-bold tracking-wide mb-4">I am Alfredo Palmieri Paso</h1>
          <p className="text-lg">CMS and CRM Manager | Web Developer</p>
          <div className="my-8">
            <Image
              src="/sora.gif"
              alt="Sora"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">My Portfolio</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="carousel relative">
                <div className="carousel-inner relative overflow-hidden w-full">
                  {/* Carrousel */}
                  <div className="carousel-item active">
                    <img src="/path-to-image/vinculat.png" className="d-block w-full rounded-lg shadow-xl" alt="Vinculat" />
                  </div>
                  <div className="carousel-item">
                    <img src="/path-to-image/emerfgncias.png" className="d-block w-full rounded-lg shadow-xl" alt="Emergencias" />
                  </div>
                  <div className="carousel-item">
                    <img src="/path-to-image/AXIACORE.png" className="d-block w-full rounded-lg shadow-xl" alt="AXIACORE" />
                  </div>
                </div>
                <button className="carousel-control-prev absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-100" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat bg-transparent" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-100" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon inline-block bg-no-repeat bg-transparent" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p>I specialize in HTML, CSS, JavaScript, and frameworks like React and Next.js to create responsive and scalable websites.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Marketing Automation</h3>
              <p>Using HubSpot, Klaviyo, and other tools to streamline marketing processes and optimize lead generation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Growth Hacking</h3>
              <p>Leveraging data-driven strategies and innovative approaches to drive business growth and increase market presence.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p>With over 14 years of experience in IT and SaaS, I help businesses optimize their digital operations and scale effectively. Passionate about growth, I focus on mastering JavaScript, with a strong foundation in PHP, HTML, CSS, and database management.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
