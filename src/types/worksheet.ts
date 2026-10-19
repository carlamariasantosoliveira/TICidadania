export interface WordStepExample {
  title: string;
  wordTab: string; // e.g. "Separador Disposição" or "Separador Base"
  wordIconName?: string;
  shortcut?: string;
  explanation: string;
  recommendedValues?: string[];
  visualPreviewType: 'text' | 'orientation' | 'font' | 'color' | 'size' | 'align' | 'decor' | 'padlet';
  dosList: string[];
  dontsList: string[];
  sampleVisual?: {
    label: string;
    text: string;
    textColor: string;
    bgColor: string;
    borderColor?: string;
    fontFamily: string;
    fontSize: string;
    isLandscape: boolean;
    hasDecorations?: boolean;
    decorItems?: string[];
  };
}

export interface InstructionItem {
  id: number;
  stepNumber: number;
  originalText: string; // MUST BE VERBATIM IDENTICAL TO ORIGINAL PDF
  phase: 'papelao' | 'plastico' | 'conclusao';
  category: 'word-setup' | 'format-font' | 'format-color' | 'format-size' | 'format-align' | 'decor' | 'share';
  tag: string;
  kidExplanation: string; // Plain simple Portuguese for 10-year-olds
  wordAction: {
    tabName: 'Base' | 'Esquema de Página' | 'Inserir' | 'Ficheiro';
    groupName?: string; // e.g. "Configurar Página", "Tipo de Letra", "Parágrafo", "Fundo da Página"
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
  };
  example: WordStepExample;
}

export interface PlacaState {
  word: string;
  anoTurma: string;
  nomeAluno: string;
  orientation: 'horizontal' | 'vertical';
  fontFamily: string;
  fontSize: number;
  textColor: string;
  backgroundColor: string;
  alignment: 'center' | 'left' | 'right';
  hasBorder: boolean;
  borderStyle: 'solid' | 'dashed' | 'double' | 'rounded';
  borderColor: string;
  showRecycleIcon: boolean;
  showWasteIcons: boolean;
  showEcoMotto: boolean;
  ecoMottoText: string;
}
