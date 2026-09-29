import {
  ArrowRight,
  Menu,
  Search,
  ShoppingCart,
  Smartphone,
  Shirt,
  Sparkles,
  Dumbbell,
  Truck,
  ShieldCheck,
  MessageCircle,
  Package,
} from 'lucide-react'

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
};
import { useState } from "react";

/*PRODUCTOS DESTACADOS*/
const featuredProducts: Product[] = [
  {
  id:5,
  name:"creatina",
  category: "Suplementos",
  price: 99.00,
  image:
  "/productos/creatina.webp",
  badge : "30%",
  },
];

/*NOVEDADES*/
const newProducts: Product[] = [
  // {
  //   id: 5,
  //   name: "Cartera Urban",
  //   category: "Ropa",
  //   price: 119.9,
  //   image:
  //     "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
  //   badge: "NUEVO",
  // },
  // {
  //   id: 6,
  //   name: "Kit de Cosméticos",
  //   category: "Cosméticos",
  //   price: 79.9,
  //   image:
  //     "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
  //   badge: "NUEVO",
  // },
  // {
  //   id: 7,
  //   name: "Omega 3",
  //   category: "Suplementos",
  //   price: 99.9,
  //   image:
  //     "/productos/omega3.webp",
  //   badge: "NUEVO",
  // },
  // {
  //   id: 8,
  //   name: "Zapatillas Street",
  //   category: "Zapatillas",
  //   price: 179.9,
  //   image:
  //     "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
  //   badge: "NUEVO",
  // },
  {
    id: 9,
    name: "Myo-Inositol",
    category: "Suplementos",
    price: 89.9,
    image:
      "/productos/myo-inositol.webp",
    badge: "NUEVO",
  },
  {
    id: 10,
    name: "Ashwagandha",
    category: "Suplementos",
    price: 79.9,
    image:
      "/productos/ashwagandha.webp",
    badge: "NUEVO",
  },
  {
    id: 11,
    name: "Creatina",
    category: "Suplementos",
    price: 99.99,
    image:
      "/productos/creatina.webp",
    badge: "NUEVO",
  },
  


];



