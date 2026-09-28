import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetail';
import Shop from '@/pages/Shop';
import About from '@/pages/About';
import StyleGuide from '@/pages/StyleGuide';
import Contact from '@/pages/Contact';
import Testimonials from '@/pages/Testimonials';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

function FloatingWhatsApp() {
  return <a href={whatsappLink('Hi Sassy Lady Shoes! I would like to enquire about a pair.')} target="_blank" rel="noreferrer" aria-label="Chat with Sassy Lady Shoes on WhatsApp" className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#19c866] text-white shadow-[0_10px_30px_rgba(0,0,0,.22)] ring-2 ring-white/90 md:bottom-7 md:right-7">
    <MessageCircle className="h-6 w-6" />
  </a>;
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Add your page Route elements here */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
      <FloatingWhatsApp />
    </QueryClientProvider>
  )
}

export default App
