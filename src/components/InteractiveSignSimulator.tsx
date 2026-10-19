import React, { useState, useRef } from 'react';
import { PlacaState } from '../types/worksheet';
import { Printer, Download, Sparkles, RotateCw, AlignCenter, AlignLeft, AlignRight, CheckCircle2 } from 'lucide-react';

interface InteractiveSignSimulatorProps {
  initialType?: 'papelao' | 'plastico';
  onMarkStepCompleted?: (stepNumbers: number[]) => void;
}

export const InteractiveSignSimulator: React.FC<InteractiveSignSimulatorProps> = ({
  initialType = 'papelao',
  onMarkStepCompleted,
}) => {
  const [activePreset, setActivePreset] = useState<'papelao' | 'plastico'>(initialType);
  const printAreaRef = useRef<HTMLDivElement>(null);

  // Initial State matching good defaults for Word
  const [placa, setPlaca] = useState<PlacaState>({
    word: 'PAPELÃO',
    anoTurma: '5.º Ano — Turma B',
    nomeAluno: 'Aluno(a) Exemplo',
    orientation: 'horizontal',
    fontFamily: "'Arial Black', Impact, sans-serif",
    fontSize: 92,
    textColor: '#1D4ED8', // Blue
    backgroundColor: '#FFFFFF',
    alignment: 'center',
    hasBorder: true,
    borderStyle: 'double',
    borderColor: '#1D4ED8',
    showRecycleIcon: true,
    showWasteIcons: true,
    showEcoMotto: true,
    ecoMottoText: 'Separar hoje para proteger o amanhã',
  });

  // Switch presets
  const handleSelectPreset = (type: 'papelao' | 'plastico') => {
    setActivePreset(type);
    if (type === 'papelao') {
      setPlaca(prev => ({
        ...prev,
        word: 'PAPELÃO',
        textColor: '#1D4ED8',
        backgroundColor: '#FFFFFF',
        borderColor: '#1D4ED8',
        borderStyle: 'double',
        hasBorder: true,
        orientation: 'horizontal',
        alignment: 'center',
        showRecycleIcon: true,
        showWasteIcons: true,
        showEcoMotto: true,
        ecoMottoText: 'Separar hoje para proteger o amanhã',
      }));
      if (onMarkStepCompleted) {
        onMarkStepCompleted([1, 2, 3, 4, 5, 6, 7]);
      }
    } else {
      setPlaca(prev => ({
        ...prev,
        word: 'PLÁSTICO',
        textColor: '#713F12', // Strong brown/gold for yellow contrast
        backgroundColor: '#FEF08A', // Yellow background
        borderColor: '#CA8A04',
        borderStyle: 'solid',
        hasBorder: true,
        orientation: 'horizontal',
        alignment: 'center',
        showRecycleIcon: true,
        showWasteIcons: true,
        showEcoMotto: true,
        ecoMottoText: 'Espalma as embalagens antes de reciclar!',
      }));
      if (onMarkStepCompleted) {
        onMarkStepCompleted([8, 9, 10, 11, 12, 13, 14]);
      }
    }
  };

  // Font options
  const FONT_OPTIONS = [
    { label: 'Arial Black (Grosso e Visível)', value: "'Arial Black', Impact, sans-serif" },
    { label: 'Impact (Imponente e Marcante)', value: "Impact, 'Arial Black', sans-serif" },
    { label: 'Comic Neue (Amigável e Escolar)', value: "'Comic Neue', 'Comic Sans MS', cursive" },
    { label: 'Trebuchet MS (Moderna e Legível)', value: "'Trebuchet MS', sans-serif" },
    { label: 'Bricolage Grotesque (Marcante)', value: "'Bricolage Grotesque', sans-serif" },
    { label: 'Verdana Bold (Clássica)', value: "Verdana, Geneva, sans-serif" },
  ];

  // Quick color presets
  const COLOR_PALETTES = [
    {
      label: 'Azul Papelão (Oficial)',
      textColor: '#1D4ED8',
      bgColor: '#FFFFFF',
      borderColor: '#1D4ED8',
    },
    {
      label: 'Azul Invertido (Fundo Azul, Letras Brancas)',
      textColor: '#FFFFFF',
      bgColor: '#1D4ED8',
      borderColor: '#172554',
    },
    {
      label: 'Amarelo Plástico (Fundo Amarelo, Letras Escuras)',
      textColor: '#713F12',
      bgColor: '#FEF08A',
      borderColor: '#CA8A04',
    },
    {
      label: 'Amarelo Dourado (Letras Ouro em Branco)',
      textColor: '#A16207',
      bgColor: '#FFFFFF',
      borderColor: '#EAB308',
    },
  ];

  // Handle direct print of the plaque
  const handlePrintPlaque = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
      {/* Simulator Header */}
      <div className="bg-white border-b border-slate-200 p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Simulador Interativo de Placas de Ecoponto (Ambiente Word)
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Experimenta as orientações, tipos de letra, cores e decorações antes de fazeres o trabalho no Microsoft Word!
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSelectPreset('papelao')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activePreset === 'papelao'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <span>🟦 Placa 1: Papelão</span>
              {activePreset === 'papelao' && <CheckCircle2 className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => handleSelectPreset('plastico')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activePreset === 'plastico'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              <span>🟨 Placa 2: Plástico</span>
              {activePreset === 'plastico' && <CheckCircle2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Controls on Left, Live Canvas on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Controls Deck (Left 5 Cols) */}
        <div className="lg:col-span-5 p-4 sm:p-5 bg-white space-y-4 max-h-[800px] overflow-y-auto">
          {/* Step 1 & 8: Text Content */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>1 & 8. Palavra da Placa & Dados do Aluno:</span>
              <span className="text-[10px] text-slate-400 font-normal">Passos 1 e 8</span>
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={placa.word}
                onChange={e => setPlaca(prev => ({ ...prev, word: e.target.value.toUpperCase() }))}
                placeholder="Ex: PAPELÃO ou PLÁSTICO"
                className="w-full text-xs font-bold px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-500 font-medium">Nome do Aluno:</label>
                  <input
                    type="text"
                    value={placa.nomeAluno}
                    onChange={e => setPlaca(prev => ({ ...prev, nomeAluno: e.target.value }))}
                    placeholder="Teu Nome"
                    className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 font-medium">Ano e Turma:</label>
                  <input
                    type="text"
                    value={placa.anoTurma}
                    onChange={e => setPlaca(prev => ({ ...prev, anoTurma: e.target.value }))}
                    placeholder="Ex: 5.º Ano — Turma B"
                    className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 & 9: Orientation */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>2 & 9. Orientação da Folha:</span>
              <span className="text-[10px] text-blue-600 font-semibold">Horizontal Obrigatória</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPlaca(prev => ({ ...prev, orientation: 'horizontal' }))}
                className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  placa.orientation === 'horizontal'
                    ? 'border-blue-600 bg-blue-50 text-blue-800 ring-1 ring-blue-500'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="w-4 h-3 border-2 border-current rounded-2xs" />
                <span>Horizontal (Paisagem) ✓</span>
              </button>

              <button
                type="button"
                onClick={() => setPlaca(prev => ({ ...prev, orientation: 'vertical' }))}
                className={`py-2 px-3 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  placa.orientation === 'vertical'
                    ? 'border-rose-500 bg-rose-50 text-rose-800 ring-1 ring-rose-400'
                    : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <div className="w-3 h-4 border-2 border-current rounded-2xs" />
                <span>Vertical (Incorreta)</span>
              </button>
            </div>
          </div>

          {/* Step 3 & 10: Font selection */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>3 & 10. Tipo de Letra:</span>
              <span className="text-[10px] text-slate-400 font-normal">Passos 3 e 10</span>
            </label>
            <select
              value={placa.fontFamily}
              onChange={e => setPlaca(prev => ({ ...prev, fontFamily: e.target.value }))}
              className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {FONT_OPTIONS.map((f, i) => (
                <option key={i} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          {/* Step 4 & 11: Color Palette */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>4 & 11. Cores da Placa:</span>
              <span className="text-[10px] text-slate-400 font-normal">Passos 4 e 11</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              {COLOR_PALETTES.map((pal, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() =>
                    setPlaca(prev => ({
                      ...prev,
                      textColor: pal.textColor,
                      backgroundColor: pal.bgColor,
                      borderColor: pal.borderColor,
                    }))
                  }
                  className="p-1.5 rounded-lg border border-slate-200 hover:border-slate-400 text-[11px] text-left flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <div
                    className="w-4 h-4 rounded-full border border-slate-300 shrink-0"
                    style={{ backgroundColor: pal.bgColor }}
                  >
                    <div
                      className="w-2 h-2 rounded-full m-auto mt-1"
                      style={{ backgroundColor: pal.textColor }}
                    />
                  </div>
                  <span className="truncate font-medium text-slate-700">{pal.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <span className="text-slate-600">Cor Letra:</span>
                <input
                  type="color"
                  value={placa.textColor}
                  onChange={e => setPlaca(prev => ({ ...prev, textColor: e.target.value }))}
                  className="w-6 h-6 rounded cursor-pointer border border-slate-300"
                />
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <span className="text-slate-600">Cor Fundo:</span>
                <input
                  type="color"
                  value={placa.backgroundColor}
                  onChange={e => setPlaca(prev => ({ ...prev, backgroundColor: e.target.value }))}
                  className="w-6 h-6 rounded cursor-pointer border border-slate-300"
                />
              </label>
            </div>
          </div>

          {/* Step 5 & 12: Font size */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800">
                5 & 12. Tamanho da Letra ({placa.fontSize} pt):
              </label>
              <div className="flex gap-1">
                {[64, 80, 95, 110].map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPlaca(prev => ({ ...prev, fontSize: size }))}
                    className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors cursor-pointer ${
                      placa.fontSize === size
                        ? 'bg-blue-600 text-white border-blue-600 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {size} pt
                  </button>
                ))}
              </div>
            </div>
            <input
              type="range"
              min="40"
              max="130"
              value={placa.fontSize}
              onChange={e => setPlaca(prev => ({ ...prev, fontSize: Number(e.target.value) }))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Step 6 & 13: Alignment */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>6 & 13. Alinhamento:</span>
              <span className="text-[10px] text-blue-600 font-semibold">Centrado Obrigatório</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPlaca(prev => ({ ...prev, alignment: 'left' }))}
                className={`flex-1 py-1.5 rounded-lg border text-xs flex items-center justify-center gap-1 cursor-pointer ${
                  placa.alignment === 'left' ? 'bg-slate-800 text-white' : 'border-slate-200 text-slate-600'
                }`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
                <span>Esquerda</span>
              </button>
              <button
                type="button"
                onClick={() => setPlaca(prev => ({ ...prev, alignment: 'center' }))}
                className={`flex-1 py-1.5 rounded-lg border text-xs font-bold flex items-center justify-center gap-1 cursor-pointer ${
                  placa.alignment === 'center'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <AlignCenter className="w-3.5 h-3.5" />
                <span>Centrado ✓</span>
              </button>
              <button
                type="button"
                onClick={() => setPlaca(prev => ({ ...prev, alignment: 'right' }))}
                className={`flex-1 py-1.5 rounded-lg border text-xs flex items-center justify-center gap-1 cursor-pointer ${
                  placa.alignment === 'right' ? 'bg-slate-800 text-white' : 'border-slate-200 text-slate-600'
                }`}
              >
                <AlignRight className="w-3.5 h-3.5" />
                <span>Direita</span>
              </button>
            </div>
          </div>

          {/* Step 7 & 14: Decorate */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>7 & 14. Decorações ("se quiser"):</span>
              <span className="text-[10px] text-slate-400 font-normal">Passos 7 e 14</span>
            </label>
            <div className="space-y-1.5 text-xs">
              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={placa.hasBorder}
                  onChange={e => setPlaca(prev => ({ ...prev, hasBorder: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span>Moldura de página decorativa</span>
              </label>

              {placa.hasBorder && (
                <div className="flex gap-2 pl-6">
                  {(['solid', 'double', 'dashed'] as const).map(style => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setPlaca(prev => ({ ...prev, borderStyle: style }))}
                      className={`text-[10px] px-2 py-0.5 rounded border capitalize cursor-pointer ${
                        placa.borderStyle === style
                          ? 'bg-slate-900 text-white'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      {style === 'solid' ? 'Simples' : style === 'double' ? 'Dupla' : 'Tracejada'}
                    </button>
                  ))}
                </div>
              )}

              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={placa.showRecycleIcon}
                  onChange={e => setPlaca(prev => ({ ...prev, showRecycleIcon: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span>Símbolo da reciclagem (3 setas)</span>
              </label>

              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={placa.showWasteIcons}
                  onChange={e => setPlaca(prev => ({ ...prev, showWasteIcons: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span>Ícones dos resíduos aceites no ecoponto</span>
              </label>

              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={placa.showEcoMotto}
                  onChange={e => setPlaca(prev => ({ ...prev, showEcoMotto: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span>Frase ecológica no rodapé</span>
              </label>
            </div>
          </div>
        </div>

        {/* Live Canvas Stage (Right 7 Cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-slate-900/95 flex flex-col justify-between items-center text-white">
          <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Pré-visualização da Folha A4 em Tempo Real</span>
            </span>
            <span>
              {placa.orientation === 'horizontal' ? '297 × 210 mm (Horizontal)' : '210 × 297 mm (Vertical)'}
            </span>
          </div>

          {/* The Virtual Word Document Sheet */}
          <div className="w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden">
            <div
              ref={printAreaRef}
              id="printable-plaque-canvas"
              className={`relative transition-all duration-300 rounded-sm shadow-2xl flex flex-col justify-between p-6 select-none ${
                placa.orientation === 'horizontal'
                  ? 'w-full max-w-[560px] aspect-[1.414/1]'
                  : 'w-full max-w-[380px] aspect-[1/1.414]'
              }`}
              style={{
                backgroundColor: placa.backgroundColor,
                color: placa.textColor,
                border: placa.hasBorder
                  ? `${placa.borderStyle === 'double' ? '6px' : '4px'} ${placa.borderStyle} ${placa.borderColor}`
                  : 'none',
              }}
            >
              {/* Header with Student identification (Passo 1 e 8) */}
              <div className="flex items-center justify-between text-[11px] font-semibold opacity-90 border-b border-current pb-1.5 mb-2">
                <span className="tracking-wide uppercase font-bold text-[10px]">
                  Ecoponto Escolar · EB 2, 3 Fernando Pessoa
                </span>
                <span className="font-bold">
                  {placa.anoTurma || 'Ano / Turma'}
                </span>
              </div>

              {/* Main Center Word (Passos 1, 3, 4, 5, 6, 8, 10, 11, 12, 13) */}
              <div
                className={`my-auto flex flex-col justify-center ${
                  placa.alignment === 'center'
                    ? 'items-center text-center'
                    : placa.alignment === 'left'
                    ? 'items-start text-left'
                    : 'items-end text-right'
                }`}
              >
                {placa.showRecycleIcon && (
                  <div className="text-3xl sm:text-4xl mb-1 leading-none animate-bounce-slow">
                    ♻️
                  </div>
                )}

                <h1
                  className="font-black tracking-tight leading-none uppercase drop-shadow-xs"
                  style={{
                    fontFamily: placa.fontFamily,
                    fontSize: `${Math.round(placa.fontSize * 0.45)}px`,
                  }}
                >
                  {placa.word || 'NOME'}
                </h1>

                {placa.nomeAluno && (
                  <p className="text-[11px] font-medium opacity-80 mt-1">
                    Trabalho realizado por: <strong>{placa.nomeAluno}</strong>
                  </p>
                )}
              </div>

              {/* Footer decorations (Passos 7 e 14) */}
              <div className="pt-2 border-t border-current flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] font-medium opacity-90">
                {placa.showWasteIcons ? (
                  <div className="flex items-center gap-1.5 text-sm">
                    {placa.word.includes('PAPEL') ? (
                      <>
                        <span title="Caixas de Cartão">📦</span>
                        <span title="Jornais e Revistas">📰</span>
                        <span title="Folhas de Papel">📄</span>
                        <span className="text-[10px] opacity-80 font-bold ml-1">PAPEL E CARTÃO</span>
                      </>
                    ) : (
                      <>
                        <span title="Garrafas de Plástico">🧴</span>
                        <span title="Pacotes de Leite">🧃</span>
                        <span title="Latas de Bebidas">🥫</span>
                        <span className="text-[10px] opacity-80 font-bold ml-1">PLÁSTICO E METAL</span>
                      </>
                    )}
                  </div>
                ) : (
                  <span />
                )}

                {placa.showEcoMotto && (
                  <span className="italic text-[10px] font-semibold text-center">
                    "{placa.ecoMottoText}"
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800 text-xs">
            <div className="text-slate-400">
              💡 <strong>Dica Pedagógica:</strong> Cria a placa no Microsoft Word usando estes mesmos valores!
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrintPlaque}
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir Esta Placa</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
