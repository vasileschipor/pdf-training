// Options could be:
// 1. x, y - coordinates of the field
// 2. size - size of the field
// 3. color - color of the field
export const FIRST_FLOW_FIELDS_OPTIONS = {
  name: {
    x: 230,
    y: 670,
  },
  county: {
    x: 450,
    y: 655,
  },
  isHome: {
    x: 272,
    y: 650,
  },
  city: {
    x: 320,
    y: 640,
  },

  //   SOLUTION 6.3 add coords for zipCode field
  //   SOLUTION 6.4 make zipCode smaller so it fits in the field
  //   ----------------
  zipCode: {
    x: 223,
    y: 625,
    size: 10,
  },
  //   ----------------
};
