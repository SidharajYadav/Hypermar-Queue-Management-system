# Hypermar Queue Management System

## Description
This is a web-based implementation of a customer distribution system for a hypermart's checkout machines. It dynamically assigns customers to the queue with the fewest total items.
<img src="https://raw.githubusercontent.com/SidharajYadav/Hypermar-Queue-Management-system/main/wify2jpg.jpg" alt="Realme MD" width="400"/>


## Technologies Used
- HTML
- CSS (Tailwind CSS)
- JavaScript

## How It Works
- Customers are added through an input form by specifying the number of items they have.
- The system automatically assigns the customer to the checkout with the least total number of items.
- If there's a tie, the leftmost checkout is chosen.

## Time Complexity
- Assigning a customer: **O(n)**, where **n** is the number of checkout counters.
- Rendering the UI: **O(n + m)** where **m** is the total number of customers across all queues.

## Setup
1. Clone this repo.
2. Open `index.html` in your browser.

## Folder Structure
```
assignment/
├── index.html
├── styles.css
├── script.js
└── README.md
```
