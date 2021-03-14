# Turun Saatanat

## Version 0.999

## What it does

This Firefox extension adds a random Finnish swearword to the end of most headlines in ts.fi and replaces the header logo.

## How to get

Download from https://addons.mozilla.org/fi/firefox/addon/turun-saatanat/ or search through Manage Extensions and add it from there. No mobile support starting from Firefox for Android 80 due to their changed extension support strategy.

## Required permissions

"tabs"

## Dear diary

14.3.2021 I updated this due to ts.fi receiving a major update and messing the logo replacement. There was also a logic error where the new word was added regardless of there being a punctuation mark or not, resulting in typos. This was fixed to search until the first non-punctuation mark appears and add the word there.

I took this opportunity to reformat the code to reflect my most recent knowledge of the language and I tried to implement the following:

- ES6 syntax
- Better code organization.
  - Constants at the top, then smaller helper functions, and finally the main function.
  - Giving more descriptive names for the variables
- Smaller, single-purpose functions instead of a couple of giant ones doing everything. This is now much easier to follow.
- Commenting my decisions. I have learned to not rely on my memory when it comes to code, so it is better to document the design reasoning and let the logic speak for itself.

In the future, it would be nice to redo this using test-driven development (TDD) principles and TypeScript since I have learned them at work.
