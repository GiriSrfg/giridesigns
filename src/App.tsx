import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Users,
  Gauge,
  Phone,
  Heart,
  Check,
  Clipboard,
  Database,
  Bell,
  Activity,
  BookOpen,
  Layers,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const heroFocusItems = [
  'enterprise products',
  'digital experiences',
  'web applications',
  'design systems'
]

const marqueeImages = [
  '/work/login-default.png',
  '/work/super-admin-manage-schools.png',
  '/work/school-admin-alumni-directory.png',
  '/work/referee-01.png',
  '/work/referee-02.png'
]

const topMarqueeImages = marqueeImages.slice(0, 3)
const bottomMarqueeImages = marqueeImages.slice(3)
const repeatMarqueeImages = (images: string[]) => [...images, ...images, ...images, ...images]

const siteNavLinks = [
  { label: 'projects', href: '#projects' },
  { label: 'about', href: '#about' },
  { label: 'notes', href: '#notes' },
  { label: 'contact', href: '#contact' }
] as const

const projects = [
  {
    number: '01',
    category: 'Sports ERP',
    name: 'Sports ERP',
    year: '2026',
    banner: '/work/sports-erp-banner.png',
    cardClass: 'bg-[#e6ff00] text-black',
    metaClass: 'border-black/20 text-black',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
    ]
  },
  {
    number: '02',
    category: 'Personal Project',
    name: 'Quick Notes',
    year: '2025',
    banner: '/work/quick-notes-banner.jpg',
    cardClass: 'bg-[#f3f1ff] text-[#0900ff]',
    metaClass: 'border-[#0900ff]/20 text-[#0900ff]',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
    ]
  },
  {
    number: '03',
    category: 'UI/UX',
    name: 'FUTURE FITNESS',
    year: '2025',
    banner: null,
    cardClass: 'bg-[#2f3a38] text-[#b5ffd0]',
    metaClass: 'border-[#b5ffd0]/25 text-[#b5ffd0]',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85'
    ]
  }
]

function ContactButton() {
  return (
    <button className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#BE4C00] px-8 py-3 text-xs font-medium uppercase tracking-[0.35em] text-white shadow-[0_4px_12px_rgba(181,1,167,0.25)] outline outline-2 outline-white/80 outline-offset-[-3px] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base'>
      Contact Me
    </button>
  )
}

function SiteHeader({
  scrollProgress,
  onBrandClick,
  onLinkClick
}: {
  scrollProgress: any
  onBrandClick?: () => void
  onLinkClick?: (href: string) => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)

    if (!onLinkClick) return
    event.preventDefault()
    onLinkClick(href)
  }

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 bg-black/60 backdrop-blur-lg'>
      <div className='flex items-center justify-between border-b border-white/20 px-6 pb-7 pt-8 sm:px-8 lg:px-[8.5vw]'>
        <motion.a
          href='#'
          onClick={(event) => {
            setIsMenuOpen(false)
            if (!onBrandClick) return
            event.preventDefault()
            onBrandClick()
          }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className='text-[2rem] font-light leading-none tracking-[-0.06em] text-white sm:text-2xl sm:tracking-[-0.03em]'
        >
          Portfolio
        </motion.a>

        <button
          type='button'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className='inline-flex items-center gap-5 text-[2rem] font-light leading-none tracking-[-0.06em] text-white/50 md:hidden'
        >
          <span>{isMenuOpen ? 'close' : 'menu'}</span>
          {isMenuOpen ? <X size={34} strokeWidth={1.7} /> : <Menu size={34} strokeWidth={1.6} />}
        </button>

        <div className='hidden items-center gap-10 text-base font-light lowercase text-white/55 md:flex xl:gap-14'>
          {siteNavLinks.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(event) => handleLinkClick(event, item.href)}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.55 }}
              className='transition hover:text-white'
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>

      <div className='relative h-px w-full bg-white/15'>
        <motion.div
          className='absolute left-0 top-0 h-full bg-white'
          style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
        />
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className='fixed inset-x-0 top-[96px] z-[-1] min-h-[calc(100vh-96px)] overflow-hidden bg-black px-6 pb-10 pt-24 md:hidden'
          >
            <div className='pointer-events-none absolute inset-0 opacity-35 blur-md'>
              <div className='absolute left-6 top-20 h-8 w-[68%] rounded-full bg-white/10' />
              <div className='absolute left-6 top-[34%] h-14 w-[46%] rounded-full bg-white/15' />
              <div className='absolute left-6 top-[47%] h-12 w-[70%] rounded-full bg-white/12' />
              <div className='absolute left-6 top-[60%] h-11 w-[58%] rounded-full bg-white/10' />
              <div className='absolute left-6 top-[73%] h-11 w-[62%] rounded-full bg-white/10' />
            </div>

            <div className='relative ml-auto flex w-fit flex-col items-end gap-16 pt-8'>
              {siteNavLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleLinkClick(event, item.href)}
                  className='text-[clamp(3rem,10vw,4.8rem)] font-light lowercase leading-none tracking-[-0.07em] text-white/55 transition hover:text-white'
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  )
}

