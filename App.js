import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import questions from './questions';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);

  const generateRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    generateRandomQuestion();
  };

  return (
    <View style={styles.container}>
      {currentQuestion ? (
        <>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              title={option}
              onPress={() => handleAnswer(index)}
            />
          ))}
        </>
      ) : (
        <Button title="Start" onPress={generateRandomQuestion} />
      )}
      {score > 0 && <Text style={styles.score}>Score: {score}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  score: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
