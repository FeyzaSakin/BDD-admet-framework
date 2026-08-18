# BDD-admet-framework

## Overview

This repository contains exercises completed for the Part 2 paper internship assignment.

* JavaScript Exercise:
    * `javascript-exercises.js`: using three different functions; 
        1. counts from 1-10 in a loop; 
        2. counts even numbers in an array; 
        3. finds the longest word from the choices: apple, grape, peach, elephant;
* TypeScript Exercises:
    * `typescript-exercise-one.ts`: creates three compounds with their names and smiles
    * `typescript-exercise-two.ts`: shows an example of asynchronous execution
* Playwright Exercises:
    * `playwright-exercise-one.spec.ts`: verifies page titles at the Google and Gallaudet websites
    * `playwright-exercise-two.spec.ts`: copies "Ciao." after translating "Hello." in English on Google Translate
    * `playwright-exercise-three.spec.ts`: using "getByPlaceholder()", it types "New York City" in AccuWeather webpage search bar
    * `playwright-exercise-four.spec.ts`: using "locator()", it chooses "News" for the drop down option

---
## File Structure

```text
BDD-admet-framework/
├── part2_paper_exercises/
│   ├── JavaScript Exercise/
│   │   └── javascript-exercises.js
│   │
│   ├── TypeScript Exercises/
│   │   ├── typescript-exercise-one.ts
│   │   └── typescript-exercise-two.ts
│   │
│   ├── Playwright Exercise 1/
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── playwright-exercise-one.spec.ts
│   │
│   ├── Playwright Exercise 2/
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── playwright-exercise-two.spec.ts
│   │
│   ├── Playwright Exercise 3/
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── playwright-exercise-three.spec.ts
│   │
│   └── Playwright Exercise 4/
│       ├── .gitignore
│       ├── package.json
│       ├── package-lock.json
│       └── playwright-exercise-four.spec.ts
│
└── README.md
```

---
## Running the Project

### 1. javascript-exercises.js

#### 1. To run the javascript-exercises.js:

##### For Windows:
```text
node '.\part2_paper_exercises\JavaScript Exercise\javascript-exercises.js'
```

#### 2. Output of javascript-exercises.js

```text
1.Starting counting: 
1, 2, 3, 4, 5, 6, 7, 8, 9, 10

2.Starting counting evens for an array with values from 1-10: 
2, 4, 6, 8, 10

3.Starting finding the longest word: 
The longest word: elephant
```

---

### 2. typescript-exercise-one.ts

#### 1. To run the typescript-exercise-one.ts:

##### For Windows:
```text
node '.\part2_paper_exercises\TypeScript Exercises\typescript-exercise-one.ts'
```

---

### 3. typescript-exercise-two.ts

#### 1. To run the typescript-exercise-two.ts:

##### For Windows:
```text
node '.\part2_paper_exercises\TypeScript Exercises\typescript-exercise-two.ts'
```

#### 2. Output of typescript-exercise-two.ts

```text
The molecule is aspirin.
```

---

### 4. playwright-exercise-one.spec.ts

#### 1. To run the playwright-exercise-one.spec.ts:

##### For Windows:

###### 1. Headed
```text
cd '.\part2_paper_exercises\Playwright Exercises\Playwright Exercise 1'
npx playwright test --headed    
```

###### 2. Without Headed
```text
cd '.\part2_paper_exercises\Playwright Exercises\Playwright Exercise 1'
npx playwright test
```

#### 2. Output of playwright-exercise-one.spec.ts With Headed

```text

Running 2 tests using 1 worker

  ✓  1 playwright-exercise.spec.ts:6:5 › first test (1.8s)
  ✓  2 playwright-exercise.spec.ts:15:5 › second test (4.0s)

  2 passed (6.9s)
```

---

### 5. playwright-exercise-two.spec.ts

#### 1. To run the playwright-exercise-two.spec.ts:

##### For Windows:

###### 1. Headed
```text
cd '.\part2_paper_exercises\Playwright Exercises\Playwright Exercise 2'
npx playwright test --headed    
```

###### 2. Without Headed
```text
cd '.\part2_paper_exercises\Playwright Exercises\Playwright Exercise 2'
npx playwright test
```

#### 2. Output of playwright-exercise-two.spec.ts With Headed

```text

Running 1 test using 1 worker

  ✓  1 playwright-exercise-two.spec.ts:6:5 › translation test (10.5s)

  1 passed (11.6s)
```

---

### 6. playwright-exercise-three.spec.ts

#### 1. To run the playwright-exercise-three.spec.ts:

##### For Windows:

###### 1. Headed
```text
cd '.\part2_paper_exercises\Playwright Exercises\Playwright Exercise 3'
npx playwright test --headed    
```

###### 2. Without Headed
```text
cd '.\part2_paper_exercises\Playwright Exercises\Playwright Exercise 3'
npx playwright test
```

#### 2. Output of playwright-exercise-three.spec.ts With Headed

```text

Running 1 test using 1 worker

  ✓  1 playwright-exercise-three.spec.ts:6:5 › translation test (4.3s)

  1 passed (5.5s)
```

---

### 7. playwright-exercise-four.spec.ts

#### 1. To run the playwright-exercise-four.spec.ts:

##### For Windows:

###### 1. Headed
```text
cd '.\part2_paper_exercises\Playwright Exercises\Playwright Exercise 4'
npx playwright test --headed    
```

###### 2. Without Headed
```text
cd '.\part2_paper_exercises\Playwright Exercises\Playwright Exercise 4'
npx playwright test
```

#### 2. Output of playwright-exercise-four.spec.ts With Headed

```text

Running 1 test using 1 worker

  ✓  1 playwright-exercise-four.spec.ts:6:5 › drop down test (11.6s)

  1 passed (12.6s)
```