import React from 'react';
import { Search, ShoppingCart, User, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">А</div>
            <span className="text-2xl font-bold text-green-800 tracking-tight">АГАМА</span>
          </div>
          
          <nav className="hidden md:flex gap-8 font-medium text-slate-600">
            {['Каталог', 'Акции', 'Бренды', 'Услуги'].map(item => (
              <a key={item} href="#" className="hover:text-green-600 transition-colors">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Поиск товаров..." 
                className="pl-10 pr-4 py-2 bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 w-64 transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
            </div>
            <button className="p-2 hover:bg-green-50 rounded-full text-slate-600"><User /></button>
            <button className="p-2 hover:bg-green-50 rounded-full text-slate-600 relative">
              <ShoppingCart />
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO BANNER --- */}
      <section className="relative h-[400px] overflow-hidden bg-green-900">
        <img 
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=1600&q=80" 
          className="w-full h-full object-cover opacity-60"
          alt="Lizard hero"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg uppercase tracking-tighter">
            Вкусные <span className="text-orange-400">Цены</span>
          </h1>
          <p className="text-white text-xl max-w-lg font-light">Забота о ваших питомцах начинается с качественного питания и любви.</p>
          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-xl">
            Смотреть каталог
          </button>
        </div>
      </section>

      {/* --- CATEGORIES --- */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-8 h-1 bg-green-500 inline-block"></span> Категории
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {['Кошки', 'Собаки', 'Птицы', 'Грызуны', 'Рептилии'].map((cat) => (
            <div key={cat} className="group cursor-pointer">
              <div className="aspect-square bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-3 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                <div className="w-full h-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  {/* Иконка или изображение */}
                  <div className="text-4xl">🐾</div>
                </div>
              </div>
              <p className="text-center font-semibold text-slate-700">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SPECIAL OFFERS --- */}
      <section className="bg-green-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold italic uppercase">Цены дня</h2>
            <div className="flex gap-2">
              <button className="p-2 border border-white/30 rounded-full hover:bg-white/10"><ChevronLeft /></button>
              <button className="p-2 border border-white/30 rounded-full hover:bg-white/10"><ChevronRight /></button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-4 text-slate-800 relative group">
                <button className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors">
                  <Heart size={20} />
                </button>
                <div className="h-48 bg-slate-50 rounded-xl mb-4 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200" alt="Product" className="mix-blend-multiply" />
                </div>
                <h3 className="font-bold mb-1">Whiskas для котят</h3>
                <p className="text-sm text-slate-500 mb-4">Вкусное желе с ягненком</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-green-700">20 ₽</span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">В корзину</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?auto=format&fit=crop&w=800" 
              className="rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" 
              alt="About Us"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black text-green-900 uppercase">О нас</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Добро пожаловать в зоомагазин <span className="font-bold text-green-600">«АГАМА»</span> — место, где забота о ваших питомцах становится искусством. Мы вдохновлены красотой природы и подбираем только лучшие товары.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-800">10+ лет</h4>
                <p className="text-sm text-slate-500">На рынке товаров</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <h4 className="font-bold text-orange-800">5000+</h4>
                <p className="text-sm text-slate-500">Счастливых клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-bold">А</div>
              <span className="text-xl font-bold italic">АГАМА</span>
            </div>
            <p className="text-sm">Лучшие товары для ваших любимых питомцев с доставкой до двери.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">Помощь</a></li>
              <li><a href="#" className="hover:text-green-400">Доставка</a></li>
              <li><a href="#" className="hover:text-green-400">Сертификаты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <p className="text-sm">info@agama-pet.ru</p>
            <p className="text-lg text-white font-bold mt-2">8 (800) 555-35-35</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              {['VK', 'TG', 'OK'].map(social => (
                <div key={social} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors text-white font-bold text-xs">{social}</div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;