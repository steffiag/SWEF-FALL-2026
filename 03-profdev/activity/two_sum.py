# Two Sum — scratch file for class
# Problem details: see TWO_SUM.md (same folder)
# Optional: fill this in during the walkthrough. No need to "pass tests" today.


def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i]+nums[j] == target:
                return [i, j]


# quick sanity check (optional)
print(two_sum([2, 7, 11, 15], 9))  # expect something like [0, 1]
print(two_sum([3, 2, 4], 6))       # expect [1, 2]
