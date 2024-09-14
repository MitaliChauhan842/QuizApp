# Quiz App

## Overview

This Quiz App is a web-based application designed to provide a dynamic and interactive quiz experience. The app allows users to answer multiple-choice questions, view their progress, and see a detailed report at the end of the quiz.

## Features

- Interactive quiz with multiple-choice questions
- Progress bar to track quiz completion
- Results and detailed scoring report
- Responsive design for a seamless user experience

## Data Structure

The app uses a JSON data format to define quiz questions and options. Each question in the dataset contains:

- **id**: A unique identifier for the question.
- **text**: The text of the question.
- **options**: An array of possible answers. Each option has:
  - **id**: A unique identifier for the option.
  - **text**: The text of the option.
  - **image** (optional): A URL to an image that represents the option (if applicable).
- **correctAnswer**: An array of IDs representing the correct options.
- **type**: Specifies whether the question is a single-choice (single) or multiple-choice (multi).

### Example JSON Data

```json
{
  "questions": [
    {
      "id": 1,
      "text": "What is the capital of France?",
      "options": [
        { "id": "a", "text": "Paris" },
        { "id": "b", "text": "London" },
        { "id": "c", "text": "Rome" },
        { "id": "d", "text": "Berlin" }
      ],
      "correctAnswer": ["a"],
      "type": "single"
    },
    {
      "id": 2,
      "text": "Which of the following are programming languages?",
      "options": [
        { "id": "a", "text": "Python" },
        { "id": "b", "text": "English" },
        { "id": "c", "text": "JavaScript" },
        { "id": "d", "text": "Spanish" }
      ],
      "correctAnswer": ["a", "c"],
      "type": "multi"
    },
    {
      "id": 3,
      "text": "Identify the image representing a cat.",
      "options": [
        { "id": "a", "text": "A cat"},
        { "id": "b", "text": "A dog"}
      ],
      "correctAnswer": ["a"],
      "type": "single"
    }
  ]
}
```
## How It Works

### Components

- **QuizStart**
  - **Description:** Displays the start button and quiz icon.
  - **Function:** Users click the button to begin the quiz.

- **Question**
  - **Description:** Displays each question along with its options.
  - **Function:** Options can include text and optional images, allowing users to select their answers.

- **ProgressBar**
  - **Description:** Shows the user's progress through the quiz.
  - **Function:** Utilizes a circular progress bar to indicate how much of the quiz has been completed.

- **Questionnaire**
  - **Description:** Manages the quiz flow.
  - **Function:** Displays questions, handles user answers, and updates progress as the user progresses through the quiz.

- **QuizReport**
  - **Description:** Shows the final results of the quiz.
  - **Function:** Includes the percentage score and a breakdown of correct and incorrect answers.

- **NextButton**
  - **Description:** Moves to the next question in the quiz.
  - **Function:** Allows users to advance through the questions one at a time.

## Data Flow

1. **Initialization**
   - The quiz data is loaded and presented to the user.
   - The `QuizStart` component is displayed, allowing the user to begin the quiz.

2. **User Interaction**
   - Users select answers for each question.
   - Their choices are tracked and stored as they progress through the quiz.

3. **Progress Tracking**
   - As users answer questions, their progress is updated.
   - The `ProgressBar` component reflects their current progress through the quiz.

4. **Completion**
   - Upon finishing the quiz, users are presented with a `QuizReport`.
   - The report includes a summary of their score and a breakdown of their performance.

## Getting Started

To get started with this quiz application, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/quiz-application.git

2. **Navigate to the Project Directory:**
   ```bash
   cd quiz-app

3. **Install Dependencies**
   ```bash
   npm install

4. **Start the Application:**
   ```bash
   npm run dev



https://github.com/user-attachments/assets/295f5492-c688-499c-becb-8ac53d59abcb

<img width="1786" alt="Screenshot 2024-09-13 at 6 45 53 PM" src="https://github.com/user-attachments/assets/93885180-aec5-4202-8f6d-311aef30bab3">
<img width="1788" alt="Screenshot 2024-09-13 at 6 46 01 PM" src="https://github.com/user-attachments/assets/50145bb6-3034-478b-b821-b2d271896339">
<img width="1783" alt="Screenshot 2024-09-13 at 6 46 18 PM" src="https://github.com/user-attachments/assets/3174e8aa-15ce-4673-962c-8f38beb1cedf">
<img width="1771" alt="Screenshot 2024-09-13 at 6 46 40 PM" src="https://github.com/user-attachments/assets/8e3ce171-690c-4077-ba15-3994bbb421fe">
<img width="1784" alt="Screenshot 2024-09-13 at 6 46 47 PM" src="https://github.com/user-attachments/assets/420280f2-4faa-422b-aa57-eaff0c93e35a"></div>
