//输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，
//则输出"student. a am I"。
//
//
//
// 示例 1：
//
// 输入: "the sky is blue"
//输出: "blue is sky the"
//
//
// 示例 2：
//
// 输入: "  hello world!  "
//输出: "world! hello"
//解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
//
//
// 示例 3：
//
// 输入: "a good   example"
//输出: "example good a"
//解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
//
//
//
//
// 说明：
//
//
// 无空格字符构成一个单词。
// 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
// 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
//
//
// 注意：本题与主站 151 题相同：https://leetcode-cn.com/problems/reverse-words-in-a-string/
//
//
// 注意：此题对比原题有改动
// Related Topics 字符串
// 👍 83 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.trim().split(' ');
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== '') {
            result = result + ' ' + arr[i];
        } else if (arr[i] === '' && arr[i - 1] !== '') {
            result = result + '';
        }
    }

    return result.trim();
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(reverseWords("  a good   example"));

/*var reverseWords = function(s) {
  let arr = s.trim().split(' ');
  let result = '';
  for (let i = arr.length - 1; i >= 0; i-- ) {
    if (arr[i] !== '') {
      result = result + ' ' + arr[i];
    } else if (arr[i] === '' && arr[i - 1] !== '') {
      result = result + arr[i];
    }

  }

  return result.trim();
};*/

// 双指针法
// var reverseWords = function(s) {
//   const data = s.trim();
//   let i = data.length - 1, j = i;
//   let result = '';
//   while (i >= 0) {
//     while (i >= 0 && data.charAt(i) !== ' ') i--;
//     result = result + data.substring(i + 1, j + 1) + ' ';
//     while (i >= 0 && data.charAt(i) === ' ') i--;
//     j = i;
//   }
//
//   return result.trim();
// };
