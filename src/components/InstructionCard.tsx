import React, { useState } from 'react';
import { InstructionItem } from '../types/worksheet';
import { WordToolbarVisual } from './WordToolbarVisual';
import { Check, ChevronDown, ChevronUp, ExternalLink, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

interface InstructionCardProps {
  instruction: InstructionItem;
  isCompleted: boolean;
  onToggleComplete: (id: number) => void;
  onOpenSimulatorForStep?: (instruction: InstructionItem) => void;
}

export const InstructionCard: React.FC<InstructionCardProps> = ({
  instruction,
  isCompleted,
  onToggleComplete,
  onOpenSimulatorForStep,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { example, wordAction, kidExplanation } = instruction;

  const isPapelao = instruction.phase === 'papelao';
  const isPlastico = instruction.phase === 'plastico';

  const badgeBg = isPapelao
    ? 'bg-blue-100 text-blue-900 border-blue-300'
    : isPlastico
    ? 'bg-amber-100 text-amber-950 border-amber-300'
    : 'bg-emerald-100 text-emerald-900 border-emerald-300';

  const phaseLabel = isPapelao
    ? '🟦 Folha 1: Papelão (Azul)'
    : isPlastico
    ? '🟨 Folha 2: Plástico (Amarelo)'
    : '🚀 Entrega no Padlet';

  return (
    <article
      id={`step-${instruction.stepNumber}`}
      className={`rounded-2xl border-2 transition-all duration-200 bg-white overflow-hidden ${
        isCompleted
          ? 'border-emerald-400 ring-2 ring-emerald-200/70 shadow-sm'
          : 'border-slate-200 hover:border-blue-400 shadow-xs'
      }`}
    >
      {/* Top Banner with EXACT Verbatim Instruction */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5 flex-1 min-w-0">
            {/* Big friendly interactive checkbox */}
            <button
              type="button"
              onClick={() => onToggleComplete(instruction.id)}
              className={`mt-0.5 w-7 h-7 rounded-xl border-2 flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-500 border-emerald-600 text-white shadow-xs scale-105'
                  : 'bg-slate-50 border-slate-300 text-transparent hover:border-blue-500 hover:bg-blue-50'
              }`}
              title={isCompleted ? 'Passo concluído! Clica para desmarcar' : 'Clica aqui quando fizeres este passo no Word'}
              aria-label={`Marcar passo ${instruction.stepNumber} como concluído`}
            >
              <Check className="w-5 h-5 stroke-[3]" />
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-lg border ${badgeBg}`}>
                  {phaseLabel}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {instruction.tag}
                </span>
                {isCompleted && (
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Feito no Word!</span>
                  </span>
                )}
              </div>

              {/* EXACT ORIGINAL INSTRUCTION (VERBATIM - 100% UNCHANGED) */}
              <h2
                className={`text-base sm:text-xl font-black tracking-tight ${
                  isCompleted ? 'text-slate-800' : 'text-slate-900'
                }`}
              >
                {instruction.originalText}
              </h2>

              {/* Instant Kid-Friendly Explanation */}
              <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium leading-relaxed bg-blue-50/60 border border-blue-100 rounded-xl p-3">
                <span className="font-bold text-blue-900 mr-1.5">👉 O que deves fazer:</span>
                {kidExplanation}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {onOpenSimulatorForStep && (
              <button
                onClick={() => onOpenSimulatorForStep(instruction)}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-white hover:bg-blue-600 bg-blue-100/80 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs"
                title="Experimentar antes de fazer no Word"
              >
                <span>Simular</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              title={isExpanded ? 'Esconder ajuda' : 'Mostrar botões do Word e exemplos'}
              aria-label="Expandir ou recolher"
            >
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Expanded Area: Visual Word Icons & Realistic Screenshots for Children */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
            {/* Visual Word Ribbon Mockup: EXACT ICONS FOUND IN MICROSOFT WORD */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                <span className="text-base">🖱️</span>
                <span>Procura exatamente este botão no teu Microsoft Word:</span>
              </div>

              {/* Renders the actual Microsoft Word toolbar with glowing highlighted tool */}
              <WordToolbarVisual action={wordAction} />
            </div>

            {/* Visual Live Example of the Sheet at this step */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              {/* Left: What the page in Word should look like right now */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 text-white flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2 mb-3">
                    <span className="flex items-center gap-1.5 font-bold text-amber-300">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Como deve ficar no teu ecrã:</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {example.sampleVisual?.isLandscape ? 'Folha Deitada (Horizontal)' : 'Folha em Pé'}
                    </span>
                  </div>

                  {/* Rendered sheet preview */}
                  {example.sampleVisual && (
                    <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 mb-3">
                      <div
                        className={`mx-auto rounded-md flex flex-col items-center justify-center text-center transition-all p-3 shadow-inner ${
                          example.sampleVisual.isLandscape
                            ? 'w-full max-w-sm aspect-16/10'
                            : 'w-48 aspect-3/4'
                        }`}
                        style={{
                          backgroundColor: example.sampleVisual.bgColor,
                          borderColor: example.sampleVisual.borderColor || '#cbd5e1',
                          borderWidth: '3px',
                          borderStyle: 'solid',
                        }}
                      >
                        <div
                          className="font-black tracking-tight whitespace-pre-line leading-tight"
                          style={{
                            color: example.sampleVisual.textColor,
                            fontFamily: example.sampleVisual.fontFamily,
                            fontSize: '24px',
                          }}
                        >
                          {example.sampleVisual.text}
                        </div>

                        {example.sampleVisual.hasDecorations && example.sampleVisual.decorItems && (
                          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                            {example.sampleVisual.decorItems.map((item, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] font-bold bg-white text-slate-900 px-2 py-0.5 rounded shadow-xs"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Practical Tip */}
                <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>💡 <strong>Dica do Word:</strong> {example.shortcut}</span>
                </div>
              </div>

              {/* Right: Checklist for 10-Year-Olds: "O que fazer" vs "Cuidado para não errares" */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-3.5 flex-1">
                  <div className="flex items-center gap-1.5 text-emerald-950 font-black text-xs mb-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>O que deves fazer (Correto):</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-emerald-950 font-medium">
                    {example.dosList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3.5 flex-1">
                  <div className="flex items-center gap-1.5 text-amber-950 font-black text-xs mb-2">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Cuidado para não errares:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-amber-950 font-medium">
                    {example.dontsList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-800 font-bold">⚠️</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
