const questions = [

    {
        question: "WHICH ROOM SUITS YOU BEST?",

        type: "image",

        answers: [

            {
                image: "./assets/question1/pop_room.png",
                genre: "Pop"
            },

            {
                image: "./assets/question1/rock_room.png",
                genre: "Rock"
            },

            {
                image: "./assets/question1/country_room.png",
                genre: "Country"
            },

            {
                image: "./assets/question1/hiphop_room.png",
                genre: "Hip Hop"
            }
        ]
    },

    {
        question: "HOW DO OTHERS DESCRIBE YOU?",

        type: "text",

        answers: [

            {
                text: "SOCIAL",
                genre: "Pop"
            },

            {
                text: "REBELLIOUS",
                genre: "Rock"
            },

            {
                text: "TRADITIONAL",
                genre: "Country"
            },

            {
                text: "CONFIDENT",
                genre: "Hip Hop"
            }
        ]
    },

    {
        question: "WHICH GUITAR DO YOU PREFER?",

        type: "image",

        answers: [

            {
                image: "./assets/question3/pop_guitar.png",
                genre: "Pop"
            },

            {
                image: "./assets/question3/rock_guitar.png",
                genre: "Rock"
            },

            {
                image: "./assets/question3/country_guitar.png",
                genre: "Country"
            },

            {
                image: "./assets/question3/hiphop_guitar.png",
                genre: "Hip Hop"
            }
        ]
    },

    {
        question: "WHAT EMOTION BEST DESCRIBES YOU?",

        type: "text",

        answers: [

            {
                text: "JOYFUL",
                genre: "Pop"
            },

            {
                text: "PASSIONATE",
                genre: "Rock"
            },

            {
                text: "NOSTALGIC",
                genre: "Country"
            },

            {
                text: "PEACEFUL",
                genre: "Hip Hop"
            }
        ]
    },

    {
        question: "WHICH ACCESSORY DO YOU PREFER?",

        type: "image",

        answers: [

            {
                image: "./assets/question5/pop_accessory.png",
                genre: "Pop"
            },

            {
                image: "./assets/question5/rock_accessory.png",
                genre: "Rock"
            },

            {
                image: "./assets/question5/country_accessory.png",
                genre: "Country"
            },

            {
                image: "./assets/question5/hiphop_accessory.png",
                genre: "Hip Hop"
            }
        ]
    },

    {
        question: "HOW DO YOU LISTEN TO MUSIC?",

        type: "image",

        answers: [

            {
                image: "./assets/question7/pop_mode.png",
                genre: "Pop"
            },

            {
                image: "./assets/question7/rock_mode.png",
                genre: "Rock"
            },

            {
                image: "./assets/question7/country_mode.png",
                genre: "Country"
            },

            {
                image: "./assets/question7/hiphop_mode.png",
                genre: "Hip Hop"
            }
        ]
    },

    {
        question: "CHOOSE AN ANIMAL",

        type: "image",

        answers: [

            {
                image: "./assets/question9/pop_animal.png",
                genre: "Pop"
            },

            {
                image: "./assets/question9/rock_animal.png",
                genre: "Rock"
            },

            {
                image: "./assets/question9/country_animal.png",
                genre: "Country"
            },

            {
                image: "./assets/question9/hiphop_animal.png",
                genre: "Hip Hop"
            }
        ]
    }

];

let currentQuestion = 0;

let scores = {

    Pop: 0,
    Rock: 0,
    Country: 0,
    "Hip Hop": 0
};

const playlists = {

    Pop: [

        {
            title: "Blinding Lights - The Weeknd",
            url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ"
        },

        {
            title: "Levitating - Dua Lipa",
            url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw"
        }
    ],

    Rock: [

        {
            title: "Bohemian Rhapsody - Queen",
            url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
        },

        {
            title: "Smells Like Teen Spirit - Nirvana",
            url: "https://www.youtube.com/watch?v=hTWKbfoikeg"
        }
    ],

    Country: [

        {
            title: "Country Roads - John Denver",
            url: "https://www.youtube.com/watch?v=1vrEljMfXYo"
        },

        {
            title: "Tennessee Whiskey - Chris Stapleton",
            url: "https://www.youtube.com/watch?v=4zAThXFOy2c"
        }
    ],

    "Hip Hop": [

        {
            title: "HUMBLE. - Kendrick Lamar",
            url: "https://www.youtube.com/watch?v=tvTRZJ-4EyI"
        },

        {
            title: "Lose Yourself - Eminem",
            url: "https://www.youtube.com/watch?v=_Yhyp-_hX2s"
        }
    ]
};

function showQuestion() {

    const container = document.getElementById("quiz-container");

    const q = questions[currentQuestion];

    let html = `

        <h1>${q.question}</h1>

        <p>Question ${currentQuestion + 1} of ${questions.length}</p>

        <div class="answer-grid">
    `;

    q.answers.forEach(answer => {

        // IMAGE QUESTIONS
        if (q.type === "image") {

            html += `

                <div
                    class="answer-card"
                    style="background-image:url('${answer.image}')"
                    onclick="selectAnswer('${answer.genre}')">
                </div>
            `;
        }

        // TEXT QUESTIONS
        else {

            html += `

                <div
                    class="answer-card text-card"
                    onclick="selectAnswer('${answer.genre}')">

                    ${answer.text}

                </div>
            `;
        }
    });

    html += `</div>`;

    container.innerHTML = html;
}

function selectAnswer(genre) {

    scores[genre]++;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();
    }
}

function showResults() {

    let highest = 0;

    let winner = "";

    for (let genre in scores) {

        if (scores[genre] > highest) {

            highest = scores[genre];

            winner = genre;
        }
    }

    const container = document.getElementById("quiz-container");

    let html = `

        <div class="result-box">

            <h1>YOUR MUSIC GENRE IS ${winner}! 🎵</h1>

            <p>Recommended Playlist:</p>

            <ul class="playlist">
    `;

    playlists[winner].forEach(song => {

        html += `

            <li>

                <a href="${song.url}" target="_blank">

                    ${song.title}

                </a>

            </li>
        `;
    });

    html += `

            </ul>

            <button
                class="restart-btn"
                onclick="restartQuiz()">

                Restart Quiz

            </button>

        </div>
    `;

    container.innerHTML = html;
}

function restartQuiz() {

    currentQuestion = 0;

    scores = {

        Pop: 0,
        Rock: 0,
        Country: 0,
        "Hip Hop": 0
    };

    
    showQuestion();
}

// ======================
// START QUIZ
// ======================

function startQuiz() {

    document
        .getElementById("start-screen")
        .classList
        .add("hidden");

    document
        .getElementById("quiz-wrapper")
        .classList
        .remove("hidden");

    const music = document.getElementById("bgMusic");

    music.play();

    showQuestion();
}

// ======================
// HOME BUTTON
// ======================

function goHome() {

    currentQuestion = 0;

    scores = {

        Pop: 0,
        Rock: 0,
        Country: 0,
        "Hip Hop": 0
    };

    document
        .getElementById("quiz-wrapper")
        .classList
        .add("hidden");

    document
        .getElementById("start-screen")
        .classList
        .remove("hidden");
}

// ======================
// MUSIC TOGGLE
// ======================

function toggleMusic() {

    const music = document.getElementById("bgMusic");

    const button = document.getElementById("musicBtn");

    if (music.paused) {

        music.play();

        button.innerText = "MUSIC: ON";

    } else {

        music.pause();

        button.innerText = "MUSIC: OFF";
    }
}

