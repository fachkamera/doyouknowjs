'use client'

import { useState } from 'react'
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
  const [shuffledOptions] = useState<string[]>(() =>
    shuffleArray([question.correctAnswer, ...question.otherAnswers]),
  )

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
