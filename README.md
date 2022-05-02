# Js Dice Probability

## Overview
Engine for simulating dice rolls to determine the probability of each potential result.

## Parameters
* Rolls
* Number of Die
* Sides per Die
* Randomization Method ('pseudo' or 'crypto')

## Example
```bash
# 10,000 Rolls of 2 die with 6 sides using pseudo randomization (Math.Random)
node diceProbability.js 10000 2 6 pseudo
# Beginning roll simulation. 10000 rolls / 2 dice / 6 sides per die / pseudo randomization
# ┌─────────┬───────┬────────────┬───────┐
# │ (index) │ Value │ Percentage │ Rolls │
# ├─────────┼───────┼────────────┼───────┤
# │    0    │   2   │    2.64    │  264  │
# │    1    │   3   │    5.44    │  544  │
# │    2    │   4   │    8.01    │  801  │
# │    3    │   5   │   11.17    │ 1117  │
# │    4    │   6   │   13.83    │ 1383  │
# │    5    │   7   │   16.89    │ 1689  │
# │    6    │   8   │   14.54    │ 1454  │
# │    7    │   9   │   10.73    │ 1073  │
# │    8    │  10   │    8.29    │  829  │
# │    9    │  11   │    5.5     │  550  │
# │   10    │  12   │    2.96    │  296  │
# └─────────┴───────┴────────────┴───────┘
# Completed in 0.023 seconds
# 100,000 Rolls of 4 die with 8 sides using crypto randomization (crypto.randomBytes)


node diceProbability.js 10000 4 8 crypto
# Beginning roll simulation. 10000 rolls / 4 dice / 8 sides per die / crypto randomization
# ┌─────────┬───────┬────────────┬───────┐
# │ (index) │ Value │ Percentage │ Rolls │
# ├─────────┼───────┼────────────┼───────┤
# │    0    │   4   │    0.04    │   4   │
# │    1    │   5   │    0.07    │   7   │
# │    2    │   6   │    0.31    │  31   │
# │    3    │   7   │    0.55    │  55   │
# │    4    │   8   │    0.71    │  71   │
# │    5    │   9   │    1.26    │  126  │
# │    6    │  10   │    1.99    │  199  │
# │    7    │  11   │     3      │  300  │
# │    8    │  12   │    4.1     │  410  │
# │    9    │  13   │    5.06    │  506  │
# │   10    │  14   │    6.09    │  609  │
# │   11    │  15   │    7.46    │  746  │
# │   12    │  16   │    7.72    │  772  │
# │   13    │  17   │    8.05    │  805  │
# │   14    │  18   │    7.79    │  779  │
# │   15    │  19   │    8.26    │  826  │
# │   16    │  20   │    7.63    │  763  │
# │   17    │  21   │    7.04    │  704  │
# │   18    │  22   │    5.81    │  581  │
# │   19    │  23   │    4.86    │  486  │
# │   20    │  24   │    4.05    │  405  │
# │   21    │  25   │    2.98    │  298  │
# │   22    │  26   │     2      │  200  │
# │   23    │  27   │    1.49    │  149  │
# │   24    │  28   │    0.85    │  85   │
# │   25    │  29   │    0.52    │  52   │
# │   26    │  30   │    0.13    │  13   │
# │   27    │  31   │    0.14    │  14   │
# │   28    │  32   │    0.04    │   4   │
# └─────────┴───────┴────────────┴───────┘
# Completed in 0.168 seconds
```

## Credits
This repo is being developed by [Pioneer898](https://github.com/pioneer898/)