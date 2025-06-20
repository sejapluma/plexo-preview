"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Linha que segue o mouse */}
      <div
        className="fixed pointer-events-none z-0 transition-all duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Linha principal */}
        <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-slate-400/60 to-transparent rotate-45"></div>
        <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-slate-400/60 to-transparent -rotate-45"></div>

        {/* Círculo central */}
        <div className="absolute w-2 h-2 bg-slate-300/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        {/* Rastro/trail */}
        <div className="absolute w-64 h-px bg-gradient-to-r from-slate-300/20 via-gray-400/30 to-slate-300/20 rotate-45 blur-sm"></div>
        <div className="absolute w-64 h-px bg-gradient-to-r from-slate-300/20 via-gray-400/30 to-slate-300/20 -rotate-45 blur-sm"></div>
      </div>

      {/* Fundo com animações de silhuetas */}
      <div className="absolute inset-0 -z-10">
        {/* Círculos em silhueta */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-slate-200/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-gray-300/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-zinc-200/25 rounded-full animate-float-slow"></div>

        {/* Hexágonos em silhueta */}
        <div
          className="absolute top-1/3 left-1/2 w-32 h-32 border border-slate-300/20 rotate-12 animate-rotate-slow"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-gray-200/30 -rotate-45 animate-rotate-reverse"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        ></div>

        {/* Quadrados em silhueta */}
        <div className="absolute top-1/5 right-1/5 w-20 h-20 border border-zinc-300/25 rotate-45 animate-float-slow"></div>
        <div className="absolute bottom-1/5 left-1/5 w-16 h-16 border border-slate-200/30 -rotate-12 animate-float"></div>

        {/* Linhas geométricas */}
        <div className="absolute top-0 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-slate-300/40 to-transparent animate-slide-down"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-gray-300/40 to-transparent animate-slide-up"></div>
        <div className="absolute left-0 top-1/2 w-32 h-px bg-gradient-to-r from-transparent via-zinc-300/40 to-transparent animate-slide-right"></div>
        <div className="absolute right-0 top-1/3 w-24 h-px bg-gradient-to-l from-transparent via-slate-300/40 to-transparent animate-slide-left"></div>

        {/* Triângulos em silhueta */}
        <div className="absolute top-2/3 left-1/3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-gray-300/20 animate-float-delayed"></div>
        <div className="absolute top-1/6 right-2/3 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-slate-300/25 rotate-180 animate-float"></div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 space-y-12 relative z-10">
        {/* Logo centralizada */}
        <div className="flex items-center justify-center">
          <Image
            src="/logo-plexo.png"
            alt="Plexo"
            width={400}
            height={200}
            className="w-auto h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
            priority
          />
        </div>

        {/* Botão estilo aço/prata Apple */}
        <a
          href="https://wa.me/5548998672729"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-10 py-4 bg-gradient-to-b from-slate-200 via-gray-300 to-zinc-400 text-gray-800 font-medium rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 ease-out border border-slate-300 hover:border-slate-400 inline-block"
        >
          <span className="relative z-10 text-sm tracking-wide font-semibold">Entrar em contato</span>

          {/* Gradiente metálico de hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-300 via-gray-400 to-zinc-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Brilho metálico no topo */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>

          {/* Reflexo interno metálico */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none"></div>

          {/* Sombra interna para profundidade */}
          <div className="absolute inset-0 rounded-xl shadow-inner opacity-20 pointer-events-none"></div>

          {/* Brilho lateral esquerdo */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent"></div>
        </a>
      </div>
    </div>
  )
}
