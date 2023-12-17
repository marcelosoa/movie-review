import { PropsWithChildren } from "react";
import { InjectableFactoriesLocatorContext } from "./injectable.context";
import { InjectableFactoriesLocatorHelper } from "../../util/injectable-factories-locator.helper";
import { makeListMovieUseCase } from "../../main/factories/use-case/make-list-movies-use-case/make-list-movies-use-case";

const locator = new InjectableFactoriesLocatorHelper()

locator.register('listPopularMovies', makeListMovieUseCase)

export function InjectableProvider({children}: PropsWithChildren) {
  return (
    <InjectableFactoriesLocatorContext.Provider value={locator}>
      {children}
    </InjectableFactoriesLocatorContext.Provider>
  )
}