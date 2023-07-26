import Image from 'next/image'
import Nav from './components/Nav'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between w-full">
      <Nav />
      <button className="btn btn-outline">Choose template</button>
  
    </main>
  )
}
