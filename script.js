const db = require("./backend/db/conn");
//require("./backend/index")

var score = 0;
var lives = 4;
var dropTime = 20;
var gameArea = document.getElementById("game-area");

async function updateScore(score) {
  const collection = db.collection("users");
  var userame;

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    userame = document.getElementById("name").value;
  });

  try {
    await collection.updateOne(
      {
        name: username,
      },
      {
        $set: { score: score },
      }
    );
  } catch (err) {
    console.err(err);
  } finally {
  }
}

function createHeart() {
  var heart = document.createElement("div");
  heart.className = "heart";

  if (lives <= 5 && Math.random() > 0.95) {
    heart.classList.add("golden-heart");
  } else {
    heart.classList.add("red-heart");
  }

  heart.style.left = Math.random() * 350 + "px";
  gameArea.appendChild(heart);

  var heartInterval = setInterval(() => {
    var heartPosition = heart.offsetTop;
    var gameAreaHeight = gameArea.offsetHeight;

    if (heartPosition < gameAreaHeight) {
      heart.style.top = heartPosition + 1 + "px";
    } else {
      clearInterval(heartInterval);
      lives--;
      document.getElementById("lives").textContent = "Vies: " + lives;

      gameArea.removeChild(heart);
    }

    if (lives === 0) {
      clearInterval(createHeart);

      var p = document.createElement("p");
      p.textContent = "Vous avez terminé avec un score de " + score;
      document.getElementById("main-lost").appendChild(p);

      window.location.href = "lost-page.html";
    }
  }, dropTime);

  heart.addEventListener("click", () => {
    heart.classList.add("heart-exit");

    setTimeout(() => {
      gameArea.removeChild(heart);
    }, 1000);

    if (heart.classList.contains("red-heart")) {
      score++;
      heart.style.backgroundImage = "url('./images/broken-red-heart.png')";
    } else if (heart.classList.contains("golden-heart")) {
      lives++;
      heart.style.backgroundImage = "url('./images/broken-gold-heart.png')";
    }

    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("lives").textContent = "Vies: " + lives;

    //gameArea.removeChild;
  });

  heart.addEventListener("touchstart", () => {
    heart.classList.add("heart-exit");

    if (heart.classList.contains("red-heart")) {
      score++;
      heart.style.backgroundImage = "url('./images/broken-red-heart.png')";
    } else if (heart.classList.contains("golden-heart")) {
      lives++;
      heart.style.backgroundImage = "url('./images/broken-gold-heart.png')";
    }

    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("lives").textContent = "Vies: " + lives;
  });

  heart.addEventListener("touchend", () => {
    setTimeout(() => {
      gameArea.removeChild(heart);
    }, 1000);
  });

  /* setTimeout(function () {
    gameArea.removeChild(heart);
    if (!heart.classList.contains("golden-heart")) {
      lives--;
      document.getElementById("lives").textContent = "Vies: " + lives;
    }
  }, 3000); // Supprime le cœur après 3 secondes
  */
}

if (score <= 10) {
  setInterval(createHeart, 1500);
} else if (score > 10 && score <= 20) {
  clearInterval(createHeart);
  setInterval(createHeart, 1000);
  dropTime = 10;
} else if (score > 20 && score <= 40) {
  clearInterval(createHeart);
  setInterval(createHeart, 1000);
  dropTime = 7;
} else if (score > 60) {
  clearInterval(createHeart);
  setInterval(createHeart, 500);
  dropTime = 5;
}
