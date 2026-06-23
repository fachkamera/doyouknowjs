'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Answer = {
  option: string
  points: number
}

type AppState = {
  activeIndex: number
  setActiveIndex: (index: number) => void
  answers: Record<string, Answer>
  answerQuestion: (questionId: string, option: string, points: number) => void
}

const AppStateContext = createContext<AppState | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, Answer>>({})

  const answerQuestion = useCallback((questionId: string, option: string, points: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: { option, points } }))
  }, [])

  return (
    <AppStateContext.Provider value={{ activeIndex, setActiveIndex, answers, answerQuestion }}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const context = useContext(AppStateContext)
  if (!context) throw new Error('useAppState must be used within AppStateProvider')
  return context
}
