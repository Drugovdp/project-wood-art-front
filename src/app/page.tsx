import Advantages from '../components/Advantages/Advantages'
import ContactForm from '../components/ContactForm/ContactForm'
import Faq from '../components/Faq/Faq'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import GalleryServer from '../components/ReadFileImges/ReadFileImages'
import Steps from '../components/Steps/Steps'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Suspense fallback={<div style={{ padding: '5rem 0', textAlign: 'center' }}>Загрузка галереи…</div>}>
          <GalleryServer />
        </Suspense>
        <ContactForm />
        <Steps />
        <Faq />
      </main>
      <Footer />
    </>
  )
}