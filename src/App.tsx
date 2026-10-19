/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { INSTRUCTIONS_DATA, VIDEO_INSTRUCTION } from './data/instructionsData';
import { InstructionItem } from './types/worksheet';
import { OfficialHeader } from './components/OfficialHeader';
import { InstructionCard } from './components/InstructionCard';
import { InteractiveSignSimulator } from './components/InteractiveSignSimulator';
import { ExamplesGallery } from './components/ExamplesGallery';
import { VideoSection } from './components/VideoSection';
import { PadletSimulatorModal } from './components/PadletSimulatorModal';
import { PrintWorksheetView } from './components/PrintWorksheetView';
import { CheckCircle2, RotateCcw, Filter, ExternalLink, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'ficha' | 'simulador' | 'galeria' | 'video' | 'imprimir'>('ficha');
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('ecopontos_completed_steps');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activePhaseFilter, setActivePhaseFilter] = useState<'todos' | 'papelao' | 'plastico' | 'conclusao'>('todos');
  const [isPadletModalOpen, setIsPadletModalOpen] = useState(false);
  const [simulatorInitialType, setSimulatorInitialType] = useState<'papelao' | 'plastico'>('papelao');

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem('ecopontos_completed_steps', JSON.stringify(completedSteps));
    } catch {
      // storage unavailable
    }
  }, [completedSteps]);

  const handleToggleStep = (stepId: number) => {
    setCompletedSteps(prev =>
      prev.includes(stepId) ? prev.filter(id => id !== stepId) : [...prev, stepId]
    );
  };

  const handleMarkMultipleSteps = (stepNumbers: number[]) => {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      stepNumbers.forEach(n => next.add(n));
      return Array.from(next);
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Queres mesmo reiniciar o progresso da ficha de trabalho?')) {
      setCompletedSteps([]);
    }
  };

  const handleOpenSimulatorForStep = (instruction: InstructionItem) => {
    if (instruction.phase === 'plastico') {
      setSimulatorInitialType('plastico');
    } else {
      setSimulatorInitialType('papelao');
    }
    setActiveTab('simulador');
  };

  // Filter instructions
  const filteredInstructions = INSTRUCTIONS_DATA.filter(inst => {
    if (activePhaseFilter === 'todos') return true;
    return inst.phase === activePhaseFilter;
  });

  if (activeTab === 'imprimir') {
    return <PrintWorksheetView onBack={() => setActiveTab('ficha')} />;
  }

  const completedCount = completedSteps.length;
  const totalCount = INSTRUCTIONS_DATA.length;

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Official Institutional Header */}
      <OfficialHeader
        completedStepsCount={completedCount}
        totalStepsCount={totalCount}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onPrintWorksheet={() => setActiveTab('imprimir')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Tab 1: Full Interactive Worksheet with Examples (Default) */}
        {activeTab === 'ficha' && (
          <div className="space-y-6">
            {/* Quick Hero Introduction Card */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 border border-blue-400/30 px-2.5 py-1 rounded-md inline-block mb-3">
                  Instruções Originais e Exemplos Práticos
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                  Criação de Placas de Ecoponto no Microsoft Word
                </h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Esta ficha contém as <strong>15 instruções oficiais exatamente iguais à ficha original</strong>, agora acompanhadas por exemplos visuais, passos no Word, atalhos de teclado e dicas para que o teu trabalho fique perfeito.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                  <button
                    onClick={() => setActiveTab('simulador')}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Abrir Simulador Word</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('video')}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 backdrop-blur-xs"
                  >
                    <span>Ver Vídeo da Ficha</span>
                  </button>

                  <button
                    onClick={() => setIsPadletModalOpen(true)}
                    className="bg-pink-600/80 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Mural Padlet (Passo 15)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Video Section Bullet (exact verbatim from worksheet) */}
            <VideoSection />

            {/* Filter and Progress Bar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Category Segmented Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1 shrink-0">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Filtrar:</span>
                </span>

                <button
                  onClick={() => setActivePhaseFilter('todos')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    activePhaseFilter === 'todos'
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Todos os Passos (15)
                </button>

                <button
                  onClick={() => setActivePhaseFilter('papelao')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    activePhaseFilter === 'papelao'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  🟦 Placa Papelão (1 a 7)
                </button>

                <button
                  onClick={() => setActivePhaseFilter('plastico')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    activePhaseFilter === 'plastico'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  🟨 Placa Plástico (8 a 14)
                </button>

                <button
                  onClick={() => setActivePhaseFilter('conclusao')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    activePhaseFilter === 'conclusao'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  }`}
                >
                  🚀 Entrega Padlet (15)
                </button>
              </div>

              {/* Reset progress */}
              <div className="flex items-center gap-3 shrink-0 self-end md:self-auto text-xs">
                {completedCount > 0 && (
                  <button
                    onClick={handleResetProgress}
                    className="text-slate-500 hover:text-rose-600 flex items-center gap-1 transition-colors cursor-pointer"
                    title="Reiniciar checkboxes"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reiniciar checklist</span>
                  </button>
                )}
              </div>
            </div>

            {/* List of Verbatim Instructions with Expanded Examples */}
            <div className="space-y-4">
              {filteredInstructions.map(instruction => (
                <InstructionCard
                  key={instruction.id}
                  instruction={instruction}
                  isCompleted={completedSteps.includes(instruction.id)}
                  onToggleComplete={handleToggleStep}
                  onOpenSimulatorForStep={handleOpenSimulatorForStep}
                />
              ))}
            </div>

            {/* Padlet quick banner at end of list */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-200">
                  Passo 15 Final
                </span>
                <h3 className="text-base font-bold">
                  Pronto para enviar o teu trabalho para o Padlet?
                </h3>
                <p className="text-xs text-pink-100 mt-0.5">
                  Simula ou confere os passos exatos de publicação com o nome de ficheiro correto.
                </p>
              </div>

              <button
                onClick={() => setIsPadletModalOpen(true)}
                className="bg-white text-pink-700 hover:bg-pink-50 font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                Abrir Simulador de Padlet →
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Word Sign Simulator */}
        {activeTab === 'simulador' && (
          <div className="space-y-6">
            <InteractiveSignSimulator
              initialType={simulatorInitialType}
              onMarkStepCompleted={handleMarkMultipleSteps}
            />
          </div>
        )}

        {/* Tab 3: Model Examples Gallery */}
        {activeTab === 'galeria' && (
          <ExamplesGallery />
        )}

        {/* Tab 4: Video and Recycling sorting */}
        {activeTab === 'video' && (
          <div className="space-y-6">
            <VideoSection />
          </div>
        )}
      </main>

      {/* Interactive Padlet Simulator Modal for Step 15 */}
      <PadletSimulatorModal
        isOpen={isPadletModalOpen}
        onClose={() => setIsPadletModalOpen(false)}
        onCompleteStep15={() => {
          if (!completedSteps.includes(15)) {
            setCompletedSteps(prev => [...prev, 15]);
          }
        }}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p className="font-semibold text-slate-700">
              Agrupamento de Escolas de Fernando Pessoa · Escola Básica 2, 3 Fernando Pessoa
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Ficha de Trabalho: Elaboração de ecopontos · Disciplina de TIC / Cidadania e Desenvolvimento
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setActiveTab('ficha')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Ficha
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('simulador')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Simulador
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('galeria')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Exemplos
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('imprimir')}
              className="hover:text-slate-900 transition-colors cursor-pointer font-bold text-slate-700"
            >
              Imprimir Ficha
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
