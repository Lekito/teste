import Image from 'next/image'
import Header from './components/Header'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Header />
      <h1>Olá mundo</h1>
    </main>
  )
}
