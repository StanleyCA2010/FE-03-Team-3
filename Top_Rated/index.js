class MovieSection {
    constructor(thumbnail, synopsys, rating, sampleComment) {
        this.sectionNumber = 1
        this.thumbnail = thumbnail
        this.synopsys = synopsys
        this.rating = rating
        this.sampleComment = sampleComment
    };
    toHtml() {
        return `<div class="movie">
                    <h1 class="section-number">${this.sectionNumber}</h1>
                    <img src="${this.thumbnail}" alt="Movie Thumnail" height="200">
                    <div class="movie-info">
                        <p>${this.synopsys}</p>
                        <p>${this.rating}</p>
                        <p>${this.sampleComment}</p>
                    </div>
                </div>`
    }
}

let mainSection = document.querySelector('main')

let thumbnails = [
    'Thumbnails/(4) One Battle After Another.png',
    'Thumbnails/(5) Sinners.png',
    'Thumbnails/(1) Project Hail Mary.png',
    'Thumbnails/(6) Hoppers.png',
    'Thumbnails/(8) Good Luck Have Fun Dont Die.png',
    'Thumbnails/(3) Ready Or Not 2 Here I Come.png',
    'Thumbnails/(2) Peaky Blinders The Immortal Man.png',
    'Thumbnails/(7) War Machine.png',
    'Thumbnails/(10) Reminders Of Him.png',
    'Thumbnails/(9) Undertone.png',
]

let synopsyses = [
    "Bob is a washed-up revolutionary who lives in a state of stoned paranoia, surviving off-grid with his spirited and self-reliant daughter, Willa. When his evil nemesis resurfaces and Willa goes missing, the former radical scrambles to find her as both father and daughter battle the consequences of their pasts.",
    "Trying to leave their troubled lives behind, twin brothers (Michael B. Jordan) return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
    "Science teacher Ryland Grace (Ryan Gosling) wakes up on a spaceship light years from home with no recollection of who he is or how he got there. As his memory returns, he begins to uncover his mission: solve the riddle of the mysterious substance causing the sun to die out. He must call on his scientific knowledge and unorthodox ideas to save everything on Earth from extinction... but an unexpected friendship means he may not have to do it alone",
    `What if you could talk to animals and understand what they're saying? In Disney and Pixar's all-new feature film "Hoppers," scientists have discovered how to "hop" human consciousness into lifelike robotic animals, allowing people to communicate with animals as animals! The adventure introduces Mabel, an animal lover who seizes an opportunity to use the technology, uncovering mysteries within the animal world that are beyond anything she could have imagined.`,
    "A man claiming to be from the future takes the patrons of an iconic Los Angeles diner hostage in search of unlikely recruits in a quest to save the world.",
    "Moments after surviving an all-out attack from the Le Domas family, Grace (Samara Weaving) discovers she’s reached the next level of the nightmarish game -- and this time with her estranged sister Faith (Kathryn Newton) at her side. Grace has one chance to survive, keep her sister alive, and claim the High Seat of the Council that controls the world. Four rival families are hunting her for the throne, and whoever wins rules it all.",
    "Birmingham, 1940. Amidst the chaos of WWII, Tommy Shelby is driven back from a self-imposed exile to face his most destructive reckoning yet. With the future of the family and the country at stake, Tommy must face his own demons, and choose whether to confront his legacy, or burn it to the ground. By order of the Peaky Blinders....",
    "During the final stage of US Army Ranger selection, an elite team's training exercise turns into a fight for survival against an unimaginable threat.",
    "The literary phenomenon from #1 New York Times bestselling author Colleen Hoover becomes a transformative feature film about motherhood, forgiveness and the power of love to overcome even the worst mistake. After a perfect outing with her boyfriend, Kenna (Maika Monroe; The Hand that Rocks the Cradle, Longlegs) makes an unbearable mistake that sends her to prison. Seven years later, Kenna returns to her hometown in Wyoming, hoping to rebuild her life and earn the chance to reunite with her young daughter, Diem, whom she has never known. When Diem's custodial grandparents adamantly refuse Kenna's attempts to see her daughter, Kenna discovers unexpected compassion, and then something truer and deeper, with former NFL player and local bar owner Ledger (Tyriq Withers; HIM, I Know What You Did Last Summer). As their secret romance develops, so do the dangers for both of them, leading Kenna toward heartbreak and, ultimately, the hope for a second chance.",
    "The host of a popular paranormal podcast is sent hidden messages within anonymous recordings, unleashing a demonic presence that is impossible to escape.", 
]

let ratings = [
    '9.5/10',
    '9/10',
    '8.5/10',
    '8.2/10',
    '7.8/10',
    '7.4/10',
    '6.7/10',
    '6.4/10',
    '6.4/10',
    '6.1/10',
]

let sampleComments = [
    'Excellent from start to finish. Acting, soundtrack, cinematography, story. Deserving of Best Picture.',
    'Good Horror,Great acting by cast. Love Micheal B Jordan.',
    'The movie was amazing!!! Me and my boy enjoyed it so much!!!!',
    'was rlly good had me at the edge of my seat the entire time was rlly funny too',
    'It’s everything you want from a movie',
    'No dull moments! You’re gonna feel a lot of different emotions. Must see!!!',
    'Great movie great series wrap up',
    'Fast pace, great visuals, Reacher is stopping Aliens now!',
    'Wonderful movie about second chances to take a chance. Loved it!',
    'Wicked, really good flick!!',
]

let movies = [
    {
        thumbnail: thumbnails[0],
        synopsys: synopsyses[0],
        rating: ratings[0],
        sampleComment: sampleComments[0]
    },
    {
        thumbnail: thumbnails[1],
        synopsys: synopsyses[1],
        rating: ratings[1],
        sampleComment: sampleComments[1]
    },
    {
        thumbnail: thumbnails[2],
        synopsys: synopsyses[2],
        rating: ratings[2],
        sampleComment: sampleComments[2]
    },
    {
        thumbnail: thumbnails[3],
        synopsys: synopsyses[3],
        rating: ratings[3],
        sampleComment: sampleComments[3]
    },
    {
        thumbnail: thumbnails[4],
        synopsys: synopsyses[4],
        rating: ratings[4],
        sampleComment: sampleComments[4]
    },
    {
        thumbnail: thumbnails[5],
        synopsys: synopsyses[5],
        rating: ratings[5],
        sampleComment: sampleComments[5]
    },
    {
        thumbnail: thumbnails[6],
        synopsys: synopsyses[6],
        rating: ratings[6],
        sampleComment: sampleComments[6]
    },
    {
        thumbnail: thumbnails[7],
        synopsys: synopsyses[7],
        rating: ratings[7],
        sampleComment: sampleComments[7]
    },
    {
        thumbnail: thumbnails[8],
        synopsys: synopsyses[8],
        rating: ratings[8],
        sampleComment: sampleComments[8]
    },
    {
        thumbnail: thumbnails[9],
        synopsys: synopsyses[9],
        rating: ratings[9],
        sampleComment: sampleComments[9]
    },
]

for (let i = 1; i <= movies.length; i ++) {
    let movie = movies[i - 1]
    let movieSection = new MovieSection(movie.thumbnail, `Synopsys: ${movie.synopsys}`, `Rating: ${movie.rating}`, `"${movie.sampleComment}"`)
    movieSection.sectionNumber = i
    mainSection.innerHTML += movieSection.toHtml()
}