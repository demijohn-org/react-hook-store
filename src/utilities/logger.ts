export const logger = ({ path, previousState, nextState, value }: any) => {
  const color = '#92ab43';
  (() => {
    console.log(`%cUPDATE in '${path}'`, `color: ${color}`);
    console.log('%c | prev', `color: ${color}`, previousState);
    console.log('%c | payload:', `color: ${color}`, { value, path });
    console.log('%c | next', `color: ${color}`, nextState);
  })();
};
