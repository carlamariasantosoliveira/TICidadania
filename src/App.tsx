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
import { ImageStickerBank } from './components/ImageStickerBank';
import { PrintWorksheetView } from './components/PrintWorksheetView';
import {
  CheckCircle2,
  RotateCcw,
  Filter,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Award,
  Layers,
  ChevronRight,
  Smile
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'ficha' | 'simulador' | 'galeria' | 'video' | 'imprimir' | 'imagens'>('ficha');
  const [viewMode, setViewMode] = useState<'guiado' | 'lista'>('guiado'); // Default to kid-friendly Guided Mode!
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('ecopontos_completed_steps');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activePhaseFilter, setActivePhaseFilter] = useState<'todos' | 'papelao' | 'plastico' | 'conclusao'>('todos');
  const [simulatorInitialType, setSimulatorInitialType] = useState<'papelao' | 'plastico'>('papelao');

  // Save progress in localStorage
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
      setCurrentStepIndex(0);
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

  const handleNextStepGuided = () => {
    const currentInst = INSTRUCTIONS_DATA[currentStepIndex];
    if (!completedSteps.includes(currentInst.id)) {
      setCompletedSteps(prev => [...prev, currentInst.id]);
    }
    if (currentStepIndex < INSTRUCTIONS_DATA.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStepGuided = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  // Filter instructions in list mode
  const filteredInstructions = INSTRUCTIONS_DATA.filter(inst => {
    if (activePhaseFilter === 'todos') return true;
    return inst.phase === activePhaseFilter;
  });

  if (activeTab === 'imprimir') {
    return <PrintWorksheetView onBack={() => setActiveTab('ficha')} />;
  }

  const completedCount = completedSteps.length;
  const totalCount = INSTRUCTIONS_DATA.length;
  const percentComplete = Math.round((completedCount / totalCount) * 100);
  const currentGuidedInstruction = INSTRUCTIONS_DATA[currentStepIndex];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Official Institutional Header */}
      <OfficialHeader
        completedStepsCount={completedCount}
        totalStepsCount={totalCount}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onPrintWorksheet={() => setActiveTab('imprimir')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* TAB 1: FULL WORKSHEET */}
        {activeTab === 'ficha' && (
          <div className="space-y-6">
            {/* Friendly Kid Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 rounded-3xl p-5 sm:p-7 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 mb-2.5">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Para o 5.º Ano · Escola Básica 2, 3 Fernando Pessoa</span>
                </div>

                <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-tight">
                  Aprende a Criar as Tuas Placas de Ecoponto no Word!
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">
                  Segue os 15 passos com os <strong>botões reais do teu Microsoft Word</strong>. Vais criar a placa do <strong>Papelão (Azul)</strong> e a placa do <strong>Plástico (Amarelo)</strong> e enriquecê-las com imagens!
                </p>

                {/* Quick actions for 10-year-olds */}
                <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs">
                  <button
                    onClick={() => setActiveTab('simulador')}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm transform hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Experimentar no Simulador</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('imagens')}
                    className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>🎨 Banco de Imagens (Passo 15)</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('video')}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    ▶️ Ver Vídeo
                  </button>
                </div>
              </div>
            </div>

            {/* Video Section Bullet (exact verbatim from worksheet) */}
            <VideoSection />

            {/* Pedagogical Mode Selector: Guided 1-Step Mode vs Complete List */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎒</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Como preferes ver as instruções?
                    </h3>
                    <p className="text-xs text-slate-500">
                      {viewMode === 'guiado'
                        ? 'Modo Guiado: Vês 1 passo de cada vez para ser mais fácil e não te perderes!'
                        : 'Modo Lista: Vês os 15 passos todos seguidos na mesma página.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
                  <button
                    onClick={() => setViewMode('guiado')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'guiado'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>🎯 1 Passo de Cada Vez (Recomendado)</span>
                  </button>

                  <button
                    onClick={() => setViewMode('lista')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'lista'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>📋 Lista Completa</span>
                  </button>
                </div>
              </div>
            </div>

            {/* MODE A: GUIDED 1 STEP AT A TIME (IDEAL FOR 10-YEAR-OLDS) */}
            {viewMode === 'guiado' && (
              <div className="space-y-4">
                {/* Step Navigation Track: 15 circles */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <span>Passo {currentStepIndex + 1} de 15</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-blue-700">{currentGuidedInstruction.tag}</span>
                    </span>
                    <span className="text-emerald-700">
                      {completedCount} de 15 passos concluídos ({percentComplete}%)
                    </span>
                  </div>

                  {/* 15 Step numbers row */}
                  <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2">
                    {INSTRUCTIONS_DATA.map((item, idx) => {
                      const isDone = completedSteps.includes(item.id);
                      const isCurrent = idx === currentStepIndex;

                      return (
                        <button
                          key={item.id}
                          onClick={() => setCurrentStepIndex(idx)}
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl font-black text-xs shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-blue-600 text-white ring-4 ring-blue-200 scale-110 shadow-xs'
                              : isDone
                              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                          title={`Ir para o Passo ${item.stepNumber}: ${item.tag}`}
                        >
                          {isDone && !isCurrent ? <Check className="w-4 h-4 stroke-[3]" /> : item.stepNumber}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* The Single Active Step Card */}
                <InstructionCard
                  key={currentGuidedInstruction.id}
                  instruction={currentGuidedInstruction}
                  isCompleted={completedSteps.includes(currentGuidedInstruction.id)}
                  onToggleComplete={handleToggleStep}
                  onOpenSimulatorForStep={handleOpenSimulatorForStep}
                />

                {/* Large Navigation & Completion Buttons */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={handlePrevStepGuided}
                    disabled={currentStepIndex === 0}
                    className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      currentStepIndex === 0
                        ? 'opacity-30 cursor-not-allowed bg-slate-100 text-slate-400'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Passo Anterior</span>
                  </button>

                  {/* Special Banner if on Step 15 */}
                  {currentStepIndex === 14 && (
                    <button
                      onClick={() => setActiveTab('imagens')}
                      className="bg-indigo-100 hover:bg-indigo-200 text-indigo-900 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>🎨 Abrir Banco de Imagens do Ecoponto</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleToggleStep(currentGuidedInstruction.id)}
                      className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        completedSteps.includes(currentGuidedInstruction.id)
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span>
                        {completedSteps.includes(currentGuidedInstruction.id)
                          ? 'Passo Feito ✓'
                          : 'Marcar como Feito'}
                      </span>
                    </button>

                    <button
                      onClick={handleNextStepGuided}
                      disabled={currentStepIndex === INSTRUCTIONS_DATA.length - 1}
                      className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                        currentStepIndex === INSTRUCTIONS_DATA.length - 1
                          ? 'bg-emerald-600 text-white cursor-default'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      <span>
                        {currentStepIndex === INSTRUCTIONS_DATA.length - 1
                          ? '🎉 Trabalho Concluído!'
                          : 'Próximo Passo'}
                      </span>
                      {currentStepIndex < INSTRUCTIONS_DATA.length - 1 && (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Final Celebration Card if completed all steps */}
                {completedCount === 15 && (
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-6 text-white text-center shadow-lg space-y-2 animate-in zoom-in-95">
                    <div className="text-4xl">🏆</div>
                    <h3 className="text-xl font-black">
                      Muitos Parabéns! Concluíste Todos os 15 Passos!
                    </h3>
                    <p className="text-xs text-emerald-100 max-w-lg mx-auto">
                      As tuas placas de <strong>Papelão</strong> e <strong>Plástico</strong> estão prontas com as orientações, letras, cores e imagens certas. Podes agora imprimir o teu trabalho ou mostrar à professora!
                    </p>
                    <div className="pt-2 flex justify-center gap-3">
                      <button
                        onClick={() => setActiveTab('imprimir')}
                        className="bg-white text-emerald-900 font-bold px-4 py-2 rounded-xl text-xs hover:bg-emerald-50 cursor-pointer shadow-xs"
                      >
                        🖨️ Ver Folha para Imprimir
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* MODE B: COMPLETE 15-STEP LIST */}
            {viewMode === 'lista' && (
              <div className="space-y-4">
                {/* Filter and Progress Bar */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Category Filter */}
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
                      🎨 Passo 15: Imagens
                    </button>
                  </div>

                  {/* Reset progress */}
                  <div className="flex items-center gap-3 shrink-0 self-end md:self-auto text-xs">
                    {completedCount > 0 && (
                      <button
                        onClick={handleResetProgress}
                        className="text-slate-500 hover:text-rose-600 flex items-center gap-1 transition-colors cursor-pointer"
                        title="Reiniciar checklist"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reiniciar checklist</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* List of Instructions */}
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
              </div>
            )}
          </div>
        )}

        {/* TAB 2: INTERACTIVE WORD SIGN SIMULATOR */}
        {activeTab === 'simulador' && (
          <div className="space-y-6">
            <InteractiveSignSimulator
              initialType={simulatorInitialType}
              onMarkStepCompleted={handleMarkMultipleSteps}
            />
          </div>
        )}

        {/* TAB 3: MODEL EXAMPLES GALLERY */}
        {activeTab === 'galeria' && (
          <ExamplesGallery />
        )}

        {/* TAB 4: BANCO DE IMAGENS E CLIPART (PASSO 15) */}
        {activeTab === 'imagens' && (
          <div className="space-y-6">
            <ImageStickerBank />
          </div>
        )}

        {/* TAB 5: VIDEO AND RECYCLING SORTING */}
        {activeTab === 'video' && (
          <div className="space-y-6">
            <VideoSection />
          </div>
        )}
      </main>

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

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => setActiveTab('ficha')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Ficha
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('imagens')}
              className="hover:text-indigo-600 transition-colors cursor-pointer font-bold text-indigo-700"
            >
              Imagens (Passo 15)
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
