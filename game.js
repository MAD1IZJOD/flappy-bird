const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('startButton');

// Game variables
let bird = {
    x: 50,
    y: 300,
    velocity: 0,
    gravity: 0.5,
    jump: -8,
    size: 20
};

let pipes = [];
let score = 0;
let gameLoop;
let isGameRunning = false;
const pipeGap = 150;
const pipeWidth = 50;
const pipeSpacing = 200;

// Event Listeners
document.addEventListener('keydown', (e) => {
    if (isGameRunning && e.code === 'Space') {
        bird.velocity = bird.jump;
    }
});

startButton.addEventListener('click', () => {
    resetGame();
});

function createPipe() {
    const gapPosition = Math.random() * (canvas.height - pipeGap);
    pipes.push({
        x: canvas.width,
        topHeight: gapPosition,
        bottomY: gapPosition + pipeGap,
        passed: false
    });
}

function drawBird() {
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(bird.x, bird.y, bird.size, 0, Math.PI * 2);
    ctx.fill();
}

function drawPipes() {
    ctx.fillStyle = '#2ecc71';
    pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
        ctx.fillRect(pipe.x, pipe.bottomY, pipeWidth, canvas.height - pipe.bottomY);
    });
}

function update() {
    if (!isGameRunning) return;

    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - pipeSpacing) {
        createPipe();
    }

    pipes.forEach(pipe => {
        pipe.x -= 2;

        if (!pipe.passed && pipe.x + pipeWidth < bird.x) {
            score++;
            scoreElement.textContent = Score: \;
            pipe.passed = true;
        }

        if (bird.x + bird.size > pipe.x && 
            bird.x - bird.size < pipe.x + pipeWidth && 
            (bird.y - bird.size < pipe.topHeight || 
             bird.y + bird.size > pipe.bottomY)) {
            gameOver();
        }
    });

    pipes = pipes.filter(pipe => pipe.x > -pipeWidth);

    if (bird.y + bird.size > canvas.height || bird.y - bird.size < 0) {
        gameOver();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPipes();
    drawBird();
}

function gameOver() {
    isGameRunning = false;
    cancelAnimationFrame(gameLoop);
    canvas.style.display = 'none';
    scoreElement.style.display = 'none';
    startButton.style.display = 'block';
    alert(Game Over! Score: \);
}

function resetGame() {
    // Reset game state
    bird.y = 300;
    bird.velocity = 0;
    pipes = [];
    score = 0;
    scoreElement.textContent = 'Score: 0';
    
    // Show game elements
    canvas.style.display = 'block';
    scoreElement.style.display = 'block';
    startButton.style.display = 'none';
    
    // Start game loop
    isGameRunning = true;
    gameLoop = requestAnimationFrame(gameLoopFunc);
}

function gameLoopFunc() {
    update();
    draw();
    if (isGameRunning) {
        gameLoop = requestAnimationFrame(gameLoopFunc);
    }
}
