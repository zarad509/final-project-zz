const questions = [

    {
        question: "WHICH ROOM SUITS YOU BEST?",

        type: "image",

        answers: [

            {
                image: "./assets/question1/pop_room.png",
                genre: "POP"
            },

            {
                image: "./assets/question1/rock_room.png",
                genre: "ROCK"
            },

            {
                image: "./assets/question1/country_room.png",
                genre: "COUNTRY"
            },

            {
                image: "./assets/question1/hiphop_room.png",
                genre: "HIP HOP"
            }
        ]
    },

    {
        question: "HOW DO OTHERS DESCRIBE YOU?",

        type: "text",

        answers: [

            {
                text: "SOCIAL",
                genre: "POP"
            },

            {
                text: "REBELLIOUS",
                genre: "ROCK"
            },

            {
                text: "TRADITIONAL",
                genre: "COUNTRY"
            },

            {
                text: "CONFIDENT",
                genre: "HIP HOP"
            }
        ]
    },

    {
        question: "WHICH GUITAR DO YOU PREFER?",

        type: "image",

        answers: [

            {
                image: "./assets/question3/pop_guitar.png",
                genre: "POP"
            },

            {
                image: "./assets/question3/rock_guitar.png",
                genre: "ROCK"
            },

            {
                image: "./assets/question3/country_guitar.png",
                genre: "COUNTRY"
            },

            {
                image: "./assets/question3/hiphop_guitar.png",
                genre: "HIP HOP"
            }
        ]
    },

    {
        question: "WHAT EMOTION BEST DESCRIBES YOU?",

        type: "text",

        answers: [

            {
                text: "JOYFUL",
                genre: "POP"
            },

            {
                text: "PASSIONATE",
                genre: "ROCK"
            },

            {
                text: "NOSTALGIC",
                genre: "COUNTRY"
            },

            {
                text: "PEACEFUL",
                genre: "HIP HOP"
            }
        ]
    },

    {
        question: "WHICH ACCESSORY DO YOU PREFER?",

        type: "image",

        answers: [

            {
                image: "./assets/question5/pop_accessory.png",
                genre: "POP"
            },

            {
                image: "./assets/question5/rock_accessory.png",
                genre: "ROCK"
            },

            {
                image: "./assets/question5/country_accessory.png",
                genre: "COUNTRY"
            },

            {
                image: "./assets/question5/hiphop_accessory.png",
                genre: "HIP HOP"
            }
        ]
    },

    {
        question: "HOW DO YOU LISTEN TO MUSIC?",

        type: "image",

        answers: [

            {
                image: "./assets/question7/pop_mode.png",
                genre: "POP"
            },

            {
                image: "./assets/question7/rock_mode.png",
                genre: "ROCK"
            },

            {
                image: "./assets/question7/country_mode.png",
                genre: "COUNTRY"
            },

            {
                image: "./assets/question7/hiphop_mode.png",
                genre: "HIP HOP"
            }
        ]
    },

    {
        question: "CHOOSE AN ANIMAL",

        type: "image",

        answers: [

            {
                image: "./assets/question9/pop_animal.png",
                genre: "POP"
            },

            {
                image: "./assets/question9/rock_animal.png",
                genre: "ROCK"
            },

            {
                image: "./assets/question9/country_animal.png",
                genre: "COUNTRY"
            },

            {
                image: "./assets/question9/hiphop_animal.png",
                genre: "HIP HOP"
            }
        ]
    }

];

let currentQuestion = 0;

let scores = {

    POP: 0,
    ROCK: 0,
    COUNTRY: 0,
    "HIP HOP": 0
};

