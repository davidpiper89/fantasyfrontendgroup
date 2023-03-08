//sorts the array of players in descending order of their total points
export const sorting = (arr) =>
  arr.sort((a, b) => {
    return b.total_points - a.total_points;
  });
//filters through the sorted array and returns the players whos element type corresponds to element type of goalkeepers
export const filterGoalkeepers = (arr) =>
  arr.filter((el) => {
    return el.element_type === 1;
  });
//filters through the sorted array and returns the players whos element type corresponds to element type of defenders
export const filterDefenders = (arr) =>
  arr.filter((el) => {
    return el.element_type === 2;
  });
//filters through the sorted array and returns the players whos element type corresponds to element type of midfielders
export const filterMidfielders = (arr) =>
  arr.filter((el) => {
    return el.element_type === 3;
  });
//filters through the sorted array and returns the players whos element type corresponds to element type of forwards
export const filterForwards = (arr) =>
  arr.filter((el) => {
    return el.element_type === 4;
  });
