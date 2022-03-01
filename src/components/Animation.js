export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const authPageAnimation = {
  hidden: {
    opacity: 0,
    x: 800,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: 800,
    transition: {
      duration: 0.3,
    },
  },
};
export const loginSignupPageAnimation = {
  hidden: {
    opacity: 0,
    x: 800,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: -800,
    transition: { type: "spring", duration: 0.3 },
  },
};
export const startPageAnimation = {
  initial: {
    y: 0,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50000,
    transition: {
      duration: 0.3,
    },
  },
};