function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = [
  "Todos",
  "Tecnología",
  "Ropa",
  "Zapatillas",
  "Cosméticos",
  "Perfumes",
  "Suplementos",
  ];


    const products = [
     {
     id: 12,
     name: "True Wireles - Negro",
     category: "Tecnología",
     price: 49.99,
     image:
       "/productos/truewireles.webp",
     badge: "30%",
   },
      {
     id: 13,
     name: "True Wireles - Blanco",
     category: "Tecnología",
     price: 49.99,
     image:
       "/productos/trueblanco.webp",
     badge: "30%",
   },
      {
        id: 3,
        name: "Zapatillas Urban",
        category: "Zapatillas",
        price: 149.9,
        oldPrice: 199.9,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
        badge: "-25%",
   },
      {
        id: 100,
        name: "Ghazal Ethereal (Zakat)",
        category: "Perfumes",
        price: 149.9,
        oldPrice: 199.9,
        image:
          "/productos/zakatethereal.webp",
        badge: "-23%",
  },
        {
        id: 101,
        name: "Le Gemme Rosy (Zakat)",
        category: "Perfumes",
        price: 149.9,
        oldPrice: 179.9,
        image:
          "/productos/legemmerosy.webp",
        badge: "-23%",
  },
        {
        id: 102,
        name: "Ghazal Edge (Zakat)",
        category: "Perfumes",
        price: 179.9,
        oldPrice: 199.9,
        image:
          "/productos/ghazaledge.webp",
        badge: "-23%",
  },



    ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <div className="flex items-center gap-3 text-2xl font-black tracking-widest">
            {/* LOGO */}
            <img 
              src="/ruta-de-tu-logo.png" 
              alt="Logo" 
              className="h-8 w-auto" 
            />
            <div>
              LOAD<span className="text-lime-400">ING</span>
            </div>
          </div>


          {/* MENU */}
          <nav className="hidden items-center gap-10 md:flex">
            <a href="#" className="transition hover:text-lime-400">
              Inicio
            </a>

            <a
              href="#categorias"
              className="transition hover:text-lime-400"
            >
              Categorías
            </a>

            <a
              href="#ofertas"
              className="transition hover:text-lime-400"
            >
              Ofertas
            </a>

            <a
              href="#nuevos"
              className="transition hover:text-lime-400"
            >
              Nuevos
            </a>
          </nav>

          {/* ACCIONES */}
          <div className="flex items-center gap-5">

            <button
              className="transition hover:text-lime-400"
              aria-label="Buscar"
            >
              <Search size={21} />
            </button>

            <button
              className="relative transition hover:text-lime-400"
              aria-label="Carrito"
            >
              <ShoppingCart size={22} />

              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                0
              </span>
            </button>

            <button
              className="md:hidden"
              aria-label="Menú"
            >
              <Menu size={25} />
            </button>

          </div>
        </div>
      </header>


      {/* HERO */}
      <main>

      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">

        {/* IMAGEN */}
        <img
          src="/hero-productos.png"
          alt="Productos LOADING"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OSCURECER IMAGEN */}
        <div className="absolute inset-0 bg-black/20" />

        {/* DEGRADADO PARA DAR PRIORIDAD AL TEXTO */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex min-h-[80vh] items-center">

          <div className="mx-auto w-full max-w-7xl px-6">

            <div className="max-w-2xl">

              {/* ETIQUETA */}
              <p className="mb-5 text-sm font-semibold tracking-[0.4em] text-lime-400">
                IMPORTACIONES
              </p>

              {/* TÍTULO */}
              <h1 className="text-5xl font-black leading-[0.95] md:text-7xl lg:text-8xl">
                TODO LO QUE
                <br />
                <span className="text-lime-400">
                  BUSCAS.
                </span>
              </h1>

              {/* SUBTÍTULO */}
              <h2 className="mt-6 text-2xl font-bold md:text-4xl">
                EN UN SOLO LUGAR.
              </h2>

              {/* BOTONES */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#productos"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-lime-400 px-7 py-4 text-sm font-black uppercase tracking-wider text-black transition duration-300 hover:scale-[1.02] hover:bg-lime-300"
                >
                  Ver productos

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#categorias"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-black/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition duration-300 hover:border-lime-400 hover:text-lime-400"
                >
                  Explorar categorías
                </a>

              </div>



            </div>

          </div>

        </div>

      </section>

        {/* CATEGORÍAS */}
          {/* CATEGORÍAS */}
          <section
            id="categorias"
            className="mx-auto max-w-7xl px-6 py-24"
          >

            <div className="mb-12">

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
                EXPLORA
              </p>

              <h2 className="text-4xl font-black md:text-5xl">
                CATEGORÍAS
              </h2>

              <p className="mt-4 max-w-xl text-zinc-500">
                Encuentra productos seleccionados en nuestras principales categorías.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

              {/* TECNOLOGÍA */}
                <a
                  href="#catalogo"
                  onClick={() => setSelectedCategory("Tecnología")}
                  className="group relative h-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:h-80"
                >

                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=900&q=80"
                  alt="Tecnología"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <Smartphone
                    size={28}
                    strokeWidth={1.5}
                    className="mb-3 text-lime-400"
                  />

                  <h3 className="text-2xl font-black">
                    Tecnología
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 group-hover:text-lime-400">
                    Ver productos →
                  </p>

                </div>

              </a>


              {/* ROPA */}
                <a
                  href="#catalogo"
                  onClick={() => setSelectedCategory("Ropa")}
                  className="group relative h-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:h-80"
                >

                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80"
                  alt="Ropa"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <Shirt
                    size={28}
                    strokeWidth={1.5}
                    className="mb-3 text-lime-400"
                  />

                  <h3 className="text-2xl font-black">
                    Ropa
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 group-hover:text-lime-400">
                    Ver productos →
                  </p>

                </div>

              </a>


              {/* ZAPATILLAS */}
                <a
                  href="#catalogo"
                  onClick={() => setSelectedCategory("Zapatillas")}
                  className="group relative h-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:h-80"
                >

                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
                  alt="Zapatillas"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <Package
                    size={28}
                    strokeWidth={1.5}
                    className="mb-3 text-lime-400"
                  />

                  <h3 className="text-2xl font-black">
                    Zapatillas
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 group-hover:text-lime-400">
                    Ver productos →
                  </p>

                </div>

              </a>


              {/* COSMÉTICOS */}
              <a
                href="#catalogo"
                onClick={() => setSelectedCategory("Cosméticos")}
                className="group relative h-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:h-80"
              >

                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80"
                  alt="Cosméticos"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <Sparkles
                    size={28}
                    strokeWidth={1.5}
                    className="mb-3 text-lime-400"
                  />

                  <h3 className="text-2xl font-black">
                    Cosméticos
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 group-hover:text-lime-400">
                    Ver productos →
                  </p>

                </div>

              </a>


              {/* PERFUMES */}
              <a
                href="#catalogo"
                onClick={() => setSelectedCategory("Perfumes")}
                className="group relative h-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:h-80"
              >

                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80"
                  alt="Perfumes"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <Sparkles
                    size={28}
                    strokeWidth={1.5}
                    className="mb-3 text-lime-400"
                  />

                  <h3 className="text-2xl font-black">
                    Perfumes
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 group-hover:text-lime-400">
                    Ver productos →
                  </p>

                </div>

              </a>


              {/* SUPLEMENTOS */}
              <a
                href="#catalogo"
                onClick={() => setSelectedCategory("Suplementos")}
                className="group relative h-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:h-80"
              >

                <img
                  src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=900&q=80"
                  alt="Suplementos"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <Dumbbell
                    size={28}
                    strokeWidth={1.5}
                    className="mb-3 text-lime-400"
                  />

                  <h3 className="text-2xl font-black">
                    Suplementos
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 group-hover:text-lime-400">
                    Ver productos →
                  </p>

                </div>

              </a>

            </div>

          </section>


        {/* PRODUCTOS DESTACADOS */}
        {/* PRODUCTOS DESTACADOS */}
    <section
      id="productos"
      className="mx-auto max-w-7xl px-6 py-24"
    >

    {/* ENCABEZADO */}
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

      <div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
          SELECCIÓN LOADING
        </p>

        <h2 className="text-4xl font-black md:text-5xl">
          PRODUCTOS DESTACADOS
        </h2>

        <p className="mt-4 max-w-xl text-zinc-500">
          Los productos que están llamando la atención.
        </p>

      </div>

      <a
        href="#"
        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-300 transition hover:text-lime-400"
      >
        Ver todos
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </a>

    </div>


    {/* PRODUCTOS */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

    {featuredProducts.map((product) => (

      <article
        key={product.id}
        className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
       >

        {/* IMAGEN */}
        <div className="relative aspect-square overflow-hidden bg-zinc-900">

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-4 transition duration-700 group-hover:scale-105"
        />

          {/* ETIQUETA */}
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-[10px] font-black tracking-wider text-black">
              {product.badge}
            </span>
          )}

          {/* BOTÓN FAVORITO */}
          <button
            type="button"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm transition hover:border-lime-400 hover:text-lime-400"
            aria-label={`Agregar ${product.name} a favoritos`}
          >
            ♡
          </button>

        </div>


        {/* INFORMACIÓN */}
        <div className="p-5">

          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            {product.category}
          </p>

          <h3 className="mt-2 min-h-[48px] text-lg font-bold text-white">
            {product.name}
          </h3>


          {/* PRECIO */}
          <div className="mt-3 flex items-center gap-3">

            <span className="text-xl font-black text-lime-400">
              S/ {product.price.toFixed(2)}
            </span>

            {product.oldPrice && (
              <span className="text-sm text-zinc-600 line-through">
                S/ {product.oldPrice.toFixed(2)}
              </span>
            )}

          </div>


          {/* AGREGAR */}
          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-lime-400/40 bg-lime-400/5 py-3 text-sm font-bold uppercase tracking-wider text-lime-400 transition hover:bg-lime-400 hover:text-black"
          >
            <ShoppingCart size={17} />
            Agregar
          </button>

        </div>

      </article>

    ))}

  </div>

</section>

{/* NUEVOS PRODUCTOS */}
<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
        RECIÉN LLEGADOS
      </p>

      <h2 className="text-4xl font-black md:text-5xl">
        NUEVOS PRODUCTOS
      </h2>

      <p className="mt-4 max-w-xl text-zinc-500">
        Descubre las últimas novedades que acabamos de incorporar a LOADING.
      </p>
    </div>

    <a
      href="#productos"
      className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-300 transition hover:text-lime-400"
    >
      Ver novedades
      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-1"
      />
    </a>

  </div>

  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

    {newProducts.map((product) => (

      <article
        key={product.id}
        className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
      >

        <div className="relative aspect-square overflow-hidden bg-zinc-900">

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-[10px] font-black tracking-wider text-black">
            NUEVO
          </span>

        </div>

        <div className="p-5">

          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            {product.category}
          </p>

          <h3 className="mt-2 text-lg font-bold text-white">
            {product.name}
          </h3>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-xl font-black text-lime-400">
              S/ {product.price.toFixed(2)}
            </span>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              aria-label={`Agregar ${product.name}`}
            >
              <ShoppingCart size={17} />
            </button>

          </div>

        </div>

      </article>

    ))}

  </div>

</section>


  {/* CATÁLOGO */}
  <section
    id="catalogo"
    className="mx-auto max-w-7xl px-6 py-24"
  >
    <div className="mb-12">

      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
        EXPLORA LOADING
      </p>

      <h2 className="text-4xl font-black md:text-5xl">
        NUESTRO CATÁLOGO
      </h2>

      <p className="mt-4 max-w-xl text-zinc-500">
        Encuentra productos de tecnología, moda, belleza y fitness.
      </p>

    </div>

      {/* FILTROS */}
      <div className="mb-10 flex flex-wrap gap-3">

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition"
                : "rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:border-lime-400 hover:text-lime-400"
            }
          >
            {category}
          </button>
        ))}

      </div>

       {/* PRODUCTOS */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {[...products, ...featuredProducts, ...newProducts]
        .filter(
          (product) =>
            selectedCategory === "Todos" ||
            product.category === selectedCategory
        )
        .map((product) => (

          <article
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
          >

            <div className="relative aspect-square overflow-hidden bg-zinc-900">

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {product.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-[10px] font-black text-black">
                  {product.badge}
                </span>
              )}

            </div>

            <div className="p-5">

              <p className="text-xs uppercase tracking-wider text-zinc-500">
                {product.category}
              </p>

              <h3 className="mt-2 text-lg font-bold">
                {product.name}
              </h3>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-xl font-black text-lime-400">
                  S/ {product.price.toFixed(2)}
                </span>

                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  <ShoppingCart size={17} />
                </button>

              </div>

            </div>

          </article>

        ))}

      </div>

  </section>

