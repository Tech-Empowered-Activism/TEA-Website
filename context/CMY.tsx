import { useContext, createContext, Context, useEffect } from 'react'
import { useGlobalIntervalContext } from './GlobalInterval'

export enum ColorValue {
  Cyan = 'var(--cyan)',
  Magenta = 'var(--magenta)',
  Yellow = 'var(--yellow)',
}

export type CMYContextValue = {
  currentSubjectValue: ColorValue
  currentDirectObjectValue: ColorValue
  currentLogoValue: ColorValue
}

const ColorContext: Context<CMYContextValue | null> = createContext(null)

export const values: ColorValue[] = [
  ColorValue.Cyan,
  ColorValue.Magenta,
  ColorValue.Yellow,
]

type Props = {
  children: React.ReactNode
}

const ColorContextProvider = ({ children }: Props) => {
  const { appendOperation, operations } = useGlobalIntervalContext()

  useEffect(() => {
    appendOperation({
      opId: 'logo-color',
      currentValue: 0,
      arrayLength: values.length,
    })

    appendOperation({
      opId: 'subject-color',
      currentValue: 1,
      arrayLength: values.length,
    })

    appendOperation({
      opId: 'direct-object-color',
      currentValue: 2,
      arrayLength: values.length,
    })
  }, [appendOperation])

  return (
    <ColorContext.Provider
      value={{
        currentSubjectValue:
          values[operations['subject-color']?.currentValue ?? 0],
        currentDirectObjectValue:
          values[operations['direct-object-color']?.currentValue ?? 1],
        currentLogoValue: values[operations['logo-color']?.currentValue ?? 2],
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export const useColorContext = () => {
  const context = useContext(ColorContext)

  if (context === undefined) {
    throw new Error(
      'useColorContext must be used within a ColorContextProvider',
    )
  }
  return context
}

export default ColorContextProvider
