'use client'

import { useEffect, useState } from 'react'
import Radio from './Radio'
import { shuffleArray } from '@/lib/helpers'
import type { Question } from '@/lib/questions'

export default function RadioGroup({
  question,
  isActive,
}: {
  question: Question
  isActive: boolean
}) {
  const [selectedOption, setSelectedOption] = useState<string>()
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([
    question.correctAnswer,
    ...question.otherAnswers,
  ])

  useEffect(() => {
    setShuffledOptions(shuffleArray([question.correctAnswer, ...question.otherAnswers]))
  }, [question])

  return (
    <div>
      <ul className="mb-1 grid grid-cols-2 gap-1">
        {shuffledOptions.map((option, i) => (
          <li key={i} className="flex">
            <Radio
              i={i}
              selectedOption={selectedOption}
              option={option}
              question={question}
              isCorrect={option === question.correctAnswer}
              setSelectedOption={setSelectedOption}
              indicateCorrect={
                option === question.correctAnswer &&
                !!selectedOption &&
                selectedOption !== question.correctAnswer
              }
              isActive={isActive}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
