// Problem data structure with descriptions and test cases
const problemsData = {
    "two-sum": {
        title: "Two Sum",
        difficulty: "Easy",
        description: `
            <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to target</em>.</p>
            <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
            <p>You can return the answer in any order.</p>
            <h4>Example 1:</h4>
            <pre>Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</pre>
            <h4>Example 2:</h4>
            <pre>Input: nums = [3,2,4], target = 6
Output: [1,2]</pre>
            <h4>Example 3:</h4>
            <pre>Input: nums = [3,3], target = 6
Output: [0,1]</pre>
            <h4>Constraints:</h4>
            <ul>
                <li>2 ≤ nums.length ≤ 10⁴</li>
                <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                <li>-10⁹ ≤ target ≤ 10⁹</li>
                <li>Only one valid answer exists.</li>
            </ul>
        `,
        defaultCode: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        return new int[0];
    }
}`,
        testCases: [
            { input: { nums: [2,7,11,15], target: 9 }, expected: [0,1] },
            { input: { nums: [3,2,4], target: 6 }, expected: [1,2] },
            { input: { nums: [3,3], target: 6 }, expected: [0,1] }
        ]
    },
    "contains-duplicate": {
        title: "Contains Duplicate",
        difficulty: "Easy",
        description: `
            <p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>
            <h4>Example 1:</h4>
            <pre>Input: nums = [1,2,3,1]
Output: true</pre>
            <h4>Example 2:</h4>
            <pre>Input: nums = [1,2,3,4]
Output: false</pre>
            <h4>Example 3:</h4>
            <pre>Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true</pre>
            <h4>Constraints:</h4>
            <ul>
                <li>1 ≤ nums.length ≤ 10⁵</li>
                <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            </ul>
        `,
        defaultCode: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Your code here
        return false;
    }
}`,
        testCases: [
            { input: { nums: [1,2,3,1] }, expected: true },
            { input: { nums: [1,2,3,4] }, expected: false },
            { input: { nums: [1,1,1,3,3,4,3,2,4,2] }, expected: true }
        ]
    },
    "valid-anagram": {
        title: "Valid Anagram",
        difficulty: "Easy",
        description: `
            <p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if</em> <code>t</code> <em>is an anagram of</em> <code>s</code><em>, and</em> <code>false</code> <em>otherwise</em>.</p>
            <p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>
            <h4>Example 1:</h4>
            <pre>Input: s = "anagram", t = "nagaram"
Output: true</pre>
            <h4>Example 2:</h4>
            <pre>Input: s = "rat", t = "car"
Output: false</pre>
            <h4>Constraints:</h4>
            <ul>
                <li>1 ≤ s.length, t.length ≤ 5 × 10⁴</li>
                <li>s and t consist of lowercase English letters.</li>
            </ul>
        `,
        defaultCode: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Your code here
        return false;
    }
}`,
        testCases: [
            { input: { s: "anagram", t: "nagaram" }, expected: true },
            { input: { s: "rat", t: "car" }, expected: false },
            { input: { s: "listen", t: "silent" }, expected: true }
        ]
    },
    "longest-consecutive-sequence": {
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        description: `
            <p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence</em>.</p>
            <p>You must write an algorithm that runs in <code>O(n)</code> time.</p>
            <h4>Example 1:</h4>
            <pre>Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.</pre>
            <h4>Example 2:</h4>
            <pre>Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9</pre>
            <h4>Constraints:</h4>
            <ul>
                <li>0 ≤ nums.length ≤ 10⁵</li>
                <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            </ul>
        `,
        defaultCode: `class Solution {
    public int longestConsecutive(int[] nums) {
        // Your code here
        return 0;
    }
}`,
        testCases: [
            { input: { nums: [100,4,200,1,3,2] }, expected: 4 },
            { input: { nums: [0,3,7,2,5,8,4,6,0,1] }, expected: 9 },
            { input: { nums: [] }, expected: 0 }
        ]
    },
    "move-zeroes": {
        title: "Move Zeroes",
        difficulty: "Easy",
        description: `
            <p>Given an integer array <code>nums</code>, move all <code>0</code>'s to the end of it while maintaining the relative order of the non-zero elements.</p>
            <p><strong>Note</strong> that you must do this in-place without making a copy of the array.</p>
            <h4>Example 1:</h4>
            <pre>Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]</pre>
            <h4>Example 2:</h4>
            <pre>Input: nums = [0]