function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length)
    }, 2000)

    return () => window.clearInterval(interval)
  }, [words.length])

  return (
    <span
      className='relative mt-2 block h-[2.25em] w-full max-w-full overflow-hidden align-bottom sm:inline-block sm:h-[1.05em] sm:min-w-[20ch] sm:w-auto sm:whitespace-nowrap'
    >
      <AnimatePresence initial={false} mode='sync'>
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.44, 0, 0.56, 1]
          }}
          className='absolute inset-0 block max-w-full whitespace-normal break-words sm:whitespace-nowrap'
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  })

  return (
    <p ref={ref} className='text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]'>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0.2 }}
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0, 1],
              [0.2, 1]
            )
          }}
          className='inline-block'
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </p>
  )
}

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0, margin: '50px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out'
}: {
  children: React.ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const withinPadding = Math.abs(distanceX) < rect.width / 2 + padding && Math.abs(distanceY) < rect.height / 2 + padding

    setIsActive(withinPadding)
    if (withinPadding) {
      setPosition({ x: distanceX / strength, y: distanceY / strength })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  return (
    <div
      className='relative will-change-transform'
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      style={{
        transition: isActive ? activeTransition : inactiveTransition,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      {children}
    </div>
  )
}

function App() {
  const { scrollY, scrollYProgress } = useScroll()
  const [sectionTop, setSectionTop] = useState(0)
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const pinWrapperRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState<typeof projects[number] | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'project-details'>('home')

  useEffect(() => {
    if (currentPage !== 'home') return

    const section = document.getElementById('marquee-section')
    if (section) {
      setSectionTop(section.offsetTop)
    }
  }, [currentPage])

  useEffect(() => {
    if (currentPage !== 'home' || !pendingAnchor) return

    const targetId = pendingAnchor.startsWith('#') ? pendingAnchor.slice(1) : pendingAnchor
    const target = document.getElementById(targetId)

    const raf = window.requestAnimationFrame(() => {
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setPendingAnchor(null)
    })

    return () => window.cancelAnimationFrame(raf)
  }, [currentPage, pendingAnchor])

  useEffect(() => {
    if (currentPage !== 'home') return

    const container = containerRef.current
    const pinWrapper = pinWrapperRef.current
    if (!container || !pinWrapper) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card')
      if (cards.length === 0) return

      const getPeekY = (card: HTMLElement) => {
        return 0.38 * window.innerHeight + card.offsetHeight / 2
      }

      // Initial state
      gsap.set(cards, { transformOrigin: 'center center' })
      gsap.set(cards[0], { y: 0, scale: 1, pointerEvents: 'auto' })
      
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], {
          y: () => i === 1 ? getPeekY(cards[i]) : window.innerHeight + cards[i].offsetHeight,
          scale: 0.98,
          pointerEvents: 'none'
        })
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: pinWrapper,
          start: 'top top',
          end: () => `+=${window.innerHeight * (cards.length - 1) * 0.95}`,
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      })

      for (let i = 0; i < cards.length - 1; i++) {
        const currentCard = cards[i]
        const nextCard = cards[i + 1]
        const followingCard = cards[i + 2]

        tl.addLabel(`step-${i}`)

        // 1. Next card slides to center and scales up (duration 1)
        tl.fromTo(nextCard,
          { y: () => getPeekY(nextCard), scale: 0.98, pointerEvents: 'none' },
          {
            y: 0,
            scale: 1,
            pointerEvents: 'auto',
            ease: 'power2.inOut',
            duration: 1
          },
          `step-${i}`
        )

        // 2. Current card starts animating only when the next card is halfway (duration 0.5, start at step-${i}+=0.5)
        tl.fromTo(currentCard,
          { y: 0, scale: 1, pointerEvents: 'auto' },
          {
            y: () => -0.12 * window.innerHeight,
            scale: 0.96,
            pointerEvents: 'none',
            ease: 'power2.inOut',
            duration: 0.5
          },
          `step-${i}+=0.5`
        )

        if (followingCard) {
          // Following card starts coming up from off-screen (duration 1)
          tl.fromTo(followingCard,
            { y: () => window.innerHeight + followingCard.offsetHeight, pointerEvents: 'none' },
            {
              y: () => getPeekY(followingCard),
              pointerEvents: 'none',
              ease: 'power2.inOut',
              duration: 1
            },
            `step-${i}`
          )
        }
      }
    }, containerRef)

    return () => ctx.revert()
  }, [currentPage])

  const row1X = useTransform(scrollY, (value) => {
    const offset = (value - sectionTop + (typeof window !== 'undefined' ? window.innerHeight : 0)) * 0.3
    return offset - 200
  })

  const row2X = useTransform(scrollY, (value) => {
    const offset = (value - sectionTop + (typeof window !== 'undefined' ? window.innerHeight : 0)) * 0.3
    return -((offset - 200))
  })

  const goHome = (anchor?: string) => {
    setCurrentPage('home')
    setActiveProject(null)
    setPendingAnchor(anchor ?? null)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <main className='overflow-x-clip bg-[#0C0C0C]'>
      <SiteHeader
        scrollProgress={scrollYProgress}
        onBrandClick={currentPage === 'home' ? undefined : () => goHome()}
        onLinkClick={currentPage === 'home' ? undefined : (href) => goHome(href)}
      />

      {currentPage === 'home' ? (
        <>
          <section className='relative min-h-screen overflow-hidden bg-black px-6 pb-8 pt-[96px] text-white sm:px-8 sm:pt-[90px] lg:px-[8.5vw]'>
            <div className='pointer-events-none absolute inset-y-[96px] left-6 right-6 opacity-45 sm:inset-y-[90px] sm:left-8 sm:right-8 lg:left-[8.5vw] lg:right-[8.5vw]'>
              <div className='h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:12.5%_100%]' />
            </div>

            <div className='relative z-10 flex min-h-[calc(100vh-96px)] flex-col sm:min-h-[calc(100vh-96px)]'>
              <div className='flex items-center justify-between gap-5 pt-3 font-mono text-[clamp(0.75rem,2.6vw,1.35rem)] leading-none text-white/45 sm:items-start sm:pt-3 sm:text-base sm:text-white/55'>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.55 }}
                  className='shrink-0 whitespace-nowrap'
                >
                  Hey, I&apos;m Giri
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.55 }}
                  className='flex min-w-0 items-center gap-2 whitespace-nowrap sm:gap-3'
                >
                  <span className='h-3 w-3 shrink-0 rounded-full bg-[#00ff84] sm:h-2 sm:w-2' />
                  available for new projects
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className='mt-16 sm:mt-auto pb-[16vh] sm:pb-[13vh] pt-12 sm:pt-24 md:pt-36 lg:pb-[15vh]'
              >
                <h1 className='max-w-[1060px] text-[clamp(3.2rem,12vw,8.75rem)] font-light leading-[1.06] tracking-[-0.07em] text-white sm:leading-[0.94] sm:tracking-normal'>
                  A UI/UX designer focused on
                  <RotatingWord words={heroFocusItems} />
                </h1>
              </motion.div>

              <div className='pointer-events-none absolute bottom-[14%] right-[-2vw] hidden h-8 w-20 items-center justify-center opacity-35 lg:flex'>
                <span className='absolute h-px w-full bg-white' />
                <span className='absolute h-full w-px bg-white' />
                <span className='h-6 w-6 rounded-full border border-white' />
              </div>
            </div>
          </section>

          <section id='marquee-section' className='bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40'>
            <div className='flex flex-col gap-3'>
              <motion.div style={{ x: row1X }} className='flex w-max gap-3 will-change-transform'>
                {repeatMarqueeImages(topMarqueeImages).map((src, index) => (
                  <img key={`row1-${index}`} src={src} alt='' loading='lazy' className='h-[clamp(230px,22vw,330px)] w-[clamp(360px,48vw,640px)] rounded-2xl border border-white/10 bg-white/5 object-cover' />
                ))}
              </motion.div>
              <motion.div style={{ x: row2X }} className='flex w-max gap-3 will-change-transform'>
                {repeatMarqueeImages(bottomMarqueeImages).map((src, index) => (
                  <img key={`row2-${index}`} src={src} alt='' loading='lazy' className='h-[clamp(230px,22vw,330px)] w-[clamp(360px,48vw,640px)] rounded-2xl border border-white/10 bg-white/5 object-cover' />
                ))}
              </motion.div>
            </div>
          </section>

          <section id='about' className='relative min-h-screen px-5 py-20 sm:px-8 md:px-10'>
            <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
              <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png' alt='' className='absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]' />
            </FadeIn>
            <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
              <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png' alt='' className='absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]' />
            </FadeIn>
            <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
              <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png' alt='' className='absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]' />
            </FadeIn>
            <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
              <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png' alt='' className='absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]' />
            </FadeIn>

            <div className='flex min-h-[80vh] flex-col items-center justify-center gap-10 sm:gap-14 md:gap-16'>
              <FadeIn delay={0} y={40} duration={0.8}>
                <h2 className='hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight'>About me</h2>
              </FadeIn>
              <div className='max-w-[560px] text-center'>
                <AnimatedText text="I'm a UI/UX designer passionate about creating simple, intuitive, and user-friendly digital experiences. I enjoy turning ideas into clean interfaces that solve real problems and create meaningful experiences." />
              </div>
              <FadeIn delay={0.1} y={20}>
                <ContactButton />
              </FadeIn>
            </div>
          </section>

          <section id='projects' ref={containerRef} className='relative z-10 bg-black'>
            <div ref={pinWrapperRef} className='grid grid-cols-1 grid-rows-1 place-items-center h-screen w-full relative overflow-hidden'>
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.name} 
                  project={project} 
                  index={index} 
                  onClick={() => {
                    setActiveProject(project)
                    setCurrentPage('project-details')
                    window.scrollTo({ top: 0 })
                  }} 
                />
              ))}
            </div>
          </section>

          <section id='contact' className='flex items-center justify-center bg-[#0C0C0C] px-5 pb-24 pt-8'>
            <ContactButton />
          </section>
        </>
      ) : (
        <ProjectDetailsPage 
          project={activeProject!}
          onSelectProject={(project) => {
            setActiveProject(project)
            window.scrollTo({ top: 0 })
          }}
        />
      )}
    </main>
  )
}

