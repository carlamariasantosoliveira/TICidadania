import React, { useState } from 'react';
import { VIDEO_INSTRUCTION } from '../data/instructionsData';
import { Play, ExternalLink, Check, X, Sparkles, RefreshCw } from 'lucide-react';

interface ResíduoItem {
  name: string;
  target: 'azul' | 'amarelo' | 'nenhum';
  icon: string;
  hint: string;
}

const RESIDUOS_TEST: ResíduoItem[] = [
  { name: 'Caixa de sapatos de cartão', target: 'azul', icon: '📦', hint: 'Espalma a caixa para ocupar menos espaço no papelão!' },
  { name: 'Garrafa de água de plástico', target: 'amarelo', icon: '🧴', hint: 'Espalma a garrafa e coloca a tampa de volta antes de reciclar!' },
  { name: 'Folha de rascunho de papel', target: 'azul', icon: '📄', hint: 'Papel limpo vai sempre para o ecoponto azul.' },
  { name: 'Pacote de sumo (Tetra Pak)', target: 'amarelo', icon: '🧃', hint: 'Embalagens cartonadas para alimentos vão para o amarelo!' },
  { name: 'Lata de refrigerante', target: 'amarelo', icon: '🥫', hint: 'O ecoponto amarelo é para embalagens de plástico e metal.' },
  { name: 'Guardanapo de papel com gordura', target: 'nenhum', icon: '🧻', hint: 'Atenção! Papel com gordura ou restos orgânicos vai para o lixo comum (indiferenciado).' },
];

export const VideoSection: React.FC = () => {
  const [selectedItemIdx, setSelectedItemIdx] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<'azul' | 'amarelo' | 'nenhum' | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answeredCount, setAnsweredCount] = useState<number>(0);

  const currentItem = RESIDUOS_TEST[selectedItemIdx];

  const handleChoose = (choice: 'azul' | 'amarelo' | 'nenhum') => {
    if (userChoice !== null) return;
    setUserChoice(choice);
    setAnsweredCount(prev => prev + 1);
    if (choice === currentItem.target) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setUserChoice(null);
    setSelectedItemIdx(prev => (prev + 1) % RESIDUOS_TEST.length);
  };

  const handleResetQuiz = () => {
    setUserChoice(null);
    setSelectedItemIdx(0);
    setScore(0);
    setAnsweredCount(0);
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Exact instruction banner */}
      <div className="bg-slate-900 text-white p-5 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-400">
              Ponto Prévio da Ficha
            </span>
            <h2 className="text-base sm:text-lg font-bold mt-1 text-slate-100 flex items-center gap-2">
              <Play className="w-4 h-4 text-red-500 fill-current shrink-0" />
              <span>{VIDEO_INSTRUCTION.bulletText}</span>
            </h2>
          </div>

          <a
            href={VIDEO_INSTRUCTION.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
          >
            <span>Abrir no YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Video Player & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Responsive YouTube Embed */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_INSTRUCTION.youtubeId}?start=3`}
                title="Vídeo Ecopontos e Reciclagem"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Duração: ~3 minutos · Clica em reproduzir para rever os conceitos antes de criar as placas no Word.
            </p>
          </div>

          {/* Key Learning Highlights */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>O que aprender com este vídeo:</span>
            </h3>

            <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3.5 text-xs">
              <div className="font-bold text-blue-900 flex items-center gap-1.5 mb-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
                <span>Ecoponto Azul (Papelão):</span>
              </div>
              <p className="text-slate-700 leading-relaxed mb-2">
                Destinado a papel e cartão limpos (livros, cadernos, caixas, jornais).
              </p>
              <p className="text-blue-950 font-medium">
                💡 <strong>Dica da Placa:</strong> Usar a palavra "Papelão" com tamanho grande e cor azul forte!
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 text-xs">
              <div className="font-bold text-amber-950 flex items-center gap-1.5 mb-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span>Ecoponto Amarelo (Plástico e Embalão):</span>
              </div>
              <p className="text-slate-700 leading-relaxed mb-2">
                Destinado a garrafas de plástico, pacotes de leite e sumos (Tetra Pak) e latas.
              </p>
              <p className="text-amber-950 font-medium">
                💡 <strong>Dica da Placa:</strong> Usar "Plástico" com fundo amarelo ou letras com contorno contrastante!
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Mini Sorting Practice */}
        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>🎯 Mini-Desafio: Onde deve ir cada resíduo?</span>
              </h3>
              <p className="text-xs text-slate-500">
                Testa os teus conhecimentos antes de começares a desenhar as placas no Word.
              </p>
            </div>

            {answeredCount > 0 && (
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-slate-700">
                  Acertos: {score} de {answeredCount}
                </span>
                <button
                  onClick={handleResetQuiz}
                  className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                  title="Reiniciar mini-desafio"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{currentItem.icon}</span>
                <div>
                  <span className="text-xs font-semibold text-slate-500">Resíduo {selectedItemIdx + 1} de {RESIDUOS_TEST.length}:</span>
                  <p className="text-base font-bold text-slate-900">{currentItem.name}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleChoose('azul')}
                  disabled={userChoice !== null}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    userChoice === 'azul'
                      ? currentItem.target === 'azul'
                        ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                        : 'bg-red-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  🟦 Ecoponto Azul (Papelão)
                </button>

                <button
                  onClick={() => handleChoose('amarelo')}
                  disabled={userChoice !== null}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    userChoice === 'amarelo'
                      ? currentItem.target === 'amarelo'
                        ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400'
                        : 'bg-red-600 text-white'
                      : 'bg-amber-400 hover:bg-amber-500 text-slate-950'
                  }`}
                >
                  🟨 Ecoponto Amarelo (Plástico)
                </button>

                <button
                  onClick={() => handleChoose('nenhum')}
                  disabled={userChoice !== null}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    userChoice === 'nenhum'
                      ? currentItem.target === 'nenhum'
                        ? 'bg-slate-800 text-white ring-2 ring-slate-400'
                        : 'bg-red-600 text-white'
                      : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                  }`}
                >
                  🗑️ Lixo Indiferenciado
                </button>
              </div>
            </div>

            {/* Feedback and Explanation */}
            {userChoice !== null && (
              <div
                className={`mt-4 p-3 rounded-lg flex items-center justify-between text-xs transition-all ${
                  userChoice === currentItem.target
                    ? 'bg-emerald-100/90 text-emerald-950 border border-emerald-300'
                    : 'bg-rose-100/90 text-rose-950 border border-rose-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  {userChoice === currentItem.target ? (
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-rose-700 shrink-0" />
                  )}
                  <span>
                    <strong>{userChoice === currentItem.target ? 'Correto!' : 'Ops!'}</strong>{' '}
                    {currentItem.hint}
                  </span>
                </div>

                <button
                  onClick={handleNext}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-md transition-colors cursor-pointer shrink-0 ml-3"
                >
                  Próximo Resíduo →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
