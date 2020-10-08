"use strict";

var trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress'];
var errorElement = document.querySelector('#error');
var displayResults = document.querySelector('#displayResults');

var listTrees = function listTrees() {
  var treeList = ' ';
  trees.forEach(function (tree) {
    treeList += "".concat(tree, " <br>");
  });
  displayResults.innerHTML = "".concat(treeList, " <span> ").concat(trees.length, " elements long</span>");
};

listTrees();

document.querySelector('#add_redwood').onclick = function () {
  trees.push('redwood');
  listTrees();
};

document.querySelector('#add_pear').onclick = function () {
  trees.unshift('Pear');
  listTrees();
};

document.querySelector('#remove_tree1').onclick = function () {
  if (trees.length > 0) {
    trees.shift();
    listTrees();
  } else {
    errorElement.textContent = 'dude, i cannot remove the first tree cause there are no trees!';
  }
};

document.querySelector('#remove_tree2').onclick = function () {
  if (trees.length > 2) {
    trees.splice(1, 1);
    listTrees();
  } else {
    errorElement.textContent = 'dude, i cannot remove the second tree cause there are l tree left!';
  }
}; //removing the last item in the list


document.querySelector('#remove_treeLast').onclick = function () {
  if (trees.length > 0) {
    trees.pop();
    listTrees();
  } else {
    errorElement.textContent = 'dude, i cannot remove the last tree cause there are no trees!';
  }
}; //sorting tree list alphabetically


document.querySelector('#sortTrees').onclick = function () {
  if (trees.length > 0) {
    trees.sort();
    listTrees();
  } else {
    errorElement.textContent = 'dude, i cannot sort this list';
  }
}; //making list lowercase


console.log(trees);

document.querySelector('#showName3').onclick = function () {
  if (trees.length > 5) {
    trees.last();
    listTrees();
  } else {
    errorElement.textContent = 'aspen';
  }
};

document.querySelector('#showName4').onclick = function () {
  if (trees.first) {
    trees.keys(first);
    listTrees();
  } else {
    errorElement.textContent = 'dude, i cannot sort this list';
  }
};