export const logger = ({ path, previousState, nextState, value }: any) => {
  (() => {
    console.log(`%c|UPDATE in '${path}'`, 'color: #bada55');
    console.log('%c|  data:', 'color: #bada55');
    console.log('%c|', 'color: #bada55', { previousState });
    console.log('%c|\t', 'color: #bada55', { value, path });
    console.log('%c|', 'color: #bada55', { nextState });
  })();
};