{/* POR QUÉ LOADING */}






{/* OFERTAS ESPECIALES */}
<section className="mx-auto max-w-7xl px-6 py-12">

  <div className="relative overflow-hidden rounded-3xl border border-lime-400/20 bg-zinc-950">

    {/* BRILLO */}
    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

    <div className="grid min-h-[430px] items-center lg:grid-cols-2">

      {/* TEXTO */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16">

        <span className="inline-flex rounded-full bg-lime-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-black">
          OFERTAS ESPECIALES
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
          PRECIOS QUE
          <br />
          <span className="text-lime-400">
            NO PUEDES DEJAR PASAR.
          </span>
        </h2>

        <p className="mt-5 max-w-lg text-zinc-400">
          Aprovecha nuestros descuentos en productos seleccionados.
          Stock limitado.
        </p>

        <a
          href="#productos"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:scale-105 hover:bg-lime-300"
        >
          Ver ofertas
          <ArrowRight size={18} />
        </a>

      </div>


      {/* PRODUCTO */}
      <div className="relative flex h-full min-h-[350px] items-center justify-center p-8">

        <div className="absolute h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"
          alt="Oferta LOADING"
          className="relative z-10 max-h-[350px] w-full max-w-[500px] rounded-2xl object-contain mix-blend-screen transition duration-700 hover:scale-105"
        />

      </div>

    </div>

  </div>

</section>


        {/* NUEVOS */}
        <section
          id="nuevos"
          className="border-y border-zinc-900 bg-zinc-950"
        >

          <div className="mx-auto max-w-7xl px-6 py-24">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              🆕 RECIÉN LLEGADOS
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              LO ÚLTIMO EN LOADING
            </h2>

            <p className="mt-4 text-zinc-500">
              Nuevos productos que acabamos de incorporar.
            </p>

          </div>

        </section>


        {/* BENEFICIOS */}
        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="mb-14 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              COMPRA CON CONFIANZA
            </p>

            <h2 className="mt-3 text-4xl font-black">
              ¿POR QUÉ LOADING?
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-4">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
              <Truck className="mb-5 text-lime-400" size={30} />
              <h3 className="font-black">Envíos</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Coordinamos el envío de tu pedido.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
              <ShieldCheck className="mb-5 text-lime-400" size={30} />
              <h3 className="font-black">Compra segura</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Atención personalizada durante tu compra.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
              <Package className="mb-5 text-lime-400" size={30} />
              <h3 className="font-black">Importaciones</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Productos seleccionados para nuestra tienda.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
              <MessageCircle className="mb-5 text-lime-400" size={30} />
              <h3 className="font-black">Atención directa</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Comunícate directamente con nosotros.
              </p>
            </div>

          </div>

        </section>

      </main>


    {/* FOOTER */}
    <footer className="border-t border-zinc-800 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* MARCA */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-black tracking-tight">
              LOADING
            </h2>

            <div className="mt-2 h-1 w-12 rounded-full bg-lime-400" />

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500">
              Tecnología, moda, belleza y productos seleccionados.
              Todo lo que buscas, en un solo lugar.
            </p>

            {/* CATEGORÍAS */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-400">

              <a href="#categorias" className="transition hover:text-lime-400">
                Tecnología
              </a>

              <a href="#categorias" className="transition hover:text-lime-400">
                Ropa
              </a>

              <a href="#categorias" className="transition hover:text-lime-400">
                Zapatillas
              </a>

              <a href="#categorias" className="transition hover:text-lime-400">
                Cosméticos
              </a>

              <a href="#categorias" className="transition hover:text-lime-400">
                Perfumes
              </a>

              <a href="#categorias" className="transition hover:text-lime-400">
                Suplementos
              </a>

            </div>

          </div>


          {/* INFORMACIÓN */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Información
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-500">

              <a
                href="#productos"
                onClick={() =>
                  setSelectedCategory("Tecnología"
                  )}

              >
                Productos
              </a>

              <a
                href="#categorias"
                className="transition hover:text-lime-400"
              >
                Categorías
              </a>

              <a
                href="#productos"
                className="transition hover:text-lime-400"
              >
                Ofertas
              </a>

              <a
                href="#"
                className="transition hover:text-lime-400"
              >
                Envíos
              </a>

            </div>

          </div>


          {/* AYUDA */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Atención
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-500">

              <a
                href="#"
                className="transition hover:text-lime-400"
              >
                WhatsApp
              </a>

              <a
                href="#"
                className="transition hover:text-lime-400"
              >
                Contacto
              </a>

              <a
                href="#"
                className="transition hover:text-lime-400"
              >
                Preguntas frecuentes
              </a>

            </div>

          </div>

        </div>


        {/* SEPARADOR */}
        <div className="my-12 h-px bg-zinc-800" />


        {/* PARTE INFERIOR */}
        <div className="flex flex-col gap-4 text-center text-xs text-zinc-600 md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © 2026 LOADING EOE S.A.C. Todos los derechos reservados.
          </p>

          <p>
            Página construida por{" "}
            <span className="font-semibold text-zinc-400">
              LOADING EOE S.A.C.
            </span>
          </p>

        </div>

      </div>

    </footer>

    </div>
  )
}

export default App