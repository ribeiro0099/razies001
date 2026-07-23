'use client';

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { Check, ShoppingCart, ShieldCheck, Flame, Star, MessageCircle, Play, Share2, ShoppingBag } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Home() {
  // Configurações já aplicadas
  const LINK_KIWIFY = "https://pay.kiwify.com.br/vC9YrPj"; 
  const FACEBOOK_PIXEL_ID = "905007559288773";
  const WHATSAPP_NUMBER = "553195540250"; 
  const WHATSAPP_MESSAGE = "Olá Raizes do bem, gostaria de receber minha receita grátis!";
  const TIKTOK_URL = "https://www.tiktok.com/@raizes_dobem";
  const YOUTUBE_URL = "https://youtube.com/@raizes_dobem";

  return (
    <div className="bg-[#fcf8f2] text-slate-800 min-h-screen font-sans antialiased selection:bg-emerald-200">
      
      {/* Rastreamento do Pixel do Facebook */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Google Analytics 4 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-35B9TR9GRJ" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-35B9TR9GRJ');
        `}
      </Script>

      {/* AVISO DE PROMOÇÃO */}
      <div className="bg-amber-600 text-white text-center text-sm md:text-base font-semibold py-3 px-4 shadow-md">
        PROMOÇÃO ESPECIAL: Receba seu e-book digital imediatamente após a compra
      </div>

      {/* HEADER COM NAVEGAÇÃO */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">RB</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 text-lg">Raizes do Bem</span>
              <p className="text-xs text-slate-500">Receitas Tradicionais</p>
            </div>
          </div>
          <nav className="flex items-center gap-3">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fale Conosco</span>
            </a>
          </nav>
        </div>
      </header>

      {/* 1. SEÇÃO PRINCIPAL (HERO) */}
      <header className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center space-y-6">
        <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-lg">
          Receitas Tradicionais da Família
        </span>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
          128 Receitas Secretas de Raizes do Bem para Conquistar Sua Família
        </h1>
        
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Receitas tradicionais de vó, bolos fofinhos, almoços inesquecíveis e doces caseiros. Tudo reunido em um manual digital simples e prático.
        </p>

        {/* MOCKUP DO LIVRO */}
        <div className="w-full max-w-md mx-auto pt-4">
          <div className="bg-white rounded-2xl p-4 shadow-xl border border-amber-100/50 relative">
            <div className="aspect-[4/5] bg-gradient-to-b from-emerald-800 to-emerald-950 rounded-xl flex flex-col items-center justify-center p-6 text-white text-center space-y-4">
              <span className="text-amber-400 font-serif italic text-lg">E-book Digital Completo</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">128 RECEITAS DE VÓ</h2>
              <div className="w-20 h-1 bg-amber-400 rounded"></div>
              <p className="text-xs text-emerald-200 uppercase tracking-widest font-mono">O LIVRO SECRETO DE RAIZES DO BEM</p>
              <p className="text-sm text-emerald-100/80 pt-4 italic">&ldquo;O verdadeiro sabor da infância, reunido em receitas simples e práticas para o seu dia a dia.&rdquo;</p>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center font-bold shadow-lg transform rotate-12 border-2 border-white">
              <span className="text-[10px] uppercase">Apenas</span>
              <span className="text-lg leading-none">R$ 17,99</span>
            </div>
          </div>
        </div>

        {/* BOTÃO PRINCIPAL DE COMPRA */}
        <div className="pt-6 max-w-sm mx-auto">
          <a 
            href={LINK_KIWIFY}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-3 w-full"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_botao_compra', { localizacao_botao: 'topo' });
              }
            }}
          >
            <ShoppingCart className="w-5 h-5" />
            Quero Meu E-book Agora
          </a>
          <div className="mt-4 space-y-2">
            <span className="text-sm text-slate-600 block flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Acesso imediato no seu e-mail
            </span>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compra Segura
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 7 Dias de Garantia
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* VÍDEO */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="aspect-video bg-slate-900 relative">
            <video 
              src="/dona-rosa-video.mp4" 
              controls 
              className="w-full h-full object-cover"
              poster="/dona-rosa-photo.jpeg"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
          <div className="p-4 text-center">
            <p className="text-slate-600 text-sm">&ldquo;Veja como é fácil preparar as receitas do livro!&rdquo;</p>
          </div>
        </div>
      </section>

      {/* REDES SOCIAIS E CONTATO */}
      <section className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-center text-slate-900 mb-6">Siga Raizes do Bem nas Redes Sociais</h2>
          <div className="grid grid-cols-3 gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200"
            >
              <MessageCircle className="w-8 h-8 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-800">WhatsApp</span>
            </a>
            <a 
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            >
              <Share2 className="w-8 h-8 text-slate-600" />
              <span className="text-sm font-semibold text-slate-800">TikTok</span>
            </a>
            <a 
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            >
              <Play className="w-8 h-8 text-slate-600" />
              <span className="text-sm font-semibold text-slate-800">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE A AUTORA */}
      <section className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="shrink-0">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md relative">
                <Image 
                  src="/dona-rosa-photo.jpeg" 
                  alt="Raizes do Bem" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Quem é Raizes do Bem?</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Com mais de 40 anos de experiência na cozinha, Raizes do Bem reuniu neste e-book as receitas que passaram de geração em geração na sua família. O que começou como cadernos de anotações virou este tesouro de 128 receitas testadas e aprovadas por quem mais entende de comida com amor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O QUE VOCÊ VAI DESCOBRIR NO LIVRO */}
      <section className="bg-white border-y border-slate-200 py-12">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-bold text-center text-slate-900">
            O que você vai encontrar no e-book:
          </h2>
          
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="bg-emerald-600 text-white p-1 rounded-full shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <p className="font-medium text-slate-700">
                <strong className="text-slate-900">128 Receitas Passo a Passo:</strong> Almoços práticos, jantares deliciosos, bolos fofinhos, doces caseiros e segredos culinários que passam de geração em geração.
              </p>
            </div>

            <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="bg-emerald-600 text-white p-1 rounded-full shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <p className="font-medium text-slate-700">
                <strong className="text-slate-900">Segredos do Tempero de Vó:</strong> Descubra as combinações exatas de ervas, temperos e ingredientes simples que transformam qualquer prato básico em uma refeição inesquecível.
              </p>
            </div>

            <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="bg-emerald-600 text-white p-1 rounded-full shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <p className="font-medium text-slate-700">
                <strong className="text-slate-900">Guia Prático Sem Erros:</strong> Truques de cozinha explicados de forma simples para você acertar o ponto de qualquer receita de primeira, mesmo se você não souber cozinhar nada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROVA SOCIAL */}
      <section className="max-w-2xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          O que nossos clientes dizem
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-900 text-sm">Maria do Carmo S.</span>
              <div className="flex text-amber-400"><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /></div>
            </div>
            <p className="text-slate-600 text-sm">&ldquo;Eu via os vídeos dando dicas e resolvi comprar o livro de receitas. Fiz o bolo fofinho no mesmo dia e ficou igualzinho ao da minha mãe. Vale cada centavo.&rdquo;</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-900 text-sm">Tereza Lima</span>
              <div className="flex text-amber-400"><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /></div>
            </div>
            <p className="text-slate-600 text-sm">&ldquo;Muito fácil de ler no celular, as letras são grandes e as receitas bem explicadas. Sempre faço o tempero da vó que ela ensinou, mudou o sabor do meu almoço de domingo.&rdquo;</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-900 text-sm">Ana Luiza</span>
              <div className="flex text-amber-400"><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /></div>
            </div>
            <p className="text-slate-600 text-sm">&ldquo;Minha família toda adorou o bolo de cenoura que fiz seguindo o livro. Meu marido disse que ficou melhor que o da mãe dele! Super recomendo.&rdquo;</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-900 text-sm">Cláudia M.</span>
              <div className="flex text-amber-400"><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /></div>
            </div>
            <p className="text-slate-600 text-sm">&ldquo;Comprei achando que seria difícil, mas as receitas são super simples. Já fiz o frango assado e o pudim, ambos perfeitos! Vale muito a pena.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="max-w-2xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          A diferença que o segredo faz:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md border border-slate-200 p-5">
            <h3 className="font-bold text-slate-700 mb-3">Sem o segredo</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Comida sem sabor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Bolos ressecados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Temperos que não combinam</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-slate-200 p-5">
            <h3 className="font-bold text-emerald-700 mb-3">Com o segredo</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                <span>Sabor inesquecível</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                <span>Bolos fofinhos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                <span>Temperos perfeitos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PREVIEW DE RECEITAS */}
      <section className="max-w-2xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          Veja o que você vai aprender:
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-emerald-700 px-5 py-3">
              <h3 className="text-white font-bold">Bolo de Cenoura Fofinho</h3>
            </div>
            <div className="p-5 space-y-3">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Ingredientes:</h4>
                <p className="text-slate-600 text-sm">3 cenouras médias, 3 ovos, 1 xícara de óleo, 2 xícaras de açúcar, 2 xícaras de farinha de trigo, 1 colher de fermento</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Modo de Preparo:</h4>
                <p className="text-slate-600 text-sm">Bata no liquidificador a cenoura, ovos e óleo. Misture o açúcar e farinha em uma tigela, adicione a mistura líquida e por último o fermento. Asse em forno médio por 35 minutos.</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                <p className="text-emerald-700 text-xs font-semibold">💡 Segredo: Adicione 1 colher de manteiga na massa para ficar mais úmido!</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-amber-600 px-5 py-3">
              <h3 className="text-white font-bold">Frango Assado Temperado</h3>
            </div>
            <div className="p-5 space-y-3">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Ingredientes:</h4>
                <p className="text-slate-600 text-sm">1 frango inteiro, suco de 2 limões, alho, sal, pimenta, páprica, ervas finas, azeite</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Modo de Preparo:</h4>
                <p className="text-slate-600 text-sm">Tempere o frango com limão, alho e sal por 2 horas. Pincele com azeite misturado com páprica e ervas. Asse em forno alto por 1 hora e 30 minutos.</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                <p className="text-amber-700 text-xs font-semibold">💡 Segredo: Coloque fatias de limão dentro do frango antes de assar!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE GARANTIA */}
      <section className="max-w-2xl mx-auto px-4 py-10 text-center space-y-4">
        <div className="bg-emerald-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto">
          <ShieldCheck className="w-7 h-7 text-emerald-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">
          Garantia de 7 Dias
        </h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Se por qualquer motivo você não ficar satisfeito com o e-book, basta solicitar o reembolso em até 7 dias após a compra através da plataforma Kiwify. Devolvemos 100% do valor pago.
        </p>
      </section>

      {/* SEÇÃO DE FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-2">Funciona no celular?</h3>
            <p className="text-slate-600 text-sm">Sim! O e-book é um arquivo PDF digital que você pode ler no celular, tablet ou computador.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-2">Como eu recebo após a compra?</h3>
            <p className="text-slate-600 text-sm">O acesso é imediato! Após o pagamento via Kiwify, você recebe o link de download no seu e-mail.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-2">E se eu não gostar?</h3>
            <p className="text-slate-600 text-sm">Você tem garantia de 7 dias. Se não gostar, solicite o reembolso através da Kiwify.</p>
          </div>
        </div>
      </section>

      {/* 4. OFERTA FINAL */}
      <section className="bg-emerald-800 text-white py-12 text-center space-y-4">
        <div className="max-w-xl mx-auto px-4 space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold">Adquira por R$ 17,99</h3>
          <p className="text-emerald-100 text-sm md:text-base">
            Pagamento único. Acesso imediato ao e-book digital após a compra.
          </p>
        </div>

        <div className="max-w-sm mx-auto px-4">
          <a 
            href={LINK_KIWIFY}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg px-6 py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-3 w-full"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_botao_compra', { localizacao_botao: 'final' });
              }
            }}
          >
            <ShoppingCart className="w-5 h-5" />
            Quero Adquirir
          </a>
        </div>
      </section>

      {/* PRODUTOS RECOMENDADOS - AMAZON AFILIADOS */}
      <section className="max-w-2xl mx-auto px-4 py-10 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-slate-900">
            Produtos Recomendados
          </h2>
          <p className="text-slate-600 text-sm">
            Ferramentas úteis para sua cozinha
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <a 
            href="https://www.amazon.com.br/s?k=liquidificador&tag=SEU-ID-AFILIADO" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="bg-slate-100 p-2 rounded-lg shrink-0">
                <ShoppingBag className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Liquidificador</h3>
                <p className="text-slate-600 text-xs mb-2">Essencial para bater massas</p>
                <span className="text-xs text-emerald-600 font-semibold">Ver na Amazon →</span>
              </div>
            </div>
          </a>

          <a 
            href="https://www.amazon.com.br/s?k=forma+para+bolo&tag=SEU-ID-AFILIADO" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="bg-slate-100 p-2 rounded-lg shrink-0">
                <ShoppingBag className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Forma Antiaderente</h3>
                <p className="text-slate-600 text-xs mb-2">Perfeita para bolos</p>
                <span className="text-xs text-emerald-600 font-semibold">Ver na Amazon →</span>
              </div>
            </div>
          </a>
        </div>

        <p className="text-center text-xs text-slate-500">
          * Como associado da Amazon, ganhamos com compras qualificadas.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-500 text-center text-xs py-8 px-4 space-y-2">
        <p>Este produto é comercializado através da plataforma Kiwify. A plataforma não faz controle editorial prévio dos produtos.</p>
        <p>&copy; 2026 Raizes do Bem. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}