/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Baby, 
  Eye, 
  Puzzle, 
  Sprout, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Heart,
  Lightbulb
} from 'lucide-react';
import { questions, Question, Feedback } from './data/questions';

type AppState = 'welcome' | 'quiz' | 'feedback' | 'result';

export default function App() {
  const [state, setState] = useState<AppState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showImmediateFeedback, setShowImmediateFeedback] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<number | null>(null);

  // Load progress from localStorage
  useEffect(() => {
    const savedAnswers = localStorage.getItem('desenvolvelar_answers');
    const savedIndex = localStorage.getItem('desenvolvelar_index');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedIndex) {
      setCurrentQuestionIndex(parseInt(savedIndex));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('desenvolvelar_answers', JSON.stringify(answers));
    localStorage.setItem('desenvolvelar_index', currentQuestionIndex.toString());
  }, [answers, currentQuestionIndex]);

  const handleStart = () => {
    setState('quiz');
  };

  const handleAnswer = (level: number) => {
    setLastAnswer(level);
    setAnswers({ ...answers, [questions[currentQuestionIndex].id]: level });
    setShowImmediateFeedback(true);
    setState('feedback');
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowImmediateFeedback(false);
      setState('quiz');
    } else {
      setState('result');
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setState('welcome');
    localStorage.removeItem('desenvolvelar_answers');
    localStorage.removeItem('desenvolvelar_index');
  };

  const handleBack = () => {
    if (state === 'quiz') {
      if (currentQuestionIndex > 0) {
        const prevIndex = currentQuestionIndex - 1;
        setCurrentQuestionIndex(prevIndex);
        setLastAnswer(answers[questions[prevIndex].id]);
        setState('feedback');
      } else {
        setState('welcome');
      }
    } else if (state === 'feedback') {
      setState('quiz');
    } else if (state === 'result') {
      const lastIndex = questions.length - 1;
      setCurrentQuestionIndex(lastIndex);
      setLastAnswer(answers[questions[lastIndex].id]);
      setState('feedback');
    }
  };

  const calculateTotalScore = (): number => {
    return (Object.values(answers) as number[]).reduce((acc: number, val: number) => acc + val, 0);
  };

  const getResultCategory = (score: number) => {
    if (score <= 15) return { label: "Desenvolvimento dentro do esperado", color: "text-white", bg: "bg-app-secondary" };
    if (score <= 25) return { label: "Atenção leve", color: "text-app-button", bg: "bg-app-button bg-opacity-10" };
    if (score <= 35) return { label: "Atenção moderada", color: "text-app-accent", bg: "bg-app-accent bg-opacity-10" };
    if (score <= 45) return { label: "Atenção importante", color: "text-orange-500", bg: "bg-orange-50" };
    return { label: "Procurar ajuda profissional", color: "text-orange-700", bg: "bg-orange-100" };
  };

  const currentQuestion = questions[currentQuestionIndex];
  const totalScore = calculateTotalScore();
  const result = getResultCategory(totalScore);

  return (
    <div className="min-h-screen bg-app-bg font-sans text-app-body flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-2xl flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-app-button rounded-xl flex items-center justify-center text-white shadow-lg">
            <Brain size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-app-title leading-none">DesenvolveLar</h1>
            <p className="text-xs text-app-button font-medium">Pequenos sinais, grandes cuidados.</p>
          </div>
        </div>
        {state !== 'welcome' && (
          <button 
            onClick={handleRestart}
            className="p-2 text-app-body opacity-40 hover:opacity-100 hover:text-app-button transition-all"
            title="Reiniciar"
          >
            <RotateCcw size={20} />
          </button>
        )}
      </header>

      <main className="w-full max-w-2xl flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {state === 'welcome' && (
            <motion.div 
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-app-button border-opacity-5 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-app-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Baby size={48} className="text-app-accent" />
              </div>
              <h2 className="text-2xl font-bold text-app-title mb-4">Bem-vindo ao DesenvolveLar</h2>
              <p className="text-app-body mb-8 leading-relaxed">
                Este aplicativo auxilia na observação do desenvolvimento infantil por meio de perguntas simples, 
                oferecendo orientações práticas baseadas na neuropsicopedagogia.
              </p>
              
              <div className="bg-app-accent bg-opacity-10 p-4 rounded-2xl mb-8 flex gap-3 text-left border border-app-accent border-opacity-30">
                <AlertCircle className="text-app-title shrink-0" size={20} />
                <p className="text-sm text-app-title italic">
                  <strong>Importante:</strong> Este aplicativo auxilia na observação do desenvolvimento infantil. 
                  Não substitui avaliação profissional e não fornece diagnósticos.
                </p>
              </div>

              <button 
                onClick={handleStart}
                className="w-full py-4 bg-app-button hover:opacity-90 text-white rounded-2xl font-bold text-lg shadow-lg shadow-app-button/20 transition-all flex items-center justify-center gap-2 group"
              >
                Começar Observação
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 grid grid-cols-4 gap-4 w-full">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-app-secondary bg-opacity-20 rounded-lg flex items-center justify-center text-app-secondary">
                    <Sprout size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-app-body opacity-40">Crescer</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-app-button bg-opacity-10 rounded-lg flex items-center justify-center text-app-button">
                    <Eye size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-app-body opacity-40">Observar</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-app-accent bg-opacity-20 rounded-lg flex items-center justify-center text-app-accent">
                    <Puzzle size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-app-body opacity-40">Entender</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-app-secondary bg-opacity-10 rounded-lg flex items-center justify-center text-app-secondary">
                    <Heart size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-app-body opacity-40">Cuidar</span>
                </div>
              </div>
            </motion.div>
          )}

          {state === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-6"
            >
              <div className="w-full bg-app-button bg-opacity-10 h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-app-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                />
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-app-button border-opacity-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-app-button">Pergunta {currentQuestionIndex + 1} de {questions.length}</span>
                  <button 
                    onClick={handleBack}
                    className="flex items-center gap-1 text-xs font-bold text-app-body opacity-40 hover:opacity-100 hover:text-app-button transition-all"
                  >
                    <ChevronLeft size={14} />
                    Voltar
                  </button>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-app-title bg-app-accent bg-opacity-10 p-4 rounded-2xl border border-app-accent border-opacity-30 italic mb-4">
                    {currentQuestion.context}
                  </p>
                  <h2 className="text-xl font-bold text-app-title leading-tight">
                    {currentQuestion.text}
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => handleAnswer(level)}
                      className="w-full p-4 text-left rounded-2xl border-2 border-app-button border-opacity-5 hover:border-opacity-100 hover:bg-app-bg transition-all flex items-center justify-between group"
                    >
                      <span className="font-medium text-app-body">
                        {currentQuestion.feedbacks.find(f => f.level === level)?.label}
                      </span>
                      <div className="w-6 h-6 rounded-full border-2 border-app-button border-opacity-10 group-hover:border-opacity-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-app-button rounded-full scale-0 group-hover:scale-100 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {state === 'feedback' && lastAnswer !== null && (
            <motion.div 
              key="feedback"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-app-button border-opacity-5 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  lastAnswer === 1 ? 'bg-app-secondary bg-opacity-20 text-app-secondary' : 
                  lastAnswer <= 3 ? 'bg-app-button bg-opacity-20 text-app-button' : 'bg-app-accent bg-opacity-20 text-app-accent'
                }`}>
                  <Info size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-app-title">Entendendo este sinal</h3>
                  <p className="text-sm text-app-body">Orientação imediata</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-app-body opacity-40 mb-2">O que isso indica</h4>
                  <p className="text-app-body leading-relaxed">
                    {currentQuestion.feedbacks.find(f => f.level === lastAnswer)?.explanation}
                  </p>
                </div>
                
                <div className="p-5 bg-[#E8F5E9] rounded-2xl border border-[#A5D6A7] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                  <h4 className="text-[14px] font-semibold uppercase tracking-wider text-[#2E7D32] mb-2 flex items-center gap-2">
                    <Lightbulb size={18} />
                    ORIENTAÇÃO PRÁTICA
                  </h4>
                  <p className="text-[#2C3E50] text-[16px] leading-relaxed font-normal">
                    {currentQuestion.feedbacks.find(f => f.level === lastAnswer)?.guidance}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={handleBack}
                  className="h-12 border-2 border-app-button bg-white hover:bg-app-bg text-app-button rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <ChevronLeft size={20} />
                  Alterar Resposta
                </button>
                <button 
                  onClick={handleNext}
                  className="h-12 bg-app-button hover:bg-[#357ABD] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-app-button/20"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado Final'}
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {state === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-app-button border-opacity-5 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-app-button bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} className="text-app-button" />
              </div>
              
              <h2 className="text-2xl font-bold text-app-title mb-2">Observação Concluída</h2>
              <p className="text-app-body mb-8">Aqui está o resumo baseado nas suas respostas.</p>

              <div className={`w-full p-6 rounded-3xl mb-8 ${result.bg} border border-app-button border-opacity-5 shadow-sm`}>
                <span className={`text-xs font-bold uppercase tracking-widest mb-1 block ${totalScore <= 15 ? 'text-white opacity-80' : 'text-app-body opacity-40'}`}>Status Geral</span>
                <h3 className={`text-xl font-bold ${result.color} mb-2`}>{result.label}</h3>
                <p className={`text-sm leading-relaxed ${totalScore <= 15 ? 'text-white' : 'text-app-body'}`}>
                  {totalScore <= 15 ? 
                    "Seu filho apresenta sinais dentro do esperado para o desenvolvimento. Continue estimulando e observando com carinho." :
                    totalScore <= 35 ?
                    "Foram identificados alguns pontos que merecem atenção e estímulo direcionado. Acompanhe o progresso e, se os sinais persistirem, considere uma avaliação." :
                    "Sinais importantes foram identificados. Recomendamos buscar uma avaliação com um profissional especializado (pediatra, psicólogo ou neuropsicopedagogo) para um suporte adequado."
                  }
                </p>
              </div>

              <div className="w-full bg-app-bg bg-opacity-50 p-6 rounded-2xl mb-8 text-left space-y-4">
                <h4 className="font-bold text-app-title flex items-center gap-2">
                  <Info size={18} className="text-app-button" />
                  Próximos Passos
                </h4>
                <ul className="text-sm text-app-body space-y-2">
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-app-button mt-1.5 shrink-0" />
                    Mantenha um diário simples de observação por mais 2 semanas.
                  </li>
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-app-button mt-1.5 shrink-0" />
                    Aplique as orientações práticas dadas durante o questionário.
                  </li>
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-app-button mt-1.5 shrink-0" />
                    Lembre-se: cada criança tem seu próprio ritmo de desenvolvimento.
                  </li>
                </ul>
              </div>

              <div className="bg-app-accent bg-opacity-10 p-4 rounded-2xl mb-8 flex gap-3 text-left border border-app-accent border-opacity-30">
                <AlertCircle className="text-app-title shrink-0" size={20} />
                <p className="text-xs text-app-title italic">
                  <strong>Nota Ética:</strong> Este resultado não é um diagnóstico. É uma ferramenta de triagem inicial para auxiliar pais na observação doméstica.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <button 
                  onClick={handleBack}
                  className="py-4 border-2 border-app-button border-opacity-5 hover:bg-app-bg text-app-body rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={20} />
                  Rever Respostas
                </button>
                <button 
                  onClick={handleRestart}
                  className="py-4 border-2 border-app-button border-opacity-5 hover:bg-app-bg text-app-body rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw size={20} />
                  Reiniciar Questionário
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-8 text-center text-app-body opacity-40 text-xs pb-8">
        <p>© 2026 DesenvolveLar • Baseado em Neuropsicopedagogia Clínica</p>
      </footer>
    </div>
  );
}
