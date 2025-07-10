"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Sun,
  Moon,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Quote,
  Users,
  Music,
  BookOpen,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    ministries: "Ministries",
    events: "Events",
    giving: "Giving",
    contact: "Contact",
    // Existing translations...
    welcome: "Welcome to Our Lady of Fatima's Catholic Parish",
    subtitle: "A community of faith, hope, and love serving God and our neighbors in the heart of Mombasa",
    joinUs: "Join Us",
    learnMore: "Learn More",
    newsTitle: "News & Announcements",
    massTimesTitle: "Mass Times & Office Hours",
    aboutTitle: "About Our Parish",
    quotesTitle: "Words of Faith",
    eventsTitle: "Upcoming Events",
    contactTitle: "Contact & Newsletter",
    weekdayMass: "Weekday Mass",
    sundayMass: "Sunday Mass",
    officeHours: "Office Hours",
    viewHistory: "View Parish History",
    viewCalendar: "View Full Calendar",
    subscribe: "Subscribe to Newsletter",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
  },
  sw: {
    // Navigation
    home: "Nyumbani",
    about: "Kuhusu",
    ministries: "Huduma",
    events: "Matukio",
    giving: "Kutoa",
    contact: "Mawasiliano",
    // Existing translations...
    welcome: "Karibu Our Lady of Fatima's Catholic Parish",
    subtitle: "Jumuiya ya imani, tumaini, na upendo tunayotumikia Mungu na majirani zetu katika moyo wa Mombasa",
    joinUs: "Jiunge Nasi",
    learnMore: "Jifunze Zaidi",
    newsTitle: "Habari na Matangazo",
    massTimesTitle: "Nyakati za Misa na Ofisi",
    aboutTitle: "Kuhusu Parokia Yetu",
    quotesTitle: "Maneno ya Imani",
    eventsTitle: "Matukio Yanayokuja",
    contactTitle: "Mawasiliano na Jarida",
    weekdayMass: "Misa ya Kila Siku",
    sundayMass: "Misa ya Jumapili",
    officeHours: "Masaa ya Ofisi",
    viewHistory: "Ona Historia ya Parokia",
    viewCalendar: "Ona Kalenda Kamili",
    subscribe: "Jiandikishe kwa Jarida",
    firstName: "Jina la Kwanza",
    lastName: "Jina la Mwisho",
    email: "Barua Pepe",
    subject: "Mada",
    message: "Ujumbe",
    sendMessage: "Tuma Ujumbe",
    quickLinks: "Viungo vya Haraka",
    followUs: "Tufuate",
  },
}

const newsItems = [
  {
    id: 1,
    title: "Parish Feast Day Celebration",
    content: "Join us for our annual feast day celebration with special Mass and community gathering.",
    date: "Dec 8, 2024",
    image: "/IMG-20250708-WA0022.jpg",
  },
  {
    id: 2,
    title: "Youth Ministry Retreat",
    content: "A spiritual retreat for young adults focusing on faith formation and community building.",
    date: "Dec 15, 2024",
    image: "/IMG-20250708-WA0003.jpg",
  },
  {
    id: 3,
    title: "Christmas Choir Auditions",
    content: "Calling all singers! Join our Christmas choir for the holiday season celebrations.",
    date: "Dec 1, 2024",
    image: "/IMG-20250708-WA0015.jpg",
  },
  {
    id: 4,
    title: "Christmas Eve Mass",
    content: "Join us for the Christmas Eve Mass at 9:00 PM.",
    date: "Dec 24, 2024",
    image: "/IMG-20250708-WA0014.jpg",
  },
]

// Update the ministries array with more groups and real images
const ministries = [
  {
    name: "Youth Ministry",
    description: "Empowering young people in their faith journey",
    icon: Users,
    image: "/IMG-20250708-WA0003.jpg",
  },
  {
    name: "Choir",
    description: "Praising God through music and song",
    icon: Music,
    image: "/IMG-20250708-WA0015.jpg",
  },
  {
    name: "Catechism",
    description: "Religious education for all ages",
    icon: BookOpen,
    image: "/IMG-20250708-WA0014.jpg",
  },
  {
    name: "Altar Servers",
    description: "Serving at the altar during Mass",
    icon: Heart,
    image: "/IMG-20250708-WA0022.jpg",
  },
  {
    name: "Legion of Mary",
    description: "Devotion to the Blessed Virgin Mary",
    icon: Heart,
    image: "/IMG-20250708-WA0003.jpg",
  },
  {
    name: "Charismatic Prayer Group",
    description: "Spirit-filled prayer and worship",
    icon: Heart,
    image: "/IMG-20250708-WA0015.jpg",
  },
  {
    name: "Bible Study",
    description: "Deepening understanding of Scripture",
    icon: BookOpen,
    image: "/IMG-20250708-WA0014.jpg",
  },
  {
    name: "Social Justice",
    description: "Serving the community and advocating for justice",
    icon: Users,
    image: "/IMG-20250708-WA0022.jpg",
  },
]

