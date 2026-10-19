import React, { useState } from 'react';
import { Upload, CheckCircle2, MessageSquare, Plus, FileText, Send, X } from 'lucide-react';

interface PadletPost {
  id: string;
  author: string;
  turma: string;
  title: string;
  fileName: string;
  fileType: 'docx' | 'pdf';
  timestamp: string;
  likes: number;
}

const INITIAL_POSTS: PadletPost[] = [
  {
    id: 'post-1',
    author: 'Tomás Ferreira',
    turma: '5.º B',
    title: 'Placas Ecoponto - Tomás Ferreira nº 18',
    fileName: 'Ecopontos_Tomas_5B.docx',
    fileType: 'docx',
    timestamp: 'Hoje, 10:20',
    likes: 4,
  },
  {
    id: 'post-2',
    author: 'Beatriz Santos',
    turma: '5.º B',
    title: 'Trabalho de TIC - Placas Papelão e Plástico',
    fileName: 'Placas_Beatriz_5B.pdf',
    fileType: 'pdf',
    timestamp: 'Hoje, 10:35',
    likes: 6,
  },
];

interface PadletSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteStep15?: () => void;
}

export const PadletSimulatorModal: React.FC<PadletSimulatorProps> = ({
  isOpen,
  onClose,
  onCompleteStep15,
}) => {
  const [posts, setPosts] = useState<PadletPost[]>(INITIAL_POSTS);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [turmaName, setTurmaName] = useState('5.º B');
  const [postTitle, setPostTitle] = useState('');
  const [fileName, setFileName] = useState('Meu_Ecoponto_Word.docx');

  if (!isOpen) return null;

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !postTitle.trim()) return;

    const newPost: PadletPost = {
      id: `post-${Date.now()}`,
      author: authorName,
      turma: turmaName,
      title: postTitle,
      fileName: fileName,
      fileType: fileName.endsWith('.pdf') ? 'pdf' : 'docx',
      timestamp: 'Agora mesmo',
      likes: 1,
    };

    setPosts([newPost, ...posts]);
    setShowNewPostForm(false);
    setAuthorName('');
    setPostTitle('');

    if (onCompleteStep15) {
      onCompleteStep15();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-lg">
              P
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-pink-200">
                Passo 15 da Ficha de Trabalho
              </span>
              <h2 className="text-base sm:text-lg font-bold">
                Mural Padlet da Turma · Entrega de Trabalhos
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions banner */}
        <div className="bg-pink-50 border-b border-pink-200 p-3 sm:p-4 text-xs text-pink-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <strong>15. Colocar no Padlet da turma os trabalhos realizados:</strong>
            <p className="text-pink-800 text-[11px] mt-0.5">
              Guarda o teu ficheiro Word no computador e publica no mural da turma para que a professora possa avaliar.
            </p>
          </div>

          <button
            onClick={() => setShowNewPostForm(true)}
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Publicar Meu Trabalho</span>
          </button>
        </div>

        {/* Content body: Wall simulation */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-100">
          {showNewPostForm && (
            <form
              onSubmit={handlePublish}
              className="bg-white rounded-xl border-2 border-pink-400 p-4 mb-4 shadow-md space-y-3"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Upload className="w-4 h-4 text-pink-600" />
                  <span>Nova Publicação no Padlet</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setShowNewPostForm(false)}
                  className="text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                >
                  Cancelar
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    O teu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                    placeholder="Ex: Maria Santos"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Ano e Turma:
                  </label>
                  <input
                    type="text"
                    required
                    value={turmaName}
                    onChange={e => setTurmaName(e.target.value)}
                    placeholder="Ex: 5.º Ano — Turma B"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="font-semibold text-slate-700 block mb-1">
                  Título da Publicação (Ex: Placas Ecoponto - Teu Nome):
                </label>
                <input
                  type="text"
                  required
                  value={postTitle}
                  onChange={e => setPostTitle(e.target.value)}
                  placeholder="Ex: Placas de Papelão e Plástico - Maria Santos nº 12"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div className="text-xs">
                <label className="font-semibold text-slate-700 block mb-1">
                  Ficheiro a Anexar:
                </label>
                <div className="flex items-center gap-2 border border-dashed border-slate-300 rounded-lg p-2.5 bg-slate-50">
                  <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                  <input
                    type="text"
                    value={fileName}
                    onChange={e => setFileName(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-xs font-mono text-slate-700 focus:outline-none"
                  />
                  <span className="text-[10px] text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    Word (.docx)
                  </span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publicar no Mural</span>
                </button>
              </div>
            </form>
          )}

          {/* Grid of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {posts.map(post => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-100 pb-2 mb-2">
                    <span className="font-bold text-slate-800">{post.author} ({post.turma})</span>
                    <span>{post.timestamp}</span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 mb-2">
                    {post.title}
                  </h4>

                  {/* Attachment card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      {post.fileType.toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-slate-800 truncate">
                        {post.fileName}
                      </p>
                      <p className="text-[10px] text-slate-500">Documento pronto para avaliação</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-pink-600 font-semibold">
                    ❤️ {post.likes} gostos
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Entregue
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-slate-200 p-3 sm:p-4 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Escola Básica 2, 3 Fernando Pessoa · TIC
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold cursor-pointer"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
