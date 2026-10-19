import React from 'react';
import { Printer, Sparkles, CheckCircle2 } from 'lucide-react';

interface OfficialHeaderProps {
  completedStepsCount: number;
  totalStepsCount: number;
  activeTab: 'ficha' | 'simulador' | 'galeria' | 'video' | 'imprimir' | 'imagens';
  onTabChange: (tab: 'ficha' | 'simulador' | 'galeria' | 'video' | 'imprimir' | 'imagens') => void;
  onPrintWorksheet: () => void;
}

export const OfficialHeader: React.FC<OfficialHeaderProps> = ({
  completedStepsCount,
  totalStepsCount,
  activeTab,
  onTabChange,
  onPrintWorksheet,
}) => {
  const percentComplete = Math.round((completedStepsCount / totalStepsCount) * 100);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs print:hidden">
      {/* Top Ministry & School Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-3">
            {/* Portuguese Coat of Arms Emblem graphic */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-linear-to-r from-emerald-600 via-red-600 to-red-700 flex items-center justify-center text-white shadow-xs">
                <span className="text-[10px] font-bold tracking-tighter">PT</span>
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">
                  República Portuguesa
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  Educação, Ciência e Inovação
                </p>
              </div>
            </div>

            <div className="h-6 w-px bg-slate-200 hidden sm:block mx-1" />

            <div className="leading-tight">
              <p className="text-xs font-semibold text-slate-800">
                Agrupamento de Escolas de Fernando Pessoa
              </p>
              <p className="text-[11px] text-slate-500">
                Escola Básica 2, 3 Fernando Pessoa <span className="text-slate-400">· Cód. 171 190</span>
              </p>
            </div>
          </div>

          {/* Quick stats and Print trigger */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700">
              <CheckCircle2 className={`w-4 h-4 ${percentComplete === 100 ? 'text-emerald-600' : 'text-blue-600'}`} />
              <span>
                Progresso: <strong className="text-slate-900">{completedStepsCount} de {totalStepsCount}</strong> passos ({percentComplete}%)
              </span>
            </div>

            <button
              onClick={onPrintWorksheet}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
              title="Imprimir ou Guardar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Ficha</span>
            </button>
          </div>
        </div>

        {/* Main Document Title & View Switcher */}
        <div className="pt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                1
              </span>
              <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                Ficha de trabalho - Elaboração de ecopontos
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 ml-8">
              Guia com exemplos passo a passo para Microsoft Word e simulador interativo de placas
            </p>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium overflow-x-auto max-w-full">
            <button
              onClick={() => onTabChange('ficha')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'ficha'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📋 Ficha com Exemplos
            </button>
            <button
              onClick={() => onTabChange('simulador')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'simulador'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulador Word (Criar Placa)</span>
            </button>
            <button
              onClick={() => onTabChange('galeria')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'galeria'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🖼️ Galeria de Modelos
            </button>
            <button
              onClick={() => onTabChange('imagens')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'imagens'
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-indigo-700'
              }`}
            >
              <span>🎨 Banco de Imagens (Passo 15)</span>
            </button>
            <button
              onClick={() => onTabChange('video')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ▶️ Vídeo e Ecopontos
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
