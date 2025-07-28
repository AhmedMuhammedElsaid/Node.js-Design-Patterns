# 🧠 Design Patterns - Behavioral Patterns

Welcome to the **Behavioral Patterns** section of the **Design Patterns** project. This section focuses on patterns that handle communication and responsibility between objects.

> 🧩 **Behavioral patterns** define how objects interact and communicate, emphasizing flexibility in flow and responsibility delegation.

---

## 📁 Patterns Included

| Pattern Name        | Description |
|---------------------|-------------|
| **Chain of Responsibility** | Passes a request along a chain of handlers until one handles it. |
| **Command**          | Encapsulates a request as an object, allowing for parameterization and queuing. |
| **Iterator**         | Provides a way to access elements of a collection without exposing its 
| **Observer**         | Allows objects to be notified when another object changes state. |

| **Strategy**         | Enables selecting an algorithm at runtime. |

---

## 📂 Folder Structure

behavioral-patterns/
├── chain-of-responsibility/
├── Iterator/
├── Observer/
├── Strategy/
└── README.md


> Replace `.ext` with your preferred language extension (e.g., `.js`, `.py`, `.java`).

---

## 🧠 Pattern Overviews

### 🔗 Chain of Responsibility
- Avoids coupling sender and receiver.
- Useful in event handling and middleware pipelines.

### 📦 Command
- Encapsulates actions and supports undo/redo.
- Example: UI buttons triggering commands.


### 🔁 Iterator
- Provides sequential access to elements.
- Hides internal representation of collections.


### 📡 Observer
- One-to-many dependency between objects.
- Common in UI frameworks and event-driven systems.

### 🔄 State
- Allows dynamic behavior changes.
- Example: Traffic light or document workflow.

### 🧠 Strategy
- Chooses algorithm behavior at runtime.
- Keeps algorithms interchangeable.


## 🛠️ How to Use

Browse each pattern folder for implementations and explanations.

```bash
cd behavioral-patterns/Observer
# Run or review the code

📚 References
Design Patterns: Elements of Reusable Object-Oriented Software — Gang of Four

Refactoring Guru - Behavioral Patterns

SourceMaking - Behavioral Patterns

🤝 Contributing
Want to add examples or another language?

Fork the repo

Create a feature branch

Commit your changes

Open a Pull Request

All contributions are welcome!
