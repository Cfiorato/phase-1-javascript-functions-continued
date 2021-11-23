function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
};

const mondayWork = function (activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(thing1 = '*') {
  return function (thing2 = 'special') {
    return `You are ${thing1}${thing2}${thing1}!`;
  };
};

