import useEffectOnce from './useEffectOnce'

const useUnmount = (fn: () => any) => {
  useEffectOnce(() => fn);
}

export default useUnmount;