Output: [0]</pre>
            <h4>Constraints:</h4>
            <ul>
                <li>1 ≤ nums.length ≤ 10⁴</li>
                <li>-2³¹ ≤ nums[i] ≤ 2³¹ - 1</li>
            </ul>
        `,
        defaultCode: `class Solution {
    public void moveZeroes(int[] nums) {
        // Your code here
    }
}`,
        testCases: [
            { input: { nums: [0,1,0,3,12] }, expected: [1,3,12,0,0] },
            { input: { nums: [0] }, expected: [0] },
            { input: { nums: [0,0,1] }, expected: [1,0,0] }
        ]
    },
    "valid-palindrome": {
        title: "Valid Palindrome",
        difficulty: "Easy",
        description: `
            <p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p>
            <p>Given a string <code>s</code>, return <code>true</code><em> if it is a <strong>palindrome</strong>, or </em><code>false</code><em> otherwise</em>.</p>
            <h4>Example 1:</h4>
            <pre>Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.</pre>
            <h4>Example 2:</h4>
            <pre>Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.</pre>
            <h4>Example 3:</h4>
            <pre>Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.</pre>
        `,
        defaultCode: `class Solution {
    public boolean isPalindrome(String s) {
        // Your code here
        return false;
    }
}`,
        testCases: [
            { input: { s: "A man, a plan, a canal: Panama" }, expected: true },
            { input: { s: "race a car" }, expected: false },
            { input: { s: " " }, expected: true }
        ]
    },
    "two-sum-ii-input-array-is-sorted": {
        title: "Two Sum II - Input Array Is Sorted",
        difficulty: "Medium",
        description: `
            <p>Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is already <strong>sorted in non-decreasing order</strong>, find two numbers such that they add up to a specific <code>target</code> number. Let these two numbers be <code>numbers[index1]</code> and <code>numbers[index2]</code> where <code>1 <= index1 < index2 <= numbers.length</code>.</p>
            <p>Return <em>the indices of the two numbers, </em><code>index1</code><em> and </em><code>index2</code><em>, <strong>added by one</strong> as an integer array </em><code>[index1, index2]</code><em> of length 2</em>.</p>
            <p>The tests are generated such that there is <strong>exactly one solution</strong>. You <strong>may not</strong> use the same element twice.</p>
            <p>Your solution must use only constant extra space.</p>
            <h4>Example 1:</h4>
            <pre>Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].</pre>
        `,
        defaultCode: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // Your code here
        return new int[0];
    }
}`,
        testCases: [
            { input: { numbers: [2,7,11,15], target: 9 }, expected: [1,2] },
            { input: { numbers: [2,3,4], target: 6 }, expected: [1,3] },
            { input: { numbers: [-1,0], target: -1 }, expected: [1,2] }
        ]
    },
    "3sum": {
        title: "3Sum",
        difficulty: "Medium",
        description: `
            <p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>
            <p>Notice that the solution set must not contain duplicate triplets.</p>
            <h4>Example 1:</h4>
            <pre>Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].</pre>
        `,
        defaultCode: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Your code here
        return new ArrayList<>();
    }
}`,
        testCases: [
            { input: { nums: [-1,0,1,2,-1,-4] }, expected: [[-1,-1,2],[-1,0,1]] },
            { input: { nums: [0,1,1] }, expected: [] },
            { input: { nums: [0,0,0] }, expected: [[0,0,0]] }
        ]
    },
    "binary-search": {
        title: "Binary Search",
        difficulty: "Easy",
        description: `
            <p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p>
            <p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>
            <h4>Example 1:</h4>
            <pre>Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4</pre>
            <h4>Example 2:</h4>
            <pre>Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1</pre>
        `,
        defaultCode: `class Solution {
    public int search(int[] nums, int target) {
        // Your code here
        return -1;
    }
}`,
        testCases: [
            { input: { nums: [-1,0,3,5,9,12], target: 9 }, expected: 4 },
            { input: { nums: [-1,0,3,5,9,12], target: 2 }, expected: -1 },
            { input: { nums: [5], target: 5 }, expected: 0 }
        ]
    },
    "valid-parentheses": {
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: `
            <p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>
            <p>An input string is valid if:</p>
            <ol>
                <li>Open brackets must be closed by the same type of brackets.</li>
                <li>Open brackets must be closed in the correct order.</li>
                <li>Every close bracket has a corresponding open bracket of the same type.</li>
            </ol>
            <h4>Example 1:</h4>
            <pre>Input: s = "()"
Output: true</pre>
            <h4>Example 2:</h4>
            <pre>Input: s = "()[]{}"
Output: true</pre>
            <h4>Example 3:</h4>
            <pre>Input: s = "(]"
