export class InjectableFactoriesLocatorHelper {
  private dependencies = {} as Record<string, () => unknown>

  public register(dependencyKey: string, dependencyFactory: () => unknown) {
    this.dependencies[dependencyKey] = dependencyFactory
  }

  public get(dependencyKey: string) {
    const factory = this.dependencies[dependencyKey]

    if (!factory) {
      throw new Error(
        `Dependency factory for ${dependencyKey} key was not found. Did you forget to register the factory ?`
      )
    }

    return factory
  }
}
