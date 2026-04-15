export const quizQuestions = [
  {
    id: 1,
    category: "Geschichte",
    question: "Wann begann der Gallische Krieg (De Bello Gallico)?",
    options: ["58 v. Chr.", "44 v. Chr.", "753 v. Chr.", "31 v. Chr."],
    correctAnswer: "58 v. Chr."
  },
  {
    id: 2,
    category: "Übersetzung",
    question: "Was bedeutet Cäsars berühmter Ausspruch 'Alea iacta est'?",
    options: ["Der Würfel ist gefallen.", "Ich kam, sah und siegte.", "Nutze den Tag.", "Teile und herrsche."],
    correctAnswer: "Der Würfel ist gefallen."
  },
  {
    id: 3,
    category: "Geschichte",
    question: "Welcher germanische Fürst (König der Sueben) lieferte sich im Jahr 58 v. Chr. eine Schlacht mit Cäsar?",
    options: ["Ariovist", "Vercingetorix", "Arminius", "Boudicca"],
    correctAnswer: "Ariovist"
  },
  {
    id: 4,
    category: "Übersetzung",
    question: "Was heißt 'Gallia est omnis divisa in partes tres' auf Deutsch?",
    options: ["Ganz Gallien ist in drei Teile geteilt.", "Die gallischen Stämme sind in drei Gebiete gewandert.", "Ganz Gallien besteht aus drei Völkern.", "Drei Teile Galliens sind vollständig erobert."],
    correctAnswer: "Ganz Gallien ist in drei Teile geteilt."
  },
  {
    id: 5,
    category: "Militär",
    question: "Was war der 'Gladius'?",
    options: ["Das Kurzschwert der römischen Legionäre.", "Der Wurfspeer der Legionäre.", "Ein römischer Katapult-Typ.", "Die Rüstung eines Zenturios."],
    correctAnswer: "Das Kurzschwert der römischen Legionäre."
  },
  {
    id: 6,
    category: "Vokabeln",
    question: "Was bedeutet das Verbum 'pugnare'?",
    options: ["kämpfen", "lieben", "siegen", "fliehen"],
    correctAnswer: "kämpfen"
  },
  {
    id: 7,
    category: "Vokabeln",
    question: "Was bedeutet das Wort 'castra'?",
    options: ["das Lager (Militärlager)", "die Burg", "das Schwert", "die Stadt"],
    correctAnswer: "das Lager (Militärlager)"
  },
  {
    id: 8,
    category: "Geschichte",
    question: "Wie hieß der germanische Fluss, über den Cäsar zweimal eine gigantische Brücke bauen ließ?",
    options: ["Rhein (Rhenus)", "Elbe (Albis)", "Donau (Danuvius)", "Weser (Visurgis)"],
    correctAnswer: "Rhein (Rhenus)"
  },
  {
    id: 9,
    category: "Vokabeln",
    question: "Was heißt 'imperator'?",
    options: ["Feldherr / Kaiser", "Soldat", "Feind", "Statthalter"],
    correctAnswer: "Feldherr / Kaiser"
  },
  {
    id: 10,
    category: "Übersetzung",
    question: "Was bedeutet 'Veni, vidi, vici'?",
    options: ["Ich kam, sah und siegte.", "Wir kamen, sahen und siegten.", "Ich kämpfte, ich sah, ich verlor.", "Leben, Sehen, Siegen."],
    correctAnswer: "Ich kam, sah und siegte."
  }
];

// Hilfsfunktion: Gibt eine zufällige Frage aus dem Pool zurück
export function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * quizQuestions.length);
  return quizQuestions[randomIndex];
}
