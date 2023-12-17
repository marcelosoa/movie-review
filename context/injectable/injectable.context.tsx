import { useRef, useContext, createContext } from "react"
import { InjectableFactoriesLocatorHelper } from "../../util/injectable-factories-locator.helper"

export const InjectableFactoriesLocatorContext = createContext<InjectableFactoriesLocatorHelper>(
  {} as InjectableFactoriesLocatorHelper
)

export function useInjectable<T>(dependencyKey: string) {
  const isLoaded = useRef<boolean>(false)
  const injectable = useRef<T>({} as T)
  const locator = useContext(InjectableFactoriesLocatorContext)

  if (isLoaded.current) {
    return injectable.current
  }

  injectable.current = locator.get(dependencyKey)() as T
  isLoaded.current = true
  return injectable.current
}
