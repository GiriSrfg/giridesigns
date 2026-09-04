import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform, useMotionValue, useSpring, useVelocity } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
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
  Award,
  Search,
  Lightbulb,
  Palette,
  ShieldCheck,
  UserCheck,
  Calendar,
  Trophy,
  ChevronRight,
  ChevronLeft,
  Sliders,
  Layout,
  Lock,
  Eye,
  CheckCircle2,
  Star,
  Target,
  Zap,
  FileText,
  CheckCircle,
  XCircle,
  Play,
  SlidersHorizontal,
  RefreshCw
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

const siteNavLinks = [
  { label: 'projects', href: '#projects' },
  { label: 'about', href: '#about' },
  { label: 'focus', href: '#focus' },
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
    banner: '/work/future-fitness-banner.png',
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
    <button
      type='button'
      className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#BE4C00] px-8 py-3 text-xs font-medium uppercase tracking-[0.35em] text-white shadow-[0_4px_12px_rgba(181,1,167,0.25)] outline outline-2 outline-white/80 outline-offset-[-3px] transition hover:brightness-110 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base'
    >
      Contact Me
    </button>
  )
}

function SiteHeader({
  scrollProgress,
  onBrandClick,
  onLinkClick,
  activeLabel
}: {
  scrollProgress: any
  onBrandClick?: () => void
  onLinkClick?: (href: string) => void
  activeLabel?: string
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)

    if (!onLinkClick) return
    event.preventDefault()
    onLinkClick(href)
  }

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pb-4 pt-5 sm:pb-5 sm:pt-6'>
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
          className='type-heading-lg font-light leading-none tracking-[-0.03em] text-white transition hover:text-white/80 focus-visible:ring-2 focus-visible:ring-[#00ff84]'
        >
          Portfolio
        </motion.a>

        <button
          type='button'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className='inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-3 type-heading-md font-light leading-none tracking-[-0.03em] text-white/80 hover:text-white md:hidden focus-visible:ring-2 focus-visible:ring-[#00ff84]'
        >
          <span>{isMenuOpen ? 'close' : 'menu'}</span>
          {isMenuOpen ? <X size={28} strokeWidth={1.7} /> : <Menu size={28} strokeWidth={1.6} />}
        </button>

        <div className='hidden items-center gap-8 type-body-lg font-light lowercase text-white/70 md:flex xl:gap-12'>
          {siteNavLinks.map((item, index) => {
            const isActive = activeLabel === item.label
            return (
              <motion.a
                key={item.label}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => handleLinkClick(event, item.href)}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.55 }}
                className={`transition duration-300 relative py-1.5 hover:text-white ${
                  isActive ? 'text-white font-medium' : 'text-white/70'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeHeaderNav"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ff84]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            )
          })}
        </div>
      </div>

      <div className='relative h-px w-full bg-white/15'>
        <motion.div
          className='absolute left-0 top-0 h-full bg-[#00ff84]'
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
            className='fixed inset-x-0 top-[73px] z-50 h-[calc(100vh-73px)] overflow-y-auto bg-black/95 px-6 pb-12 pt-12 backdrop-blur-xl md:hidden'
          >
            <div className='pointer-events-none absolute inset-0 opacity-20 blur-md'>
              <div className='absolute left-6 top-20 h-8 w-[68%] rounded-full bg-white/10' />
              <div className='absolute left-6 top-[34%] h-14 w-[46%] rounded-full bg-white/15' />
              <div className='absolute left-6 top-[47%] h-12 w-[70%] rounded-full bg-white/12' />
              <div className='absolute left-6 top-[60%] h-11 w-[58%] rounded-full bg-white/10' />
            </div>

            <div className='relative max-w-7xl mx-auto flex flex-col items-end gap-8 pt-6'>
              {siteNavLinks.map((item) => {
                const isActive = activeLabel === item.label
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(event) => handleLinkClick(event, item.href)}
                    className={`text-[clamp(2.2rem,7vw,3.5rem)] font-light lowercase leading-none tracking-[-0.05em] transition hover:text-white ${
                      isActive ? 'text-[#00ff84] font-medium' : 'text-white/70'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
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
    }, 2400)

    return () => window.clearInterval(interval)
  }, [words.length])

  return (
    <span
      className='relative mt-1 block h-[1.3em] w-full max-w-full overflow-hidden align-bottom sm:ml-3 sm:mt-0 sm:inline-block sm:h-[1.1em] sm:w-auto sm:whitespace-nowrap font-bold text-[#00ff84]'
    >
      <AnimatePresence initial={false} mode='wait'>
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1]
          }}
          className='absolute inset-0 block max-w-full whitespace-normal break-words text-[#00ff84] sm:whitespace-nowrap font-bold tracking-tight'
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
      {text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0.2 }}
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0, 1],
              [0.2, 1]
            )
          }}
          className='inline-block mr-[0.25em] last:mr-0'
        >
          {word}
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

interface FocusItem {
  title: string
  subtitle: string
  image: string
}

const focusItems: FocusItem[] = [
  {
    title: 'AI Workforce Insights',
    subtitle: 'Exploring proactive workforce management',
    image: '/work/ai-workforce-insights.jpg'
  },
  {
    title: 'Design Trade-offs',
    subtitle: 'Balancing user needs with business goals through real-world product observations.',
    image: '/work/design-tradeoffs.png'
  },
  {
    title: 'Design Systems',
    subtitle: 'Building scalable SaaS interfaces inspired by Untitled UI',
    image: '/work/design-systems.png'
  }
]

