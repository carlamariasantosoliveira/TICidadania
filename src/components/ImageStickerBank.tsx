import React, { useState } from 'react';
import { Sparkles, Download, Copy, Check, Info } from 'lucide-react';

interface StickerItem {
  id: string;
  name: string;
  category: 'papelao' | 'plastico' | 'ecologia';
  emoji: string;
  suggestedPlaca: string;
  description: string;
}

const STICKERS: StickerItem[] = [
  {
    id: 's1',
    name: 'Símbolo da Reciclagem',
    category: 'ecologia',
    emoji: '♻️',
    suggestedPlaca: 'Papelão e Plástico',
    description: 'As 3 setas de Möbius. Significa que o material pode ser reciclado!',
  },
  {
    id: 's2',
    name: 'Caixa de Cartão',
    category: 'papelao',
    emoji: '📦',
    suggestedPlaca: 'Papelão (Azul)',
    description: 'Para lembrar que caixas de sapatos e encomendas vão espalmadas no papelão.',
  },
  {
    id: 's3',
    name: 'Jornais e Revistas',
    category: 'papelao',
    emoji: '📰',
    suggestedPlaca: 'Papelão (Azul)',
    description: 'Papel limpo, revistas e jornais velhos.',
  },
  {
    id: 's4',
    name: 'Folhas de Papel',
    category: 'papelao',
    emoji: '📄',
    suggestedPlaca: 'Papelão (Azul)',
    description: 'Folhas de cadernos e desenhos que já não precisas.',
  },
  {
    id: 's5',
    name: 'Garrafa de Plástico',
    category: 'plastico',
    emoji: '🧴',
    suggestedPlaca: 'Plástico (Amarelo)',
    description: 'Garrafas de água e sumos. Lembra-te de espalmar!',
  },
  {
    id: 's6',
    name: 'Pacote de Leite (Tetra Pak)',
    category: 'plastico',
    emoji: '🧃',
    suggestedPlaca: 'Plástico (Amarelo)',
    description: 'Pacotes de leite e sumos com tampa vão para o amarelo.',
  },
  {
    id: 's7',
    name: 'Lata de Bebida (Metal)',
    category: 'plastico',
    emoji: '🥫',
    suggestedPlaca: 'Plástico (Amarelo)',
    description: 'Latas de refrigerante e conservas vão no ecoponto amarelo.',
  },
  {
    id: 's8',
    name: 'Planeta Terra Sorridente',
    category: 'ecologia',
    emoji: '🌍',
    suggestedPlaca: 'Papelão e Plástico',
    description: 'O nosso planeta fica feliz quando reciclamos!',
  },
  {
    id: 's9',
    name: 'Folha Verde da Natureza',
    category: 'ecologia',
    emoji: '🍃',
    suggestedPlaca: 'Papelão e Plástico',
    description: 'Para dar um toque ecológico e bonito à placa.',
  },
];

export const ImageStickerBank: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'papelao' | 'plastico' | 'ecologia'>('todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = STICKERS.filter(s => activeFilter === 'todos' || s.category === activeFilter);

  const handleCopySticker = (item: StickerItem) => {
    navigator.clipboard.writeText(item.emoji);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-indigo-200 overflow-hidden shadow-xs">
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🖼️</span>
              <h3 className="text-base sm:text-lg font-bold">
                Banco de Imagens e Ilustrações para o Word (Passo 15)
              </h3>
            </div>
            <p className="text-xs text-indigo-100 mt-1">
              Ideias de imagens e símbolos para decorares as tuas placas de Papelão e Plástico!
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-indigo-900/50 p-1 rounded-xl text-xs overflow-x-auto">
            <button
              onClick={() => setActiveFilter('todos')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'todos' ? 'bg-white text-indigo-900 shadow-2xs' : 'text-indigo-200 hover:text-white'
              }`}
            >
              Todos ({STICKERS.length})
            </button>
            <button
              onClick={() => setActiveFilter('papelao')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'papelao' ? 'bg-blue-500 text-white shadow-2xs' : 'text-indigo-200 hover:text-white'
              }`}
            >
              🟦 Papelão
            </button>
            <button
              onClick={() => setActiveFilter('plastico')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'plastico' ? 'bg-amber-400 text-slate-950 font-bold shadow-2xs' : 'text-indigo-200 hover:text-white'
              }`}
            >
              🟨 Plástico
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-5">
        {/* Golden rule callout for kids */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-3.5 text-xs text-amber-950 flex items-start gap-3">
          <span className="text-2xl shrink-0">💡</span>
          <div>
            <strong className="text-amber-950 block text-xs">
              Como colocar imagens no Word sem desarrumar o texto:
            </strong>
            <ol className="mt-1 space-y-1 text-slate-700 text-xs list-decimal list-inside font-medium">
              <li>Vai a <strong>Inserir &gt; Imagens</strong> e escolhe a imagem que queres.</li>
              <li>Clica em cima da imagem com o <strong>botão direito do rato</strong>.</li>
              <li>Clica em <strong>Moldar Texto</strong> e escolhe <strong>Em Frente do Texto</strong> (assim podes arrastá-la com o rato para onde quiseres!).</li>
              <li>Para encolher ou aumentar, puxa <strong>sempre pelas bolinhas dos cantos</strong> para não ficar deformada.</li>
            </ol>
          </div>
        </div>

        {/* Grid of stickers/images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map(item => (
            <div
              key={item.id}
              className="border border-slate-200 rounded-xl p-3.5 hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between bg-slate-50/50"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl p-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    {item.emoji}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.category === 'papelao'
                      ? 'bg-blue-100 text-blue-800'
                      : item.category === 'plastico'
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.suggestedPlaca}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-900">
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleCopySticker(item)}
                  className={`w-full py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    copiedId === item.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                  }`}
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado! Cola no Word (Ctrl + V)</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Símbolo</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
