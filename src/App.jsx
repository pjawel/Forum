/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  Users,
  Utensils
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O nas", href: "#o-nas" },
    { name: "Galeria", href: "#galeria" },
    { name: "Oferta", href: "#oferta" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif tracking-tighter font-bold"
          >
            FORUM
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-t border-black/5 p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/498333176_1387491749246605_3970447718501471143_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=HKX6QTxKcc4Q7kNvwHW70PU&_nc_oc=AdoBuel-pFa-tLdhLWyNZ4I5Cl8VqbDKFEhj2hxp7BlbFNf1XyBASmCkGtMN7a2T-C4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=85RRnO2BjubJbpc8v2vuDQ&_nc_ss=7a3a8&oh=00_Af3KlM6oFcWNPyqOFxhKMM4-zE9dIIqscj3QXcmz7-MQAA&oe=69DAA8BC" 
            alt="Elegant Banquet Hall"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Wyjątkowe Chwile w Sercu Polski
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white text-6xl md:text-8xl font-serif mb-8 tracking-tighter"
          >
            Sala Bankietowa <br /> <span className="italic">Forum</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a 
              href="#kontakt"
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all duration-300"
            >
              <span>Zarezerwuj Termin</span>
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-8 leading-tight">
              Elegancja spotyka <br /> profesjonalizm.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Sala Bankietowa Forum to miejsce o eleganckim wystroju, stworzone z myślą o najbardziej wymagających gościach. Nasza fachowa i miła obsługa zadba o każdy detal Twojego przyjęcia, tworząc niepowtarzalny klimat, który pozostanie w pamięci na lata.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img 
              src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/494734838_1381939619801818_4512394179502660997_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=f6tiXTQFCT8Q7kNvwG3e0o6&_nc_oc=AdpuMRNXzQxpLhSBBKQ86AWgMyJveE6fagB62aFD1PEfzVAMNyNce_rosagPT052VQE&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=s4gU53iIH9cEIc2_G5MH7A&_nc_ss=7a3a8&oh=00_Af04oGBTLadDqFIECDU-AABa6vxmVr1IAq4tw4XG06pziQ&oe=69DA8BF3" 
              alt="Interior"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 m-4" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Star />, title: "Elegancki Wystrój", desc: "Stylowe wnętrza dopasowane do charakteru Twojej uroczystości." },
              { icon: <Users />, title: "Fachowa Obsługa", desc: "Nasz zespół to profesjonaliści, dla których Twoje zadowolenie jest priorytetem." },
              { icon: <Utensils />, title: "Wyśmienita Kuchnia", desc: "Menu skomponowane z najwyższej jakości składników przez naszych szefów kuchni." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 border border-white/10 hover:border-white/30 transition-colors group"
              >
                <div className="mb-6 text-white/50 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2 block">Nasze Wnętrza</span>
              <h2 className="text-4xl font-serif">Galeria Forum</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/492920526_1371955354133578_3531451387495559165_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=daWl2-t9EGgQ7kNvwHKZdog&_nc_oc=Adrx2fLjBDkGN7nSV1gcqyeqJ0BDMmkd6K8evLCIzVBZisMDhJ52L8X7xGEbqXwJCRo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=Cfi-DBYZSfQHRB1_i7tYIg&_nc_ss=7a3a8&oh=00_Af1FNyGO0P4E5U-Z_Cva5VdUo288am4EUnYz8ENa_L547w&oe=69DA8B1F",
              "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/485806674_1344988610163586_1533308518056113326_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AZJHspgpggoQ7kNvwGAetKP&_nc_oc=Adp3xuLwuuURyTTgBYPUSIWNAWfx4xU4W_w51jB388SZqkY3O1_TBaiBTfKOpmvQb9Q&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=_zJO5KKGuylz1vNlZU6FFw&_nc_ss=7a3a8&oh=00_Af01_8fLuGw2g8lab8OoQ0J7NXlAS3-vwB_niW16EXA2WA&oe=69DA9D7A",
              "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/485766924_1344975666831547_5612904404302628707_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=7gBVbrTR9UwQ7kNvwEfIrYt&_nc_oc=AdoLXmxbSs6ZKzUn8A8yNoF7L4NdZoC41UrY_jsibH7Yx-IMy-cL4qLSq29kRvXhYK8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=9iXZjUfX8YExliMIWUIQAw&_nc_ss=7a3a8&oh=00_Af2GgTiMyGfOVkMy4_coSepvWaBKiyo4gUGwHDOlLmJ-oQ&oe=69DAC209",
              "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/486103633_1344100603585720_5316469240537633599_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=E2h55s3UbTUQ7kNvwHv_w4L&_nc_oc=AdqjumQ44_iEUS35esxiFOCMXJNHiGSpQiygKmwK6AmVO0s1yJ_PcW2O5cyXNao9d88&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=bQT7iSoqmfKPRirYsQ9xpw&_nc_ss=7a3a8&oh=00_Af3FdN9KfY1T0DHyYgjYqed9iJrmUL_kVCylGZPDxtfwVg&oe=69DABB35",
              "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/485780021_1343581563637624_4850087830651107749_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=bND2VW4JnowQ7kNvwHZi2Fu&_nc_oc=AdoLneWK1v50kHuowpcbjQrlglqj-YqXj3QNEgf2Kp_WyRmCcvcJTEkEECBJeyjDemc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=LNZ3giGvt7HAkmb3B8qTKA&_nc_ss=7a3a8&oh=00_Af3hDk8K6CW4dagewHq4YzefayAVESrtKaSlF0D_0tccpA&oe=69DABA72",
              "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/498333176_1387491749246605_3970447718501471143_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=HKX6QTxKcc4Q7kNvwHW70PU&_nc_oc=AdoBuel-pFa-tLdhLWyNZ4I5Cl8VqbDKFEhj2hxp7BlbFNf1XyBASmCkGtMN7a2T-C4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=85RRnO2BjubJbpc8v2vuDQ&_nc_ss=7a3a8&oh=00_Af3KlM6oFcWNPyqOFxhKMM4-zE9dIIqscj3QXcmz7-MQAA&oe=69DAA8BC",
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className={`relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ${
                  i === 0 || i === 4 ? "md:col-span-2 md:row-span-1" : ""
                }`}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover aspect-video md:aspect-auto md:h-[400px]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-24 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-4 block">Nasze Usługi</span>
            <h2 className="text-4xl md:text-5xl font-serif">Oferta Przyjęć</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { title: "Wesela", desc: "Kompleksowa organizacja przyjęć weselnych w eleganckim stylu." },
              { title: "Komunie i Chrzciny", desc: "Rodzinne uroczystości w kameralnej i ciepłej atmosferze." },
              { title: "Imprezy Firmowe", desc: "Profesjonalne eventy, bankiety i spotkania biznesowe." },
              { title: "Studniówki i Bale", desc: "Niezapomniane bale maturalne i zabawy karnawałowe." },
              { title: "Urodziny i Jubileusze", desc: "Świętowanie ważnych chwil w gronie najbliższych." },
              { title: "Konsolacje", desc: "Godne i spokojne pożegnania w profesjonalnej oprawie." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black p-12 hover:bg-white/5 transition-colors group"
              >
                <span className="text-white/20 text-5xl font-serif mb-6 block group-hover:text-white/40 transition-colors">0{i + 1}</span>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif mb-12">Zapraszamy do <br /> kontaktu</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Zadzwoń do nas</p>
                  <a href="tel:+48694173126" className="text-xl hover:opacity-50 transition-opacity">694 173 126</a>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Odwiedź nas</p>
                  <p className="text-xl">Rynek 26, Piątek<br />99-120</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Godziny otwarcia</p>
                  <p className="text-xl">Zapraszamy po wcześniejszym <br /> kontakcie telefonicznym</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl border border-black/5 overflow-hidden h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39241.45568250946!2d19.405401248632813!3d52.0689709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bbe7e22d8dba5%3A0xda87292ddb355794!2sForum%20Sala%20Bankietowa!5e0!3m2!1spl!2spl!4v1775555691420!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-serif font-bold tracking-tighter mb-2">FORUM</h3>
            <p className="text-gray-500 text-sm">© 2026 Sala Bankietowa Forum. Wszelkie prawa zastrzeżone.</p>
          </div>
          <div className="flex space-x-8">
            <a href="https://www.facebook.com/forum.sala/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
