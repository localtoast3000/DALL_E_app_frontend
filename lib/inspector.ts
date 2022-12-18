import util from 'util';

export function inspect(itemToInspect: any) {
  console.log(util.inspect(itemToInspect, false, Infinity, true));
}
