import React from 'react';
import { INSTRUCTIONS_DATA, VIDEO_INSTRUCTION } from '../data/instructionsData';
import { Printer, ArrowLeft } from 'lucide-react';

interface PrintWorksheetViewProps {
  onBack: () => void;
}

export const PrintWorksheetView: React.FC<PrintWorksheetViewProps> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen p-4 sm:p-8 max-w-4xl mx-auto font-sans text-slate-900">
      {/* Non-printed navigation buttons */}
      <div className="print:hidden mb-6 flex items-center justify-between bg-slate-100 p-4 rounded-xl border border-slate-200">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white px-3 py-2 rounded-lg border border-slate-300 cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar à Aplicação Interativa</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-600 hidden sm:inline">
            Formato pronto para papel A4
          </span>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg cursor-pointer shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Agora (Ctrl + P)</span>
          </button>
        </div>
      </div>

      {/* Official Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-slate-800">
              REPÚBLICA PORTUGUESA
            </p>
            <p className="text-[10px] text-slate-600 font-semibold">
              EDUCAÇÃO, CIÊNCIA E INOVAÇÃO
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs font-bold text-slate-900">
              Agrupamento de Escolas de Fernando Pessoa
            </p>
            <p className="text-[10px] text-slate-500">
              Código de Estabelecimento: 171 190
            </p>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-800">
            Escola Básica 2, 3 Fernando Pessoa
          </p>
        </div>
      </div>

      {/* Student Identification Box */}
      <div className="border border-slate-400 rounded-lg p-3 mb-6 bg-slate-50/50 text-xs grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="col-span-2">
          <span className="font-bold text-slate-700">Nome do Aluno:</span>
          <div className="border-b border-dotted border-slate-500 h-5 mt-1" />
        </div>
        <div>
          <span className="font-bold text-slate-700">Ano / Turma:</span>
          <div className="border-b border-dotted border-slate-500 h-5 mt-1" />
        </div>
        <div>
          <span className="font-bold text-slate-700">N.º: _____ Data: ___/___/2026</span>
          <div className="border-b border-dotted border-slate-500 h-5 mt-1" />
        </div>
      </div>

      {/* Document Title (verbatim) */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 border-b-2 border-red-600 pb-1">
          <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">
            1
          </span>
          <h1 className="text-lg font-black uppercase tracking-tight text-slate-900">
            Ficha de trabalho - Elaboração de ecopontos
          </h1>
        </div>
      </div>

      {/* Video bullet (verbatim) */}
      <div className="bg-slate-100/80 border border-slate-300 rounded-lg p-3 mb-6 text-xs">
        <p className="font-bold text-slate-900">
          {VIDEO_INSTRUCTION.bulletText}
        </p>
        <p className="text-[11px] text-slate-600 mt-1 italic">
          (Atenção aos materiais aceites no ecoponto azul de papelão e no ecoponto amarelo de plástico)
        </p>
      </div>

      {/* The 15 Instructions in 2 columns or structured list with examples */}
      <div className="space-y-4">
        {INSTRUCTIONS_DATA.map(item => (
          <div
            key={item.id}
            className="border border-slate-300 rounded-lg p-3 text-xs flex flex-col justify-between break-inside-avoid"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 border border-slate-500 rounded-xs mt-0.5 shrink-0" />
              <div className="flex-1">
                {/* VERBATIM INSTRUCTION TEXT */}
                <p className="font-bold text-slate-900 text-xs">
                  {item.originalText}
                </p>

                {/* Practical Example & Word guidance */}
                <div className="mt-1.5 pl-2 border-l-2 border-blue-400 text-[11px] text-slate-700 space-y-0.5">
                  <p>
                    <strong className="text-blue-900">Como fazer no Word:</strong> {item.example.wordTab}
                  </p>
                  <p>
                    <strong className="text-slate-800">Exemplo prático:</strong> {item.example.explanation}
                  </p>
                  {item.example.recommendedValues && (
                    <p className="text-slate-600">
                      <strong>Recomendado:</strong> {item.example.recommendedValues.join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Teacher Grading & Rubric footer */}
      <div className="mt-8 pt-4 border-t-2 border-slate-900 grid grid-cols-2 gap-4 text-xs break-inside-avoid">
        <div className="border border-slate-300 rounded-lg p-3">
          <p className="font-bold text-slate-800 mb-1">Critérios de Avaliação:</p>
          <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
            <li>Orientação horizontal em ambas as folhas (Passos 2 e 9)</li>
            <li>Tipo de letra legível e tamanho adequado de placa (72pt+)</li>
            <li>Cores corretas: Azul (Papelão) e Amarelo com contraste (Plástico)</li>
            <li>Texto perfeitamente centrado (Ctrl + E)</li>
            <li>Entrega com sucesso no Padlet da turma com identificação</li>
          </ul>
        </div>

        <div className="border border-slate-300 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <p className="font-bold text-slate-800">Avaliação do Professor(a):</p>
            <div className="mt-2 text-xs space-y-1 text-slate-600">
              <p>Rubrica / Visto: ___________________________</p>
              <p>Classificação: [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 100% ] ou [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 20 ]</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 text-right mt-2">
            EB 2, 3 Fernando Pessoa · TIC
          </p>
        </div>
      </div>
    </div>
  );
};