Output: false</pre>
        `,
        defaultCode: `class Solution {
    public boolean isValid(String s) {
        // Your code here
        return false;
    }
}`,
        testCases: [
            { input: { s: "()" }, expected: true },
            { input: { s: "()[]{}" }, expected: true },
            { input: { s: "(]" }, expected: false },
            { input: { s: "([)]" }, expected: false }
        ]
    },
    "reverse-linked-list": {
        title: "Reverse Linked List",
        difficulty: "Easy",
        description: `
            <p>Given the head of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>
            <h4>Example 1:</h4>
            <pre>Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]</pre>
            <h4>Example 2:</h4>
            <pre>Input: head = [1,2]
Output: [2,1]</pre>
            <h4>Example 3:</h4>
            <pre>Input: head = []
Output: []</pre>
        `,
        defaultCode: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        // Your code here
        return null;
    }
}`,
        testCases: [
            { input: { head: [1,2,3,4,5] }, expected: [5,4,3,2,1] },
            { input: { head: [1,2] }, expected: [2,1] },
            { input: { head: [] }, expected: [] }
        ]
    },
    "longest-substring-without-repeating-characters": {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        description: `
            <p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>
            <h4>Example 1:</h4>
            <pre>Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.</pre>
            <h4>Example 2:</h4>
            <pre>Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.</pre>
            <h4>Example 3:</h4>
            <pre>Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.</pre>
        `,
        defaultCode: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Your code here
        return 0;
    }
}`,
        testCases: [
            { input: { s: "abcabcbb" }, expected: 3 },
            { input: { s: "bbbbb" }, expected: 1 },
            { input: { s: "pwwkew" }, expected: 3 }
        ]
    },
    "find-minimum-in-rotated-sorted-array": {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        description: `
            <p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,2,4,5,6,7]</code> might become:</p>
            <ul>
                <li><code>[4,5,6,7,0,1,2]</code> if it was rotated <code>4</code> times.</li>
                <li><code>[0,1,2,4,5,6,7]</code> if it was rotated <code>7</code> times.</li>
            </ul>
            <p>Given the sorted rotated array <code>nums</code> of <strong>unique</strong> elements, return <em>the minimum element of this array</em>.</p>
            <p>You must write an algorithm that runs in <code>O(log n)</code> time.</p>
            <h4>Example 1:</h4>
            <pre>Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.</pre>
        `,
        defaultCode: `class Solution {
    public int findMin(int[] nums) {
        // Your code here
        return 0;
    }
}`,
        testCases: [
            { input: { nums: [3,4,5,1,2] }, expected: 1 },
            { input: { nums: [4,5,6,7,0,1,2] }, expected: 0 },
            { input: { nums: [11,13,15,17] }, expected: 11 }
        ]
    },
    "search-a-2d-matrix": {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        description: `
            <p>You are given an <code>m x n</code> integer matrix <code>matrix</code> with the following two properties:</p>
            <ul>
                <li>Each row is sorted in non-decreasing order.</li>
                <li>The first integer of each row is greater than the last integer of the previous row.</li>
            </ul>
            <p>Given an integer <code>target</code>, return <code>true</code> <em>if</em> <code>target</code> <em>is in</em> <code>matrix</code> <em>or</em> <code>false</code> <em>otherwise</em>.</p>
            <p>You must write a solution in <code>O(log(m * n))</code> time complexity.</p>
            <h4>Example 1:</h4>
            <pre>Input: matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 5
