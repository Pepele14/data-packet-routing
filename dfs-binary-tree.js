function dataPacketTransferBinaryTree(node) {
  if (!node) {
    return [];
  }

  const stack = [node]; //init stack with root node
  const result = [];

  //as long as the stack is not empty the loop will repeat
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}

// const tree = {
//   value: 1,
//   left: {
//     value: 2,
//     left: { value: 4, left: null, right: null },
//     right: { value: 5, left: null, right: null },
//   },
//   right: {
//     value: 3,
//     left: { value: 6, left: null, right: null },
//     right: { value: 7, left: null, right: null },
//   },
// };

// console.log(dataPacketTransfer(tree));
