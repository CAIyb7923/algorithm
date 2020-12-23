/**
* 定义前缀树节点
*/
class TrieNode {
  constructor() {
    this.links = new Map();
    this.isEnd = false;
  }

  containsKey(ch) {
    return this.links.has(ch);
  }

  get(ch) {
    return this.links.get(ch);
  }

  put(ch, node) {
    this.links.set(ch, node);
  }

  setEnd() {
    this.isEnd = true;
  }

  isEndNode() {
    return this.isEnd;
  }
}

/**
  * 实现前缀树
  */
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * 在前缀树中搜索指定的前缀
   * @param {string} word 待搜索的键
   * @return {null || TrieNode}
   */
  searchPrefix(word) {
    let currentNode = this.root;

    for (const ch of word) {
      // 如果当前节点的Map中不存在当前要查找的字符，说明键在前缀树中不存在，搜索结束
      if (!currentNode.links.has(ch)) {
        return null;
      }

      currentNode = currentNode.get(ch);
    }

    return currentNode;
  }

  /**
   * 查找指定的键
   * @param {string} word 指定的键
   * @return {boolean}
   */
  search(word) {
    const node = this.searchPrefix(word);

    // 当searchPrefix函数的返回值是代表结束的TrieNode时，表示查找到了完整的键
    return (node !== null) && node.isEndNode();
  }

  /**
   * 在前缀树中查找键前缀
   * @param {string} prefix 指定的前缀
   * @return {boolean}
   */
  startsWith(prefix) {
    const node = this.searchPrefix(prefix);

    return node !== null;
  }

  /**
  * 插入指定的键
  * @param {string} word 待插入的键
  */
  insert(word) {
    let currentNode = this.root;
    for (const ch of word) {
      // 如果当前节点不包含当前迭代的字符，就以该字符为key，创建一个新的节点为value，
      // 将该键值对插入Map
      if (!currentNode.links.has(ch)) {
        currentNode.put(ch, new TrieNode());
      }
      
      // 移动指针，指向字符对应的节点
      currentNode = currentNode.get(ch);
    }
    
    // 设置最后一个节点的end标志，表示插入结束
    currentNode.setEnd();
  }
}
