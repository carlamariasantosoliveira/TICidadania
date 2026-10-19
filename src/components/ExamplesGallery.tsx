import React from 'react';
import { CheckCircle, XCircle, Sparkles, Award } from 'lucide-react';

export const ExamplesGallery: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Showcase with generated real illustrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col">
          <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
            <img
              src="/src/assets/images/ecopontos_school_bins_1792396258482.jpg"
              alt="Ecopontos de Papelão e Plástico na Escola Básica Fernando Pessoa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                Objetivo Final
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Identificar os Ecopontos da Escola
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                As placas criadas em Word servem para que todos os alunos e professores saibam exatamente onde colocar o papelão (azul) e o plástico (amarelo), promovendo uma escola sustentável.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col">
          <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
            <img
              src="/src/assets/images/students_word_recycling_1792396257592.jpg"
              alt="Alunos a trabalhar no Microsoft Word na sala de informática"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Trabalho no Word
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Criatividade e Rigor Informático
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Cada aluno elabora duas placas (uma para Papelão e outra para Plástico), aplicando as regras de formatação aprendidas na disciplina de TIC: orientação, tipos de letra, cor, tamanho e centrar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Model Examples vs Erros a Evitar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold text-slate-900">
            Galeria Comparativa: Placas Modelo vs O que Evitar
          </h2>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Compara estes exemplos para garantir que o teu trabalho no Microsoft Word cumpre todos os critérios de avaliação da ficha.
        </p>

        {/* Comparison 1: Papelão */}
        <div className="mb-8 pb-8 border-b border-slate-200">
          <h3 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span>Caso 1: Placa de "Papelão" (Passos 1 a 7)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Good example */}
            <div className="border-2 border-emerald-400 bg-emerald-50/20 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-emerald-800 mb-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Exemplo Excelente (Nota 20)</span>
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    A4 Horizontal
                  </span>
                </div>

                {/* Simulated Visual */}
                <div className="bg-white border-4 border-double border-blue-700 rounded-lg p-4 aspect-16/10 flex flex-col justify-between text-center shadow-xs">
                  <div className="text-[10px] text-blue-800 font-bold flex justify-between border-b border-blue-200 pb-1">
                    <span>EB 2, 3 Fernando Pessoa</span>
                    <span>5.º Ano — Turma A</span>
                  </div>
                  <div>
                    <div className="text-2xl text-blue-600 mb-0.5">♻️</div>
                    <div className="text-3xl font-black text-blue-700 tracking-tight" style={{ fontFamily: 'Arial Black' }}>
                      PAPELÃO
                    </div>
                  </div>
                  <div className="text-[9px] text-blue-900 font-medium border-t border-blue-200 pt-1 flex justify-between items-center">
                    <span>📦 Jornais, Revistas e Cartão</span>
                    <span>Espalmar antes de depositar</span>
                  </div>
                </div>
              </div>

              <ul className="mt-3 space-y-1 text-xs text-emerald-950 font-medium">
                <li>✓ Folha na horizontal com texto centrado (Ctrl+E)</li>
                <li>✓ Fonte grossa e legível à distância (Arial Black 95pt)</li>
                <li>✓ Cor oficial azul com alto contraste</li>
                <li>✓ Ano e Turma claramente identificados</li>
              </ul>
            </div>

            {/* Bad example */}
            <div className="border-2 border-rose-300 bg-rose-50/20 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-rose-800 mb-2">
                  <span className="flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Exemplo Incorreto (O que NÃO Fazer)</span>
                  </span>
                  <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">
                    Erros Frequentes
                  </span>
                </div>

                {/* Simulated Bad Visual */}
                <div className="bg-white border border-slate-300 rounded-lg p-4 aspect-16/10 flex flex-col justify-start text-left shadow-xs opacity-75">
                  <div className="text-xs text-slate-400 italic">
                    (Folha deixada na vertical / texto minúsculo e à esquerda)
                  </div>
                  <div className="mt-4 text-xs font-serif text-slate-400">
                    papelão
                  </div>
                </div>
              </div>

              <ul className="mt-3 space-y-1 text-xs text-rose-950">
                <li>✗ Folha deixada na vertical (não cumpriu o Passo 2)</li>
                <li>✗ Tamanho da letra muito pequeno (parece um texto comum)</li>
                <li>✗ Texto alinhado à esquerda em vez de centrado</li>
                <li>✗ Esqueceu-se de colocar o Ano e a Turma</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison 2: Plástico */}
        <div>
          <h3 className="text-sm font-bold text-amber-950 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Caso 2: Placa de "Plástico" (Passos 8 a 14)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Good example */}
            <div className="border-2 border-emerald-400 bg-emerald-50/20 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-emerald-800 mb-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Exemplo Excelente (Alto Contraste)</span>
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    A4 Horizontal
                  </span>
                </div>

                {/* Simulated Visual with yellow fill */}
                <div className="bg-amber-300 border-4 border-solid border-amber-600 rounded-lg p-4 aspect-16/10 flex flex-col justify-between text-center shadow-xs">
                  <div className="text-[10px] text-amber-950 font-bold flex justify-between border-b border-amber-500/50 pb-1">
                    <span>EB 2, 3 Fernando Pessoa</span>
                    <span>5.º Ano — Turma B</span>
                  </div>
                  <div>
                    <div className="text-2xl text-amber-950 mb-0.5">♻️</div>
                    <div className="text-3xl font-black text-amber-950 tracking-tight" style={{ fontFamily: 'Arial Black' }}>
                      PLÁSTICO
                    </div>
                  </div>
                  <div className="text-[9px] text-amber-950 font-bold border-t border-amber-500/50 pt-1 flex justify-between items-center">
                    <span>🧴 Garrafas, Latas e Pacotes de Leite</span>
                    <span>Ecoponto Amarelo</span>
                  </div>
                </div>
              </div>

              <ul className="mt-3 space-y-1 text-xs text-emerald-950 font-medium">
                <li>✓ Fundo amarelo vivo com letras em castanho escuro/preto para máximo contraste</li>
                <li>✓ Letras grandes preenchendo a folha horizontal (95pt)</li>
                <li>✓ Moldura sólida com cantos definidos</li>
                <li>✓ Identificação de resíduos corretos (garrafas e latas)</li>
              </ul>
            </div>

            {/* Bad example */}
            <div className="border-2 border-rose-300 bg-rose-50/20 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-rose-800 mb-2">
                  <span className="flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Erro Clássico do Amarelo Invisível</span>
                  </span>
                  <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">
                    Falta de Contraste
                  </span>
                </div>

                {/* Simulated Bad Visual: pale yellow text on white */}
                <div className="bg-white border border-slate-300 rounded-lg p-4 aspect-16/10 flex flex-col items-center justify-center text-center shadow-xs">
                  <div className="text-3xl font-bold text-yellow-200 tracking-tight">
                    PLÁSTICO
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2">
                    (Letras amarelas sobre fundo branco: quase impossível de ler!)
                  </p>
                </div>
              </div>

              <ul className="mt-3 space-y-1 text-xs text-rose-950">
                <li>✗ Letras amarelo claro em fundo branco (contraste reprovado)</li>
                <li>✗ Quem estiver a 2 metros do caixote não consegue ler a placa</li>
                <li>✗ Solução recomendada: pintar o fundo de amarelo ou colocar contorno escuro</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
