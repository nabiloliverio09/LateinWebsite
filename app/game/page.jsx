"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './game.module.css';
import { getRandomQuestion } from '../../lib/quiz-data';
import { Swords, Shield, Wheat, Users, UserRound, ArrowRight } from 'lucide-react';

export default function GamePage() {
  const [gameState, setGameState] = useState('playing'); // 'playing', 'victory', 'defeat'
  const [turn, setTurn] = useState(1);
  const [warriors, setWarriors] = useState(100);
  const [supplies, setSupplies] = useState(50);
  const [caesarStrength, setCaesarStrength] = useState(250);
  const [logs, setLogs] = useState([{ time: 'Monat 1', text: 'Die Römer rücken an. Der Kriegergeist ist geweckt!' }]);
  
  // Modal State
  const [activeAction, setActiveAction] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  // Optional: Shuffle the options
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const eventLogRef = useRef(null);

  useEffect(() => {
    if (eventLogRef.current) {
      eventLogRef.current.scrollTop = eventLogRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    if (warriors <= 0 || supplies <= 0) {
      setGameState('defeat');
    } else if (caesarStrength <= 0) {
      setGameState('victory');
    }
  }, [warriors, supplies, caesarStrength]);

  const addLog = (text) => {
    setLogs(prev => [...prev, { time: `Monat ${turn}`, text }]);
  };

  const handleActionClick = (actionName) => {
    const q = getRandomQuestion();
    setCurrentQuestion(q);
    setActiveAction(actionName);
    
    // Shuffle options immediately
    const options = [...q.options];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    setShuffledOptions(options);
  };

  const handleAnswerClick = (selectedOption) => {
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    // Evaluate Result
    if (isCorrect) {
      addLog(`Richtig! Die Götter sind mit uns.`);
      executeAction(activeAction, true);
    } else {
      addLog(`Falsche Antwort! Du hast "${selectedOption}" gewählt. Richtig wäre "${currentQuestion.correctAnswer}".`);
      executeAction(activeAction, false);
    }
    
    setCurrentQuestion(null);
    setActiveAction(null);
  };

  const executeAction = (actionName, success) => {
    let nextTurnOffset = 1;

    if (success) {
      switch (actionName) {
        case 'gather':
          setSupplies(s => s + 30);
          addLog("Wir haben erfolgreich Felder abgeerntet (+30 Vorräte).");
          break;
        case 'recruit':
          if (supplies >= 10) {
            setSupplies(s => s - 10);
            setWarriors(w => w + 50);
            addLog("Neue germanische Krieger haben sich angeschlossen (+50 Krieger, -10 Vorräte).");
          } else {
            addLog("Wir haben nicht genug Vorräte (10 benötigt), um Krieger zu rekrutieren!");
            nextTurnOffset = 0; // Don't advance turn on invalid
          }
          break;
        case 'attack':
          const damage = Math.floor(warriors * 0.5);
          const casualties = Math.floor(Math.random() * 20) + 10;
          setCaesarStrength(c => Math.max(0, c - damage));
          setWarriors(w => w - casualties);
          addLog(`Überraschungsangriff auf die Legionen! Cäsar verliert ${damage} Stärke. Wir verlieren ${casualties} Krieger.`);
          break;
        default:
          break;
      }
    } else {
      addLog(`${actionName === 'attack' ? 'Angriff' : 'Aktion'} gescheitert. Die Truppen sind desorientiert.`);
    }

    if (nextTurnOffset > 0) {
      advanceTurn();
    }
  };

  const advanceTurn = () => {
    setTurn(t => t + 1);
    setSupplies(s => s - 5); // Base consumption
    
    // Caesar's Logic
    // Every 3 turns, Caesar attacks, otherwise he fortifies
    if (turn % 3 === 0 && caesarStrength > 0) {
      const attackPower = Math.floor(caesarStrength * 0.2);
      setWarriors(w => w - attackPower);
      addLog(`Cäsars Legionen greifen an! Wir verlieren ${attackPower} Krieger in der Verteidigung.`);
    } else if (caesarStrength > 0) {
      const heal = 15;
      setCaesarStrength(c => c + heal);
      addLog(`Cäsar errichtet neue Lagerbefestigungen (+${heal} Cäsar-Stärke).`);
    }
  };

  const restartGame = () => {
    setGameState('playing');
    setTurn(1);
    setWarriors(100);
    setSupplies(50);
    setCaesarStrength(250);
    setLogs([{ time: 'Monat 1', text: 'Die Römer rücken an. Der Kriegergeist ist geweckt!' }]);
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Defend Germania</h1>
        <p className={styles.subtitle}>Der Kampf gegen Julius Cäsar (Monat {turn})</p>
      </div>

      <div className={styles.statusBoard}>
        <div className={styles.statCard}>
          <Users className="text-emerald-400 mb-2" size={32} color="#34d399" />
          <span className={styles.statLabel}>Krieger</span>
          <span className={styles.statValue}>{warriors}</span>
        </div>
        <div className={styles.statCard}>
          <Wheat className="text-yellow-400 mb-2" size={32} color="#fbbf24" />
          <span className={styles.statLabel}>Vorräte</span>
          <span className={styles.statValue}>{supplies}</span>
        </div>
        <div className={styles.statCard}>
          <UserRound className="text-red-400 mb-2" size={32} color="#f87171" />
          <span className={styles.statLabel}>Cäsars Stärke</span>
          <span className={styles.statValue}>{caesarStrength}</span>
        </div>
      </div>

      {gameState === 'playing' ? (
        <div className={styles.actionBoard}>
          <button 
            className={styles.actionButton} 
            onClick={() => handleActionClick('gather')}
            disabled={activeAction !== null}
          >
            <Wheat size={20} /> Vorräte sammeln
          </button>
          <button 
            className={styles.actionButton} 
            onClick={() => handleActionClick('recruit')}
            disabled={activeAction !== null || supplies < 10}
            title={supplies < 10 ? "Zu wenig Vorräte (10 benötigt)" : ""}
          >
            <Shield size={20} /> Krieger rekrutieren
          </button>
          <button 
            className={`${styles.actionButton} ${styles.attack}`} 
            onClick={() => handleActionClick('attack')}
            disabled={activeAction !== null}
          >
            <Swords size={20} /> Cäsar angreifen
          </button>
        </div>
      ) : (
        <div className={styles.gameOver}>
           <h2 className={`${styles.gameOverTitle} ${gameState === 'victory' ? styles.victory : styles.defeat}`}>
             {gameState === 'victory' ? 'SIEG!' : 'NIEDERLAGE'}
           </h2>
           <p className="text-xl text-slate-300">
             {gameState === 'victory' ? 
               'Cäsar ist besiegt! Germania bleibt frei!' : 
               'Dein Stamm wurde unterworfen. Gallien und Germania gehören den Römern.'}
           </p>
           <button className={styles.restartBtn} onClick={restartGame}>Erneut versuchen</button>
        </div>
      )}

      <div className={styles.eventLog} ref={eventLogRef}>
        {logs.map((log, index) => (
          <div key={index} className={styles.logEntry}>
            <span className={styles.logTime}>[{log.time}]</span>
            <span className="text-slate-200">{log.text}</span>
          </div>
        ))}
      </div>

      {/* Quiz Modal */}
      {currentQuestion && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <span className={styles.quizCategory}>{currentQuestion.category}</span>
            <h3 className={styles.quizQuestion}>{currentQuestion.question}</h3>
            
            <div className={styles.quizOptions}>
              {shuffledOptions.map((opt, i) => (
                <button 
                  key={i} 
                  className={styles.quizOptionBtn} 
                  onClick={() => handleAnswerClick(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
