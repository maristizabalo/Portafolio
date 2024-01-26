import Hero from '@/components/main/Hero'
import HeroContent from '@/components/sub/HeroContent'

export default function Home() {
  return (
    <main className='h-screen w-full'>
      <div className='flex flex-col h-full w-full'>
        <Hero />
        <HeroContent />
      </div>
    </main>
  )
}