function CurrentFocusSection({
  onSelectItem
}: {
  onSelectItem: (itemTitle: string) => void
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const isAnyRowHovered = hoveredIndex !== null

  return (
    <section
      id="focus"
      ref={containerRef}
      className="relative bg-transparent py-20 sm:py-24 lg:py-28 text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 w-full mb-10 sm:mb-12">
          <span className="font-mono type-label lowercase text-white/70 shrink-0">.current focus</span>
          <div className="h-px bg-white/15 flex-grow" />
        </div>

        {/* List Items */}
        <div className="flex flex-col">
          {focusItems.map((item, index) => {
            const isHovered = hoveredIndex === index
            const isDimmed = isAnyRowHovered && !isHovered

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  onSelectItem(item.title)
                }}
                className="group relative grid grid-cols-8 items-center py-7 sm:py-9 lg:py-11 border-b border-white/10 cursor-pointer select-none transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-[#00ff84]"
                style={{
                  opacity: isDimmed ? 0.6 : 1,
                }}
              >
                {/* Title & Subtitle: Column 1 to 4 */}
                <div className="col-span-4 flex flex-col gap-2">
                  <h3
                    className="type-heading-lg font-light tracking-tight transition-colors duration-300 leading-tight"
                    style={{
                      color: isHovered ? '#ffffff' : '#d4d4d4'
                    }}
                  >
                    {item.title}
                  </h3>
                  
                  {/* Subtitle animated reveal */}
                  <motion.p
                    initial={false}
                    animate={{
                      height: isHovered ? 'auto' : 0,
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? 8 : 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="type-label text-neutral-300 font-light overflow-hidden pr-4"
                  >
                    {item.subtitle}
                  </motion.p>
                </div>

                {/* Column 5: Empty (Hidden on mobile to save space) */}
                <div className="hidden md:block col-span-1" />

                {/* Column 6 & 7: Slide-in Preview Image */}
                <div className="col-span-3 md:col-span-2 relative aspect-[3/2] w-full overflow-visible flex items-center justify-center">
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, x: '-40%', scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: '-40%', scale: 0.95 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Column 8: Arrow Icon */}
                <div className="col-span-1 flex justify-end">
                  <motion.div
                    animate={{
                      rotate: isHovered ? 0 : -45,
                      x: isHovered ? 8 : 0,
                      color: isHovered ? '#ffffff' : '#737373'
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ onContactClick }: { onContactClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      id="contact"
      className="relative bg-transparent py-20 sm:py-24 lg:py-28 text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 w-full mb-10 sm:mb-12">
          <span className="font-mono text-xs lowercase text-white/70 shrink-0">.say hello</span>
          <div className="h-px bg-white/15 flex-grow" />
        </div>

        {/* Content & Button */}
        <div className="flex flex-col gap-10 sm:gap-14">
          {/* Large Title Text */}
          <h2 className="type-heading-lg font-light leading-[1.25] tracking-tight max-w-4xl font-sans text-neutral-100">
            Have an idea, product, or design challenge?
            <br className="hidden sm:block" />
            Let's discuss how thoughtful design can create better experiences.
          </h2>

          {/* Button Area */}
          <div className="flex flex-col sm:flex-row items-start w-full">
            <div className="w-full sm:w-auto sm:min-w-[240px]">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onContactClick) {
                    e.preventDefault()
                    onContactClick()
                  }
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative flex items-center justify-center min-h-[48px] py-4 px-8 border border-white/20 overflow-hidden select-none transition-colors duration-300 w-full rounded-sm focus-visible:ring-2 focus-visible:ring-[#00ff84]"
              >
                {/* Filling white background from bottom */}
                <motion.div
                  initial={false}
                  animate={{
                    scaleY: isHovered ? 1 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{
                    originY: 1
                  }}
                  className="absolute inset-0 bg-white z-0"
                />

                {/* Button Text & Arrow */}
                <div className="relative z-10 flex items-center gap-3 font-mono type-body tracking-wider uppercase">
                  <motion.span
                    animate={{
                      color: isHovered ? '#000000' : '#ffffff'
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    contact me
                  </motion.span>
                  <motion.div
                    animate={{
                      rotate: isHovered ? 0 : -45,
                      x: isHovered ? 4 : 0,
                      color: isHovered ? '#000000' : '#ffffff'
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SiteFooter({
  onLinkClick
}: {
  onLinkClick?: (href: string) => void
}) {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!onLinkClick) return
    event.preventDefault()
    onLinkClick(href)
  }

  const footerLinks = [
    { label: 'projects', href: '#projects' },
    { label: 'about', href: '#about' },
    { label: 'focus', href: '#focus' },
    { label: 'contact', href: '#contact' }
  ]

  return (
    <footer className="relative bg-transparent py-16 sm:py-20 text-white overflow-hidden font-sans border-t border-white/10">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* Left: Brand */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (onLinkClick) onLinkClick('#')
              }}
              className="font-mono type-body tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 uppercase"
            >
              giri.design
            </a>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 font-sans type-body lowercase">
            {footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-neutral-400 hover:text-white transition-colors duration-300 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-6 text-neutral-400">
            <a href="https://www.behance.net/frontendmesu" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Behance">
              <BehanceIcon />
            </a>
            <a href="https://www.linkedin.com/in/giri-s-97388b227" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300" aria-label="LinkedIn">
              <LinkedinCustomIcon />
            </a>
            <a href="https://wa.me/917975021897" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300" aria-label="WhatsApp">
              <WhatsappCustomIcon />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

const BehanceIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <g transform="translate(3.5, 2.7) scale(0.72)">
      <path 
        fill="currentColor" 
        d="M22 7h-7v1.25h7v-1.25zm-2.88 3.593c-.947 0-1.688.337-2.146.994-.458.656-.69 1.579-.69 2.756h5.698c-.015-1.127-.245-2.023-.715-2.67-.47-.648-1.19-.98-2.147-.98zm-6.223 3.633c.36-.188.63-.448.81-.781.18-.333.27-.723.27-1.17 0-.583-.16-.967-.48-1.15-.32-.183-.87-.275-1.65-.275h-2.91v3.375h2.96zm-.43 3.036c.49-.072.86-.217 1.11-.433.25-.216.375-.544.375-.984 0-.41-.122-.721-.365-.933-.243-.212-.665-.318-1.265-.318h-2.82v2.668h2.965zm-1.875 1.738h-4.32v-11h4.635c1.47 0 2.505.292 3.105.875.6.583.9 1.375.9 2.375 0 .8-.205 1.455-.615 1.965-.41.51-1.025.84-1.845.99.98.15 1.725.565 2.235 1.245.51.68.765 1.57.765 2.67 0 1.25-.395 2.21-1.185 2.88-.79.67-1.925 1.005-3.405 1.005zm11.39-7.25c-.07-1.86-.495-3.245-1.275-4.155-.78-.91-1.91-1.365-3.39-1.365-1.46 0-2.58.465-3.36 1.395-.78.93-1.17 2.285-1.17 4.065 0 1.8.395 3.165 1.185 4.095.79.93 1.94 1.395 3.45 1.395 1.31 0 2.33-.305 3.06-.915.73-.61 1.205-1.5 1.425-2.67h-2.1c-.13.56-.395.99-.795 1.29-.4.3-.925.45-1.575.45-.85 0-1.49-.24-1.92-.72-.43-.48-.685-1.25-.765-2.31h7.83c.02-.31.03-.59.03-.81z"
      />
    </g>
  </svg>
)

const LinkedinCustomIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const WhatsappCustomIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.595-1.002-5.035-2.825-6.858-1.823-1.824-4.267-2.827-6.861-2.829-5.41 0-9.81 4.402-9.813 9.808-.001 1.57.418 3.102 1.21 4.461l-.988 3.605 3.696-.97c1.365.808 2.85 1.232 4.15 1.232zm10.742-5.834c-.267-.134-1.58-.78-1.823-.867-.243-.088-.42-.132-.596.134-.176.265-.678.837-.83 1.012-.153.176-.305.198-.572.064-.267-.134-1.127-.415-2.148-1.326-.794-.709-1.33-1.584-1.486-1.85-.156-.265-.017-.409.117-.541.12-.119.267-.309.4-.463.133-.154.178-.264.267-.44.088-.176.044-.331-.022-.463-.066-.132-.596-1.432-.816-1.962-.214-.516-.45-.446-.618-.454-.16-.008-.344-.01-.528-.01-.184 0-.485.069-.739.344-.254.275-.97.948-.97 2.311 0 1.363.992 2.68 1.113 2.846.121.166 1.953 2.982 4.731 4.183.661.286 1.177.457 1.58.587.663.21 1.266.18 1.742.11.53-.08 1.58-.646 1.802-1.238.22-.593.22-1.102.154-1.21-.066-.108-.243-.176-.51-.31z"/>
  </svg>
)

function SocialMediaRow({ item }: { item: { title: string; handle: string; url: string; icon: React.ComponentType } }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(item.url, '_blank')}
      className="flex items-center gap-6 cursor-pointer group py-4 border-b border-white/5 last:border-b-0 w-full"
    >
      <div className="relative w-[60px] h-[60px] border border-white/20 overflow-hidden flex items-center justify-center shrink-0">
        <motion.div
          initial={false}
          animate={{
            scaleY: isHovered ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          style={{
            originY: 1
          }}
          className="absolute inset-0 bg-white z-0"
        />
        <div className="relative z-10">
          <motion.div
            animate={{
              color: isHovered ? '#000000' : '#ffffff'
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <item.icon />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="type-body-lg font-medium text-neutral-300 group-hover:text-white transition duration-300 lowercase">
          {item.title}
        </span>
        <span className="font-mono type-label text-neutral-500">
          {item.handle}
        </span>
      </div>
    </div>
  )
}

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const socialMedia = [
    {
      title: 'Behance',
      handle: '@frontendmesu',
      url: 'https://www.behance.net/frontendmesu',
      icon: BehanceIcon
    },
    {
      title: 'Linkedin',
      handle: '@giri-s-97388b227',
      url: 'https://www.linkedin.com/in/giri-s-97388b227',
      icon: LinkedinCustomIcon
    },
    {
      title: 'Whatsapp',
      handle: '+91 79750 21897',
      url: 'https://wa.me/917975021897',
      icon: WhatsappCustomIcon
    }
  ]

  return (
    <div className="relative bg-transparent min-h-screen text-white pt-[110px] sm:pt-[130px] pb-20 sm:pb-24 lg:pb-28 overflow-hidden font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Header Block */}
        <div className="flex items-center gap-4 w-full mt-2">
          <span className="font-mono text-xs lowercase text-white/70 shrink-0">.say hello</span>
          <div className="h-px bg-white/15 flex-grow" />
        </div>

        {/* Hero Title Block */}
        <div className="flex flex-col gap-6 w-full">
          <div>
            <h1 className="type-display font-light leading-none tracking-tight text-white font-sans">
              say hello
            </h1>
          </div>
          <div className="max-w-3xl">
            <h2 className="type-heading-lg font-light leading-snug tracking-tight text-neutral-200 font-sans">
              let&apos;s collaborate. feel free to drop me a line about your project or follow me on social networks
            </h2>
          </div>
        </div>

        {/* Content splits into Form and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-10 sm:gap-14 pt-4">
          {/* Form Container */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full bg-[#121212] border border-white/15 rounded-sm py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:border-[#00ff84] focus:ring-2 focus:ring-[#00ff84] transition duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-[#121212] border border-white/15 rounded-sm py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:border-[#00ff84] focus:ring-2 focus:ring-[#00ff84] transition duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  rows={6}
                  required
                  placeholder="Message"
                  className="w-full bg-[#121212] border border-white/15 rounded-sm py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:border-[#00ff84] focus:ring-2 focus:ring-[#00ff84] transition duration-300 resize-none"
                />
              </div>
              
              {/* Submit button */}
              <button
                type="submit"
                className="w-full min-h-[48px] bg-white text-black font-semibold uppercase tracking-wider py-4 hover:bg-[#00ff84] transition duration-300 mt-2 text-sm rounded-sm focus-visible:ring-2 focus-visible:ring-[#00ff84]"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Socials Container */}
          <div className="md:col-span-5 flex flex-col gap-6 md:border-l md:border-white/10 md:pl-10">
            <span className="font-mono type-label text-white/70 lowercase mb-2">social channels</span>
            <div className="flex flex-col gap-3 w-full">
              {socialMedia.map((item) => (
                <SocialMediaRow key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsListPage({
  onSelectProject
}: {
  onSelectProject: (project: typeof projects[number]) => void
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const descriptions: Record<string, string> = {
    'Sports ERP': 'A unified digital ecosystem for athletic training, competition tracking, and wellness analytics.',
    'Quick Notes': 'A markdown-supported note-taking application built for immediate, distraction-free capture.',
    'FUTURE FITNESS': 'A workout tracking and trainer dashboard that uses biometric visualization to prevent overtraining.'
  }

  return (
    <div className="relative bg-transparent min-h-screen text-white pt-[110px] sm:pt-[130px] pb-20 sm:pb-24 lg:pb-28 overflow-hidden font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Header Block */}
        <div className="flex items-center gap-4 w-full mt-2">
          <span className="font-mono type-label lowercase text-white/70 shrink-0">.projects</span>
          <div className="h-px bg-white/15 flex-grow" />
        </div>

        {/* Hero Title Block */}
        <div className="max-w-4xl">
          <h1 className="type-heading-lg font-light leading-snug tracking-tight text-white font-sans">
            Designing smarter workforce experiences through data-driven insights, proactive decision making, and human-centered design.
          </h1>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 w-full mt-4">
          {projects.map((project) => {
            const desc = descriptions[project.name] || ''
            const imageSrc = project.banner ?? project.images[0]

            return (
              <div
                key={project.name}
                className="grid grid-cols-1 md:grid-cols-12 w-full gap-8 items-start border-b border-white/10 pb-16 last:border-b-0"
              >
                {/* Main Card Container */}
                <div className="md:col-span-8">
                  <div
                    onClick={() => onSelectProject(project)}
                    className={`group cursor-pointer rounded-xl p-6 sm:p-9 shadow-2xl transition-transform duration-500 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#00ff84] ${project.cardClass}`}
                  >
                    {/* Meta info */}
                    <div className={`border-b pb-4 font-mono type-label flex items-center justify-between ${project.metaClass}`}>
                      <span>{project.year}</span>
                      <span>{project.category}</span>
                    </div>

                    {/* Title & Arrow */}
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <h3 className="type-display font-light leading-none tracking-tight">
                        {project.name}
                      </h3>
                      <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                        <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Image */}
                    <div className="mt-6 sm:mt-8 overflow-hidden rounded-lg bg-black/20 p-1 sm:p-2 flex items-center justify-center border border-white/5 w-full">
                      <img
                        src={imageSrc}
                        alt={project.name}
                        className="w-full h-auto max-h-[55vh] object-contain rounded-md transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                      />
                    </div>
                  </div>
                </div>

                {/* Description Block */}
                <div className="md:col-span-4 flex flex-col gap-3 md:pt-4">
                  <p className="font-mono type-label leading-relaxed tracking-wider text-[#ff5900] uppercase font-semibold">
                    {project.category}
                  </p>
                  <p className="font-sans type-body-lg leading-relaxed text-neutral-300 font-light max-w-prose">
                    {desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function FocusListPage({
  onSelectItem
}: {
  onSelectItem: (itemId: 'design-systems' | 'employee-retention' | 'ai-workforce') => void
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const items = [
    {
      id: 'ai-workforce' as const,
      title: 'AI Workforce Insights',
      subtitle: 'Exploring proactive workforce management',
      image: '/work/ai-workforce-insights.jpg',
      date: 'June 26, 2026'
    },
    {
      id: 'employee-retention' as const,
      title: 'Design Trade-offs',
      subtitle: 'Balancing user needs with business goals through real-world product observations.',
      image: '/work/design-tradeoffs.png',
      date: 'June 26, 2026'
    },
    {
      id: 'design-systems' as const,
      title: 'Design Systems',
      subtitle: 'Building scalable SaaS interfaces inspired by Untitled UI',
      image: '/work/design-systems.png',
      date: 'June 26, 2026'
    }
  ]

  const featuredItem = items[0]
  const listItems = items.slice(1)

  return (
    <div className="relative bg-transparent min-h-screen text-white pt-[110px] sm:pt-[130px] pb-20 sm:pb-24 lg:pb-28 overflow-hidden font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        
        {/* Title Block */}
        <div className="flex flex-col gap-6 w-full relative">
          <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-light tracking-[-0.05em] text-white select-none leading-none">
            focus
          </h1>
        </div>

        {/* Featured Item (AI Workforce Insights) */}
        <div className="flex flex-col gap-6 relative border-b border-white/10 pb-16">
          {/* Cover Image */}
          <div 
            onClick={() => onSelectItem(featuredItem.id)}
            className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900 cursor-pointer group focus-visible:ring-2 focus-visible:ring-[#00ff84]"
          >
            <img
              src={featuredItem.image}
              alt={featuredItem.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Title and Date below image */}
          <div className="flex flex-col gap-2 mt-2">
            <h2 
              onClick={() => onSelectItem(featuredItem.id)}
              className="text-[clamp(1.8rem,4vw,3.2rem)] font-light leading-snug tracking-tight text-white cursor-pointer hover:text-[#00ff84] transition-colors duration-300"
            >
              {featuredItem.title}
            </h2>
            <span className="font-mono text-xs lowercase text-white/70">
              {featuredItem.date}
            </span>
          </div>
        </div>

        {/* Remaining List Items */}
        <div className="flex flex-col gap-16 w-full">
          {listItems.map((item) => (
            <div 
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 w-full gap-6 items-start border-b border-white/10 pb-16 last:border-b-0 relative"
            >
              {/* Image */}
              <div 
                onClick={() => onSelectItem(item.id)}
                className="md:col-span-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10 bg-neutral-900 cursor-pointer group focus-visible:ring-2 focus-visible:ring-[#00ff84]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Title & Date */}
              <div className="md:col-span-7 flex flex-col gap-3 md:pt-4">
                <h3 
                  onClick={() => onSelectItem(item.id)}
                  className="text-[clamp(1.5rem,3vw,2.2rem)] font-light leading-snug tracking-tight text-white cursor-pointer hover:text-[#00ff84] transition-colors duration-300"
                >
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-light max-w-prose leading-relaxed">
                  {item.subtitle}
                </p>
                <span className="font-mono text-xs lowercase text-white/70">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

function FocusDetailPage({
  data,
  onGoHome,
  hoveredSeeAlsoIndex,
  setHoveredSeeAlsoIndex
}: {
  data: {
    title: string
    subtitle: string
    date: string
    readingTime: string
    image: string
    sections: Array<{
      type: string
      title?: string
      paragraphs?: string[]
      items?: string[]
      text?: string
      bulletChar?: string
    }>
    seeAlso: Array<{
      title: string
      subtitle: string
      image: string
    }>
  }
  onGoHome: (target?: string) => void
  hoveredSeeAlsoIndex: number | null
  setHoveredSeeAlsoIndex: (index: number | null) => void
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative bg-transparent min-h-screen text-white pt-[110px] sm:pt-[130px] pb-20 sm:pb-24 lg:pb-28 overflow-hidden font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        
        {/* Title Block */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <h1 className="text-[clamp(2.2rem,5vw,4.8rem)] font-light leading-[1.08] tracking-tight">
            {data.title}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>
          
          {/* Outlined Badge */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/20 text-xs font-mono lowercase text-white/70 tracking-wider rounded-sm">
              in focus ↗
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-5xl mx-auto aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl">
          <img
            src={data.image}
            alt={`${data.title} Cover`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body + Metadata columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-12 pt-6 max-w-5xl mx-auto">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col gap-10 text-neutral-300 font-light text-base sm:text-lg leading-relaxed max-w-3xl">
            {data.sections.map((sec, idx) => {
              if (sec.type === 'text') {
                return (
                  <div key={idx} className="flex flex-col gap-4">
                    {sec.title && (
                      <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                        {sec.title}
                      </h2>
                    )}
                    {sec.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">{p}</p>
                    ))}
                  </div>
                )
              } else if (sec.type === 'bullets') {
                return (
                  <div key={idx} className="flex flex-col gap-4">
                    {sec.title && (
                      <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                        {sec.title}
                      </h2>
                    )}
                    <ul className="flex flex-col gap-3 font-mono text-sm tracking-wider text-neutral-300">
                      {sec.items?.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <span className="text-[#00ff84] mr-1">{sec.bulletChar || '•'}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              } else if (sec.type === 'highlight') {
                return (
                  <div key={idx} className="flex flex-col gap-4 p-6 sm:p-8 bg-white/[0.03] border border-white/10 rounded-lg">
                    {sec.title && (
                      <h2 className="text-lg font-normal text-white tracking-tight">
                        {sec.title}
                      </h2>
                    )}
                    <p className="italic text-neutral-200 font-light">
                      "{sec.text}"
                    </p>
                  </div>
                )
              }
              return null
            })}
          </div>

          {/* Metadata Block */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-8 lg:gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-white/70 lowercase">date published</span>
              <span className="text-sm font-medium text-white/90">{data.date}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-white/70 lowercase">reading time</span>
              <span className="text-sm font-medium text-white/90">{data.readingTime}</span>
            </div>
          </div>
        </div>

        {/* See Also Divider & Header */}
        <div className="flex items-center gap-4 w-full mt-12 max-w-5xl mx-auto">
          <span className="font-mono text-xs lowercase text-white/70 shrink-0">.see also</span>
          <div className="h-px bg-white/15 flex-grow" />
        </div>

        {/* See Also List */}
        <div className="flex flex-col w-full max-w-5xl mx-auto mb-12">
          {data.seeAlso.map((item, index) => {
            const isHovered = hoveredSeeAlsoIndex === index
            const isDimmed = hoveredSeeAlsoIndex !== null && !isHovered

            return (
              <a
                key={index}
                href="#focus"
                onClick={(e) => {
                  e.preventDefault()
                  if (item.title === 'Design Systems') {
                    onGoHome('design-systems')
                  } else if (item.title === 'Design Trade-offs' || item.title === 'Employee Retention Prediction') {
                    onGoHome('employee-retention')
                  } else if (item.title === 'AI Workforce Insights') {
                    onGoHome('ai-workforce')
                  } else {
                    onGoHome('#focus')
                  }
                }}
                onMouseEnter={() => setHoveredSeeAlsoIndex(index)}
                onMouseLeave={() => setHoveredSeeAlsoIndex(null)}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8 border-b border-white/10 cursor-pointer select-none transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-[#00ff84]"
                style={{
                  opacity: isDimmed ? 0.6 : 1
                }}
              >
                <div className="flex flex-col gap-1 max-w-xl">
                  <h3
                    className="text-xl sm:text-2xl font-light tracking-tight transition-colors duration-300"
                    style={{
                      color: isHovered ? '#ffffff' : '#a3a3a3'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-24 aspect-[3/2] overflow-hidden rounded border border-white/10 bg-neutral-900">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <motion.div
                    animate={{
                      rotate: isHovered ? 0 : -45,
                      x: isHovered ? 4 : 0,
                      color: isHovered ? '#ffffff' : '#525252'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function App() {
  const { scrollY, scrollYProgress } = useScroll()
  const [sectionTop, setSectionTop] = useState(0)
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null)
  const [activeHomeSection, setActiveHomeSection] = useState<string>('')
  
  const containerRef = useRef<HTMLDivElement>(null)
  const pinWrapperRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState<typeof projects[number] | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'project-details' | 'design-systems-detail' | 'employee-retention-detail' | 'ai-workforce-detail' | 'projects-list' | 'focus-list' | 'contact-page'>('home')

  useEffect(() => {
    if (currentPage !== 'home') return

    const handleScroll = () => {
      const sectionIds = ['projects', 'about', 'focus', 'contact']
      const scrollPos = window.scrollY + 220

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveHomeSection(id)
            return
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveHomeSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  let activeLabel = ''
  if (currentPage === 'home') {
    activeLabel = activeHomeSection
  } else if (currentPage === 'projects-list' || currentPage === 'project-details') {
    activeLabel = 'projects'
  } else if (currentPage === 'contact-page') {
    activeLabel = 'contact'
  } else if (
    currentPage === 'focus-list' ||
    currentPage === 'design-systems-detail' ||
    currentPage === 'employee-retention-detail' ||
    currentPage === 'ai-workforce-detail'
  ) {
    activeLabel = 'focus'
  }

  const scrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId)
    if (target) {
      const headerOffset = 96
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

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

    const raf = window.requestAnimationFrame(() => {
      scrollToSection(targetId)
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
        const isMobile = window.innerWidth < 640
        return isMobile
          ? 0.15 * window.innerHeight + card.offsetHeight / 2
          : 0.38 * window.innerHeight + card.offsetHeight / 2
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

      const isMobile = window.innerWidth < 640
      const scrollMultiplier = isMobile ? 0.55 : 0.95

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: pinWrapper,
          start: 'top top',
          end: () => `+=${window.innerHeight * (cards.length - 1) * scrollMultiplier}`,
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

        // 2. Current card starts animating only when the next card is halfway
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
          // Following card starts coming up from off-screen
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

  const goHome = (anchor?: string) => {
    setCurrentPage('home')
    setActiveProject(null)
    setPendingAnchor(anchor ?? null)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  return (
    <main className='overflow-x-clip bg-[#050505] relative min-h-screen'>
      {/* Global Background Grid Lines */}
      <div 
        className="absolute inset-y-0 left-0 right-0 grid grid-cols-8 pointer-events-none z-0 px-6 sm:px-8 lg:px-[8.5vw]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.5) 92%, rgba(0,0,0,0.12) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.5) 92%, rgba(0,0,0,0.12) 100%)'
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`h-full w-full border-l border-white/[0.08] ${i === 7 ? 'border-r border-white/[0.08]' : ''}`}
          />
        ))}
      </div>

      <SiteHeader
        scrollProgress={scrollYProgress}
        activeLabel={activeLabel}
        onBrandClick={() => goHome()}
        onLinkClick={(href) => {
          if (href === '#contact') {
            setCurrentPage('contact-page')
            window.scrollTo({ top: 0 })
          } else if (href === '#projects') {
            setCurrentPage('projects-list')
            window.scrollTo({ top: 0 })
          } else if (href === '#focus') {
            setCurrentPage('focus-list')
            window.scrollTo({ top: 0 })
          } else if (currentPage === 'home') {
            const targetId = href.startsWith('#') ? href.slice(1) : href
            scrollToSection(targetId)
          } else {
            goHome(href)
          }
        }}
      />

      {currentPage === 'home' ? (
        <>
          <section className='relative min-h-0 sm:min-h-screen overflow-hidden bg-transparent px-6 pb-6 pt-[85px] sm:pt-[110px] text-white sm:px-8 lg:px-[8.5vw]'>

            <div className='relative z-10 flex flex-col justify-start sm:min-h-[calc(100vh-104px)] sm:justify-between'>
              <div className='flex items-center justify-between gap-5 pt-2 font-mono text-sm leading-none text-white/70 sm:items-start sm:text-base sm:text-white/80'>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.55 }}
                  className='shrink-0 whitespace-nowrap font-medium text-white'
                >
                  Hey, I&apos;m Giri
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.55 }}
                  className='flex min-w-0 items-center gap-2.5 whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide text-neutral-300'
                >
                  <span className='relative flex h-2.5 w-2.5 shrink-0'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff84] opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff84]'></span>
                  </span>
                  available for new projects
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className='py-4 sm:my-auto sm:py-20 lg:py-24'
              >
                <h1 className='max-w-[1100px] text-[clamp(2.8rem,9.5vw,7.8rem)] font-light leading-[1.04] tracking-[-0.04em] text-white sm:leading-[0.96] sm:tracking-tight'>
                  A UI/UX designer focused on
                  <RotatingWord words={heroFocusItems} />
                </h1>

                <motion.p 
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className='mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-neutral-300 font-light leading-relaxed'
                >
                  Crafting high-impact SaaS platforms, digital systems, and enterprise tools that turn complex workflows into intuitive web experiences.
                </motion.p>
              </motion.div>

              <div className='pointer-events-none absolute bottom-[14%] right-[-2vw] hidden h-8 w-20 items-center justify-center opacity-35 lg:flex'>
                <span className='absolute h-px w-full bg-white' />
                <span className='absolute h-full w-px bg-white' />
                <span className='h-6 w-6 rounded-full border border-white' />
              </div>
            </div>
          </section>

          <section id='about' className='relative px-4 py-10 sm:py-16 md:px-10 overflow-hidden sm:overflow-visible'>
            <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
              <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png' alt='' className='absolute top-2 left-2 sm:top-[6%] sm:left-[2%] md:top-[4%] md:left-[4%] w-[48px] xs:w-[60px] sm:w-[140px] md:w-[170px] lg:w-[210px] pointer-events-none select-none' />
            </FadeIn>
            <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
              <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png' alt='' className='absolute bottom-2 left-2 sm:bottom-[11%] sm:left-[6%] md:bottom-[8%] md:left-[10%] w-[42px] xs:w-[52px] sm:w-[120px] md:w-[150px] lg:w-[180px] pointer-events-none select-none' />
            </FadeIn>
            <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
              <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png' alt='' className='absolute top-2 right-2 sm:top-[6%] sm:right-[2%] md:top-[4%] md:right-[4%] w-[48px] xs:w-[60px] sm:w-[140px] md:w-[170px] lg:w-[210px] pointer-events-none select-none' />
            </FadeIn>
            <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
              <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png' alt='' className='absolute bottom-2 right-2 sm:bottom-[11%] sm:right-[6%] md:bottom-[8%] md:right-[10%] w-[52px] xs:w-[65px] sm:w-[130px] md:w-[170px] lg:w-[220px] pointer-events-none select-none' />
            </FadeIn>

            <div className='relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-12 md:gap-14 py-4 sm:py-8 px-10 sm:px-0'>
              <FadeIn delay={0} y={40} duration={0.8}>
                <h2 className='hero-heading text-center text-[clamp(2.4rem,10vw,160px)] font-black uppercase leading-none tracking-tight'>About me</h2>
              </FadeIn>
              <div className='max-w-[560px] text-center'>
                <AnimatedText text="I'm a UI/UX designer passionate about creating simple, intuitive, and user-friendly digital experiences. I enjoy turning ideas into clean interfaces that solve real problems and create meaningful experiences." />
              </div>
            </div>
          </section>

          <section id='projects' ref={containerRef} className='relative z-10 bg-transparent'>
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

          <CurrentFocusSection 
            onSelectItem={(title) => {
              if (title === 'Design Systems') {
                setCurrentPage('design-systems-detail')
              } else if (title === 'Design Trade-offs' || title === 'Employee Retention Prediction') {
                setCurrentPage('employee-retention-detail')
              } else if (title === 'AI Workforce Insights') {
                setCurrentPage('ai-workforce-detail')
              }
              window.scrollTo({ top: 0 })
            }}
          />
        </>
      ) : currentPage === 'project-details' ? (
        <ProjectDetailsPage 
          project={activeProject!}
          onSelectProject={(project) => {
            setActiveProject(project)
            window.scrollTo({ top: 0 })
          }}
        />
      ) : currentPage === 'projects-list' ? (
        <ProjectsListPage 
          onSelectProject={(project) => {
            setActiveProject(project)
            setCurrentPage('project-details')
            window.scrollTo({ top: 0 })
          }}
        />
      ) : currentPage === 'focus-list' ? (
        <FocusListPage 
          onSelectItem={(itemId) => {
            if (itemId === 'design-systems') {
              setCurrentPage('design-systems-detail')
            } else if (itemId === 'employee-retention') {
              setCurrentPage('employee-retention-detail')
            } else if (itemId === 'ai-workforce') {
              setCurrentPage('ai-workforce-detail')
            }
            window.scrollTo({ top: 0 })
          }}
        />
      ) : currentPage === 'contact-page' ? (
        <ContactPage />
      ) : (
        <FocusDetailPage 
          itemId={
            currentPage === 'design-systems-detail'
              ? 'design-systems'
              : currentPage === 'employee-retention-detail'
              ? 'employee-retention'
              : 'ai-workforce'
          }
          onGoHome={(target) => {
            if (target === 'design-systems') {
              setCurrentPage('design-systems-detail')
              window.scrollTo({ top: 0 })
            } else if (target === 'employee-retention') {
              setCurrentPage('employee-retention-detail')
              window.scrollTo({ top: 0 })
            } else if (target === 'ai-workforce') {
              setCurrentPage('ai-workforce-detail')
              window.scrollTo({ top: 0 })
            } else {
              goHome(target)
            }
          }}
        />
      )}
      {currentPage !== 'contact-page' && (
        <ContactSection onContactClick={() => {
          setCurrentPage('contact-page')
          window.scrollTo({ top: 0 })
        }} />
      )}
      <SiteFooter 
        onLinkClick={(href) => {
          if (href === '#contact') {
            setCurrentPage('contact-page')
            window.scrollTo({ top: 0 })
          } else if (href === '#projects') {
            setCurrentPage('projects-list')
            window.scrollTo({ top: 0 })
          } else if (href === '#focus') {
            setCurrentPage('focus-list')
            window.scrollTo({ top: 0 })
          } else if (currentPage === 'home') {
            const targetId = href.startsWith('#') ? href.slice(1) : href
            scrollToSection(targetId)
          } else {
            goHome(href)
          }
        }} 
      />
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
      className={`project-card group col-start-1 row-start-1 mx-auto w-[92vw] max-w-[94vw] cursor-pointer rounded-md p-3.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] will-change-transform sm:w-[94vw] sm:max-w-none sm:rounded-[12px] sm:p-6 md:p-9 lg:w-[87.5vw] ${project.cardClass}`}
    >
      <div className={`border-b pb-2 font-mono text-[11px] tracking-normal sm:pb-3 sm:text-base sm:tracking-[0.08em] md:text-[1.45rem] ${project.metaClass}`}>
        <div className='flex items-center justify-between gap-4'>
          <span>{project.year}</span>
          <span className='text-right'>{project.category}</span>
        </div>
      </div>

      <div className='mt-5 grid grid-cols-[1fr_auto] gap-3 sm:mt-[clamp(1.8rem,4.4vh,3.2rem)] sm:gap-5 lg:grid-cols-[1fr_auto] lg:items-start'>
        <h3 className='max-w-[10ch] text-[clamp(2.4rem,10vw,4.8rem)] font-light leading-[0.98] tracking-[-0.08em] sm:max-w-none sm:text-[clamp(4rem,8.9vw,7.9rem)] sm:leading-[0.86] sm:tracking-normal'>
          {project.name}
        </h3>

        <div className='flex h-10 w-10 items-start justify-end transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-[clamp(4rem,6vw,6rem)] sm:w-[clamp(4rem,6vw,6rem)] sm:items-center sm:justify-center group-hover:-rotate-45'>
          <ArrowRight className='h-8 w-8 sm:h-[92px] sm:w-[92px]' strokeWidth={1.7} />
        </div>
      </div>

      <div className='mt-4 sm:mt-[clamp(1.6rem,4vh,3rem)] overflow-hidden rounded-lg bg-black/20 p-1 sm:p-2 flex items-center justify-center border border-white/5'>
        <img
          src={imageSrc}
          alt={`${project.name} project preview`}
          className='w-full h-auto max-h-[58vh] sm:max-h-[62vh] object-contain rounded-md transition-transform duration-500 ease-out group-hover:scale-[1.015]'
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

interface MobileScreenItem {
  src: string
  alt: string
  title?: string
}

interface MobileScreenSet {
  id: number
  title?: string
  screens: MobileScreenItem[]
}

function DesktopResponsiveShowcase() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Member's Success Story",
      src: "/work/ff-members-story.png",
      alt: "Future Fitness Member's Success Story Showcase"
    },
    {
      id: 2,
      title: "Fitness Shop",
      src: "/work/ff-shop-products.png",
      alt: "Future Fitness Shop Products Showcase"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const currentSlide = slides[activeSlide]

  return (
    <div className="w-full flex justify-center pt-6">
      {/* Outer Showcase Card Container Box (Matching Reference Light Styling) */}
      <div className="w-full max-w-[1280px] rounded-[2rem] sm:rounded-[2.5rem] bg-[#f4f6f8] text-neutral-900 p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
        {/* Slide Title Above Screen (Matching Reference Image Layout) */}
        <div className="w-full text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#00a854] tracking-wide font-sans">
            {currentSlide.title}
          </h3>
        </div>

        {/* Navigation Arrow Left */}
        <button
          type="button"
          onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 text-neutral-800 shadow-xl border border-neutral-200 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 text-neutral-800 shadow-xl border border-neutral-200 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Active Desktop Slide Image Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 bg-black shadow-2xl"
          >
            <img
              src={currentSlide.src}
              alt={currentSlide.alt}
              className="w-full h-auto rounded-xl sm:rounded-2xl block object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots at Bottom Center */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'w-8 bg-neutral-900' : 'w-2.5 bg-neutral-400/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileResponsiveShowcase({
  sets,
  caption = 'Mobile Responsive'
}: {
  sets: MobileScreenSet[]
  caption?: string
}) {
  const [activeSet, setActiveSet] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % sets.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [sets.length])

  const currentSet = sets[activeSet]

  return (
    <div className="w-full flex flex-col items-center pt-8 pb-4">
      {/* Outer Showcase Container Card Box (Matching Reference Image 2 Layout) */}
      <div className="w-full max-w-[1280px] rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#f4f6f8] text-neutral-900 p-3 xs:p-5 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
        {/* Set Header Title (e.g. Onboarding / Member Stories / Shop) */}
        {currentSet?.title && (
          <div className="w-full text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#00a854] tracking-wide font-sans">
              {currentSet.title}
            </h3>
          </div>
        )}

        {/* Navigation Arrow Left */}
        <button
          type="button"
          onClick={() => setActiveSet((prev) => (prev === 0 ? sets.length - 1 : prev - 1))}
          aria-label="Previous set"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 text-neutral-800 shadow-xl border border-neutral-200 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          onClick={() => setActiveSet((prev) => (prev + 1) % sets.length)}
          aria-label="Next set"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 text-neutral-800 shadow-xl border border-neutral-200 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* 3 Mobile Frames ALWAYS in 1 Row (3 Columns across mobile & desktop) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSet}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="grid grid-cols-3 gap-1.5 xs:gap-3 sm:gap-6 lg:gap-10 items-start justify-items-center max-w-[1050px] mx-auto px-1 sm:px-4"
          >
            {currentSet.screens.map((screen, idx) => (
              <div key={idx} className="w-full flex flex-col items-center gap-1 sm:gap-3">
                {/* Title Label Above Screen (Matching Reference Image) */}
                {screen.title && (
                  <span className="text-[9px] xs:text-xs sm:text-base md:text-lg font-bold text-[#00a854] tracking-tight sm:tracking-wide font-sans text-center truncate max-w-full px-0.5">
                    {screen.title}
                  </span>
                )}
                
                {/* Mobile Device Frame */}
                <div className="w-full max-w-[100px] xs:max-w-[130px] sm:max-w-[240px] md:max-w-[280px] aspect-[9/19.5] rounded-[14px] xs:rounded-[18px] sm:rounded-[36px] md:rounded-[42px] border-[3px] xs:border-[4px] sm:border-[8px] md:border-[10px] border-[#18181b] bg-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-1 sm:top-2.5 left-1/2 -translate-x-1/2 w-8 xs:w-12 sm:w-20 h-1.5 sm:h-4 rounded-full bg-[#18181b] z-20 flex items-center justify-between px-1 sm:px-3">
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-800" />
                    <span className="w-1.5 sm:w-2 h-0.5 sm:h-1 rounded-full bg-neutral-800" />
                  </div>

                  {/* Mobile Screen Image */}
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full h-full object-cover rounded-[10px] xs:rounded-[14px] sm:rounded-[26px] md:rounded-[32px]"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots at Bottom Center */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {sets.map((set, idx) => (
            <button
              key={set.id}
              onClick={() => setActiveSet(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSet === idx ? 'w-8 bg-neutral-900' : 'w-2.5 bg-neutral-400/60'
              }`}
              aria-label={`Go to set ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Caption Below Container */}
      {caption && (
        <span className="font-sans type-heading-sm font-medium text-neutral-400 mt-4 tracking-wide text-center">
          {caption}
        </span>
      )}
    </div>
  )
}

function FutureFitnessDetailsPage({
  project,
  onSelectProject
}: {
  project: typeof projects[number]
  onSelectProject: (project: typeof projects[number]) => void
}) {
  const [activeTab, setActiveTab] = useState<'services' | 'memberships' | 'trainers' | 'locations'>('services')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0d10] text-white pt-[75px] sm:pt-[90px] pb-24 overflow-x-hidden relative font-sans selection:bg-[#00ff84] selection:text-black">
      {/* Background dot grid pattern matching Sports ERP case study */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundColor: '#0a0d10',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 0.8px, transparent 0.9px)',
          backgroundSize: '18px 18px',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.5) 92%, rgba(0,0,0,0.12) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.5) 92%, rgba(0,0,0,0.12) 100%)'
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-[16px] md:px-[64px] border-0 e2e-layout-box space-y-8 sm:space-y-12">
        {/* ========================================================================= */}
        {/* 1. FLOATING CAPSULE HEADER PILL (Visually following screenshot) */}
        {/* ========================================================================= */}
        <div className="w-full flex justify-center pt-2 sm:pt-4">
          <div className="w-full max-w-[960px] rounded-full border border-emerald-500/20 bg-white/95 px-4 py-2.5 sm:px-8 sm:py-3.5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_25px_rgba(0,255,132,0.15)] flex items-center justify-between gap-4 transition-all duration-300">
            {/* Left section: Icon + Brand title */}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#00e599] text-black shadow-md">
                <Zap size={20} strokeWidth={2.5} className="fill-black text-black" />
              </span>
              <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 font-sans">
                Future Fitness
              </span>
            </div>

            {/* Center blurred glow aura inside capsule */}
            <div className="hidden sm:block h-6 w-32 rounded-full bg-[#00e599]/20 blur-md pointer-events-none" />

            {/* Right section: Close button */}
            <button
              type="button"
              onClick={() => onSelectProject(projects[0])}
              aria-label="Close case study"
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#262626] text-white shadow-md hover:bg-neutral-800 transition focus-visible:ring-2 focus-visible:ring-[#00ff84]"
            >
              <X size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN TITLE & SUBTITLE SECTION */}
        {/* ========================================================================= */}
        <header className="pt-4 sm:pt-6 space-y-2 border-0 px-[16px] md:px-[64px]">
          <h1 className="text-[36px] sm:text-[56px] md:text-[72px] leading-[1.0] font-bold text-white tracking-tight font-sans">
            FUTURE FITNESS GYM
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-400 font-light tracking-tight">
            Website Design &amp; Development
          </p>
        </header>

        {/* ========================================================================= */}
        {/* 3. HORIZONTAL DIVIDER LINE (Matching screenshot) */}
        {/* ========================================================================= */}
        <div className="border-t border-white/15 my-6 sm:my-8" />

        {/* ========================================================================= */}
        {/* 4. TWO-COLUMN METADATA HEADER (MY ROLE & ABOUT CLIENT - Matching screenshot) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start border-0 px-[16px] md:px-[64px] relative">
          {/* Left Column: My Role */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-sm sm:text-base font-medium text-neutral-400">My Role</p>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Freelance Product Designer - Frontend Developer
            </p>
          </div>

          {/* Right Column: About the Client */}
          <div className="md:col-span-7 space-y-2">
            <p className="text-sm sm:text-base font-medium text-neutral-400">About the Client</p>
            <p className="text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body">
              Future Fitness is a fitness brand focused on helping people build strength, improve their fitness, and maintain a healthier lifestyle. I was brought in to design and develop a website that could showcase their services, memberships, trainers, and locations while making it easier for potential members to get started.
            </p>
          </div>

          {/* Right side floating send/cursor arrow icon (Matching screenshot right edge) */}
          <div className="hidden md:flex md:col-span-1 justify-end pt-2">
            <div className="p-3 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-[#00ff84] hover:border-[#00ff84]/50 transition duration-300">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. LARGE WEBSITE WALKTHROUGH VIDEO (Padded Card Showcase Box - Matching Reference) */}
        {/* ========================================================================= */}
        <div className="w-full flex justify-center my-8 sm:my-12 lg:my-16">
          {/* Outer Card Container Box */}
          <div className="w-full max-w-[1280px] rounded-[2rem] sm:rounded-[2.5rem] bg-[#0b111e] border border-white/10 p-4 sm:p-7 md:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_60px_rgba(0,255,132,0.06)] overflow-hidden transition-all duration-500">
            {/* Padded Inner Video Frame */}
            <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl flex items-center justify-center">
              <video
                src="/work/Future Fitness - Overview( Record).mp4"
                autoPlay
                muted
                playsInline
                loop
                controls={false}
                className="w-full h-auto rounded-xl sm:rounded-2xl block object-contain"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. OVERVIEW & THE RESULT SECTION (Matching Reference Image Layout) */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 space-y-8 border-t border-white/10 pt-10 sm:pt-14 px-[16px] md:px-[64px] border-0">
          <div className="max-w-[900px] space-y-6">
            <h2 className="text-[28px] sm:text-[40px] md:text-[48px] leading-[1.2] font-bold text-white tracking-tight">
              Overview
            </h2>

            <p className="text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body">
              Future Fitness approached me to create a modern digital experience that could represent their gym beyond the physical space.
            </p>

            <p className="text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body">
              I designed and developed a responsive website that brings their services, trainers, memberships, locations, and member stories together in one clear experience — helping potential members discover the gym and take the next step with confidence.
            </p>

            <div className="pt-4 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                The result
              </h3>

              <p className="text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body font-semibold">
                A responsive fitness website that brings discovery, trust, membership exploration, and enquiries into one seamless experience.
              </p>
            </div>
          </div>

          {/* Padded Showcase Card Box holding future-fitness-shop.png */}
          <div className="w-full flex justify-center pt-6 pb-4">
            <div className="w-full max-w-[1140px] rounded-[1.8rem] sm:rounded-[2.5rem] bg-[#0b111e] border border-white/10 p-3 sm:p-6 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_60px_rgba(0,255,132,0.06)] overflow-hidden transition-all duration-500">
              <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl flex items-center justify-center">
                <img
                  src="/work/future-fitness-shop.png"
                  alt="Future Fitness Digital Experience Showcase"
                  className="w-full max-h-[66vh] h-auto rounded-xl sm:rounded-2xl block object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3 — FUTURE FITNESS WEBSITE SHOWCASE (Editorial Multi-Screen Collage) */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-24 space-y-8 border-t border-white/10 pt-12 sm:pt-16 px-[16px] md:px-[64px] border-0">
          {/* Main Heading, Subheading & Body Copy */}
          <div className="max-w-[850px] space-y-4">
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] font-bold text-white tracking-tight font-sans">
              Future Fitness <span className="text-[#00ff84]">Website</span>
            </h2>
            <p className="text-xl sm:text-2xl text-neutral-400 font-light tracking-tight">
              A digital experience built to turn interest into action.
            </p>
            <div className="pt-2 space-y-4 text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body">
              <p>
                A gym website shouldn't just showcase the space — it should help people understand what they can achieve there.
              </p>
              <p>
                I designed the experience to bring together Future Fitness's training programs, trainers, memberships, locations, and success stories, giving potential members a clear path from discovering the gym to getting started.
              </p>
            </div>
          </div>

          {/* Large Multi-Screen Visual Showcase Collage Container (Matching Reference Layout) */}
          <div className="w-full flex justify-center pt-6">
            <div className="w-full max-w-[1280px] rounded-[2rem] sm:rounded-[2.5rem] bg-[#0c0f14] border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden space-y-4 sm:space-y-6">
              {/* 1. Dominant Visual: Homepage / Hero */}
              <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg">
                <img
                  src="/work/ff-hero.png"
                  alt="Future Fitness Homepage Hero"
                  className="w-full h-auto rounded-xl sm:rounded-2xl block object-contain"
                />
              </div>

              {/* 2. Supporting Visual: Services Section */}
              <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg">
                <img
                  src="/work/ff-services.png"
                  alt="Future Fitness Services Section"
                  className="w-full h-auto rounded-xl sm:rounded-2xl block object-contain"
                />
              </div>

              {/* 3. Bottom Row: Membership/Shop + Locations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg">
                  <img
                    src="/work/ff-shop.png"
                    alt="Future Fitness Shop & Memberships"
                    className="w-full h-auto rounded-xl sm:rounded-2xl block object-contain"
                  />
                </div>
                <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg">
                  <img
                    src="/work/ff-locations.png"
                    alt="Future Fitness Training Zones & Locations"
                    className="w-full h-auto rounded-xl sm:rounded-2xl block object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Prominent Pill CTA Button (Positioned Lower-Left) */}
          <div className="pt-4 flex justify-start">
            <a
              href="https://futurefitnessgymnellore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#161c18] border border-[#00ff84]/40 px-8 py-3.5 text-base sm:text-lg font-semibold text-white shadow-xl hover:bg-[#00ff84] hover:text-black transition-all duration-300 group"
            >
              <span>Visit Website</span>
              <ArrowUpRight size={20} className="text-[#00ff84] group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE WEB APP SECTION (Matching Reference Card Showcase Layout) */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-24 space-y-8 border-t border-white/10 pt-12 sm:pt-16 px-[16px] md:px-[64px] border-0">
          {/* Main Heading, Subheading & Body Copy */}
          <div className="max-w-[850px] space-y-4">
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] font-bold text-white tracking-tight font-sans">
              Responsive Web App
            </h2>
            <p className="text-xl sm:text-2xl text-neutral-400 font-light tracking-tight">
              Built to feel just as seamless on every screen.
            </p>
            <div className="pt-2 space-y-4 text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body">
              <p>
                The experience needed to work beyond the desktop. I designed the website to adapt across screen sizes while keeping the core visual identity, content hierarchy, and key actions consistent.
              </p>
              <p>
                From exploring training programs to checking memberships and finding a location, the experience remains simple and accessible whether someone visits from a desktop or mobile device.
              </p>
            </div>
          </div>

          {/* Auto-switching 4s Desktop Showcase Carousel Slider */}
          <DesktopResponsiveShowcase />

          {/* 3 Mobile Frames Auto-switching Carousel (Matching Reference Image 1) */}
          <MobileResponsiveShowcase
            sets={[
              {
                id: 1,
                title: 'Onboarding & Exploration',
                screens: [
                  { src: '/work/ff-mobile-hero.png', alt: 'Future Fitness Mobile Hero', title: 'Hero Experience' },
                  { src: '/work/ff-mobile-trainers.png', alt: 'Future Fitness Mobile Trainers', title: 'Our Trainers' },
                  { src: '/work/ff-mobile-shop.png', alt: 'Future Fitness Mobile Shop', title: 'Fitness Shop' }
                ]
              },
              {
                id: 2,
                title: 'Locations & Member Portal',
                screens: [
                  { src: '/work/ff-mobile-connect.png', alt: 'Future Fitness Mobile Contact Form', title: 'Contact & Booking' },
                  { src: '/work/ff-mobile-expert-trainers.png', alt: 'Future Fitness Mobile Expert Trainers Stats', title: 'Trainer Metrics' },
                  { src: '/work/ff-mobile-shop-categories.png', alt: 'Future Fitness Mobile Shop Categories', title: 'Shop Categories' }
                ]
              }
            ]}
          />
        </div>

        {/* ========================================================================= */}
        {/* PROJECT CONCLUSION SECTION (Portfolio Typography & Layout) */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-24 space-y-8 border-t border-white/10 pt-12 sm:pt-16 pb-16 px-[16px] md:px-[64px] border-0">
          <div className="max-w-[850px] space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00ff84]">Project Conclusion</span>
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] font-bold text-white tracking-tight font-sans">
              Launch Live <span className="text-[#00ff84]">Website</span>
            </h2>
            <div className="pt-2 space-y-4 text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body">
              <p>
                Explore the live digital website for Future Fitness Gym in Nellore to see the high-performance design, responsive layouts, and conversion architecture in action.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href="https://futurefitnessgymnellore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#161c18] border border-[#00ff84]/40 px-8 py-3.5 text-base sm:text-lg font-semibold text-white shadow-xl hover:bg-[#00ff84] hover:text-black transition-all duration-300 group"
            >
              <span>Launch Live Website</span>
              <ArrowUpRight size={20} className="text-[#00ff84] group-hover:text-black transition-colors" />
            </a>
            <button
              onClick={() => onSelectProject(projects[0])}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-base sm:text-lg font-semibold text-white hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              <span>Next Project</span>
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Related Projects at the bottom */}
        <RelatedProjects currentProject={project} onSelectProject={onSelectProject} />
      </div>
    </div>
  )
}

function ResearchShowcaseSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: '01',
      tag: '01 — Athlete Persona',
      title: 'Evangeline Bhuvana — National Level Athlete',
      subtitle: '200m Dash (PB: 26.56s) • Bengaluru',
      type: 'Athlete Profile & Pain Points',
      image: '/work/athlete-interview-card.png',
      quote: '"60% of performance comes from diet, recovery and consistency - not just training."',
      badgeText: 'National Athlete Interview',
      detailText: 'In-depth 1-on-1 interview revealing daily training records, recovery routines, and scheduling friction.'
    },
    {
      id: '02',
      tag: '02 — Interview Questions',
      title: 'Actual Questions Prepared',
      subtitle: 'Semi-Structured Field Research Guide',
      type: 'Question Framework & Methodology',
      quote: '1. How do you currently receive match schedule updates?\n2. Where do you log daily soreness & injury notes?\n3. What happens when a field venue changes last-minute?',
      badgeText: 'Field Research Framework',
      detailText: 'Structured 12-question interview guide utilized across 120+ field study sessions.'
    },
    {
      id: '03',
      tag: '03 — Real Conversation',
      title: 'Audio Transcript (18:32)',
      subtitle: 'Live Recording Session Notes',
      type: 'Real Athlete & Coach Voice',
      quote: '"So many athletes are managing everything on 3 different spreadsheets, WhatsApp groups, and paper notebooks. It creates total chaos before big tournaments."',
      badgeText: 'Audio Record • 18:32',
      detailText: 'Verified voice recording quote highlighting communication breakdown during multi-team tournaments.'
    }
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className='mt-14 sm:mt-24 space-y-10 sm:space-y-12 border-t border-white/10 pt-10 sm:pt-16 px-[16px] md:px-[64px] border-0'>
      {/* 03 - RESEARCH Header */}
      <div className='max-w-[850px] space-y-4'>
        <span className='inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#15a854] bg-[#15a854]/10 border border-[#15a854]/30 px-3.5 py-1.5 rounded-full'>
          03 — RESEARCH
        </span>
        <h2 className='text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight'>
          Understanding the people<br className='hidden sm:inline' /> behind the problem
        </h2>
        <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body pt-2'>
          Research helped me move beyond assumptions and understand how athletes, coaches, and tournament directors actually handle information day-to-day.
        </p>
        <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/85 text-e2e-body'>
          I conducted one-to-one interviews with competitive athletes, head coaches, and regional tournament officials to map real-world friction.
        </p>
      </div>

      {/* Down Arrow Indicator */}
      <div className='flex justify-center my-4 sm:my-6'>
        <span className='text-2xl text-[#15a854] animate-bounce font-mono'>↓</span>
      </div>

      {/* What I wanted to understand Subheading & 2x2 Grid */}
      <div className='space-y-6'>
        <h3 className='text-2xl sm:text-3xl font-bold text-white tracking-tight'>
          What I wanted to understand
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
          {[
            { num: '01', title: 'Training & progress', desc: 'How athletes log workout reps, sprint PRs, and daily training milestones.' },
            { num: '02', title: 'Competition updates', desc: 'How match draw brackets, court times, and last-minute changes reach teams.' },
            { num: '03', title: 'Competition readiness', desc: 'How coaches evaluate team health, active rosters, and starting lineups.' },
            { num: '04', title: 'Recovery & fatigue', desc: 'How player injuries, soreness levels, and medical clearances are tracked.' }
          ].map((item) => (
            <div key={item.num} className='rounded-2xl border border-white/10 bg-[#0c1512] p-5 sm:p-6 space-y-3 relative overflow-hidden group hover:border-[#15a854]/40 transition-all'>
              <span className='text-xs font-mono font-bold text-[#15a854] block'>{item.num}</span>
              <h4 className='text-lg font-bold text-[#dfe5eb]'>{item.title}</h4>
              <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-neutral-300 text-e2e-body'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className='flex justify-center my-4 sm:my-6'>
        <span className='text-2xl text-[#15a854] animate-bounce font-mono'>↓</span>
      </div>

      {/* Interactive Research Showcase Container (Matching attached mobile screenshot layout!) */}
      <div className='rounded-[2rem] sm:rounded-[2.5rem] bg-[#09120e] border border-white/10 p-4 sm:p-8 lg:p-12 shadow-2xl relative space-y-6 sm:space-y-8 max-w-[1000px] mx-auto'>
        {/* Top Centered Green Label */}
        <div className='text-center'>
          <span className='inline-block font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15a854]'>
            USER RESEARCH
          </span>
        </div>

        {/* Central Mockup Viewer with Arrow Controls */}
        <div className='relative flex items-center justify-center py-2 sm:py-4 px-1 sm:px-10'>
          {/* Left Arrow Button */}
          <button
            type='button'
            onClick={prevSlide}
            aria-label='Previous slide'
            className='absolute -left-2 sm:left-1 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#15a854] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-xl backdrop-blur-md'
          >
            <ArrowLeft size={18} />
          </button>

          {/* Active Card Frame (Pure Image Showcase matching reference screenshot layout) */}
          <div className='w-full max-w-[780px] rounded-2xl border border-white/15 bg-[#050b08] p-2 sm:p-4 shadow-2xl transition-all duration-300 mx-6 sm:mx-0 overflow-hidden flex justify-center items-center'>
            {slides[currentSlide].image ? (
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className='w-full h-auto max-h-[550px] object-contain rounded-xl shadow-2xl transition-transform duration-300'
              />
            ) : (
              <div className='w-full p-6 sm:p-8 space-y-4 text-center'>
                <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal italic text-[#e3f5ea] text-e2e-body whitespace-pre-line'>
                  {slides[currentSlide].quote}
                </p>
              </div>
            )}
          </div>

          {/* Right Arrow Button */}
          <button
            type='button'
            onClick={nextSlide}
            aria-label='Next slide'
            className='absolute -right-2 sm:right-1 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#15a854] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-xl backdrop-blur-md'
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Bottom Pagination Dots (Matching screenshot) */}
        <div className='flex justify-center items-center gap-2 pt-1 sm:pt-2'>
          {slides.map((_, idx) => (
            <button
              key={idx}
              type='button'
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 sm:h-2.5 rounded-full transition-all ${
                currentSlide === idx ? 'w-6 sm:w-8 bg-[#15a854]' : 'w-2 sm:w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Bottom Caption (Matching Onboarding Screens caption in screenshot) */}
        <div className='text-center pt-2 border-t border-white/5'>
          <p className='text-xs sm:text-sm font-mono text-neutral-400'>
            One-to-one interviews with athletes, coaches, and organisers
          </p>
        </div>
      </div>

      {/* Summary Line */}
      <div className='text-center max-w-[700px] mx-auto space-y-4 pt-2 sm:pt-4'>
        <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body'>
          The conversations revealed a few recurring patterns.
        </p>
      </div>

      {/* Down Arrow Indicator */}
      <div className='flex justify-center my-4 sm:my-6'>
        <span className='text-2xl text-[#15a854] animate-bounce font-mono'>↓</span>
      </div>

      {/* 04 - INSIGHT Header */}
      <div className='max-w-[850px] space-y-3 pt-2 sm:pt-4'>
        <span className='inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#15a854] bg-[#15a854]/10 border border-[#15a854]/30 px-3.5 py-1.5 rounded-full'>
          04 — INSIGHT
        </span>
        <h2 className='text-3xl sm:text-4xl font-bold text-white tracking-tight'>
          What I heard
        </h2>
      </div>
    </div>
  )
}

function EndToEndProductDesignSuite() {
  const [activeStage, setActiveStage] = useState<'research' | 'ideation' | 'ui' | 'workflows'>('research')
  const [selectedPersona, setSelectedPersona] = useState<number>(0)
  const [activeRole, setActiveRole] = useState<'admin' | 'coach' | 'athlete' | 'official'>('admin')
  const [selectedFeature, setSelectedFeature] = useState<number>(0)
  const [activeCanvasView, setActiveCanvasView] = useState<'dashboard' | 'tournaments' | 'roster' | 'analytics'>('dashboard')

  const stages = [
    { id: 'research', label: '01. User Research', icon: Search, tag: 'Discovery & Personas' },
    { id: 'ideation', label: '02. Feature Ideation', icon: Lightbulb, tag: 'RICE Prioritization' },
    { id: 'ui', label: '03. UI & Design System', icon: Palette, tag: 'Tokens & Sandbox' },
    { id: 'workflows', label: '04. Role-Based Workflows', icon: Layers, tag: 'Role Switcher' }
  ] as const

  const personas = [
    {
      title: 'Head Athletic Coach',
      name: 'Coach Marcus Vance',
      role: 'Head of Athletics (Track & Field)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      quote: 'I used to spend 3 hours every Sunday compiling paper rosters and WhatsApp RSVPs. I need instant 1-tap attendance and health logs.',
      goals: ['Instant attendance tracking', 'Real-time injury reporting', 'Automated practice change notifications'],
      frustrations: ['Paper spreadsheet clutter', 'Last-minute schedule changes lost in chats', 'No historical athlete PR trends'],
      keyMetrics: ['45 Athletes Managed', '12 Weekly Sessions', '98% Attendance Log Accuracy']
    },
    {
      title: 'Sports Director / Admin',
      name: 'Director Elena Rostova',
      role: 'District Sports Administrator',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      quote: 'Managing 14 schools across 8 sports requires strict role permissions, budget transparency, and centralized venue booking.',
      goals: ['Unified multi-sport tournament calendar', 'Role-based access security', 'Instant venue booking conflict alerts'],
      frustrations: ['Overlapping field reservations', 'Unverified scores submitted by email', 'Compliance audit headaches'],
      keyMetrics: ['14 Regional Schools', '8 Active Sports', '120+ Monthly Tournaments']
    },
    {
      title: 'Student Athlete',
      name: 'Jordan Chen',
      role: 'Varsity Basketball Captain',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      quote: 'I want to see my personal records, team game times, and trainer notes right on my phone without asking my coach daily.',
      goals: ['Personal performance timeline', 'Instant practice change alerts', 'Digital player ID & health pass'],
      frustrations: ['Missing game updates buried in chats', 'No central place to view individual PR metrics'],
      keyMetrics: ['24.2 PPG Avg', '15 Matches Played', '100% Attendance Rate']
    },
    {
      title: 'Tournament Official / Referee',
      name: 'David K. Miller',
      role: 'Senior Regional Referee',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote: 'Submitting live scores and foul records needs to be foolproof from a tablet right at the court sidelines.',
      goals: ['Offline-ready score logging', 'One-tap foul & penalty input', 'Instant bracket progression sync'],
      frustrations: ['Paper scorecards damaged on field', 'Disputed match final scores due to manual typos'],
      keyMetrics: ['32 Matches Officiated', '100% Score Accuracy', '< 30s Bracket Sync']
    }
  ]

  const riceFeatures = [
    {
      name: 'Multi-Role Access Control (RBAC)',
      reach: 10, impact: 9, confidence: 95, effort: 3, riceScore: 95.0,
      status: 'Phase 1 Core',
      desc: 'Role-customized security permissions preventing unauthorized score editing while empowering coaches with real-time roster control.',
      userStory: 'As an Administrator, I want granular role permissions so that referees log match scores without accessing financial records.'
    },
    {
      name: 'Automated Tournament Bracket Engine',
      reach: 9, impact: 9, confidence: 90, effort: 4, riceScore: 91.1,
      status: 'Phase 1 Core',
      desc: 'Algorithmic single/double elimination and round-robin generator with automated facility court allocation.',
      userStory: 'As an Event Coordinator, I want automated bracket creation to eliminate 6 hours of manual seed draw preparation.'
    },
    {
      name: 'Real-Time Scoreboard & Live Sync',
      reach: 10, impact: 8, confidence: 90, effort: 3, riceScore: 88.0,
      status: 'Phase 1 Core',
      desc: 'Sideline tablet scorekeeper console broadcasting updates instantly to spectator web apps and live event screens.',
      userStory: 'As a Referee, I want offline score recording so match statistics sync automatically when wireless connectivity restores.'
    },
    {
      name: 'Athlete Performance & Medical Diagnostics',
      reach: 8, impact: 8, confidence: 85, effort: 4, riceScore: 84.5,
      status: 'Phase 2 Live',
      desc: 'Biometric tracking, sprint velocity trends, injury recovery tracking, and encrypted medical clearance release forms.',
      userStory: 'As a Head Coach, I want visual fatigue trends so I can adjust practice intensity and prevent player overtraining.'
    }
  ]

  const roleWorkflows = {
    admin: {
      roleTitle: 'Sports Administrator Workflow',
      badge: 'Level 4 System Access',
      tagline: 'High-level operational oversight, institutional reporting, and global tournament governance.',
      metrics: [
        { label: 'Total Sports Programs', value: '14 Active' },
        { label: 'Registered Athletes', value: '2,480' },
        { label: 'Venue Utilization', value: '94.2%' },
        { label: 'System Health', value: '100% Operational' }
      ],
      permissions: [
        { action: 'Create & Publish Tournaments', allowed: true },
        { action: 'Manage User Roles & Access Keys', allowed: true },
        { action: 'Override Referee Scores', allowed: true },
        { action: 'Direct Player Roster Editing', allowed: false }
      ],
      flowSteps: [
        { title: '1. Season Architecture', detail: 'Defines season dates, facility availability, and assigns Head Coaches to sports programs.' },
        { title: '2. Access Authorization', detail: 'Issues secure role keys to officials, coaches, and medical response teams.' },
        { title: '3. Analytics Oversight', detail: 'Monitors district participation metrics, venue density, and compliance reports.' }
      ],
      previewHeadline: 'Admin Operations Tower',
      previewContent: 'Global Multi-Sport Dashboard with Facility Conflict Detection & Compliance Auditing'
    },
    coach: {
      roleTitle: 'Head Coach Workflow',
      badge: 'Team Operations Focus',
      tagline: 'Roster curation, tactical practice planning, attendance tracking, and athlete readiness analytics.',
      metrics: [
        { label: 'Active Roster Size', value: '38 Athletes' },
        { label: 'Avg Attendance', value: '96.8%' },
        { label: 'Upcoming Matches', value: '3 This Week' },
        { label: 'Ready for Play', value: '35 / 38' }
      ],
      permissions: [
        { action: 'Create & Publish Tournaments', allowed: false },
        { action: 'Manage Team Roster & Lineups', allowed: true },
        { action: 'Log Daily Attendance & Drills', allowed: true },
        { action: 'Submit Player Medical Logs', allowed: true }
      ],
      flowSteps: [
        { title: '1. Rapid Attendance Check', detail: 'Opens team mobile app, scans athlete QR codes for instant 1-tap attendance logging.' },
        { title: '2. Lineup Optimization', detail: 'Drags and drops starting lineups based on weekly sprint performance and fatigue scores.' },
        { title: '3. Post-Match Roster Review', detail: 'Reviews game statistics, flags injured players for trainer evaluation, and sends team notifications.' }
      ],
      previewHeadline: 'Coach Operations Portal',
      previewContent: 'Live Roster Matrix, Readiness Indicators & Tactical Drill Builder'
    },
    athlete: {
      roleTitle: 'Student Athlete Workflow',
      badge: 'Personal Growth & Schedule',
      tagline: 'Personalized schedule timeline, performance milestone tracking, and direct team announcements.',
      metrics: [
        { label: 'Personal PR Record', value: '10.84s (100m)' },
        { label: 'Season Points', value: '184 Total' },
        { label: 'Next Match in', value: '18h 42m' },
        { label: 'Health Clearance', value: 'Verified' }
      ],
      permissions: [
        { action: 'View Personal Stats & Schedule', allowed: true },
        { action: 'RSVP to Practice & Matches', allowed: true },
        { action: 'Modify Game Scores', allowed: false },
        { action: 'View Other Athletes Medical Logs', allowed: false }
      ],
      flowSteps: [
        { title: '1. Daily Practice Check', detail: 'Receives automated push notification with practice location and required team gear.' },
        { title: '2. Performance Logging', detail: 'Logs personal workout reps, hydration index, and post-session soreness ratings.' },
        { title: '3. Game Day Hub', detail: 'Accesses digital player pass, live tournament bracket position, and team bus schedule.' }
      ],
      previewHeadline: 'Athlete Personal Hub',
      previewContent: 'Performance Timeline, Practice RSVP & Digital Player ID Card'
    },
    official: {
      roleTitle: 'Tournament Official Workflow',
      badge: 'Live Scoring & Fair Play',
      tagline: 'Sideline rapid score recording, penalty logging, official timekeeper controls, and match verification.',
      metrics: [
        { label: 'Assigned Match', value: 'Court #3 (Finals)' },
        { label: 'Match Clock', value: '14:22 Q3' },
        { label: 'Fouls Recorded', value: '12 Total' },
        { label: 'Sync Status', value: 'Live Offline-Ready' }
      ],
      permissions: [
        { action: 'Enter & Verify Match Scores', allowed: true },
        { action: 'Log Fouls & Disqualifications', allowed: true },
        { action: 'Sign Off Match Transcript', allowed: true },
        { action: 'Edit Team Roster Names', allowed: false }
      ],
      flowSteps: [
        { title: '1. Sideline Tablet Lock', detail: 'Locks tablet into High-Contrast Sideline Mode with large tap targets for glare visibility.' },
        { title: '2. Real-Time Score Input', detail: 'Taps team points or foul buttons; system updates digital scoreboard with <0.5s latency.' },
        { title: '3. Official Verification', detail: 'Captures digital signature after full time; bracket advances winning team automatically.' }
      ],
      previewHeadline: 'Official Sideline Terminal',
      previewContent: 'High-Contrast Scorekeeper Console & Digital Signature Verification'
    }
  }

  return (
    <div className='mt-16 space-y-12 border-t border-white/10 pt-12'>
      {/* Header Banner */}
      <div className='rounded-3xl border border-white/10 bg-[#0f1715]/80 p-8 lg:p-10 backdrop-blur-xl shadow-2xl'>
        <div className='flex flex-wrap items-center justify-between gap-6'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full border border-[#69d483]/30 bg-[#69d483]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#69d483]'>
              <Sparkles size={14} /> End-to-End Product Design Suite
            </span>
            <h2 className='mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white'>
              Interactive Product Architecture
            </h2>
          </div>
          {/* Typography Spec Badge */}
          <div className='rounded-2xl border border-white/10 bg-[#0a0d10] px-5 py-3 text-xs text-neutral-300'>
            <div className='font-mono text-[#69d483] font-semibold mb-1'>Typography Spec Enforced:</div>
            <div className='font-mono text-white/80'>font-size: <span className='text-white font-bold'>19px</span> | line-height: <span className='text-white font-bold'>30.7px</span> | letter-spacing: <span className='text-white font-bold'>0px</span></div>
          </div>
        </div>

        <p className='mt-6 max-w-[900px] text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/85 text-e2e-body'>
          End-to-end product design — from user research and feature ideation to UI design and role-based workflows. Explore each phase below to see how discovery insights directly influenced our design system primitives and multi-role permission architecture.
        </p>

        {/* 4-Stage Switcher Tabs */}
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
          {stages.map((stage) => {
            const Icon = stage.icon
            const isActive = activeStage === stage.id
            return (
              <button
                key={stage.id}
                type='button'
                onClick={() => setActiveStage(stage.id as any)}
                className={`group relative flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isActive
                    ? 'border-[#69d483] bg-[#69d483]/10 shadow-[0_0_25px_rgba(105,212,131,0.2)]'
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className='flex items-center justify-between w-full'>
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                    isActive ? 'bg-[#69d483] text-[#0a0d10]' : 'bg-white/10 text-white group-hover:bg-white/20'
                  }`}>
                    <Icon size={18} />
                  </span>
                  <span className={`text-[11px] font-mono uppercase tracking-wider ${
                    isActive ? 'text-[#69d483]' : 'text-neutral-400'
                  }`}>
                    {stage.tag}
                  </span>
                </div>
                <p className={`mt-3 text-sm font-semibold ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                  {stage.label}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Stage 1: User Research */}
      {activeStage === 'research' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className='space-y-10'
        >
          {/* Research Impact Numbers */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { label: 'Field Interviews', val: '120+', detail: 'Across 14 regional sports academies & schools' },
              { label: 'Admin Time Saved', val: '84%', detail: 'Reduction in scheduling conflicts & paperwork' },
              { label: 'Score Sync Latency', val: '< 0.5s', detail: 'Real-time sideline update speed' },
              { label: 'User Satisfaction', val: '4.9 / 5', detail: 'Rated by coaches and tournament referees' }
            ].map((stat, idx) => (
              <div key={idx} className='rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md'>
                <p className='text-3xl font-bold text-[#69d483] font-mono'>{stat.val}</p>
                <p className='mt-2 text-sm font-semibold text-white'>{stat.label}</p>
                <p className='mt-2 text-[19px] leading-[30.7px] tracking-[0px] font-normal text-neutral-400 text-e2e-body'>
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          {/* User Persona Selector */}
          <div className='rounded-3xl border border-white/10 bg-[#0c1512] p-8 lg:p-10'>
            <div className='flex items-center justify-between mb-8'>
              <div>
                <span className='font-mono text-xs text-[#69d483] uppercase tracking-widest'>User Discovery</span>
                <h3 className='text-2xl sm:text-3xl font-bold text-white mt-1'>User Personas & Pain Point Mapping</h3>
              </div>
              <p className='text-xs font-mono text-neutral-400 hidden sm:block'>Select a persona to view discovery insights</p>
            </div>

            {/* Persona Selector Buttons */}
            <div className='flex flex-wrap gap-3 mb-8'>
              {personas.map((p, idx) => (
                <button
                  key={idx}
                  type='button'
                  onClick={() => setSelectedPersona(idx)}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-full border text-xs font-medium transition-all ${
                    selectedPersona === idx
                      ? 'border-[#69d483] bg-[#69d483] text-black font-semibold shadow-[0_0_15px_rgba(105,212,131,0.3)]'
                      : 'border-white/15 bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  <img src={p.avatar} alt={p.name} className='w-6 h-6 rounded-full object-cover border border-white/20' />
                  {p.title}
                </button>
              ))}
            </div>

            {/* Selected Persona Card */}
            {(() => {
              const p = personas[selectedPersona]
              return (
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-2xl border border-white/10 bg-black/60 p-6 lg:p-8'>
                  <div className='lg:col-span-4 space-y-4 text-center sm:text-left'>
                    <div className='relative inline-block'>
                      <img src={p.avatar} alt={p.name} className='w-24 h-24 rounded-2xl object-cover border-2 border-[#69d483]/50 shadow-xl' />
                      <span className='absolute -bottom-2 -right-2 bg-[#69d483] text-black p-1.5 rounded-xl text-xs'>
                        <UserCheck size={14} />
                      </span>
                    </div>
                    <div>
                      <h4 className='text-xl font-bold text-white'>{p.name}</h4>
                      <p className='text-xs font-mono text-[#69d483] mt-1'>{p.role}</p>
                    </div>

                    <div className='border-t border-white/10 pt-4 space-y-2'>
                      <p className='text-xs uppercase font-mono text-neutral-400 tracking-wider'>Key Metrics</p>
                      {p.keyMetrics.map((km, i) => (
                        <div key={i} className='flex items-center gap-2 text-xs text-neutral-200'>
                          <CheckCircle size={14} className='text-[#69d483]' /> {km}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='lg:col-span-8 space-y-6'>
                    {/* Persona Rationale Quote */}
                    <div className='rounded-2xl border border-[#69d483]/20 bg-[#69d483]/5 p-6 relative'>
                      <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal italic text-[#e6f4ea] text-e2e-body'>
                        "{p.quote}"
                      </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                      {/* Core Goals */}
                      <div className='rounded-xl border border-white/10 bg-white/5 p-5 space-y-3'>
                        <p className='text-xs font-mono uppercase tracking-wider text-[#69d483] font-semibold flex items-center gap-2'>
                          <Target size={14} /> User Goals
                        </p>
                        <ul className='space-y-2'>
                          {p.goals.map((g, i) => (
                            <li key={i} className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body flex items-start gap-2'>
                              <span className='text-[#69d483] mt-1'>•</span> {g}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Frustrations */}
                      <div className='rounded-xl border border-white/10 bg-white/5 p-5 space-y-3'>
                        <p className='text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-2'>
                          <XCircle size={14} /> Critical Frustrations
                        </p>
                        <ul className='space-y-2'>
                          {p.frustrations.map((f, i) => (
                            <li key={i} className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body flex items-start gap-2'>
                              <span className='text-rose-400 mt-1'>•</span> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </motion.div>
      )}

      {/* Stage 2: Feature Ideation & RICE Matrix */}
      {activeStage === 'ideation' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className='space-y-10'
        >
          <div className='rounded-3xl border border-white/10 bg-[#0c1512] p-8 lg:p-10'>
            <div className='flex flex-wrap items-center justify-between gap-4 mb-8'>
              <div>
                <span className='font-mono text-xs text-[#69d483] uppercase tracking-widest'>Ideation & Roadmap</span>
                <h3 className='text-2xl sm:text-3xl font-bold text-white mt-1'>RICE Prioritization Matrix</h3>
              </div>
              <span className='text-xs font-mono text-neutral-400 border border-white/10 bg-white/5 px-4 py-2 rounded-full'>
                RICE Score = (Reach × Impact × Confidence) / Effort
              </span>
            </div>

            {/* RICE Matrix Table */}
            <div className='overflow-x-auto rounded-2xl border border-white/10 bg-black/60'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='border-b border-white/10 bg-white/5 font-mono text-xs text-neutral-400 uppercase tracking-wider'>
                    <th className='py-4 px-6'>Feature Module</th>
                    <th className='py-4 px-3 text-center'>Reach (1-10)</th>
                    <th className='py-4 px-3 text-center'>Impact (1-10)</th>
                    <th className='py-4 px-3 text-center'>Confidence %</th>
                    <th className='py-4 px-3 text-center'>Effort (1-5)</th>
                    <th className='py-4 px-4 text-center text-[#69d483]'>RICE Score</th>
                    <th className='py-4 px-6 text-right'>Status</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/5 text-sm'>
                  {riceFeatures.map((f, idx) => (
                    <tr
                      key={idx}
                      onClick={() => setSelectedFeature(idx)}
                      className={`cursor-pointer transition-colors hover:bg-white/5 ${
                        selectedFeature === idx ? 'bg-[#69d483]/10' : ''
                      }`}
                    >
                      <td className='py-4 px-6 font-semibold text-white flex items-center gap-3'>
                        <span className={`w-2 h-2 rounded-full ${selectedFeature === idx ? 'bg-[#69d483]' : 'bg-neutral-600'}`} />
                        {f.name}
                      </td>
                      <td className='py-4 px-3 text-center font-mono text-neutral-300'>{f.reach}</td>
                      <td className='py-4 px-3 text-center font-mono text-neutral-300'>{f.impact}</td>
                      <td className='py-4 px-3 text-center font-mono text-neutral-300'>{f.confidence}%</td>
                      <td className='py-4 px-3 text-center font-mono text-neutral-300'>{f.effort}</td>
                      <td className='py-4 px-4 text-center font-mono font-bold text-[#69d483] text-base'>{f.riceScore}</td>
                      <td className='py-4 px-6 text-right'>
                        <span className='inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-neutral-200 border border-white/10'>
                          {f.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Active Feature Detail Rationale */}
            {(() => {
              const feat = riceFeatures[selectedFeature]
              return (
                <div className='mt-8 rounded-2xl border border-white/10 bg-black/40 p-6 lg:p-8 space-y-4'>
                  <div className='flex items-center justify-between'>
                    <h4 className='text-xl font-bold text-white flex items-center gap-3'>
                      <Zap className='text-[#69d483]' size={20} /> {feat.name} Rationale
                    </h4>
                    <span className='text-xs font-mono text-[#69d483] bg-[#69d483]/10 border border-[#69d483]/30 px-3 py-1 rounded-full'>
                      Selected Feature
                    </span>
                  </div>

                  <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body'>
                    {feat.desc}
                  </p>

                  <div className='rounded-xl border border-white/10 bg-white/5 p-4 mt-3'>
                    <span className='text-xs font-mono uppercase text-neutral-400 tracking-wider font-semibold block mb-2'>User Story Specification</span>
                    <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-emerald-200 italic text-e2e-body'>
                      "{feat.userStory}"
                    </p>
                  </div>
                </div>
              )
            })()}
          </div>
        </motion.div>
      )}

      {/* Stage 3: UI & Design System */}
      {activeStage === 'ui' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className='space-y-10'
        >
          {/* Design System Primitives */}
          <div className='rounded-3xl border border-white/10 bg-[#0c1512] p-8 lg:p-10 space-y-10'>
            <div>
              <span className='font-mono text-xs text-[#69d483] uppercase tracking-widest'>Design System Tokens</span>
              <h3 className='text-2xl sm:text-3xl font-bold text-white mt-1'>Color Palette & Typography Engine</h3>
            </div>

            {/* Colors */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                { name: 'Emerald Prime', hex: '#69D483', role: 'Primary Accent & Key Actions', bg: 'bg-[#69d483]', text: 'text-black' },
                { name: 'Obsidian Pitch', hex: '#0A0D10', role: 'Dark Surface & Canvas BG', bg: 'bg-[#0a0d10]', text: 'text-white border border-white/20' },
                { name: 'Ice Silver', hex: '#DFE5EB', role: 'Primary Headings & Text', bg: 'bg-[#dfe5eb]', text: 'text-black' },
                { name: 'Slate Subdued', hex: '#8A92A0', role: 'Secondary Metadata & Borders', bg: 'bg-[#8a92a0]', text: 'text-black' }
              ].map((c, idx) => (
                <div key={idx} className='rounded-2xl border border-white/10 bg-black/60 p-5 space-y-3'>
                  <div className={`h-20 w-full rounded-xl ${c.bg} flex items-end p-3 font-mono text-xs font-bold ${c.text}`}>
                    {c.hex}
                  </div>
                  <div>
                    <p className='text-base font-bold text-white'>{c.name}</p>
                    <p className='text-xs text-neutral-400 mt-1'>{c.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Typography Spec Box */}
            <div className='rounded-2xl border border-[#69d483]/30 bg-[#69d483]/5 p-6 lg:p-8 space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='font-mono text-xs uppercase tracking-widest text-[#69d483] font-bold'>Typography System Rule</span>
                <span className='text-xs font-mono text-neutral-400'>CSS Standard: .text-e2e-body</span>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm border-y border-white/10 py-4'>
                <div><span className='text-neutral-400'>Font Size:</span> <span className='text-white font-bold text-base'>19px</span></div>
                <div><span className='text-neutral-400'>Line Height:</span> <span className='text-white font-bold text-base'>30.7px</span></div>
                <div><span className='text-neutral-400'>Letter Spacing:</span> <span className='text-white font-bold text-base'>0px</span></div>
              </div>
              <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body'>
                "This explicit typography standard guarantees high legibility across dark interfaces, ensuring long-form case study content, role descriptions, and research notes are rendered with optimal vertical rhythm and zero letter distortion."
              </p>
            </div>

            {/* Live Interactive UI Prototype Preview */}
            <div className='rounded-2xl border border-white/15 bg-[#0a0d10] p-6 lg:p-8 space-y-6'>
              <div className='flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4'>
                <div className='flex items-center gap-3'>
                  <span className='w-3 h-3 rounded-full bg-[#ff5f56]' />
                  <span className='w-3 h-3 rounded-full bg-[#ffbd2e]' />
                  <span className='w-3 h-3 rounded-full bg-[#27c93f]' />
                  <span className='text-xs font-mono text-neutral-400 ml-2'>Sports ERP Live UI Sandbox</span>
                </div>
                <div className='flex items-center gap-2'>
                  {(['dashboard', 'tournaments', 'roster', 'analytics'] as const).map((v) => (
                    <button
                      key={v}
                      type='button'
                      onClick={() => setActiveCanvasView(v)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono capitalize transition-all ${
                        activeCanvasView === v
                          ? 'bg-[#69d483] text-black font-bold'
                          : 'bg-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sandbox View Content */}
              <div className='bg-[#05080a] rounded-xl p-6 border border-white/5 space-y-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='text-xl font-bold text-white capitalize'>{activeCanvasView} Overview</h5>
                    <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-neutral-400 text-e2e-body mt-1'>
                      Live preview of sports organization data rendered through our design system primitives.
                    </p>
                  </div>
                  <span className='px-3 py-1 rounded-full bg-[#69d483]/10 text-[#69d483] font-mono text-xs border border-[#69d483]/30'>
                    Live State
                  </span>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                  <div className='bg-white/5 p-4 rounded-xl border border-white/10'>
                    <span className='text-xs text-neutral-400 block'>Active Competitions</span>
                    <span className='text-2xl font-bold text-white font-mono mt-1 block'>28 Leagues</span>
                  </div>
                  <div className='bg-white/5 p-4 rounded-xl border border-white/10'>
                    <span className='text-xs text-neutral-400 block'>System Sync Latency</span>
                    <span className='text-2xl font-bold text-[#69d483] font-mono mt-1 block'>14ms</span>
                  </div>
                  <div className='bg-white/5 p-4 rounded-xl border border-white/10'>
                    <span className='text-xs text-neutral-400 block'>Role Auth Tokens</span>
                    <span className='text-2xl font-bold text-emerald-300 font-mono mt-1 block'>100% Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Stage 4: Role-Based Workflows */}
      {activeStage === 'workflows' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className='space-y-10'
        >
          <div className='rounded-3xl border border-white/10 bg-[#0c1512] p-8 lg:p-10 space-y-8'>
            <div>
              <span className='font-mono text-xs text-[#69d483] uppercase tracking-widest'>Role-Based Architecture</span>
              <h3 className='text-2xl sm:text-3xl font-bold text-white mt-1'>Interactive Role Switcher Simulator</h3>
              <p className='mt-2 text-[19px] leading-[30.7px] tracking-[0px] font-normal text-neutral-300 text-e2e-body'>
                Sports ERP tailors interface views, actions, and security permissions dynamically based on the active user role.
              </p>
            </div>

            {/* Role Switcher Tabs */}
            <div className='flex flex-wrap gap-3'>
              {[
                { id: 'admin', label: 'Sports Administrator', icon: ShieldCheck },
                { id: 'coach', label: 'Head Coach', icon: Users },
                { id: 'athlete', label: 'Student Athlete', icon: Activity },
                { id: 'official', label: 'Tournament Official', icon: Award }
              ].map((r) => {
                const Icon = r.icon
                const isSelected = activeRole === r.id
                return (
                  <button
                    key={r.id}
                    type='button'
                    onClick={() => setActiveRole(r.id as any)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl border text-sm font-semibold transition-all ${
                      isSelected
                        ? 'border-[#69d483] bg-[#69d483] text-black shadow-[0_0_20px_rgba(105,212,131,0.3)]'
                        : 'border-white/15 bg-white/5 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <Icon size={18} />
                    {r.label}
                  </button>
                )
              })}
            </div>

            {/* Role Simulator Display */}
            {(() => {
              const rw = roleWorkflows[activeRole]
              return (
                <div className='space-y-8 rounded-2xl border border-white/10 bg-black/60 p-6 lg:p-8'>
                  <div className='flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6'>
                    <div>
                      <span className='px-3 py-1 rounded-full text-xs font-mono bg-[#69d483]/10 text-[#69d483] border border-[#69d483]/30'>
                        {rw.badge}
                      </span>
                      <h4 className='text-2xl font-bold text-white mt-2'>{rw.roleTitle}</h4>
                      <p className='mt-2 text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/80 text-e2e-body'>
                        {rw.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Role Key Metrics */}
                  <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                    {rw.metrics.map((m, i) => (
                      <div key={i} className='bg-white/5 p-4 rounded-xl border border-white/10'>
                        <span className='text-xs text-neutral-400 block font-mono'>{m.label}</span>
                        <span className='text-lg font-bold text-white font-mono mt-1 block'>{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Permission Matrix & Flow Steps */}
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Permissions */}
                    <div className='rounded-xl border border-white/10 bg-white/5 p-6 space-y-4'>
                      <h5 className='text-base font-bold text-white flex items-center gap-2'>
                        <Lock size={16} className='text-[#69d483]' /> Security & Permission Matrix
                      </h5>
                      <div className='space-y-3'>
                        {rw.permissions.map((p, i) => (
                          <div key={i} className='flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5'>
                            <span className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-neutral-200 text-e2e-body'>
                              {p.action}
                            </span>
                            {p.allowed ? (
                              <span className='px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1'>
                                <CheckCircle size={12} /> Granted
                              </span>
                            ) : (
                              <span className='px-2.5 py-1 rounded-full text-xs font-mono bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center gap-1'>
                                <XCircle size={12} /> Restricted
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step-by-Step Flow */}
                    <div className='rounded-xl border border-white/10 bg-white/5 p-6 space-y-4'>
                      <h5 className='text-base font-bold text-white flex items-center gap-2'>
                        <Play size={16} className='text-[#69d483]' /> Workflow Execution Steps
                      </h5>
                      <div className='space-y-4'>
                        {rw.flowSteps.map((s, i) => (
                          <div key={i} className='space-y-1 p-3 rounded-lg bg-black/40 border border-white/5'>
                            <p className='text-sm font-bold text-[#69d483]'>{s.title}</p>
                            <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-neutral-300 text-e2e-body'>
                              {s.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tailored UI Preview Banner */}
                  <div className='rounded-xl border border-[#69d483]/30 bg-[#69d483]/10 p-6 text-center space-y-2'>
                    <span className='text-xs font-mono text-[#69d483] uppercase tracking-wider font-bold'>Active Role Screen View</span>
                    <h5 className='text-xl font-bold text-white'>{rw.previewHeadline}</h5>
                    <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-emerald-200 text-e2e-body max-w-[750px] mx-auto'>
                      {rw.previewContent}
                    </p>
                  </div>
                </div>
              )
            })()}
          </div>
        </motion.div>
      )}
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
      <div className={`min-h-screen ${getBgColor()} text-white pt-[90px] pb-24 overflow-x-hidden relative font-sans selection:bg-[#00ff84] selection:text-black`}>
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundColor: '#0a0d10',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 0.8px, transparent 0.9px)',
            backgroundSize: '18px 18px',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.5) 92%, rgba(0,0,0,0.12) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.5) 92%, rgba(0,0,0,0.12) 100%)'
          }}
        />

        <div className='relative z-10 mx-auto w-full max-w-[1280px] px-[16px] md:px-[64px] border-0 e2e-layout-box space-y-6 sm:space-y-10'>
          {/* Top Pill Navigation Bar (Matching reference pill layout) */}
          <div className='w-full rounded-full border-0 bg-white/5 px-[16px] py-3 md:px-[64px] backdrop-blur-xl shadow-xl flex items-center justify-between gap-4'>
            <div className='flex items-center gap-3'>
              <span className='inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#15a854] text-[0.75rem] font-bold uppercase tracking-wider text-white shadow-md'>
                ERP
              </span>
              <span className='text-base sm:text-lg font-bold tracking-tight text-white'>Sports ERP</span>
            </div>
            <button
              type='button'
              aria-label='Close case study'
              className='inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#27272a] text-white text-lg font-light shadow-md hover:bg-neutral-700 transition'
            >
              <X size={18} />
            </button>
          </div>

          {/* Large Hero Banner Card */}
          <div className='w-full rounded-[2rem] sm:rounded-[2.5rem] bg-[#15a854] py-10 sm:py-14 md:py-16 px-[16px] md:px-[64px] border-0 flex items-center justify-center shadow-[0_20px_50px_rgba(21,168,84,0.25)]'>
            <div className='flex items-center gap-2.5 rounded-full bg-[#15a854] px-8 py-3.5 shadow-inner border-0'>
              <span className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans'>
                Sports ERP
              </span>
              <span className='rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-bold text-white font-mono uppercase'>
                v1
              </span>
            </div>
          </div>

          {/* Main Title Heading */}
          <header className='pt-2 sm:pt-4 border-0 px-[16px] md:px-[64px]'>
            <h1 className='text-[28px] sm:text-[40px] md:text-[48px] leading-[1.2] font-bold text-white tracking-tight max-w-[1180px]'>
              Building a unified sports management platform for schools &amp; sports organisations
            </h1>
          </header>

          {/* Horizontal Divider Line */}
          <div className='border-t border-white/10 my-6 sm:my-8' />

          {/* Metadata Section: Desktop 2-column grid & Mobile 1-column stack */}
          <div className='mt-8 grid grid-cols-1 gap-y-8 md:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.9fr)] md:gap-x-12 lg:gap-x-16 border-0 px-[16px] md:px-[64px]'>
            {/* Left Column: My Role & Scope of work */}
            <div className='space-y-8'>
              <div className='space-y-2'>
                <p className='text-sm sm:text-base font-medium text-neutral-400'>My Role</p>
                <p className='text-base sm:text-lg font-semibold text-white'>Product Designer (UI/UX)</p>
              </div>

              <div className='space-y-2'>
                <p className='text-sm sm:text-base font-medium text-neutral-400'>Scope of work</p>
                <p className='mt-3 max-w-[28ch] text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body'>
                  End-to-end product design — from user research and feature ideation to UI design and role-based workflows.
                </p>
              </div>
            </div>

            {/* Right Column: About the Product */}
            <div className='space-y-6'>
              <div className='space-y-2'>
                <p className='text-sm sm:text-base font-medium text-neutral-400'>About the Product</p>
                <p className='max-w-[760px] text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/85 text-e2e-body'>
                  Sports ERP is a role-based web platform that brings athletes, coaches, officials, coordinators, and administrators into one connected system. It replaces spreadsheets, notebooks, WhatsApp groups, and manual processes with a single platform for managing athletes, events, results, training, and performance analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Why Sports Management Section (Updated Content with #D6A85F Highlights & Reference Visual Format) */}
          <div className='mt-12 sm:mt-16 space-y-8 border-t border-white/10 pt-10 sm:pt-14 px-[16px] md:px-[64px] border-0'>
            <div className='max-w-[850px] space-y-6'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white tracking-tight'>
                Why Sports Management?
              </h2>

              <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body'>
                The problem wasn't a lack of information. It was where that information lived.
              </p>

              <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/85 text-e2e-body'>
                Sports operations still depend on{' '}
                <span className='text-[#D6A85F] font-semibold'>spreadsheets</span>,{' '}
                <span className='text-[#D6A85F] font-semibold'>notebooks</span>, and{' '}
                <span className='text-[#D6A85F] font-semibold'>scattered group chats</span> to manage athletes, competitions, and performance.
              </p>

              <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/85 text-e2e-body'>
                As the number of athletes and events grows, these disconnected tools create{' '}
                <span className='text-[#D6A85F] font-semibold'>duplicate work</span>,{' '}
                <span className='text-[#D6A85F] font-semibold'>communication gaps</span>, and{' '}
                <span className='text-[#D6A85F] font-semibold'>poor visibility</span> across the sporting journey.
              </p>

              <p className='text-xl font-bold text-white pt-2'>
                And..
              </p>

              <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/85 text-e2e-body'>
                Athletes can't easily access their complete journey in one place, while coaches and organisers have to{' '}
                <span className='text-[#D6A85F] font-semibold'>manage information across multiple systems</span>.
              </p>

              <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/85 text-e2e-body'>
                Important parts of the experience — from{' '}
                <span className='text-[#D6A85F] font-semibold'>registration and event updates to results, training, and recovery</span> — remain fragmented.
              </p>

              {/* Opportunity Header & Platform Rationale */}
              <div className='pt-6 space-y-6'>
                <h3 className='text-2xl sm:text-3xl font-bold text-white tracking-tight'>
                  This created a clear opportunity for a connected sports system
                </h3>

                <p className='text-[19px] leading-[30.7px] tracking-[0px] font-normal text-white/90 text-e2e-body'>
                  Instead of adding another tool to the workflow, I wanted to bring the important parts of the sports journey into one role-based platform — designed around how athletes, coaches, officials, and organisers actually work.
                </p>
              </div>
            </div>
          </div>

          {/* Research Showcase Section (03 - RESEARCH & 04 - INSIGHT matching reference visual layout) */}
          <ResearchShowcaseSection />

          {/* Interactive End-to-End Product Design Suite */}
          <EndToEndProductDesignSuite />
        </div>

        <div className='relative z-10 mx-auto w-full'>
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
                      ? "The problem wasn't a lack of information. It was where that information lived. Sports operations still depend on spreadsheets, notebooks, and scattered group chats to manage athletes, competitions, and performance. As the number of athletes and events grows, these disconnected tools create duplicate work, communication gaps, and poor visibility across the sporting journey."
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
                      ? "Athletes can't easily access their complete journey in one place, while coaches and organisers have to manage information across multiple systems. Important parts of the experience — from registration and event updates to results, training, and recovery — remain fragmented."
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
                      ? "This created a clear opportunity for a connected sports system. Instead of adding another tool to the workflow, I wanted to bring the important parts of the sports journey into one role-based platform — designed around how athletes, coaches, officials, and organisers actually work."
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