const quotes = [
  {
    text: "Be it done unto me according to thy word",
    author: "Virgin Mary",
    reference: "Luke 1:38",
  },
  {
    text: "You must love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength",
    author: "Jesus Christ",
    reference: "Mark 12:30",
  },
  {
    text: "Prayer is the raising of one's mind and heart to God",
    author: "St. John Damascene",
    reference: "",
  },
  {
    text: "The Eucharist is the source and summit of the Christian life",
    author: "Vatican II",
    reference: "",
  },
]

const events = [
  { title: "Parish Feast Day", date: "Dec 8", type: "Celebration" },
  { title: "Youth Retreat", date: "Dec 15", type: "Ministry" },
  { title: "Christmas Eve Mass", date: "Dec 24", type: "Mass" },
  { title: "Christmas Day", date: "Dec 25", type: "Holiday" },
  { title: "New Year Prayer", date: "Dec 31", type: "Prayer" },
]

export default function ParishHomepage() {
  const [language, setLanguage] = useState<"en" | "sw">("en")
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [currentMinistryIndex, setCurrentMinistryIndex] = useState(0)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [aboutExpanded, setAboutExpanded] = useState(true)
  const [cardsToShow, setCardsToShow] = useState(1);
  // Add state for screen size
  const [screenSize, setScreenSize] = useState('lg')

  useEffect(() => {
    const updateCards = () => setCardsToShow(window.innerWidth >= 768 ? 3 : 1);
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  // Update the useEffect to handle screen size
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) setScreenSize('lg')
      else if (window.innerWidth >= 768) setScreenSize('md')
      else setScreenSize('sm')
    }
    
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  const t = translations[language]

  // Auto-rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMinistryIndex((prev) => (prev + 1) % ministries.length)
    }, 3000) // Change ministry every 3 seconds
    return () => clearInterval(interval)
  }, [])

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length)
  }

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Top Navbar */}
        <div className="border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md sticky top-0 z-70">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "sw")}
                className="bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm shadow-sm focus:ring-2 focus:ring-blue-300"
              >
                <option value="en">English</option>
                <option value="sw">Kiswahili</option>
              </select>
            </div>
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 bg-gray-50/70 dark:bg-gray-800/70 border-gray-300 dark:border-gray-600 rounded shadow-sm focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-blue-100 dark:hover:bg-blue-900 transition">Sign In</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 transition">Sign Up</Button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="sticky top-12 z-70 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <Image
                  src="/our-lady-of-fatima-removebg-preview.png"
                  alt="Parish Logo"
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 shadow"
                />
                <span className="text-xl font-semibold text-blue-900 dark:text-blue-100 drop-shadow">Our Lady of Fatima's Catholic Parish</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t.home}
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t.about}
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t.ministries}
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t.events}
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t.giving}
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t.contact}
                </a>
              </div>
              <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4">
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {t.home}
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {t.about}
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {t.ministries}
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {t.events}
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {t.giving}
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {t.contact}
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-purple-100 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900">
          <div className="absolute inset-0">
            <Image src="/IMG-20250708-WA0015.jpg" alt="Church interior" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70 opacity-40" />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 bg-black/30 rounded-2xl shadow-xl backdrop-blur-md py-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">{t.welcome}</h1>
            <div className="flex justify-center mb-4">
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-70" />
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed drop-shadow">{t.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold shadow-lg transition-all duration-200 animate-fade-in">{t.joinUs}</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent font-bold shadow-lg transition-all duration-200 animate-fade-in">{t.learnMore}</Button>
            </div>
          </div>
        </section>

        {/* News & Announcements */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100 drop-shadow">{t.newsTitle}</h2>
            <div className="flex justify-center mb-12">
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-60" />
            </div>
            {/* Responsive News Cards Slider */}
            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Array.from({ length: cardsToShow }).map((_, i) => {
                  const idx = (currentNewsIndex + i) % newsItems.length;
                  const news = newsItems[idx];
                  return (
                    <Card
                      key={news.id}
                      className="overflow-hidden shadow-xl border border-blue-200 dark:border-blue-700 rounded-2xl relative h-96 flex flex-col justify-end group transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          fill
                          className="object-cover w-full h-full"
                        />
                        {/* Gradient + Blur Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </div>
                      <div className="relative z-10 p-8 text-white flex flex-col gap-2 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 translate-y-2">
                        <Badge className="mb-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 animate-fade-in group-hover:animate-slide-up">
                          {news.date}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2 animate-fade-in group-hover:animate-slide-up delay-75">{news.title}</h3>
                        <p className="leading-relaxed mb-4 animate-fade-in group-hover:animate-slide-up delay-100">
                          {news.content}
                        </p>
                        <button className="self-start px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-all duration-200 animate-fade-in group-hover:animate-slide-up delay-150">
                          Read More
                        </button>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Improved Slider Controls Positioning */}
              <div className="pointer-events-none">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 rounded-full p-2 bg-white/80 dark:bg-gray-900/80 shadow-lg border border-gray-300 dark:border-gray-700 hover:bg-white hover:dark:bg-gray-800"
                  onClick={prevNews}
                  aria-label="Previous News"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                >
                  <ChevronLeft className="h-5 w-5 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 rounded-full p-2 bg-white/80 dark:bg-gray-900/80 shadow-lg border border-gray-300 dark:border-gray-700 hover:bg-white hover:dark:bg-gray-800"
                  onClick={nextNews}
                  aria-label="Next News"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                >
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </Button>
                {/* Mobile buttons below cards */}
                <div className="flex md:hidden justify-center mt-4 gap-4 pointer-events-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-2 bg-white/80 dark:bg-gray-900/80 shadow border border-gray-300 dark:border-gray-700 hover:bg-white hover:dark:bg-gray-800"
                    onClick={prevNews}
                    aria-label="Previous News"
                  >
                    <ChevronLeft className="h-5 w-5 text-blue-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-2 bg-white/80 dark:bg-gray-900/80 shadow border border-gray-300 dark:border-gray-700 hover:bg-white hover:dark:bg-gray-800"
                    onClick={nextNews}
                    aria-label="Next News"
                  >
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mass Times */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-blue-900 dark:to-blue-800 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100 drop-shadow">{t.massTimesTitle}</h2>
            <div className="flex justify-center mb-12">
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-60" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Weekday Mass */}
              <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border border-blue-200 dark:border-blue-700 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-400 group relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-100 dark:bg-blue-900 rounded-full p-4 shadow-lg border-4 border-white dark:border-gray-900">
                  <Clock className="h-10 w-10 text-blue-600 dark:text-blue-300" />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-blue-800 dark:text-blue-200">{t.weekdayMass}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Monday - Friday</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-4 py-1 rounded-full bg-blue-200 text-blue-900 font-semibold text-lg shadow-sm">6:00 AM</span>
                    <span className="px-4 py-1 rounded-full bg-blue-200 text-blue-900 font-semibold text-lg shadow-sm">7:00 AM</span>
                    <span className="px-4 py-1 rounded-full bg-blue-200 text-blue-900 font-semibold text-lg shadow-sm">6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Sunday Mass */}
              <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border border-purple-200 dark:border-purple-700 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-400 group relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-100 dark:bg-purple-900 rounded-full p-4 shadow-lg border-4 border-white dark:border-gray-900">
                  <Clock className="h-10 w-10 text-purple-600 dark:text-purple-300" />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-purple-800 dark:text-purple-200">{t.sundayMass}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Sunday</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-4 py-1 rounded-full bg-purple-200 text-purple-900 font-semibold text-lg shadow-sm">7:00 AM</span>
                    <span className="px-4 py-1 rounded-full bg-purple-200 text-purple-900 font-semibold text-lg shadow-sm">9:00 AM</span>
                    <span className="px-4 py-1 rounded-full bg-purple-200 text-purple-900 font-semibold text-lg shadow-sm">11:00 AM</span>
                    <span className="px-4 py-1 rounded-full bg-purple-200 text-purple-900 font-semibold text-lg shadow-sm">5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border border-green-200 dark:border-green-700 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-400 dark:hover:border-green-400 group relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-100 dark:bg-green-900 rounded-full p-4 shadow-lg border-4 border-white dark:border-gray-900">
                  <Clock className="h-10 w-10 text-green-600 dark:text-green-300" />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-200">{t.officeHours}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Monday - Friday</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-4 py-1 rounded-full bg-green-200 text-green-900 font-semibold text-lg shadow-sm">8:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Divider & Inspirational Message */}
            <div className="flex flex-col items-center mt-16">
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-60 mb-4" />
              <p className="text-lg italic text-blue-900 dark:text-blue-100 text-center max-w-2xl">
                "Come to me, all you who are weary and burdened, and I will give you rest." <span className="font-semibold">- Matthew 11:28</span>
              </p>
            </div>
          </div>
        </section>

        {/* About Parish */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100 drop-shadow">{t.aboutTitle}</h2>
            <div className="flex justify-center mb-12">
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-60" />
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <Image
                    src="/IMG-20250708-WA0003.jpg?height=400&width=600"
                    alt="Our Lady of Fatima's Catholic Parish exterior"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl object-cover w-full border-4 border-blue-200 dark:border-blue-700"
                  />
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-blue-100 dark:border-blue-800 animate-fade-in">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Our Lady of Fatima's Catholic Parish has been serving the Mombasa community for over 50 years. We are a vibrant community of believers committed to worship, fellowship, and service.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Our parish family welcomes people from all walks of life to join us in our journey of faith. We offer various ministries and programs to help you grow spiritually and connect with our community.
                  </p>
                  <Button variant="outline" onClick={() => setAboutExpanded(!aboutExpanded)} className="font-bold animate-fade-in">
                    {aboutExpanded ? (<><span>Show Less</span> <ChevronUp className="ml-2 h-4 w-4" /></>) : (<><span>{t.learnMore}</span> <ChevronDown className="ml-2 h-4 w-4" /></>)}
                  </Button>
                </div>
              </div>
              {aboutExpanded && (
                <div className="space-y-8 text-center animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4 text-blue-900 dark:text-blue-100">Church Communitties & Groups</h3>
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-60" />
                    </div>
                  </div>
                  <div className="relative max-w-5xl mx-auto overflow-hidden">
                    <div 
                      className={`flex transition-transform duration-1000 ease-in-out ${
                        screenSize === 'lg' 
                          ? `transform -translate-x-[${currentMinistryIndex * 25}%] w-[${ministries.length * 25}%]`
                          : screenSize === 'md'
                          ? `transform -translate-x-[${currentMinistryIndex * 50}%] w-[${ministries.length * 50}%]`
                          : `transform -translate-x-[${currentMinistryIndex * 100}%] w-[${ministries.length * 100}%]`
                      }`}
                    >
                      {ministries.map((ministry, index) => {
                        const Icon = ministry.icon
                        return (
                          <div 
                            key={index} 
                            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-2 md:px-3"
                          >
                            <Card className="hover:shadow-xl transition-shadow rounded-xl border border-blue-200 dark:border-blue-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md animate-fade-in h-full">
                              <CardContent className="p-4 md:p-6 text-center">
                                <Image
                                  src={ministry.image || "/placeholder.svg"}
                                  alt={ministry.name}
                                  width={120}
                                  height={80}
                                  className="w-full h-16 md:h-20 object-cover rounded mb-3 md:mb-4 border border-blue-100 dark:border-blue-800"
                                />
                                <Icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                                <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100 text-sm md:text-base">{ministry.name}</h3>
                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{ministry.description}</p>
                              </CardContent>
                            </Card>
                          </div>
                        )
                      })}
                    </div>
                    {/* Navigation dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                      {ministries.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                            index === currentMinistryIndex ? "bg-blue-600" : "bg-blue-300"
                          }`}
                          onClick={() => setCurrentMinistryIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 font-bold animate-fade-in">{t.viewHistory}</Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Saint Quotes */}
        <section className="py-16 relative min-h-[600px] bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
          <div className="absolute inset-0">
            <Image
              src="/tom-barrett.jpg"
              alt="Saint Quote Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-blue-800/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Words of Faith</h2>
              <div className="flex justify-center mb-8">
                <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-70" />
              </div>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-12 animate-fade-in">
                <Quote className="h-20 w-20 text-blue-300 mx-auto mb-8 drop-shadow" />
                <div className="min-h-[250px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-light leading-relaxed mb-8 italic text-white animate-fade-in drop-shadow-lg max-w-4xl mx-auto">
                      "{quotes[currentQuoteIndex].text}"
                    </p>
                    <div className="text-blue-200">
                      <p className="text-xl font-semibold mb-2">{quotes[currentQuoteIndex].author}</p>
                      {quotes[currentQuoteIndex].reference && (
                        <p className="text-lg opacity-80">{quotes[currentQuoteIndex].reference}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-3 mt-12">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentQuoteIndex 
                          ? "bg-white shadow-lg scale-110" 
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      onClick={() => setCurrentQuoteIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Calendar */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-100 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-purple-900 dark:text-purple-100 drop-shadow">{t.eventsTitle}</h2>
            <div className="flex justify-center mb-12">
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-60" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              {events.map((event, index) => {
                // Color and icon by event type
                let color = "blue";
                let Icon = Calendar;
                if (event.type === "Celebration") { color = "yellow"; Icon = Calendar; }
                if (event.type === "Ministry") { color = "purple"; Icon = Users; }
                if (event.type === "Mass") { color = "green"; Icon = Clock; }
                if (event.type === "Holiday") { color = "red"; Icon = Calendar; }
                if (event.type === "Prayer") { color = "blue"; Icon = Heart; }
                return (
                  <div
                    key={index}
                    className={`group bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl border border-${color}-200 dark:border-${color}-700 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-${color}-400 dark:hover:border-${color}-400 animate-fade-in`}
                  >
                    <div className={`-mt-12 mb-4 rounded-full p-4 shadow-lg border-4 border-white dark:border-gray-900 bg-${color}-100 dark:bg-${color}-900`}>
                      <Icon className={`h-10 w-10 text-${color}-600 dark:text-${color}-300`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-${color}-800 dark:text-${color}-200 text-center">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-center">{event.date}</p>
                    <span className={`px-4 py-1 rounded-full bg-${color}-200 text-${color}-900 font-semibold text-lg shadow-sm`}>{event.type}</span>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Button className="bg-purple-600 hover:bg-purple-700 font-bold animate-fade-in">{t.viewCalendar}</Button>
            </div>
          </div>
        </section>

        {/* Contact & Newsletter */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100 drop-shadow">{t.contactTitle}</h2>
            <div className="flex justify-center mb-12">
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-60" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl border border-blue-200 dark:border-blue-700 p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-100">Send us a message</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder={t.firstName} className="bg-white/80 dark:bg-gray-800/80" />
                    <Input placeholder={t.lastName} className="bg-white/80 dark:bg-gray-800/80" />
                  </div>
                  <Input placeholder={t.email} type="email" className="bg-white/80 dark:bg-gray-800/80" />
                  <Input placeholder={t.subject} className="bg-white/80 dark:bg-gray-800/80" />
                  <textarea
                    placeholder={t.message}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white/80 dark:bg-gray-800/80 min-h-[120px] resize-none"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold shadow-lg transition-all duration-200 animate-fade-in">{t.sendMessage}</Button>
                </div>
              </div>

              {/* Newsletter & Contact Info */}
              <div className="space-y-8">
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl border border-purple-200 dark:border-purple-700 p-8 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-6 text-purple-900 dark:text-purple-100">{t.subscribe}</h3>
                  <div className="flex gap-2">
                    <Input placeholder={t.email} type="email" className="flex-1 bg-white/80 dark:bg-gray-800/80" />
                    <Button className="bg-purple-600 hover:bg-purple-700 font-bold shadow-lg transition-all duration-200 animate-fade-in">Subscribe</Button>
                  </div>
                </div>
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl border border-green-200 dark:border-green-700 p-8 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-6 text-green-900 dark:text-green-100">Contact Info</h3>
                  <div className="p-2 space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>123 Kongowea Road, Mombasa, Kenya</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>+254 41 222 3456</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>info@ourladyoffatimakongowea.co.ke</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>Mon-Fri: 8:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <Button variant="outline" size="sm" className="p-2 bg-transparent border-blue-300 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2 bg-transparent border-purple-300 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2 bg-transparent border-red-300 dark:border-red-700 hover:bg-red-100 dark:hover:bg-red-900 transition">
                      <Youtube className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2 bg-transparent border-blue-300 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-12 mt-0">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/our-lady-of-fatima-removebg-preview.png"
                    alt="Parish Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                  <span className="text-xl font-semibold drop-shadow">Our Lady of Fatima's Catholic Parish</span>
                </div>
                <p className="text-blue-200">Serving the Mombasa community with faith, hope, and love since 1970.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-100">{t.quickLinks}</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">About Us</a>
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">Mass Times</a>
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">Ministries</a>
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">Events</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-100">Services</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">Baptism</a>
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">Marriage</a>
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">Confirmation</a>
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">Counseling</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-100">{t.followUs}</h3>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="p-2 border-blue-300 dark:border-blue-700 bg-transparent hover:bg-blue-800 transition">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2 border-purple-300 dark:border-purple-700 bg-transparent hover:bg-purple-800 transition">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2 border-red-300 dark:border-red-700 bg-transparent hover:bg-red-800 transition">
                    <Youtube className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2 border-blue-300 dark:border-blue-700 bg-transparent hover:bg-blue-800 transition">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
              <p>&copy; {new Date().getFullYear()} Our Lady of Fatima's Catholic Parish. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