function ProjectCard({
  project,
  index,
  onClick
}: {
  project: typeof projects[number]
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const imageSrc = project.banner ?? project.images[0]

  return (
    <div
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      style={{ zIndex: index + 1 }}
      className={`project-card group col-start-1 row-start-1 mx-auto w-[82vw] max-w-[330px] cursor-pointer rounded-md p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] will-change-transform sm:w-[94vw] sm:max-w-none sm:rounded-[12px] sm:p-6 md:p-9 lg:w-[87.5vw] ${project.cardClass}`}
    >
      <div className={`border-b pb-2 font-mono text-[11px] tracking-normal sm:pb-3 sm:text-base sm:tracking-[0.08em] md:text-[1.45rem] ${project.metaClass}`}>
        <div className='flex items-center justify-between gap-4'>
          <span>{project.year}</span>
          <span className='text-right'>{project.category}</span>
        </div>
      </div>

      <div className='mt-5 grid grid-cols-[1fr_auto] gap-3 sm:mt-[clamp(1.8rem,4.4vh,3.2rem)] sm:gap-5 lg:grid-cols-[1fr_auto] lg:items-start'>
        <h3 className='max-w-[10ch] text-[clamp(3.25rem,14vw,4.8rem)] font-light leading-[0.98] tracking-[-0.08em] sm:max-w-none sm:text-[clamp(4rem,8.9vw,7.9rem)] sm:leading-[0.86] sm:tracking-normal'>
          {project.name}
        </h3>

        <div className='flex h-10 w-10 items-start justify-end transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-[clamp(4rem,6vw,6rem)] sm:w-[clamp(4rem,6vw,6rem)] sm:items-center sm:justify-center group-hover:-rotate-45'>
          <ArrowRight className='h-8 w-8 sm:h-[92px] sm:w-[92px]' strokeWidth={1.7} />
        </div>
      </div>

      <div className='mt-5 overflow-hidden bg-black/10 sm:mt-[clamp(1.6rem,4vh,3rem)]'>
        <img
          src={imageSrc}
          alt={`${project.name} project preview`}
          className='h-[clamp(300px,58vh,430px)] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025] sm:h-[clamp(26rem,42vh,34rem)]'
        />
      </div>
    </div>
  )
}

function RelatedProjects({
  currentProject,
  onSelectProject
}: {
  currentProject: typeof projects[number]
  onSelectProject: (project: typeof projects[number]) => void
}) {
  const currentIndex = projects.findIndex((item) => item.name === currentProject.name)
  const relatedProjects = [...projects.slice(currentIndex + 1), ...projects.slice(0, currentIndex)]

  return (
    <section className='mx-auto w-[94vw] pb-2 pt-20 lg:w-[87.5vw]'>
      <div className='mb-7 flex items-center gap-3'>
        <span className='font-mono text-xs lowercase text-white/45'>see also</span>
        <span className='h-px flex-1 bg-white/20' />
      </div>

      <div className='space-y-6'>
        {relatedProjects.map((relatedProject) => {
          const imageSrc = relatedProject.banner ?? relatedProject.images[0]

          return (
            <button
              key={relatedProject.name}
              type='button'
              onClick={() => onSelectProject(relatedProject)}
              className={`group relative grid w-full grid-cols-1 items-center gap-5 rounded-[2px] p-2 text-left transition duration-300 hover:-translate-y-0.5 sm:grid-cols-[minmax(180px,285px)_1fr_auto] sm:gap-6 sm:p-2 md:gap-8 ${relatedProject.cardClass}`}
            >
              <div className='h-28 min-h-28 overflow-hidden bg-black/20 sm:h-[86px]'>
                <img
                  src={imageSrc}
                  alt={`${relatedProject.name} project preview`}
                  loading='lazy'
                  className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                />
              </div>

              <div className='min-w-0 px-1 pb-2 sm:pb-0'>
                <div className='font-mono text-xs leading-none opacity-80 sm:text-sm'>
                  {relatedProject.category}
                </div>
                <div className='mt-4 text-[clamp(2rem,3vw,3.1rem)] font-light leading-none'>
                  {relatedProject.name}
                </div>
              </div>

              <div className='absolute right-4 top-4 sm:static sm:flex sm:h-16 sm:w-16 sm:items-center sm:justify-center'>
                <ArrowUpRight
                  size={34}
                  strokeWidth={1.8}
                  className='transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
                />
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function FutureFitnessDetailsPage({
  project,
  onSelectProject
}: {
  project: typeof projects[number]
  onSelectProject: (project: typeof projects[number]) => void
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[90px] pb-24 overflow-x-hidden relative font-sans selection:bg-[#76b82a] selection:text-black">
      {/* Background vertical grid lines */}
      <div className="pointer-events-none absolute inset-y-[90px] left-5 right-5 opacity-[0.03] sm:left-8 sm:right-8 lg:left-[8.5vw] lg:right-[8.5vw] z-0">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:12.5%_100%]" />
      </div>

      <div className="relative z-10 mx-auto w-[90vw] lg:w-[83vw] space-y-32 pt-16">
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section className="text-center space-y-8 max-w-[850px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#76b82a] font-semibold block">
            Featured UI/UX Case Study
          </span>
          <h1 className="text-[clamp(2.5rem,7.5vw,6rem)] font-light leading-[1.05] tracking-tight uppercase text-white">
            Future Fitness<br />
            <span className="font-semibold text-[#76b82a]">Gym Website</span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-white/60 leading-relaxed max-w-[620px] mx-auto">
            Fitness platform experience designed to improve membership conversion and user engagement
          </p>

          {/* Premium Logo Showcase & Glow */}
          <div className="pt-12 relative flex justify-center items-center">
            {/* Soft Radial Ambient Glow */}
            <div className="absolute w-[45vw] h-[45vw] rounded-full bg-[#76b82a]/5 blur-[100px] pointer-events-none" />

            {/* Apple-style Desktop Browser Mockup */}
            <div className="relative max-w-[900px] w-full rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_120px_rgba(118,184,42,0.06)] overflow-hidden transition-all duration-700 hover:scale-[1.015] hover:border-white/15">
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#080808] border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 max-w-[450px] mx-auto flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-[#141414] border border-white/5 text-white/50 text-[11px] font-mono select-none">
                  <span className="opacity-40">https://</span>
                  <span>futurefitnessgymnellore.com</span>
                </div>
              </div>
              <div className="relative aspect-[16/10] bg-[#0c0c0c] overflow-hidden flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,rgba(118,184,42,0.12),transparent_60%)]" />
                <img 
                  src="/work/future-fitness-logo.png" 
                  alt="Future Fitness Logo" 
                  className="h-32 sm:h-40 w-auto object-contain z-10 drop-shadow-[0_0_40px_rgba(118,184,42,0.25)]"
                />
                <h2 className="text-xl sm:text-2xl font-light tracking-[0.25em] text-[#76b82a] uppercase mt-8 z-10">A Complete Family Gym</h2>
                <p className="text-white/40 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.35em] mt-4 z-10">Nellore, Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. OVERVIEW SECTION */}
        {/* ========================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-16">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-none tracking-tight uppercase">
              Project<br />Goal
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-between gap-12">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-white/80 max-w-[700px]">
              Presenting a digital layout for Nellore's premier fitness platform. The goal is to optimize local gym discovery, present certified trainer credentials, highlight pricing options, and display localized training zones to boost conversion and engagement.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/5">
              <div>
                <span className="font-mono text-[10px] uppercase text-white/40 tracking-wider">Duration</span>
                <p className="text-sm font-medium mt-1 text-white/90">4 Weeks (2025)</p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-white/40 tracking-wider">Services</span>
                <p className="text-sm font-medium mt-1 text-white/90">UI/UX & Showcase</p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-white/40 tracking-wider">Brand Color</span>
                <p className="text-sm font-medium mt-1 text-[#76b82a] flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#76b82a]" /> Neon Green
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-white/40 tracking-wider">Website URL</span>
                <a 
                  href="https://futurefitnessgymnellore.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium mt-1 text-white/90 underline hover:text-[#76b82a] flex items-center gap-1"
                >
                  Visit Site <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. CASE STUDY PILLARS */}
        {/* ========================================== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-16">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#76b82a]">01 / Design Process</span>
            <h3 className="text-xl font-bold uppercase tracking-wide">Research & Audit</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Auditing local competitor offerings and mapping the typical user decision journey to discover plans, trainers, and locations within seconds.
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#76b82a]">02 / UX Decisions</span>
            <h3 className="text-xl font-bold uppercase tracking-wide">Conversion Funnel</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Structuring training schedules and subscription tiers transparently to minimize friction and convert casual visitors into active gym members.
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#76b82a]">03 / Visual System</span>
            <h3 className="text-xl font-bold uppercase tracking-wide">High-Energy Aesthetics</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Blending high-contrast dark tones with vibrant neon green accents to capture the high-intensity atmosphere of a modern, elite training environment.
            </p>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. VISUAL SYSTEM COLOR PALETTE */}
        {/* ========================================== */}
        <section className="border-t border-white/10 pt-16 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h2 className="text-3xl font-bold uppercase tracking-wide">Visual System</h2>
            <p className="text-sm text-white/50 max-w-[450px] font-light">
              A carefully balanced system engineered for dark screen presentation, matching high-end Apple-style guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Color chips */}
            <div className="rounded-xl border border-white/10 bg-[#080808] p-6 space-y-6">
              <div className="h-16 rounded bg-[#76b82a] shadow-[0_0_20px_rgba(118,184,42,0.35)]" />
              <div>
                <span className="font-mono text-[10px] text-white/40">Brand Accent</span>
                <p className="text-sm font-bold uppercase">Neon Green</p>
                <p className="text-xs text-white/50 font-mono">#76B82A</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#080808] p-6 space-y-6">
              <div className="h-16 rounded bg-[#050505] border border-white/10" />
              <div>
                <span className="font-mono text-[10px] text-white/40">Background</span>
                <p className="text-sm font-bold uppercase">Pure Black</p>
                <p className="text-xs text-white/50 font-mono">#050505</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#080808] p-6 space-y-6">
              <div className="h-16 rounded bg-[#121212] border border-white/5" />
              <div>
                <span className="font-mono text-[10px] text-white/40">Cards & UI Elements</span>
                <p className="text-sm font-bold uppercase">Charcoal Grey</p>
                <p className="text-xs text-white/50 font-mono">#121212</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#080808] p-6 space-y-6">
              <div className="h-16 rounded bg-white" />
              <div>
                <span className="font-mono text-[10px] text-white/40">Typography</span>
                <p className="text-sm font-bold uppercase">Soft White</p>
                <p className="text-xs text-white/50 font-mono">#FFFFFF</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. INTERFACE PRESENTATION (GRID LAYOUT) */}
        {/* ========================================== */}
        <section className="border-t border-white/10 pt-16 space-y-16">
          <div className="text-center space-y-4 max-w-[600px] mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#76b82a]">04 / Interface Audit</span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide">Showcase Grid</h2>
            <p className="text-sm text-white/50 font-light">
              Premium layouts displaying the core sections of the website. Hover on cards to view in detailed perspective.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
            {/* Card 1: Locations */}
            <div className="group relative rounded-2xl border border-white/10 bg-[#0f0f0f] p-4 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#76b82a]/30">
              <div className="pb-4 border-b border-white/5 mb-6">
                <span className="font-mono text-[10px] uppercase text-[#76b82a]">Stonehousepet • Harinathpuram • Vanamthopu</span>
                <h3 className="text-lg font-bold uppercase mt-1">Training Zones</h3>
              </div>
              <div className="relative rounded-lg overflow-hidden bg-black aspect-[4/3] border border-white/5 flex items-center justify-center">
                <img 
                  src="/work/future-fitness-locations.png" 
                  alt="Training Zones Screen" 
                  className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-white/40 mt-6 leading-relaxed">
                Clean and responsive location-based grid displaying center details, timings, phone numbers, and direct map link navigation.
              </p>
            </div>

            {/* Card 2: Trainers */}
            <div className="group relative rounded-2xl border border-white/10 bg-[#0f0f0f] p-4 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#76b82a]/30">
              <div className="pb-4 border-b border-white/5 mb-6">
                <span className="font-mono text-[10px] uppercase text-[#76b82a]">Expert Personal Guidance</span>
                <h3 className="text-lg font-bold uppercase mt-1">Our Trainers</h3>
              </div>
              <div className="relative rounded-lg overflow-hidden bg-black aspect-[4/3] border border-white/5 flex items-center justify-center">
                <img 
                  src="/work/future-fitness-trainers.png" 
                  alt="Our Trainers Screen" 
                  className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-white/40 mt-6 leading-relaxed">
                Recruiter-friendly profile views showcasing certified local coaches to build user trust and elevate conversion rates.
              </p>
            </div>

            {/* Card 3: Shop */}
            <div className="group relative rounded-2xl border border-white/10 bg-[#0f0f0f] p-4 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#76b82a]/30">
              <div className="pb-4 border-b border-white/5 mb-6">
                <span className="font-mono text-[10px] uppercase text-[#76b82a]">Gym Supplement Shop</span>
                <h3 className="text-lg font-bold uppercase mt-1">Fitness Shop</h3>
              </div>
              <div className="relative rounded-lg overflow-hidden bg-black aspect-[4/3] border border-white/5 flex items-center justify-center">
                <img 
                  src="/work/future-fitness-shop.png" 
                  alt="Fitness Shop Screen" 
                  className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-white/40 mt-6 leading-relaxed">
                An integrated e-commerce segment highlighting key products, pricing structures, whey proteins, and pre-workouts.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. PERSPECTIVE DEVICE PRESENTATION */}
        {/* ========================================== */}
        <section className="border-t border-white/10 pt-16 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#76b82a]">05 / Mockup Studio</span>
              <h2 className="text-3xl font-bold uppercase tracking-wide">Responsive Presentation</h2>
            </div>
            <p className="text-sm text-white/50 max-w-[450px] font-light">
              Showcasing fluid adaptive screens matching pixel-perfect responsive guidelines across mobile phone and desktop viewports.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 bg-gradient-to-br from-[#0c0c0c] to-[#040404] rounded-3xl p-8 lg:p-16 border border-white/5 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#76b82a]/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#76b82a]/3 blur-[120px] pointer-events-none" />

            {/* Left: Mobile device */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group transition-all duration-500 hover:scale-[1.03] hover:rotate-3">
                <div className="relative w-[230px] h-[460px] rounded-[36px] border-[6px] border-[#222] bg-[#050505] shadow-2xl overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4.5 rounded-full bg-black z-20 flex items-center justify-between px-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span className="w-2.5 h-1 rounded-full bg-neutral-850" />
                  </div>
                  {/* Screen Content */}
                  <div className="w-full h-full pt-8 overflow-hidden relative">
                    <img 
                      src="/work/future-fitness-trainers.png" 
                      alt="Mobile UI View" 
                      className="w-full h-[120%] object-cover object-top filter grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Desktop 3D tilted browser */}
            <div className="lg:col-span-8">
              <div className="relative group transition-all duration-700 hover:scale-[1.01]">
                {/* 3D Browser Container */}
                <div className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] shadow-2xl overflow-hidden transition-all duration-500 hover:border-[#76b82a]/20">
                  {/* Browser Top bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#080808] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="flex-1 max-w-[280px] mx-auto text-center py-0.5 rounded bg-[#161616] border border-white/5 text-white/30 text-[9px] font-mono">
                      futurefitnessgymnellore.com/shop
                    </div>
                  </div>
                  {/* Browser Content */}
                  <div className="relative bg-[#080808] aspect-[16/10] overflow-hidden">
                    <img 
                      src="/work/future-fitness-shop.png" 
                      alt="Desktop UI View" 
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. FINAL OUTCOME SECTION */}
        {/* ========================================== */}
        <section className="border-t border-white/10 pt-16 pb-24 space-y-10">
          <div className="max-w-[700px] space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#76b82a]">06 / Final Outcome</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide leading-none">
              A Recruiter-friendly Portfolio Redesign
            </h2>
            <p className="text-lg lg:text-xl font-light text-white/70 leading-relaxed">
              By preserving the original layout structure of Future Fitness and presenting it inside modern luxury web mockups, the case study highlights user-centered design thinking, visual consistency, and a high-performance identity.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap gap-4">
            <a 
              href="https://futurefitnessgymnellore.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-[#76b82a] hover:text-white transition duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
            >
              Launch Live Website <ArrowUpRight className="ml-2" size={16} />
            </a>
            <button 
              onClick={() => onSelectProject(projects[0])}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white font-semibold px-8 py-3.5 text-xs uppercase tracking-widest hover:border-white hover:bg-white/5 transition duration-300"
            >
              Next Project <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </section>

        {/* Related Projects at the bottom */}
        <RelatedProjects currentProject={project} onSelectProject={onSelectProject} />
      </div>
    </div>
  )
}

function ProjectDetailsPage({
  project,
  onSelectProject
}: {
  project: typeof projects[number]
  onSelectProject: (project: typeof projects[number]) => void
}) {
  const isSportsERP = project.name === 'Sports ERP'
  const isQuickNotes = project.name === 'Quick Notes'
  const isFutureFitness = project.name === 'FUTURE FITNESS'

  const imageSrc = project.banner ?? project.images[0]

  const getBgColor = () => {
    if (isSportsERP) return 'bg-[#051512]'
    if (isQuickNotes) return 'bg-[#090026]/95'
    return 'bg-[#0c1512]'
  }

  if (isFutureFitness) {
    return (
      <FutureFitnessDetailsPage project={project} onSelectProject={onSelectProject} />
    )
  }

  if (isSportsERP) {
    return (
      <div className={`min-h-screen ${getBgColor()} text-white pt-[90px] pb-24 overflow-x-hidden relative font-sans selection:bg-orange-500 selection:text-white`}>
        {/* Background vertical grid lines */}
        <div className='pointer-events-none absolute inset-y-[90px] left-5 right-5 opacity-10 sm:left-8 sm:right-8 lg:left-[8.5vw] lg:right-[8.5vw] z-0'>
          <div className='h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:12.5%_100%]' />
        </div>

        <div className='relative z-10 mx-auto w-full'>
          {/* Case Study Image Container - Edge to Edge on Mobile, Centered on Desktop */}
          <div className='w-full max-w-[1400px] mx-auto px-0 md:px-6 pb-12'>
            <img 
              src='/work/sports-erp-case-study.png' 
              alt='Sports ERP Case Study' 
              className='w-full h-auto object-contain md:rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.65)] border-0 md:border border-white/5'
            />
          </div>
          <RelatedProjects currentProject={project} onSelectProject={onSelectProject} />
        </div>
      </div>
    )
  }

  if (isQuickNotes) {
    return (
      <div className={`min-h-screen ${getBgColor()} text-white pt-[90px] pb-24 overflow-x-hidden relative font-sans selection:bg-orange-500 selection:text-white`}>
        {/* Background vertical grid lines */}
        <div className='pointer-events-none absolute inset-y-[90px] left-5 right-5 opacity-10 sm:left-8 sm:right-8 lg:left-[8.5vw] lg:right-[8.5vw] z-0'>
          <div className='h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:12.5%_100%]' />
        </div>

        <div className='relative z-10 mx-auto w-full'>
          <div className='w-full max-w-[1400px] mx-auto px-0 md:px-6 pb-12'>
            <img
              src='/work/quick-notes-case-study.png'
              alt='Quick Notes Case Study'
              className='w-full h-auto object-contain md:rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.65)] border-0 md:border border-white/5'
            />
          </div>
          <RelatedProjects currentProject={project} onSelectProject={onSelectProject} />
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${getBgColor()} text-white pt-[90px] pb-24 overflow-x-hidden relative font-sans selection:bg-orange-500 selection:text-white`}>
      {/* Background vertical grid lines */}
      <div className='pointer-events-none absolute inset-y-[90px] left-5 right-5 opacity-10 sm:left-8 sm:right-8 lg:left-[8.5vw] lg:right-[8.5vw] z-0'>
        <div className='h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:12.5%_100%]' />
      </div>

      <div className='relative z-10 mx-auto w-[94vw] lg:w-[87.5vw] space-y-24'>
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (OVERVIEW) */}
        {/* ========================================================================= */}
        <div id='overview' className='scroll-mt-8'>
          <section className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 lg:py-20'>
            <div className='lg:col-span-7 space-y-6'>
              <span className='font-mono text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold'>
                {project.category}
              </span>
              <h1 className='text-[clamp(3.2rem,6.8vw,6.4rem)] font-light leading-[0.9] tracking-normal'>
                {isSportsERP ? (
                  <>Sports <span className='text-orange-500 font-normal'>ERP</span></>
                ) : isQuickNotes ? (
                  <>Quick <span className='text-orange-500 font-normal'>Notes</span></>
                ) : (
                  <>Future <span className='text-orange-500 font-normal'>Fitness</span></>
                )}
              </h1>
              <p className='text-xl lg:text-2xl font-light text-white/90 leading-snug max-w-[620px]'>
                {isSportsERP 
                  ? "One Platform to manage athletes, events and performance from start to finish"
                  : isQuickNotes 
                  ? "A clean, minimal note-taking application designed for rapid thoughts and daily tasks"
                  : "A futuristic workout tracker helping athletes visualize health and progress metrics"}
              </p>
              <p className='text-white/60 font-light leading-relaxed max-w-[620px]'>
                {isSportsERP
                  ? "A unified digital ecosystem replacing spreadsheets, paper records, and WhatsApp groups — connecting athletes, coaches, officials, and organizers in one platform."
                  : isQuickNotes
                  ? "Quick Notes lets you seamlessly capture ideas, checklists, and snippets offline. Organizes information in stacks, making workflow management swift and stress-free."
                  : "Integrating real-time sensor metrics and customized training regimes, Future Fitness enables trainers and athletes to log sets, track milestones, and map overall progress."}
              </p>

              {/* Metadata Grid */}
              <div className='grid grid-cols-3 gap-4 pt-4 max-w-[540px]'>
                <div className='rounded-xl border border-[#10b981]/15 bg-[#0a231f]/30 p-5'>
                  <div className='font-mono text-[10px] uppercase tracking-wider text-white/40'>Duration</div>
                  <div className='mt-1 text-sm font-medium text-white/90'>{isSportsERP ? "3 Months" : "2 Months"}</div>
                </div>
                <div className='rounded-xl border border-[#10b981]/15 bg-[#0a231f]/30 p-5'>
                  <div className='font-mono text-[10px] uppercase tracking-wider text-white/40'>Platform</div>
                  <div className='mt-1 text-sm font-medium text-white/90'>{isSportsERP ? "Web Application" : "Mobile App"}</div>
                </div>
                <div className='rounded-xl border border-[#10b981]/15 bg-[#0a231f]/30 p-5'>
                  <div className='font-mono text-[10px] uppercase tracking-wider text-white/40'>Tool</div>
                  <div className='mt-1 text-sm font-medium text-white/90'>Figma</div>
                </div>
              </div>

              <div className='space-y-4 pt-4'>
                <div className='space-y-1'>
                  <span className='font-mono text-xs text-orange-500 font-semibold tracking-widest uppercase block'>
                    My Role
                  </span>
                  <div className='text-lg font-light text-white'>
                    UI/UX Designer
                  </div>
                </div>
                <div className='flex flex-wrap gap-2.5 pt-1'>
                  {(isSportsERP 
                    ? ["User Interview", "Research", "Feature Ideation", "UI Design"]
                    : ["Research", "UX Writing", "Wireframing", "UI Prototyping"]
                  ).map((tag) => (
                    <span 
                      key={tag} 
                      className='inline-flex items-center gap-1.5 rounded-full bg-[#0a231f] border border-[#10b981]/20 px-4.5 py-1.5 text-xs text-[#10b981] font-light tracking-wide'
                    >
                      <Check size={10} strokeWidth={3} className='text-[#10b981]' />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Laptop Mockup */}
            <div className='lg:col-span-5 flex justify-center'>
              <div className='relative w-full max-w-[500px] lg:max-w-none'>
                {isSportsERP ? (
                  <img 
                    src='/work/sports-erp-hero-laptop.png' 
                    alt='Sports ERP Dashboard 3D Laptop Mockup' 
                    className='w-full h-auto object-contain max-h-[480px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]'
                  />
                ) : imageSrc ? (
                  <div className='relative w-full'>
                    {/* Laptop screen frame */}
                    <div className='relative rounded-t-2xl border-[5px] border-gray-800 bg-gray-950 p-2 shadow-2xl overflow-hidden aspect-[1.6/1] flex items-center justify-center'>
                      <img 
                        src={imageSrc} 
                        alt={`${project.name} Dashboard Mockup`} 
                        className='w-full h-full object-cover rounded-sm'
                      />
                    </div>
                    {/* Laptop base */}
                    <div className='h-3.5 w-[108%] -translate-x-[4%] rounded-b-xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 shadow-xl border-t border-gray-500' />
                    {/* Center opening notch */}
                    <div className='mx-auto h-1.5 w-16 rounded-b-md bg-gray-950/70 shadow-inner' />
                  </div>
                ) : (
                  <div className='relative w-full'>
                    <div className='relative rounded-t-2xl border-[5px] border-gray-800 bg-gray-950 p-2 shadow-2xl overflow-hidden aspect-[1.6/1] flex items-center justify-center'>
                      <div className='w-full h-full bg-gradient-to-br from-[#0a231f] to-[#04100d] flex flex-col items-center justify-center border border-[#10b981]/10 rounded-sm'>
                        <Sparkles className='text-orange-500 animate-pulse' size={48} />
                        <span className='mt-2 font-mono text-[10px] tracking-widest text-[#10b981]/60 uppercase'>Visuals Coming Soon</span>
                      </div>
                    </div>
                    <div className='h-3.5 w-[108%] -translate-x-[4%] rounded-b-xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 shadow-xl border-t border-gray-500' />
                    <div className='mx-auto h-1.5 w-16 rounded-b-md bg-gray-950/70 shadow-inner' />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* 2. PROBLEM & SOLUTION (CONTEXT) */}
        {/* ========================================================================= */}
        <div id='context' className='scroll-mt-8'>
          <section className='py-16 lg:py-24 relative overflow-hidden'>
            <h2 className='text-2xl md:text-3xl font-bold uppercase tracking-wider text-white mb-12 lg:mb-20'>
              PROBLEM & SOLUTION
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch max-w-[1200px] mx-auto relative'>
              {/* Column 1: Left Callout (The Problem) */}
              <div className='col-span-12 lg:col-span-4 flex flex-col justify-center relative z-10'>
                <div className='space-y-4 max-w-[360px] lg:ml-auto lg:text-left text-center'>
                  <h3 className='font-bold text-white text-lg tracking-wide'>The Problem</h3>
                  <p className='text-sm text-white/60 font-light leading-relaxed'>
                    {isSportsERP
                      ? "Many sports operations still depend on spreadsheets, notebooks and scattered communication channels. Athletes struggle to access their complete journey in one place, while organizers and coaches manage information across multiple systems."
                      : isQuickNotes
                      ? "Traditional notepad applications are either overly complex with bloated features, or too basic, making it difficult to keep ideas clean and search them swiftly during high-pressure work."
                      : "Athletes struggle to get real-time feedback on their workout sets and performance metrics, relying on manual logs that are often forgotten or yield no insights."}
                  </p>
                </div>
              </div>

              {/* Column 2: Center Circle SVG Diagram */}
              <div className='col-span-12 lg:col-span-4 flex justify-center items-center py-6 relative z-10'>
                <div className='relative flex items-center justify-center w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px]'>
                  {/* SVG circular arcs & concentric rings */}
                  <svg 
                    viewBox='0 0 500 500' 
                    className='absolute inset-0 w-full h-full overflow-visible select-none pointer-events-none'
                  >
                    {/* Concentric dashed background rings */}
                    <circle cx='250' cy='250' r='140' stroke={isQuickNotes ? 'rgba(139,92,246,0.06)' : 'rgba(16,185,129,0.06)'} strokeWidth='1' fill='none' strokeDasharray='3,4' />
                    <circle cx='250' cy='250' r='230' stroke={isQuickNotes ? 'rgba(139,92,246,0.04)' : 'rgba(16,185,129,0.04)'} strokeWidth='1' fill='none' strokeDasharray='4,6' />
                    <circle cx='250' cy='250' r='280' stroke={isQuickNotes ? 'rgba(139,92,246,0.03)' : 'rgba(16,185,129,0.03)'} strokeWidth='1' fill='none' strokeDasharray='6,8' />
                    <circle cx='250' cy='250' r='340' stroke={isQuickNotes ? 'rgba(139,92,246,0.02)' : 'rgba(16,185,129,0.02)'} strokeWidth='1.5' fill='none' strokeDasharray='8,10' />

                    {/* Arc 1 (Red Left segment for Problem) */}
                    <path 
                      d='M 240.6 70.2 A 180 180 0 0 0 240.6 429.8' 
                      stroke='#ef4444' 
                      strokeWidth='6' 
                      fill='none' 
                      strokeLinecap='round' 
                    />
                    
                    {/* Arc 2 (Green Top-Right segment for Research) */}
                    <path 
                      d='M 259.4 70.2 A 180 180 0 0 1 429.8 240.6' 
                      stroke={isQuickNotes ? '#c084fc' : '#10b981'} 
                      strokeWidth='6' 
                      fill='none' 
                      strokeLinecap='round' 
                    />
                    
                    {/* Arc 3 (Dark Green / Purple segment for Solution) */}
                    <path 
                      d='M 429.8 259.4 A 180 180 0 0 1 259.4 429.8' 
                      stroke={isQuickNotes ? '#6d28d9' : '#047857'} 
                      strokeWidth='6' 
                      fill='none' 
                      strokeLinecap='round' 
                    />

                    {/* Node 01 (Left) */}
                    <circle cx='70' cy='250' r='16' fill='white' stroke='rgba(0,0,0,0.1)' strokeWidth='1' className='drop-shadow-md' />
                    <text x='70' y='250' textAnchor='middle' dominantBaseline='central' fill='black' fontSize='12' fontWeight='bold' fontFamily='monospace'>01</text>

                    {/* Node 02 (Top-Right) */}
                    <circle cx='406' cy='160' r='16' fill='white' stroke='rgba(0,0,0,0.1)' strokeWidth='1' className='drop-shadow-md' />
                    <text x='406' y='160' textAnchor='middle' dominantBaseline='central' fill='black' fontSize='12' fontWeight='bold' fontFamily='monospace'>02</text>

                    {/* Node 03 (Bottom-Right) */}
                    <circle cx='406' cy='340' r='16' fill='white' stroke='rgba(0,0,0,0.1)' strokeWidth='1' className='drop-shadow-md' />
                    <text x='406' y='340' textAnchor='middle' dominantBaseline='central' fill='black' fontSize='12' fontWeight='bold' fontFamily='monospace'>03</text>
                  </svg>

                  {/* Central Circle Badge */}
                  <div className={`w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full ${
                    isSportsERP ? 'bg-[#051512] border-[#10b981]/25' : isQuickNotes ? 'bg-[#090026] border-violet-500/25' : 'bg-[#0c1512] border-[#10b981]/25'
                  } border flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10`}>
                    <div className='text-center select-none'>
                      <span className={`block font-mono text-[9px] sm:text-[10px] tracking-[0.4em] ${
                        isQuickNotes ? 'text-violet-400/50' : 'text-[#10b981]/50'
                      } uppercase mb-1`}>Project</span>
                      <h3 className='text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-widest leading-none'>
                        {isSportsERP ? (
                          <>SP<span className='text-orange-500'>OR</span>TS</>
                        ) : isQuickNotes ? (
                          <>NO<span className='text-orange-500'>TE</span>S</>
                        ) : (
                          <>HE<span className='text-orange-500'>AL</span>TH</>
                        )}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Right Callouts (Research Insights & Solution) */}
              <div className='col-span-12 lg:col-span-4 flex flex-col justify-between py-6 lg:py-12 space-y-12 lg:space-y-0 relative z-10'>
                {/* Research Insights */}
                <div className='space-y-4 max-w-[360px] lg:mr-auto lg:text-left text-center'>
                  <h3 className='font-bold text-white text-lg tracking-wide'>Research Insights</h3>
                  <p className='text-sm text-white/60 font-light leading-relaxed'>
                    {isSportsERP
                      ? "Through one-to-one interviews with district, state and national-level athletes, we discovered recurring pain points around manual tracking, event communication and performance visibility."
                      : isQuickNotes
                      ? "Users need instant note-creation buttons, rapid keyboard shortcut integration, and seamless offline saving to guarantee thoughts are captured before fading away."
                      : "Interviews with coaches and gym trainers highlight the need for a simple tracker that athletes actually use consistently without interrupting their flow."}
                  </p>
                </div>

                {/* The Solution */}
                <div className='space-y-4 max-w-[360px] lg:mr-auto lg:text-left text-center'>
                  <h3 className='font-bold text-white text-lg tracking-wide'>The Solution</h3>
                  <p className='text-sm text-white/60 font-light leading-relaxed'>
                    {isSportsERP
                      ? "Sports ERP centralizes athlete data, event management, training logs, analytics and result workflows into one role-based platform."
                      : isQuickNotes
                      ? "A streamlined markdown-based notes app with instant syncing, lightning-fast text-search indexes, and a simple categorizing drawer."
                      : "A custom fitness hub featuring automated performance analysis, progress visualizers, and simplified workout sheets."}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* 3. USER RESEARCH SECTION (DISCOVERY) */}
        {/* ========================================================================= */}
        <div id='discovery' className='scroll-mt-8'>
          <section className='py-16 lg:py-20'>
            <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#10b981]/60 font-semibold block mb-12'>
              User Research
            </span>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch'>
              {/* Column 1: Research Description */}
              <div className='lg:col-span-3 flex flex-col justify-center space-y-6'>
                <h2 className='text-3xl lg:text-4xl font-normal leading-tight'>
                  Understanding real <span className='relative inline-block text-orange-500 font-medium'>
                    Challenges
                    {/* Orange Squiggly SVG underline */}
                    <svg className='absolute left-0 -bottom-2 w-full h-2' viewBox='0 0 100 10' preserveAspectRatio='none'>
                      <path d='M0,5 Q20,1 40,5 T80,5 T100,2' stroke='#f97316' strokeWidth='2' fill='none' />
                    </svg>
                  </span> from athletes
                </h2>
                <p className='text-sm text-white/70 font-light leading-relaxed'>
                  {isSportsERP
                    ? "We conducted one-to-one interview with athletes across district, state and national levels to understand their daily routines, struggles and expectations from digital sports ecosystem."
                    : isQuickNotes
                    ? "We interviewed 15 professionals (engineers, writers, designers) to learn how they organize quick notes and where their daily note-taking workflows suffer."
                    : "Through surveys and local gym interviews, we researched 25 fitness enthusiasts to examine their workout tracking hurdles and motivation drops."}
                </p>
              </div>

              {/* Column 2: Athlete profile Card */}
              <div className='lg:col-span-5 flex'>
                <div className='w-full bg-[#0a1e1a] border border-[#10b981]/15 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden'>
                  {/* Background glow tick */}
                  <div className='absolute -right-16 -top-16 w-32 h-32 rounded-full bg-[#10b981]/5 blur-2xl pointer-events-none' />

                  <div>
                    {/* Header info */}
                    <div className='flex items-center justify-between border-b border-white/5 pb-3'>
                      <span className='font-mono text-[10px] tracking-widest text-[#10b981] font-semibold uppercase'>
                        {isSportsERP ? "#AthleteOfTheWeek" : isQuickNotes ? "#UserPersona" : "#FitEnthusiast"}
                      </span>
                      <span className='text-[10px] font-mono text-white/40 uppercase'>Bengaluru</span>
                    </div>

                    {/* Profile contents */}
                    <div className='grid grid-cols-1 sm:grid-cols-12 gap-5 mt-5 items-center'>
                      {/* Athlete Profile Photo */}
                      <div className='sm:col-span-5 aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#0c2f29] to-[#04100d] border border-[#10b981]/25 relative'>
                        <img 
                          src={isSportsERP ? '/work/referee-01.png' : '/work/referee-02.png'} 
                          alt='Interviewee profile' 
                          className='w-full h-full object-cover object-center grayscale hover:grayscale-0 transition duration-500'
                        />
                      </div>
                      {/* Athlete Stats */}
                      <div className='sm:col-span-7 space-y-3.5'>
                        <span className='inline-block bg-rose-600/10 border border-rose-500/20 text-rose-500 font-bold uppercase tracking-wider px-3.5 py-1 text-xs rounded-md leading-none'>
                          {isSportsERP ? "Evangeline Bhuvana" : isQuickNotes ? "Emily Green" : "Marcus Cooper"}
                        </span>
                        <div className='space-y-1 font-mono text-xs text-white/70'>
                          <div><span className='text-white/45'>Focus:</span> {isSportsERP ? "200M Dash" : isQuickNotes ? "Software Engineer" : "Crossfit Trainer"}</div>
                          <div><span className='text-white/45'>Location:</span> Bengaluru, India</div>
                          <div><span className='text-white/45'>{isSportsERP ? "Personal Best:" : isQuickNotes ? "Daily Notes:" : "Deadlift PR:"}</span> {isSportsERP ? "26.56 Sec" : isQuickNotes ? "12-15 Snippets" : "180 kg"}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Athlete Quote Box */}
                  <div className='mt-6 bg-[#051512] rounded-xl p-4.5 border border-[#10b981]/15 relative'>
                    <span className='absolute -left-1 -top-3 text-5xl font-serif text-[#10b981]/20 select-none'>“</span>
                    <p className='text-xs md:text-sm text-[#10b981] font-light leading-relaxed italic relative z-10'>
                      {isSportsERP
                        ? "60% of performance comes from diet, recovery and consistency - not just training."
                        : isQuickNotes
                        ? "I capture ideas on the move. If a notes app takes more than two clicks to open, I will forget the thought."
                        : "Visualizing muscle group fatigue charts helps me schedule rest days. Without data, I just overtrain."}
                    </p>
                    <span className='absolute right-2 bottom-[-16px] text-5xl font-serif text-[#10b981]/20 select-none'>”</span>
                  </div>
                </div>
              </div>

              {/* Column 3: What We Discovered List */}
              <div className='lg:col-span-4 flex flex-col justify-between gap-4'>
                <h4 className='font-bold text-white text-lg flex items-center gap-2 mb-2'>
                  <span className='text-[#10b981]'>✓</span> What we Discovered
                </h4>
                
                <div className='space-y-3.5 overflow-y-auto max-h-[380px] pr-1.5 scrollbar-thin scrollbar-thumb-white/10'>
                  {(isSportsERP ? [
                    { title: "Training is still recorded manually", desc: "Athletes still use notebooks to record training sessions and monitor performance progress.", icon: Clipboard },
                    { title: "Information is scattered", desc: "Event, results and training data are spread across platform.", icon: Database },
                    { title: "Registration deadlines missed", desc: "Athletes often miss events because they are unaware.", icon: Bell },
                    { title: "No clarity on performance readiness", desc: "hard to decide if they are competition ready vs personal best.", icon: Activity },
                    { title: "Recovery & Wellness ignored", desc: "Sleep, diet and fatigue tracking are rarely done but impact results.", icon: Heart },
                    { title: "Need for training knowledge", desc: "Athletes want expert-backed guidance in one place.", icon: BookOpen }
                  ] : isQuickNotes ? [
                    { title: "Typing friction kills capture", desc: "Users abandon notes if formatting takes too many gestures.", icon: Clipboard },
                    { title: "Tagging fatigue is real", desc: "Manual folder tagging gets ignored; auto-categorization is needed.", icon: Layers },
                    { title: "Offline blockades", desc: "Lack of offline mode blocks notes during underground commute.", icon: Database },
                    { title: "Lost link associations", desc: "Difficulty linking one note to another leads to scattered brain flow.", icon: BookOpen }
                  ] : [
                    { title: "Overtraining is common", desc: "Lack of rest day alarms causes muscle fatigue and drops performance.", icon: Activity },
                    { title: "Inconsistent weight logging", desc: "Complex logging layouts discourage athletes during workout sets.", icon: Clipboard },
                    { title: "Goal tracking visual lag", desc: "No visual progress charts makes fitness goal achievement feel slow.", icon: Gauge }
                  ]).map((item, idx) => {
                    const IconComp = item.icon || Clipboard
                    return (
                      <div key={idx} className='bg-[#051512] border border-white/5 rounded-xl p-4 flex gap-4 items-start hover:border-[#10b981]/15 transition duration-300'>
                        <div className='rounded-lg bg-[#0a231f] border border-[#10b981]/25 p-2 text-[#10b981] flex items-center justify-center shrink-0'>
                          <IconComp size={16} />
                        </div>
                        <div className='space-y-1'>
                          <div className='text-xs font-semibold text-white/95 leading-tight'>{item.title}</div>
                          <div className='text-[10px] text-white/50 leading-relaxed font-light'>{item.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* 4. PRODUCT VALUE HIGHLIGHTS */}
        {/* ========================================================================= */}
        <section className='pt-16 border-t border-white/5'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {(isSportsERP ? [
              { title: "one place for everything", desc: "Athletes want a unified platform to track, manage and grow.", icon: Users },
              { title: "Visibility drives decisions", desc: "Clear insights help athletes improve consistently.", icon: Gauge },
              { title: "Timely updates matter", desc: "Smart alerts can prevent missed opportunities.", icon: Phone },
              { title: "Performance is overall", desc: "Recovery, diet and mindset are equally important.", icon: Heart }
            ] : isQuickNotes ? [
              { title: "Lightning Search", desc: "Find any phrase or note index instantly with offline SQLite caches.", icon: Gauge },
              { title: "Stack Directories", desc: "Group related snippets together in intuitive virtual decks.", icon: Layers },
              { title: "Markdown Sync", desc: "Direct code rendering and formatting styling on the fly.", icon: Clipboard },
              { title: "Cloud Backup", desc: "End-to-end encrypted sync preserves your logs everywhere.", icon: Database }
            ] : [
              { title: "Fatigue Tracking", desc: "Log sleep and caloric rest days to balance performance.", icon: Heart },
              { title: "Smart PR Visuals", desc: "Receive automated alerts when hitting new weight thresholds.", icon: Award },
              { title: "Rest Timers", desc: "Integrated set stopwatch prevents over-resting in training.", icon: Gauge },
              { title: "Cloud Logs", desc: "Sync workout statistics directly with gym coaches.", icon: Users }
            ]).map((card, index) => {
              const IconComp = card.icon || Users
              return (
                <div 
                  key={index}
                  className='bg-[#0a1e1a]/40 border border-white/5 rounded-2xl p-6 text-left hover:border-[#10b981]/25 hover:bg-[#0a1e1a]/60 transition-all duration-300 group'
                >
                  <div className='w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <IconComp size={20} />
                  </div>
                  <h4 className='font-bold text-white text-base tracking-wide capitalize mb-2'>{card.title}</h4>
                  <p className='text-xs text-white/50 leading-relaxed font-light'>{card.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        <RelatedProjects currentProject={project} onSelectProject={onSelectProject} />
      </div>
    </div>
  )
}

export default App
