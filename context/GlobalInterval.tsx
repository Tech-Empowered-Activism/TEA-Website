import {
  createContext,
  useEffect,
  useContext,
  useCallback,
  useState,
  Context,
} from 'react'

export type Operation = {
  arrayLength: number
  currentValue: number
  opId: string // unique id for each operation
}

export type GlobalIntervalContextValue = {
  interval: NodeJS.Timer
  operations: Record<string, Operation>
  appendOperation: (op: Operation) => void
  removeOperation: (opId: string) => void
}

const GlobalIntervalContext: Context<GlobalIntervalContextValue> =
  createContext(null)

type Props = {
  children: React.ReactNode
}

let globalInterval: NodeJS.Timer

const GlobalIntervalContextProvider = ({ children }: Props) => {
  const [operations, setOperations] = useState({} as Record<string, Operation>)

  const handleNext = useCallback(() => {
    Object.keys(operations).forEach((key) => {
      const newOps = { ...operations }
      newOps[key].currentValue =
        operations[key].currentValue >= operations[key].arrayLength - 1
          ? 0
          : operations[key].currentValue + 1

      setOperations(newOps)
    })
  }, [operations])

  // Iterate through the operations on the same interval
  useEffect(() => {
    globalInterval = setInterval(handleNext, 2500)
    return () => clearInterval(globalInterval)
  }, [handleNext])

  // Register new operations to use the same timer interval
  const appendOperation = useCallback(
    (op: Operation) => {
      if (!operations[op.opId]) {
        operations[op.opId] = op
      }
    },
    [operations],
  )

  // Remove operations from the scheduler when components unmount
  const removeOperation = useCallback(
    (opId: string) => {
      delete operations[opId]
    },
    [operations],
  )

  return (
    <GlobalIntervalContext.Provider
      value={{
        operations,
        interval: globalInterval,
        appendOperation,
        removeOperation,
      }}
    >
      {children}
    </GlobalIntervalContext.Provider>
  )
}

export default GlobalIntervalContextProvider

export const useGlobalIntervalContext = () => {
  const context = useContext(GlobalIntervalContext)
  if (context === null) {
    throw new Error(
      `useGlobalIntervalContext must be used within a GlobalIntervalContextProvider`,
    )
  }
  return context
}
