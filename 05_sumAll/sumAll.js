const sumAll = function(start, end) {
  if (start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number") {
    return "ERROR";

  } else if (start < end) {
    for (let i = start + 1; i <= end; i++) {
      start += i;
  }
  return start;

  } else if (start > end) {
    for (let i = end + 1; i <= start; i++) {
      end += i;
  }
  }
  return end;
  };

// Do not edit below this line
module.exports = sumAll;
