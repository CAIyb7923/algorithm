/**
 * Trie（发音叫"try"）或者叫前缀树是一种树数据结构，用于检索字符串数据集中的键
 */
class TrieNode {

  private TrieNode[] links;

  private final int R = 26;

  // 表示节点是键的结尾还是键前缀
  private boolean isEnd;

  public TrieNode() {
    links = new TrieNode[R];
  }

  public boolean containsKey(char ch) {
    return links[ch - 'a'] != null;
  }

  public TrieNode get(char ch) {
    return links[ch - 'a'];
  }

  public void put(char ch, TrieNode node) {
    links[ch - 'a'] = node;
  }

  public void setEnd() {
    isEnd = true;
  }

  public boolean isEnd() {
    return isEnd;
  }
}

class Trie {
  private TrieNode root;

  public Trie() {
    root = new TrieNode();
  }

  public void insert(String word) {
    TrieNode node = root;

    for (int i = 0; i < word.length(); i++) {
      char currentChar = word.charAt(i);
      if (!node.containsKey(currentChar)) {
        node.put(currentChar, new TrieNode());
      }
      node = node.get(currentChar);
    }

    node.setEnd();
  }

  private TrieNode searchPrefix(String word) {
    TrieNode node = root;

    for (int i = 0; i < word.length(); i++) {
      char curLetter = word.charAt(i);

      if (node.containsKey(curLetter)) {
        node = node.get(curLetter);
      } else {
        return null;
      }
    }

    return node;
  }

  public boolean search(String word) {
    TrieNode node = searchPrefix(word);

    return node != null && node.isEnd();
  }

  public boolean startsWith(String prefix) {
    TrieNode node = searchPrefix(prefix);

    return node != null;
  }
}