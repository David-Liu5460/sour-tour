
export let activeEffect = null;

export function effect (fn: Function) {
  // fn()
  activeEffect = fn;
  fn() // fn 内部会触发get函数



}