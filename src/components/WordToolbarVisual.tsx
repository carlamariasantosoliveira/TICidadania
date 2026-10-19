import React from 'react';

export interface WordActionStep {
  tabName: 'Base' | 'Esquema de Página' | 'Inserir' | 'Ficheiro';
  groupName?: string;
  iconType:
    | 'text-type'
    | 'orientation-landscape'
    | 'font-dropdown'
    | 'font-color'
    | 'font-size'
    | 'align-center'
    | 'page-borders'
    | 'new-page'
    | 'insert-images'
    | 'save-padlet';
  highlightButtonName: string;
  simpleKidHint: string;
}

export const WordToolbarVisual: React.FC<{ action: WordActionStep }> = ({ action }) => {
  // Exact tabs from the user's screenshot
  const standardTabs = [
    'Base',
    'Inserir',
    'Esquema de Página',
    'Referências',
    'Mailings',
    'Rever',
    'Ver',
  ];

  const currentTab = action.tabName;

  return (
    <div className="bg-[#f0f3f6] border border-[#a0a5ad] rounded-xl overflow-hidden shadow-md select-none text-slate-800">
      {/* 1. Word Title Bar (Exact match to screenshot: "Documento1 - Microsoft Word") */}
      <div className="bg-[#ffffff] border-b border-[#d8d8d8] px-3 py-1 flex items-center justify-between text-xs">
        {/* Quick Access Toolbar */}
        <div className="flex items-center gap-1.5">
          {/* Word Icon */}
          <div className="w-5 h-5 bg-[#1979ca] rounded-xs flex items-center justify-center text-white font-bold text-[11px] shadow-2xs">
            W
          </div>
          {/* Save floppy disk */}
          <button className="w-5 h-5 flex items-center justify-center text-[#1979ca] hover:bg-[#e5f1fb] rounded-xs text-xs" title="Guardar">
            💾
          </button>
          {/* Undo / Redo */}
          <button className="w-5 h-5 flex items-center justify-center text-slate-600 hover:bg-[#e5f1fb] rounded-xs text-[11px]" title="Anular">
            ↩
          </button>
          <button className="w-5 h-5 flex items-center justify-center text-slate-400 rounded-xs text-[11px]" title="Refazer">
            ↪
          </button>
          <span className="text-[10px] text-slate-400">▾</span>
        </div>

        {/* Center Document Title */}
        <div className="font-semibold text-slate-700 text-xs tracking-tight">
          Documento1 - Microsoft Word
        </div>

        {/* Window controls */}
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <span className="hover:text-slate-900 cursor-pointer">─</span>
          <span className="hover:text-slate-900 cursor-pointer">▢</span>
          <span className="hover:text-red-600 cursor-pointer text-sm">✕</span>
        </div>
      </div>

      {/* 2. Ribbon Tabs Bar (Exact headers from the screenshot!) */}
      <div className="bg-[#dce6f2] px-2 pt-1 border-b border-[#b9c6d4] flex items-center gap-0.5 overflow-x-auto text-xs">
        {/* Solid Blue "Ficheiro" Tab from screenshot */}
        <div
          className={`px-3 py-1.5 font-bold rounded-t-xs text-xs flex items-center gap-1 cursor-default ${
            currentTab === 'Ficheiro'
              ? 'bg-[#1b65b8] text-white shadow-xs'
              : 'bg-[#1b65b8] text-white hover:bg-[#155399]'
          }`}
        >
          <span>Ficheiro</span>
        </div>

        {/* The other tabs */}
        {standardTabs.map(tab => {
          const isActive = tab === currentTab;
          return (
            <div
              key={tab}
              className={`px-3 py-1.5 text-xs font-semibold rounded-t-xs transition-colors flex items-center gap-1 cursor-default ${
                isActive
                  ? 'bg-white text-slate-900 border-t border-x border-[#b9c6d4] -mb-px font-bold shadow-2xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-[#e8f1fa]'
              }`}
            >
              <span>{tab}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      {/* 3. The Ribbon Body: Displays the exact tools and groups in Microsoft Word */}
      <div className="bg-white p-3 border-b border-slate-300">
        {/* TAB: BASE (Tipo de Letra, Parágrafo, etc.) */}
        {currentTab === 'Base' && (
          <div className="flex flex-wrap items-stretch gap-4">
            {/* Group: Tipo de Letra */}
            <div
              className={`flex flex-col justify-between p-2 rounded-lg border transition-all ${
                ['font-dropdown', 'font-size', 'font-color', 'text-type'].includes(action.iconType)
                  ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-300/80 shadow-xs'
                  : 'bg-[#fbfbfb] border-slate-200'
              }`}
            >
              <div className="space-y-1.5">
                {/* Row 1: Font selector + Size + A^ Av */}
                <div className="flex items-center gap-1">
                  {/* Font dropdown */}
                  <div
                    className={`bg-white border rounded px-2 py-0.5 flex items-center justify-between gap-1 shadow-2xs ${
                      action.iconType === 'font-dropdown'
                        ? 'border-blue-600 ring-2 ring-blue-400 bg-blue-50/50'
                        : 'border-slate-300'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-slate-800 truncate max-w-[100px]">
                      {action.iconType === 'font-dropdown' ? 'Arial Black' : 'Calibri (Corpo)'}
                    </span>
                    <span className="text-[9px] text-slate-500">▾</span>
                  </div>

                  {/* Font size */}
                  <div
                    className={`bg-white border rounded px-1.5 py-0.5 flex items-center gap-1 shadow-2xs ${
                      action.iconType === 'font-size'
                        ? 'border-blue-600 ring-2 ring-blue-400 bg-blue-50/50'
                        : 'border-slate-300'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-slate-800">
                      {action.iconType === 'font-size' ? '90' : '11'}
                    </span>
                    <span className="text-[9px] text-slate-500">▾</span>
                  </div>

                  {/* A^ and Av */}
                  <div className="flex items-center">
                    <button
                      className={`w-5 h-5 flex items-center justify-center text-[11px] font-bold rounded ${
                        action.iconType === 'font-size'
                          ? 'bg-blue-600 text-white font-black'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                      title="Aumentar Tamanho da Letra"
                    >
                      A<sup>▲</sup>
                    </button>
                    <button className="w-5 h-5 flex items-center justify-center text-[10px] text-slate-600 hover:bg-slate-100 rounded">
                      A<sup>▼</sup>
                    </button>
                  </div>
                </div>

                {/* Row 2: N I S and Font Color A */}
                <div className="flex items-center gap-1 pt-0.5">
                  <button
                    className={`w-6 h-6 flex items-center justify-center text-xs font-black rounded ${
                      action.iconType === 'font-dropdown'
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-slate-200 text-slate-800'
                    }`}
                    title="Negrito"
                  >
                    N
                  </button>
                  <button className="w-6 h-6 flex items-center justify-center text-xs italic font-serif hover:bg-slate-200 text-slate-700">
                    I
                  </button>
                  <button className="w-6 h-6 flex items-center justify-center text-xs underline hover:bg-slate-200 text-slate-700">
                    S
                  </button>

                  <div className="h-4 w-px bg-slate-300 mx-0.5" />

                  {/* The Word Font Color Button: A with colored bar */}
                  <div
                    className={`flex items-center rounded p-0.5 ${
                      action.iconType === 'font-color'
                        ? 'bg-amber-200 ring-2 ring-amber-500 shadow-xs'
                        : 'hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex flex-col items-center px-1">
                      <span className="text-sm font-black text-slate-900 leading-none">A</span>
                      <div
                        className="w-4 h-1 rounded-full mt-0.5"
                        style={{
                          backgroundColor:
                            action.highlightButtonName.includes('Amarelo') ? '#EAB308' : '#1D4ED8',
                        }}
                      />
                    </div>
                    <span className="text-[9px] text-slate-500">▾</span>
                  </div>
                </div>
              </div>

              {/* Group caption */}
              <div className="text-[10px] text-center text-slate-500 font-semibold pt-1 border-t border-slate-200 mt-1 flex items-center justify-center gap-1">
                <span>Tipo de Letra</span>
                <span className="text-[8px] opacity-70">⇲</span>
              </div>
            </div>

            {/* Group: Parágrafo (Alignments: Left, Center, Right, Justify) */}
            <div
              className={`flex flex-col justify-between p-2 rounded-lg border transition-all ${
                action.iconType === 'align-center'
                  ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-300/80 shadow-xs'
                  : 'bg-[#fbfbfb] border-slate-200'
              }`}
            >
              <div className="space-y-1">
                {/* Row 1: Bullets & Lists */}
                <div className="flex items-center gap-1 opacity-70">
                  <span className="text-xs">≡⋮</span>
                  <span className="text-xs">123</span>
                  <span className="text-xs">¶</span>
                </div>

                {/* Row 2: Alignment Buttons */}
                <div className="flex items-center gap-1 pt-1">
                  {/* Left */}
                  <div className="w-6 h-6 border border-slate-300 rounded flex flex-col items-start justify-center gap-0.5 px-1 opacity-50">
                    <div className="w-full h-0.5 bg-slate-700" />
                    <div className="w-3/4 h-0.5 bg-slate-700" />
                    <div className="w-full h-0.5 bg-slate-700" />
                  </div>

                  {/* Center (HIGHLIGHTED) */}
                  <div
                    className={`w-7 h-7 rounded flex flex-col items-center justify-center gap-0.5 px-1 shadow-xs transition-all ${
                      action.iconType === 'align-center'
                        ? 'bg-blue-600 text-white ring-2 ring-blue-400 border border-blue-700'
                        : 'border border-slate-300 bg-white'
                    }`}
                    title="Centrar (Ctrl + E)"
                  >
                    <div className={`w-4 h-0.5 rounded-full ${action.iconType === 'align-center' ? 'bg-white' : 'bg-slate-800'}`} />
                    <div className={`w-2.5 h-0.5 rounded-full ${action.iconType === 'align-center' ? 'bg-white' : 'bg-slate-800'}`} />
                    <div className={`w-4 h-0.5 rounded-full ${action.iconType === 'align-center' ? 'bg-white' : 'bg-slate-800'}`} />
                    <div className={`w-2 h-0.5 rounded-full ${action.iconType === 'align-center' ? 'bg-white' : 'bg-slate-800'}`} />
                  </div>

                  {/* Right */}
                  <div className="w-6 h-6 border border-slate-300 rounded flex flex-col items-end justify-center gap-0.5 px-1 opacity-50">
                    <div className="w-full h-0.5 bg-slate-700" />
                    <div className="w-3/4 h-0.5 bg-slate-700" />
                    <div className="w-full h-0.5 bg-slate-700" />
                  </div>

                  {/* Fill bucket */}
                  <div className="w-6 h-6 border border-slate-300 rounded flex items-center justify-center text-xs opacity-70">
                    🪣
                  </div>
                </div>
              </div>

              {/* Group caption */}
              <div className="text-[10px] text-center text-slate-500 font-semibold pt-1 border-t border-slate-200 mt-1 flex items-center justify-center gap-1">
                <span>Parágrafo</span>
                <span className="text-[8px] opacity-70">⇲</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB: ESQUEMA DE PÁGINA (Orientação, Margens, Limites de Página) */}
        {currentTab === 'Esquema de Página' && (
          <div className="flex flex-wrap items-stretch gap-4">
            {/* Group: Configurar Página (Orientação Horizontal) */}
            <div
              className={`flex flex-col justify-between p-2 rounded-lg border transition-all ${
                action.iconType === 'orientation-landscape'
                  ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-300/80 shadow-xs'
                  : 'bg-[#fbfbfb] border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Margins */}
                <div className="flex flex-col items-center p-1 opacity-60">
                  <div className="w-6 h-8 border border-slate-400 bg-white" />
                  <span className="text-[9px] text-slate-600 mt-1">Margens</span>
                </div>

                {/* Orientação (HIGHLIGHTED!) */}
                <div
                  className={`flex flex-col items-center p-1.5 rounded-md border shadow-xs transition-all ${
                    action.iconType === 'orientation-landscape'
                      ? 'bg-white border-blue-600 ring-2 ring-blue-400'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {/* Rotating Sheet Icon */}
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-7 h-5 border-2 border-blue-700 bg-blue-100 rounded-2xs flex items-center justify-center">
                      <span className="text-[8px] font-bold text-blue-700">A4</span>
                    </div>
                    <span className="text-[10px] text-slate-600">▾</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-900">Orientação</span>
                </div>

                {/* Submenu Dropdown Choice: Horizontal */}
                {action.iconType === 'orientation-landscape' && (
                  <div className="bg-white border-2 border-blue-600 rounded-md p-2 shadow-md flex items-center gap-2">
                    <div className="w-8 h-5 border-2 border-blue-600 bg-blue-50 rounded-2xs flex items-center justify-center text-[9px] font-bold text-blue-700">
                      Paisagem
                    </div>
                    <div>
                      <span className="text-xs font-black text-blue-900 block">Horizontal</span>
                      <span className="text-[10px] text-slate-500 block">Folha deitada</span>
                    </div>
                    <span className="text-emerald-600 font-bold ml-1">✓</span>
                  </div>
                )}
              </div>

              <div className="text-[10px] text-center text-slate-500 font-semibold pt-1 border-t border-slate-200 mt-1">
                Configurar Página
              </div>
            </div>

            {/* Group: Fundo da Página (Limites de Página para Decorações!) */}
            <div
              className={`flex flex-col justify-between p-2 rounded-lg border transition-all ${
                action.iconType === 'page-borders'
                  ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-300/80 shadow-xs'
                  : 'bg-[#fbfbfb] border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Limites de Página (HIGHLIGHTED!) */}
                <div
                  className={`flex flex-col items-center p-1.5 rounded-md border shadow-xs transition-all ${
                    action.iconType === 'page-borders'
                      ? 'bg-white border-blue-600 ring-2 ring-blue-400'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  <div className="w-7 h-7 border-2 border-dashed border-blue-600 rounded-xs flex items-center justify-center mb-1 bg-blue-50">
                    <div className="w-3.5 h-3.5 border border-blue-400 bg-white" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-900">Limites de Página</span>
                </div>

                <div className="text-left text-xs">
                  <span className="font-bold text-blue-900 block">Moldura Decorativa</span>
                  <span className="text-[10px] text-slate-500">
                    Para decorar a folha à volta!
                  </span>
                </div>
              </div>

              <div className="text-[10px] text-center text-slate-500 font-semibold pt-1 border-t border-slate-200 mt-1">
                Fundo da Página
              </div>
            </div>
          </div>
        )}

        {/* TAB: INSERIR (Quebra de Página, Formas, Imagens) */}
        {currentTab === 'Inserir' && (
          <div className="flex flex-wrap items-stretch gap-4">
            {/* Group: Páginas (Quebra de Página) */}
            {action.iconType === 'new-page' && (
              <div className="bg-amber-50/70 border-amber-400 ring-2 ring-amber-300/80 p-2 rounded-lg border flex flex-col justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="bg-white border-2 border-blue-600 rounded-md p-1.5 shadow-xs flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-4 h-6 border border-slate-400 bg-white" />
                      <span className="text-blue-600 text-xs font-bold">➔</span>
                      <div className="w-4 h-6 border-2 border-blue-600 bg-blue-100" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-900">Quebra de Página</span>
                  </div>

                  <div className="text-left text-xs">
                    <span className="font-bold text-blue-900 block">Folha Nova em Branco</span>
                    <span className="text-[10px] text-slate-500">
                      Cria a folha número 2 para a placa de Plástico!
                    </span>
                  </div>
                </div>

                <div className="text-[10px] text-center text-slate-500 font-semibold pt-1 border-t border-slate-200 mt-1">
                  Páginas
                </div>
              </div>
            )}

            {/* Group: Ilustrações (Imagens / ClipArt / Formas) - HIGHLIGHTED FOR STEP 15! */}
            {action.iconType === 'insert-images' && (
              <div className="bg-amber-50/70 border-amber-400 ring-2 ring-amber-300/80 p-2 rounded-lg border flex flex-col justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  {/* Botão Imagens */}
                  <div className="bg-white border-2 border-blue-600 rounded-md p-2 shadow-xs flex flex-col items-center">
                    <div className="w-8 h-8 rounded border border-blue-400 bg-blue-50 flex items-center justify-center text-lg mb-1 shadow-2xs">
                      🖼️
                    </div>
                    <span className="text-[10px] font-bold text-blue-900">Imagens</span>
                  </div>

                  {/* Botão ClipArt */}
                  <div className="bg-white border border-slate-300 rounded-md p-2 shadow-2xs flex flex-col items-center opacity-85">
                    <div className="w-8 h-8 rounded border border-slate-300 bg-slate-50 flex items-center justify-center text-lg mb-1">
                      🎨
                    </div>
                    <span className="text-[10px] font-bold text-slate-700">ClipArt</span>
                  </div>

                  {/* Botão Formas */}
                  <div className="bg-white border border-slate-300 rounded-md p-2 shadow-2xs flex flex-col items-center opacity-85">
                    <div className="w-8 h-8 rounded border border-slate-300 bg-slate-50 flex items-center justify-center text-lg mb-1">
                      🔷
                    </div>
                    <span className="text-[10px] font-bold text-slate-700">Formas</span>
                  </div>

                  {/* Truque secreto de informática */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-xs text-blue-950">
                    <span className="font-bold block text-blue-900">🌟 Segredo do 5.º Ano:</span>
                    <span className="text-[11px] block text-slate-700">
                      Clica na imagem com o botão direito ➔ <strong>Moldar Texto</strong> ➔ <strong>Em Frente do Texto</strong> (para a imagem mexer-se livremente sem fugir!).
                    </span>
                  </div>
                </div>

                <div className="text-[10px] text-center text-slate-500 font-semibold pt-1 border-t border-slate-200 mt-1">
                  Ilustrações
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB: FICHEIRO (Guardar e Partilhar) */}
        {currentTab === 'Ficheiro' && (
          <div className="flex flex-wrap items-stretch gap-4">
            <div className="bg-pink-50 border-2 border-pink-400 p-2 rounded-lg flex items-center gap-3 shadow-xs">
              <div className="bg-white border border-slate-300 rounded p-1.5 flex flex-col items-center shadow-xs">
                <span className="text-xl">💾</span>
                <span className="text-[10px] font-bold text-slate-800">Guardar Como</span>
              </div>
              <span className="text-pink-600 font-bold">➔</span>
              <div className="bg-pink-600 text-white rounded p-1.5 flex flex-col items-center shadow-xs">
                <span className="text-xl">➕</span>
                <span className="text-[10px] font-bold">Publicar no Padlet</span>
              </div>
            </div>
          </div>
        )}

        {/* Visual guidance box for 10-year-olds */}
        <div className="mt-2.5 pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="bg-[#1b65b8] text-white font-bold text-[10px] px-2 py-0.5 rounded">
              Separador: {action.tabName}
            </span>
            <span className="text-slate-600">
              Botão: <strong className="text-slate-900">{action.highlightButtonName}</strong>
            </span>
          </div>

          <div className="text-amber-900 font-bold text-[11px] bg-amber-100/90 border border-amber-300 px-2 py-1 rounded-md">
            👉 {action.simpleKidHint}
          </div>
        </div>
      </div>
    </div>
  );
};
