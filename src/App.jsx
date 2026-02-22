import React from 'react';

export default function LandingPage() {
  return (
    <div className="font-sans bg-[#fbf9f6] text-gray-800 min-h-screen" style={{ fontFamily: "'Nunito', sans-serif" }}>
      
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');`}
      </style>

      <header className="flex flex-col items-center justify-center text-center py-20 px-4 shadow-sm bg-white/50">
        <h1 className="text-4xl md:text-5xl font-bold text-[#c88275] mb-4">
          Milena Pontes Bustorff Quintão
        </h1>
        <p className="text-lg md:text-xl text-[#7492a5] max-w-2xl font-semibold mb-2">
          Estudante de Psicologia | Aplicadora ABA
        </p>
        <a 
          href="https://seloaba.com.br/profissional/milena-pontes-bustorff-quintao/" 
          target="_blank" 
          rel="noreferrer"
          className="text-sm bg-blue-50 text-[#7492a5] px-4 py-1 rounded-full border border-[#7492a5]/30 hover:bg-[#7492a5] hover:text-white transition"
        >
          ✓ Profissional com Selo ABA
        </a>
      </header>

      <section className="py-16 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center border-4 border-[#e8dcd8] overflow-hidden text-gray-400 text-sm shadow-md">
            [COLOQUE A FOTO DELA AQUI]
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold text-[#c88275] mb-4">Quem sou eu e meu trabalho</h2>
          <div className="text-gray-700 space-y-4 leading-relaxed text-lg">
            <p>
              [COLOQUE O TEXTO DELA AQUI. Exemplo: Sou estudante de psicologia e atuo com muita dedicação 
              como aplicadora ABA, auxiliando no desenvolvimento e na qualidade de vida de crianças atípicas e suas famílias...]
            </p>
            <p>
              [PARÁGRAFO 2. Aqui ela pode detalhar mais sobre a vivência clínica, os estudos e o que a motivou 
              a escrever sobre maternidade e paternidade atípica.]
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#7492a5] text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="/livro.jpeg" 
              alt="Capa do Livro Meu Filho, Meu Mundo" 
              className="w-full max-w-[280px] h-auto object-cover rounded shadow-2xl border-4 border-white/20" 
            />
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-2 text-[#fbf9f6]">Meu Primeiro Livro</h2>
            <h3 className="text-4xl font-bold mb-2 text-white">Meu Filho, Meu Mundo</h3>
            <h4 className="text-xl font-medium mb-8 text-[#e8dcd8] italic">Maternidade e Paternidade Atípica: Um abraço em palavras</h4>
            
            <div className="space-y-4 mb-10 text-white/90 leading-relaxed text-lg">
              <p>
                [COLOQUE A SINOPSE AQUI. Explique como o livro acolhe as famílias, compartilha vivências 
                e traz informações valiosas sobre o universo da neurodivergência e do espectro autista.]
              </p>
            </div>
            
            {/* Lembre-se de trocar o 5511999999999 pelo DDD e número real dela */}
              <a 
                href="https://wa.me/5582933009058?text=Ol%C3%A1%2C%20Milena!%20Gostaria%20de%20garantir%20meu%20exemplar%20do%20livro%20Meu%20Filho%2C%20Meu%20Mundo." 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-[#c88275] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#b57367] transition duration-300 transform hover:-translate-y-1"
              >
                Garantir meu exemplar pelo WhatsApp
              </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-[#7492a5] text-sm bg-white">
        <p>© {new Date().getFullYear()} - Milena Pontes Bustorff Quintão. Todos os direitos reservados.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-[#c88275] px-2 transition">Instagram</a> | 
          <a href="https://seloaba.com.br/profissional/milena-pontes-bustorff-quintao/" target="_blank" rel="noreferrer" className="hover:text-[#c88275] px-2 transition">Validar Selo ABA</a>
        </p>
      </footer>

    </div>
  );
}