Output: true</pre>
        `,
        defaultCode: `class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        // Your code here
        return false;
    }
}`,
        testCases: [
            { input: { matrix: [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target: 5 }, expected: true },
            { input: { matrix: [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target: 3 }, expected: true },
            { input: { matrix: [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target: 20 }, expected: false }
        ]
    },
    "daily-temperatures": {
        title: "Daily Temperatures",
        difficulty: "Medium",
        description: `
            <p>Given an array of integers <code>temperatures</code> represents the daily temperatures, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is the number of days you have to wait after the</em> <code>i<sup>th</sup></code> <em>day to get a warmer temperature</em>. If there is no future day for which this is possible, keep <code>answer[i] == 0</code> instead.</p>
            <h4>Example 1:</h4>
            <pre>Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]</pre>
            <h4>Example 2:</h4>
            <pre>Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]</pre>
        `,
        defaultCode: `class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        // Your code here
        return new int[0];
    }
}`,
        testCases: [
            { input: { temperatures: [73,74,75,71,69,72,76,73] }, expected: [1,1,4,2,1,1,0,0] },
            { input: { temperatures: [30,40,50,60] }, expected: [1,1,1,0] },
            { input: { temperatures: [30,60,90] }, expected: [1,1,0] }
        ]
    },
    "merge-two-sorted-lists": {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        description: `
            <p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>
            <p>Merge the two lists in a one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>
            <p>Return <em>the head of the merged linked list</em>.</p>
            <h4>Example 1:</h4>
            <pre>Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]</pre>
        `,
        defaultCode: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Your code here
        return null;
    }
}`,
        testCases: [
            { input: { list1: [1,2,4], list2: [1,3,4] }, expected: [1,1,2,3,4,4] },
            { input: { list1: [], list2: [] }, expected: [] },
            { input: { list1: [], list2: [0] }, expected: [0] }
        ]
    },
    "linked-list-cycle": {
        title: "Linked List Cycle",
        difficulty: "Easy",
        description: `
            <p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p>
            <p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail's <code>next</code> pointer is connected to. <strong>Note that</strong> <code>pos</code> <strong>is not passed as a parameter</strong>.</p>
            <p>Return <code>true</code> <em>if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p>
            <h4>Example 1:</h4>
            <pre>Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).</pre>
        `,
        defaultCode: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        // Your code here
        return false;
    }
}`,
        testCases: [
            { input: { head: [3,2,0,-4], pos: 1 }, expected: true },
            { input: { head: [1,2], pos: 0 }, expected: true },
            { input: { head: [1], pos: -1 }, expected: false }
        ]
    }
};

// Monaco Editor instance
let editor = null;

// Current problem being solved
let currentProblem = null;

// Initialize Monaco Editor
function initMonacoEditor() {
    // Wait for Monaco loader to be available
    if (typeof require === 'undefined') {
        setTimeout(initMonacoEditor, 100);
        return;
    }
    
    require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        const editorElement = document.getElementById('code-editor');
        if (editorElement && typeof monaco !== 'undefined') {
            editor = monaco.editor.create(editorElement, {
                value: '',
                language: 'java',
                theme: 'vs-dark',
                automaticLayout: true,
                fontSize: 14,
                minimap: { enabled: true },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                lineNumbers: 'on',
                roundedSelection: false,
                cursorStyle: 'line',
                formatOnPaste: true,
                formatOnType: true
            });
        }
    });
}

// Get problem key from URL
function getProblemKeyFromUrl(url) {
    // Handle both /problems/name/ and /problems/name/description/
    const match = url.match(/problems\/([^\/]+)/);
    if (match) {
        return match[1];
    }
    return null;
}

// Open code editor with problem
function openCodeEditor(problemKey) {
    const problem = problemsData[problemKey];
    if (!problem) {
        console.error('Problem not found:', problemKey);
        return;
    }

    currentProblem = problem;
    
    // Update problem info
    document.getElementById('problem-title').textContent = problem.title;
    document.getElementById('problem-difficulty').textContent = problem.difficulty;
    document.getElementById('problem-difficulty').className = `difficulty-badge ${problem.difficulty.toLowerCase()}`;
    document.getElementById('problem-description').innerHTML = problem.description;
    
    // Update code editor
    if (editor) {
        editor.setValue(problem.defaultCode);
        // Update editor layout after a short delay to ensure DOM is ready
        setTimeout(() => {
            editor.layout();
        }, 100);
    }
    
    // Update test cases
    const testCasesContainer = document.getElementById('test-cases-container');
    testCasesContainer.innerHTML = '';
    problem.testCases.forEach((testCase, index) => {
        const testCaseDiv = document.createElement('div');
        testCaseDiv.className = 'test-case';
        testCaseDiv.innerHTML = `
            <div class="test-case-header">
                <span>Test Case ${index + 1}</span>
            </div>
            <div class="test-case-content">
                <div class="test-input">
                    <strong>Input:</strong> <code>${JSON.stringify(testCase.input)}</code>
                </div>
                <div class="test-expected">
                    <strong>Expected:</strong> <code>${JSON.stringify(testCase.expected)}</code>
                </div>
                <div class="test-result" id="test-result-${index}">
                    <strong>Result:</strong> <span class="pending">Pending</span>
                </div>
            </div>
        `;
        testCasesContainer.appendChild(testCaseDiv);
    });
    
    // Show modal
    document.getElementById('code-editor-modal').classList.add('show');
}

// Close code editor
function closeCodeEditor() {
    document.getElementById('code-editor-modal').classList.remove('show');
    document.getElementById('output-content').innerHTML = '<p class="output-placeholder">Click "Run" to execute your code</p>';
}

// Run code - simplified version
function runCode() {
    if (!editor || !currentProblem) return;
    
    const code = editor.getValue();
    const outputContent = document.getElementById('output-content');
    const runButton = document.getElementById('run-button');
    
    // Disable button and show loading
    runButton.disabled = true;
    runButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Running...';
    outputContent.innerHTML = '<p class="output-placeholder" style="color: #fbbf24;">Compiling your code...</p>';
    
    // Simulate compilation
    setTimeout(() => {
        outputContent.innerHTML = `
            <div style="color: #4ade80; margin-bottom: 15px;">
                <strong>✓ Code compiled successfully!</strong>
            </div>
            <div style="color: #d0d0d0; font-size: 13px;">
                Your code has been compiled. Code execution and test case validation will be added later.
            </div>
        `;
        
        runButton.disabled = false;
        runButton.innerHTML = '<i class="fa-solid fa-play"></i> Run';
    }, 1000);
}


// Panel resizing functionality
function initPanelResizer() {
    const resizer = document.getElementById('resizer');
    const problemPanel = document.getElementById('problem-panel');
    const editorPanel = document.getElementById('editor-panel');
    const container = document.querySelector('.editor-container');
    
    if (!resizer || !problemPanel || !editorPanel) return;
    
    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    
    resizer.addEventListener('mousedown', function(e) {
        isResizing = true;
        startX = e.clientX;
        startWidth = problemPanel.offsetWidth;
        resizer.classList.add('resizing');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        
        const containerWidth = container.offsetWidth;
        const diff = e.clientX - startX;
        let newWidth = startWidth + diff;
        
        // Set min and max widths
        const minWidth = 300;
        const maxWidth = containerWidth * 0.7;
        
        if (newWidth < minWidth) {
            newWidth = minWidth;
        } else if (newWidth > maxWidth) {
            newWidth = maxWidth;
        }
        
        problemPanel.style.width = newWidth + 'px';
        
        // Update Monaco editor layout if it exists
        if (editor) {
            editor.layout();
        }
    });
    
    document.addEventListener('mouseup', function() {
        if (isResizing) {
            isResizing = false;
            resizer.classList.remove('resizing');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    });
}

// Output panel resizing functionality
function initOutputResizer() {
    const outputResizer = document.getElementById('output-resizer');
    const editorContainer = document.querySelector('.monaco-editor-container');
    const outputSection = document.getElementById('output-section');
    const editorPanel = document.getElementById('editor-panel');
    
    if (!outputResizer || !editorContainer || !outputSection) return;
    
    let isResizing = false;
    let startY = 0;
    let startHeight = 0;
    
    outputResizer.addEventListener('mousedown', function(e) {
        isResizing = true;
        startY = e.clientY;
        startHeight = outputSection.offsetHeight;
        outputResizer.classList.add('resizing');
        document.body.style.cursor = 'row-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        
        const panelHeight = editorPanel.offsetHeight;
        const diff = startY - e.clientY; // Inverted because we're resizing from bottom
        let newHeight = startHeight + diff;
        
        // Set min and max heights
        const minHeight = 150;
        const maxHeight = panelHeight * 0.7;
        
        if (newHeight < minHeight) {
            newHeight = minHeight;
        } else if (newHeight > maxHeight) {
            newHeight = maxHeight;
        }
        
        outputSection.style.height = newHeight + 'px';
        
        // Update Monaco editor layout if it exists
        if (editor) {
            editor.layout();
        }
    });
    
    document.addEventListener('mouseup', function() {
        if (isResizing) {
            isResizing = false;
            outputResizer.classList.remove('resizing');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Monaco Editor
    initMonacoEditor();
    
    // Initialize panel resizers
    initPanelResizer();
    initOutputResizer();
    
    // Update editor layout on window resize
    window.addEventListener('resize', function() {
        if (editor) {
            editor.layout();
        }
    });
    
    // Close button handler
    document.getElementById('close-code-editor').addEventListener('click', closeCodeEditor);
    
    // Run button handler
    document.getElementById('run-button').addEventListener('click', runCode);
    
    // Close on outside click
    document.getElementById('code-editor-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCodeEditor();
        }
    });
    
    // Modify all problem links to open code editor instead
    document.querySelectorAll('.table-content .td a').forEach(link => {
        if (link.href && link.href.includes('leetcode.com/problems/')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const problemKey = getProblemKeyFromUrl(this.href);
                if (problemKey && problemsData[problemKey]) {
                    openCodeEditor(problemKey);
                } else {
                    // If problem not in our data, open in new tab
                    window.open(this.href, '_blank');
                }
            });
        }
    });
});
