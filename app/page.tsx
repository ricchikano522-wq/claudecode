import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Strength from './components/Strength'
import Service from './components/Service'
import Message from './components/Message'
import Company from './components/Company'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Strength />
        <Service />
        <Message />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
