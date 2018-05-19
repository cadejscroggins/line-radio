export const daysFromNow = days => {
  return new Date().getTime() + 1000 * 60 * 60 * 24 * days;
};

export const hash = str => {
  return str.split('').reduce((prevHash, currVal) => {
    return Math.abs(((prevHash << 5) - prevHash) + currVal.charCodeAt(0));
  }, 0);
};