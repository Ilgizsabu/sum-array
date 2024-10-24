const obj1 = { cool: "yes", value: 5 };
const obj2 = { cool: "no", result: 15 };

function sumObject(map1, map2) {
  const result = { ...map1 };

  for (const key of Object.keys(map2)) {
    if (result.hasOwnProperty(key)) {
      result[key] = result[key] + map2[key]; 
    } else {
      result[key] = map2[key];
    }
  }
  return result;
}

console.log(sumObject(obj1, obj2));