# Longest Substring Without Repeating Characters
# Full problem: see ../README.md Part 3
# Run: python3 solution.py


def length_of_longest_substring(s):
    longest = []
    for i in range(len(s)):
        keep_going = True
        word = s[i]
        current_char = i+1
        while current_char < len(s) and keep_going:
            if s[current_char] in word:
                longest.append(word)
                keep_going = False
            else:
                word += s[current_char]
                current_char+=1
                longest.append(word)
    return len(max(longest, key=len))
    
            



print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))     # 1
print(length_of_longest_substring("pwwkew"))    # 3
