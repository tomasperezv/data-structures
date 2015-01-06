CS Data Structures and Algorithms
=================================
Data structures and Algorithms implemented in Javascript.

Author
----------
Tomas Perez - tom@0x101.com

http://www.tomasperez.com

### Installation ###

```shell
$ npm install
```

### Run the tests ###

If you want to run the tests, you need to install mocha globally:

```shell
$ npm install -g mocha
```

Then you can run the tests:

```shell
$ npm test
  BinaryOperator
    getBit
      ✓ Returning bits 
    setBit
      ✓ Setting bits 
    clearBit
      ✓ Clearing bits 

  Insertion sort
    ✓ Trivial cases 
    ✓ Non trivial cases 

  Merge sort
    ✓ Already sorted array 
    ✓ Non trivial cases 

  Quick sort
    ✓ Partition method 
    ✓ Already sorted array 
    ✓ Non trivial cases 

  Two Sum
    ✓ Basic tests 

  BFS
    Solve algorithm
      ✓ BFS simple search 

  Closest leaf
    Solve algorithm
      ✓ Determine the closest leaf in a binary tree 

  DFS
    Solve algorithm
      ✓ DFS simple search, iterative version 
      ✓ DFS simple search, recursive version 

  Dijkstra
    Error handling
      ✓ Empty graph 
    Solve algorithm
      ✓ Single source path search: one vertex 
      ✓ Single source path search: multiple nodes 

  LargestCommonSubstring
    The algorithm works as expected
      ✓ Basic cases 

  LargestOfTwoNumbers
    The algorithm works as expected
      ✓ Basic cases 

  Min Height in binary trees
    Solve
      ✓ Empty BinaryTrees 
      ✓ Basic cases 

  SortedArrayToBST
    The algorithm works as expected
      ✓ Basic cases 
      ✓ Edge cases 

  TreeTraverse
    In Order
      ✓ Traverses properly a binary tree in-order 
      ✓ Traverses properly a binary tree post-order 
      ✓ Traverses properly a binary tree in-order 

  BinaryTree
    Creation
      ✓ Empty BinarySearchTree 
      ✓ Simple BinarySearchTree 
    Inserting elements in a Binary Search Tree
      ✓ Basic insertion 
    Get largest element in a Binary Search Tree
      ✓ Construct the BST and search for the largest 

  BinaryTree
    Creation
      ✓ Empty BinaryTrees 
      ✓ Leave values must be BinaryTreeNode 
      ✓ Simple creation 

  DoubleLinkedList
    Insertion
      ✓ Simple insertion 
      ✓ Can not insert an invalid a value 
      ✓ Can insert multiples values 

  HashTable
    The data structure works as expected
      ✓ Keys validation 
      ✓ Insertion 
      ✓ Hash function 

  List
    isEmpty
      ✓ Checking if a list is empty 
    Insertion
      ✓ Simple insertion 
      ✓ Can not insert an invalid a value 
      ✓ Can insert multiples values 

  MinHeap
    The data structure works as expected
      ✓ Basic cases 

  Node
    Creation and initialization
      ✓ Simple creation 
      ✓ Can not initialize a node without a value 
    Handling previous node
      ✓ Can assign a value to the previous node 
      ✓ Can not assign invalid values to the previous node 
    Handling next node
      ✓ Can assign a value to the next node 
      ✓ Can not assign invalid values to the next node 

  SuffixTree
    Inserting words in a suffix tree
      ✓ Simple insertion and retrieval 
    Application of a suffix tree for computing common substrings
      ✓ Is q a substring of S 
      ✓ How many times does q appear in S 
      ✓ Longest common substring of S and q 

  Tree
    Creation
      ✓ Empty trees 
      ✓ isLeaf 
      ✓ Leave values must be TreeNode 
      ✓ Simple creation 

  Trie
    Inserting and retrieval
      ✓ Simple insertion and retrieval of words 

  60 passing (98ms)
```

License
-----------
Public Domain.

No warranty expressed or implied. Use at your own risk.