const playlists = {

    POP: [

        {
            title: "Thriller - Michael Jackson",
            url: "https://youtu.be/sOnqjkJTMaA?si=OPXEqjQUSNaOjkc5"
        },

        {
            title: "Billie Jean - Michael Jackson",
            url: "https://youtu.be/Zi_XLOBDo_Y?si=XmuJaeAoxCQDZ4BU"
        },
        {
            title: "I Want It That Way - Backstreet Boys",
            url: "https://youtu.be/4fndeDfaWCg?si=RPISylfeBfevjNlJ"
        },

        {
            title: "Baby One More Time - Britney Spears",
            url: "https://youtu.be/C-u5WLJ9Yk4?si=4OKv6DWtxVZCbfTH"
        },
        {
            title: "Bad - Michael Jeans",
            url: "https://youtu.be/Sd4SJVsTulc?si=5S52f-wukBZ5jOvi"
        },

        {
            title: "Poker Face - Lady Gaga",
            url: "https://youtu.be/bESGLojNYSo?si=pudPAOZat4NAQDx8"
        },
        {
            title: "I Will Always Love You - Whitney Houston",
            url: "https://youtu.be/3JWTaaS7LdU?si=MHJwK4i9-lqR9mlA"
        },

        {
            title: "Call Me Maybe - Carly Rae Jepsen",
            url: "https://youtu.be/fWNaR-rxAic?si=B0AYrVa3p_AAsSyT"
        },
        {
            title: "Someone Like You - Adele",
            url: "https://youtu.be/hLQl3WQQoQ0?si=CyXswdECtns6wbyd"
        },

        {
            title: "Purple Rain - Prince",
            url: "https://youtu.be/ryT-ltTDCko?si=1J70OCw0TM3mme4V"
        },
    ],

    ROCK: [

        {
            title: "Bohemian Rhapsody - Queen",
            url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
        },

        {
            title: "Stairway to Heaven - Led Zeppelin",
            url: "https://youtu.be/QkF3oxziUI4?si=_sI3LT6KIqXji5lx"
        },
        {
            title: "Smells Like Teen Spirit - Nirvana",
            url: "https://youtu.be/hTWKbfoikeg?si=yFyJIx-idH8vtDkW"
        },

        {
            title: "Numb - Linkin Park",
            url: "https://youtu.be/kXYiU_JCYtU?si=cAUkNqtyyr0mftK5"
        },
        {
            title: "Hey Jude - The Beatles",
            url: "https://youtu.be/A_MjCqQoLLA?si=CrthvS520I8LZipY"
        },

        {
            title: "Sweet Child O’ Mine - Guns N’ Roses",
            url: "https://youtu.be/1w7OgIMMRc4?si=qnmUzsa-B-UQF6ha"
        },
        {
            title: "Back In Black  - AC/DC",
            url: "https://youtu.be/pAgnJDJN4VA?si=QehKpvBchrLlBzUR"
        },

        {
            title: "Welcome To The Jungle - Guns N’ Roses",
            url: "https://youtu.be/o1tj2zJ2Wvg?si=ok_qXD5K3Tpx3AUY"
        },
        {
            title: "Comfortably Numb - Pink Floyd",
            url: "https://youtu.be/_FrOQC-zEog?si=mK5FcqKQk4aVgGQb"
        },

        {
            title: "Boulevard of Broken Dreams - Green Day",
            url: "https://youtu.be/Soa3gO7tL-c?si=AaLfsN7JMTod5a0n"
        },
    ],

    COUNTRY: [

        {
            title: "He Stopped Loving Her Today - George Jones",
            url: "https://youtu.be/zpEew3M-Kvg?si=Xyf5bBZBAWMN_pp0"
        },

        {
            title: "Ring Of Fire - Johnny Cash",
            url: "https://youtu.be/1WaV2x8GXj0?si=5tgRtcd0QiHLEuTj"
        },
        {
            title: "Song Of The South - Alabama",
            url: "https://youtu.be/lHdXQAQHjd8?si=NgpYC5arY4nPOPpj"
        },

        {
            title: "A Country Boy Can Survive - Hank Williams, Jr.",
            url: "https://youtu.be/3cQNkIrg-Tk?si=4ZJYSDh0BYovI2VF"
        },
        {
            title: "Love Story - Taylor Swift",
            url: "https://youtu.be/8xg3vE8Ie_E?si=G1A2r-koHwvLh7vB"
        },

        {
            title: "Hurt - Johnny Cash",
            url: "https://youtu.be/8AHCfZTRGiI?si=uMTtjNgkvD3P4AHt"
        },
        {
            title: "Amarillo By Morning - George Strait",
            url: "https://youtu.be/wtVeDaZxAXo?si=2nxzXJIHZR_A0MZe"
        },

        {
            title: "I Walk The Line - Johnny Cash",
            url: "https://youtu.be/J-6fW66IUY4?si=me4As8FVBwRYRiUh"
        },
        {
            title: "Folsom Prison Blues - Johnny Cash",
            url: "https://youtu.be/AeZRYhLDLeU?si=Oo8HYPEFthKkUoDx"
        },

        {
            title: "Crazy - Patsy Cline",
            url: "https://youtu.be/7PqtUULmZSE?si=EJLBouf1YjuvwNQQ"
        },
    ],

    "HIP HOP": [

        {
            title: "Rapper's Delight - The Sugarhill Gang",
            url: "https://youtu.be/ZjRi-S7J70Y?si=4WnlOBWqf0eSQ7rA"
        },

        {
            title: "The Message - Grandmaster Flash and the Furious Five",
            url: "https://youtu.be/gYMkEMCHtJ4?si=K2Ja6B58U54q5ggx"
        },
        {
            title: "Fight the Power - Public Enemy",
            url: "https://youtu.be/mmo3HFa2vjg?si=mN36h8v6kSRls8me"
        },

        {
            title: "Nuthin' But a 'G' Thang - Dr.Dre feat. Snoop Dogg",
            url: "https://youtu.be/8GliyDgAGQI?si=89XcESu_ykgKWbUI"
        },
        {
            title: "Juicy - The Notorius B.I.G",
            url: "https://youtu.be/_JZom_gVfuw?si=muWsMgfRRyivEifJ"
        },

        {
            title: "California Love - 2Pac feat. Dr.Dre",
            url: "https://youtu.be/J7_bMdYfSws?si=vntehbqKmHEINZ8D"
        },
        {
            title: "Stan - Eminem feat. Dido",
            url: "https://youtu.be/gOMhN-hfMtY?si=Xez3o6CJZRUtccGf"
        },

        {
            title: "99 Problems - Jay-Z",
            url: "https://youtu.be/M7wfjjgmjwU?si=LJRyKq7TtAu15ic1"
        },
        {
            title: "Alright - Kendrick Lamar",
            url: "https://youtu.be/JocAXINz-YE?si=bhUHsOnEzjeqsY3O"
        },

        {
            title: "Sicko Mode - Travis Scott",
            url: "https://youtu.be/6ONRf7h3Mdk?si=1aMG581fazGdazgI"
        },
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

const descriptions = {
    POP: "From relatable lyrics to catchy melodies, pop music began in the mid-20th centuries as an accessible and marketable genre. It stemmed from genres like jazz, country, and folk and evolved from genres such as disco and funk. Pop artists are known for their iconic images, outstanding dance performances, and outstanding vocals. Iconic bands have come out of pop music such as NSYNC and Fifth Harmony, but also amazing soloists like Beyonce and Lady Gaga. (images: google info: brittanica)",
    ROCK: "Dominating the 1950s, rock music is a genre which popularized in English speaking countries with its strong instrumentals. Electric guitar is one of the most prevalent instruments in rock alongside the drums! While everyone may want to be a rockstar some popular names pertain to The Beatles and Bob Dylan. With lyrics that hold meaning and performances which can shake a stadium, rock makes a statement no matter the time of day. (images: google info: brittanica)",
    COUNTRY: "Originating from the West and South of America, country music was the evolution from hillbilly music. While country music began with folk and ballad songs, it evolved so much throughout the 20th century to even be popularly mixed with the pop genre. There’s a lot of instruments used in the country such as guitar, fiddle, banjo, and so much more. Perfect for line dancing, you can find yourself enjoying artists like Dolly Parton and Johnny Cash! (images: google info: brittanica)",
    "HIP HOP": "Starting as a cultural movement in the 1980s- 1990s, hiphop is an influential genre with a rhythmic style. Hip hop is often connected to dance such as “b-boying” and other art styles like graffiti as it is a genre originated from African American culture in America. With its everlasting influence, hip hop has become a genre full of artistic expression and meaningful messages that will stick in your head with artists ranging from Kendrick Lamar to Drake. (images: google info: brittanica)",

};

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

            <p class="genre-description">${descriptions[winner]}</p>

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

        POP: 0,
        ROCK: 0,
        COUNTRY: 0,
        "HIP HOP": 0
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

        POP: 0,
        ROCK: 0,
        COUNTRY: 0,
        "HIP HOP": 0
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



