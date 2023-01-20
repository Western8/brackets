module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let arrCurrent = []
  let bracketsOpen = bracketsConfig.map(item => item[0]);
  let bracketsClose = bracketsConfig.map(item => item[1]);

  //console.log(arr);
  console.log(bracketsOpen);
  console.log(bracketsClose);

  for (item of arr) {
    if (bracketsOpen.includes(item)) {
      
      if (bracketsClose.includes(item)) {
        if (arrCurrent.at(-1) === item) {
          arrCurrent.pop();
        } else {
          arrCurrent.push(item);
        }
      } else {
        arrCurrent.push(item);
      }

    } else if (bracketsClose.includes(item)) {
      let brOpen = bracketsConfig.find(itemPair => itemPair[1] === item)[0];
      if (arrCurrent.at(-1) === brOpen) {
        arrCurrent.pop();
      } else {
        return false;
      }
    }
  }

  return (arrCurrent.length === 0) 

}

/*
n = '()';
k = [['(', ')']];
console.log(n);
res = module.exports(n, k);
console.log(res);

n = '((()))()';
k = [['(', ')']];
console.log(n);
res = module.exports(n, k);
console.log(res);

n = '[(])';
k = [['(', ')'], ['[', ']']];
console.log(n);
res = module.exports(n, k);
console.log(res);
*/