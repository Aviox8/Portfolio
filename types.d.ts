// Global type declarations to suppress IDE warnings
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react' {
  export function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  export function useRef<T>(initialValue: T): MutableRefObject<T>;
  export function useCallback<T extends (...args: any[]) => any>(
    callback: T,
    deps: DependencyList,
  ): T;
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((val: S) => S)) => void];
}

export {};
