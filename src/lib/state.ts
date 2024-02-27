import { create } from 'zustand'
import type { Question } from '@/lib/questions'

export const useAppState = create<{
  activeIndex: number
  setActiveIndex: (index: number) => void
  answers: string[]
  addAnswer: (answer: string) => void
  points: number[]
  addPoints: (points: number) => void
  questions: Question[]
  setQuestions: (questions: Question[]) => void
}>((set) => ({
  activeIndex: 0,
  setActiveIndex: (index: number) => set({ activeIndex: index }),
  answers: [],
  addAnswer: (answer: string) => set((state) => ({ answers: [...state.answers, answer] })),
  points: [],
  addPoints: (points: number) => set((state) => ({ points: [...state.points, points] })),
  questions: [],
  setQuestions: (questions: Question[]) => set({ questions }),
}))
