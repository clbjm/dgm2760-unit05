const trees =['Oak', 'Pine', 'Aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

const listTrees = () => {
    let treeList = ' '
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span> ${trees.length} elements long</span>`
}
listTrees()

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'dude, i cannot remove the first tree cause there are no trees!'
    }
}
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 2) {
        trees.splice(1,1)
        listTrees()
    } else {
        errorElement.textContent = 'dude, i cannot remove the second tree cause there are l tree left!'
    }
}
//removing the last item in the list
document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'dude, i cannot remove the last tree cause there are no trees!'
    }
}
//sorting tree list alphabetically
document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 0) {
        trees.sort()
        listTrees()
    } else {
        errorElement.textContent = 'dude, i cannot sort this list'
    }
}
//making list lowercase
document.querySelector('#lowerTrees').onclick = () => {
    treesString = trees.toString();
    treesLowerString = treesString.toLowerCase();
    treesLower = treesLowerString.split(",");
    listTrees()
    console.log("treesLower: "+treesLower);
}
// function myFunction() {
//     trees = trees.toLowerCase();
//     document.querySelector('#lowerTrees').onclick = trees;
//     listTrees()
// }
// console.log(myFunction);


document.querySelector('#showName3').onclick = () => {
    if (trees.length > 5) {
        trees.last()
        listTrees()
    } else {
        errorElement.textContent = 'aspen'
    }
}
document.querySelector('#showName4').onclick = () => {
    if (trees.length > 5) {
        trees.keys()
        listTrees()
    } else {
        errorElement.textContent = 'bald cypress'
    }
}