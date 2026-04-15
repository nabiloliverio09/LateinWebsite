"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './game.module.css';
import { getQuestionForAction } from '../../lib/quiz-data';
import { Swords, Shield, Wheat, Users, UserRound, ArrowRight, Clock } from 'lucide-react';

export default function GamePage() {
  const [gameState, setGameState] = useState('intro'); // 'intro', 'playing', 'victory', 'defeat'
  const [turn, setTurn] = useState(1);
  const [warriors, setWarriors] = useState(100);
  const [supplies, setSupplies] = useState(50);
  const [caesarStrength, setCaesarStrength] = useState(250);
  const [logs, setLogs] = useState([{ time: 'Tag 1', text: 'Die Römer beginnen den Bau der gigantischen Brücke über den Rhein...' }]);
  
  // Modal State
  const [activeAction, setActiveAction] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  // Optional: Shuffle the options
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  
  // Moral / Extra Rations
  const [extraRations, setExtraRations] = useState(0);

  const eventLogRef = useRef(null);

  useEffect(() => {
    if (timeLeft === null || !currentQuestion) return;
    
    if (timeLeft === 0) {
      addLog(`Zeit abgelaufen! Die Zeit drängt auf dem Schlachtfeld.`);
      executeAction(activeAction, false);
      setCurrentQuestion(null);
      setActiveAction(null);
      setTimeLeft(null);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestion, activeAction]);

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
    setLogs(prev => [...prev, { time: `Tag ${turn}`, text }]);
  };

  const handleActionClick = (actionName) => {
    const q = getQuestionForAction(actionName);
    setCurrentQuestion(q);
    setActiveAction(actionName);
    
    // Set Time Limit based on difficulty or specific question time
    let limit;
    if (q.baseTime) {
      limit = q.baseTime;
      // Etwas weniger Zeit in späten Runden, aber dennoch viel (maximal -30%)
      if (turn >= 10) limit = Math.floor(limit * 0.7);
      else if (turn >= 5) limit = Math.floor(limit * 0.85);
    } else {
      limit = turn >= 10 ? 10 : turn >= 5 ? 15 : null;
    }
    setTimeLeft(limit);
    
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
          const strengthFactor = 0.5 + (extraRations * 0.05);
          const damage = Math.floor(warriors * strengthFactor);
          const casualties = Math.floor(Math.random() * 20) + 10;
          setCaesarStrength(c => Math.max(0, c - damage));
          setWarriors(w => w - casualties);
          addLog(`Überraschungsangriff! Moral-Bonus: +${extraRations * 5}%. Cäsar verliert ${damage} Stärke. Wir verlieren ${casualties} Krieger.`);
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
    setSupplies(s => s - 10 - extraRations); // Base consumption + extra rations to keep morale up
    
    
    // Caesar's Logic
    const nextTurn = turn + 1; // turn is currently the previous turn, the updated turn will be turn + 1
    if (nextTurn < 10) {
      addLog(`Caesar lässt seine Truppen an der Rheinbrücke bauen... (Tag ${nextTurn}/10).`);
    } else if (nextTurn === 10) {
      addLog(`Die Brücke ist fertig! Caesars Legionen überqueren den Rhein!`);
    } else if (nextTurn > 10 && nextTurn % 2 === 0 && caesarStrength > 0) {
      const attackPower = Math.floor(caesarStrength * 0.25);
      setWarriors(w => w - attackPower);
      addLog(`Cäsars Legionen greifen an! Wir verlieren ${attackPower} Krieger in der Verteidigung.`);
    } else if (nextTurn > 10 && caesarStrength > 0) {
      const heal = 15;
      setCaesarStrength(c => c + heal);
      addLog(`Cäsar errichtet neue Lagerbefestigungen (+${heal} Cäsar-Stärke).`);
    }
  };

  const restartGame = () => {
    setGameState('intro');
    setTurn(1);
    setWarriors(100);
    setSupplies(50);
    setCaesarStrength(250);
    setExtraRations(0);
    setLogs([{ time: 'Tag 1', text: 'Die Römer beginnen den Bau der gigantischen Brücke über den Rhein...' }]);
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Germania magna</h1>
        <p className={styles.subtitle}>Der Kampf gegen Julius Cäsar (Tag {turn})</p>
      </div>

      {gameState === 'intro' && (
        <div style={{ textAlign: 'center', maxWidth: '800px', backgroundColor: 'rgba(0,0,0,0.5)', padding: '3rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '3rem' }}>
          <p className="text-xl text-slate-200 mb-8" style={{ lineHeight: '1.6', fontSize: '1.25rem' }}>
            Caesar versucht mit seinen Truppen die Brücke in Zehn Tagen (10 Runden Vorbereitung) zu bauen und die Germanen anzugreifen. Dein Job als Militärsanführer ist es dieses Geschehen durch taktische Züge und deinem Wissen zu verhindern. Wird es dir gelingen zu siegen und die Geschichte zu verändern? Defendamus!
          </p>
          <button className={styles.actionButton} style={{ margin: '0 auto', fontSize: '1.25rem', padding: '1rem 3rem' }} onClick={() => setGameState('playing')}>
            Schlacht beginnen!
          </button>
        </div>
      )}

      {gameState !== 'intro' && (
        <>
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
              <span className={styles.statValue}>{turn >= 10 ? caesarStrength : '???'}</span>
            </div>
          </div>

          {gameState === 'playing' ? (
            <>
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
                  disabled={activeAction !== null || turn < 10}
                  title={turn < 10 ? 'Die Römer sind noch auf der anderen Rheinseite!' : ''}
                >
                  <Swords size={20} /> Cäsar angreifen
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-1.5rem', marginBottom: '3rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', maxWidth: '600px', margin: '-1rem auto 3rem' }}>
                <label className="text-slate-300 font-semibold mb-3 text-lg">Moral stärken (Extra Vorräte: {extraRations}/Runde)</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                  <button disabled={extraRations === 0} onClick={() => setExtraRations(e => e - 1)} style={{ padding: '0.25rem 1rem', borderRadius: '0.5rem', background: '#334155', color: 'white', fontWeight: 'bold', fontSize: '1.25rem', opacity: extraRations === 0 ? 0.5 : 1 }}>-</button>
                  <input type="range" min="0" max="10" value={extraRations} onChange={(e) => setExtraRations(Number(e.target.value))} style={{ flex: 1, maxWidth: '200px' }} />
                  <button disabled={extraRations === 10} onClick={() => setExtraRations(e => e + 1)} style={{ padding: '0.25rem 1rem', borderRadius: '0.5rem', background: '#334155', color: 'white', fontWeight: 'bold', fontSize: '1.25rem', opacity: extraRations === 10 ? 0.5 : 1 }}>+</button>
                </div>
                <span className="text-sm font-semibold mt-2" style={{ color: '#4ade80' }}>
                  Kampfkraft beim Angriff: +{extraRations * 5}%
                </span>
                <span className="text-xs text-slate-400 mt-1">Vorsicht: Jeder Extra-Vorrat steigert den Rundenverbrauch!</span>
              </div>
            </>
          ) : (
            <div className={styles.gameOver}>
               <h2 className={`${styles.gameOverTitle} ${gameState === 'victory' ? styles.victory : styles.defeat}`}>
                 {gameState === 'victory' ? 'SIEG!' : 'NIEDERLAGE'}
               </h2>
               <p className="text-xl text-slate-300">
                 {gameState === 'victory' ? 
                   'Cäsar ist besiegt! Germania bleibt frei!' : 
                   supplies <= 0 ? 
                     'Deine Vorräte sind auf 0 gesunken. Deine Leute sind verhungert und Cäsar konnte kampflos einmarschieren!' :
                     'Dein Stamm wurde vernichtend geschlagen. Gallien und Germania gehören den Römern.'}
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
        </>
      )}

      {/* Quiz Modal */}
      {currentQuestion && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className={styles.quizCategory}>{currentQuestion.category}</span>
              {timeLeft !== null && (
                <span style={{ color: timeLeft <= (currentQuestion.baseTime ? 20 : 5) ? '#f87171' : '#fbbf24', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
                   <Clock size={20} /> {timeLeft}s
                </span>
              )}
            </div>
            
            <h3 className={styles.quizQuestion} style={{ fontSize: currentQuestion.question.length > 80 ? '1.25rem' : '1.5rem', marginBottom: currentQuestion.hints ? '1rem' : '2rem' }}>
              {currentQuestion.question}
            </h3>

            {currentQuestion.hints && currentQuestion.hints.length > 0 && (
              <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#38bdf8', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>Hilfestellungen</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {currentQuestion.hints.map((hint, i) => (
                    <li key={i}>{hint}</li>
                  ))}
                </ul>
              </div>
            )}
            
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
