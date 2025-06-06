# Flappy Bird Clone

A simple HTML5 Canvas-based Flappy Bird-style game with JavaScript. Avoid obstacles, score points, and test your reflexes!

![Game Screenshot](https://via.placeholder.com/400x600.png?text=Flappy+Bird+Clone+Screenshot)

## Features

- Classic Flappy Bird gameplay mechanics
- Responsive controls (SPACE bar to jump)
- Infinite procedurally generated pipes
- Score tracking system
- Start/Reset button functionality
- Collision detection (pipes and screen edges)
- Game over screen with score display
- Clean and minimal UI design
- Customizable game parameters

## Installation

1. **Clone or download the repository**
   ```powershell
   git clone https://github.com/yourusername/flappy-bird-clone.git

Run the setup script (PowerShell):

powershell
cd flappy-bird-clone
Set-ExecutionPolicy RemoteSigned -Scope Process
.\create_files.ps1
Open in browser:

Double-click index.html or

Use Live Server extension in VS Code

How to Play
Click Start Game button to begin

Press SPACE bar to make the bird jump

Navigate through pipe gaps to score points

Avoid collisions with pipes and screen edges

Game ends when you collide with obstacles

Click Start Game to play again after Game Over

Customization
Modify these variables in game.js:

javascript
// Bird properties
gravity: 0.5,    // Gravity strength
jump: -8,        // Jump force
size: 20,        // Bird size

// Pipe properties
pipeGap: 150,    // Space between pipes
pipeWidth: 50,    // Pipe thickness
pipeSpacing: 200  // Distance between pipe pairs

// Game speed
pipe.x -= 2      // Pipe movement speed
Customize appearance in style.css:

Change colors (bird, pipes, background)

Modify canvas dimensions

Adjust score display styling

Customize button appearance

Technical Details
Built with vanilla JavaScript

HTML5 Canvas for rendering

CSS for styling and layout

RequestAnimationFrame for smooth animation

Event-driven architecture

No external dependencies

Future Improvements
Add sound effects/music

Implement high score system

Mobile touch support

Difficulty levels

Particle effects

Background parallax scrolling

Bird animation sprites

Pause functionality
