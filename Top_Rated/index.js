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
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPYWXL6zYfIQ57FE13Npj8sgw2WxwuithXg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG6IOO14xGsYwKHFKyZGSzdanwSmVLO30t1xHA3xQSaE9gVplOfOSyVpFpstDfcrLkmyHku4tNzywXDToosfr3dd-30heSPM6agjpmQ&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPYWXL6zYfIQ57FE13Npj8sgw2WxwuithXg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG6IOO14xGsYwKHFKyZGSzdanwSmVLO30t1xHA3xQSaE9gVplOfOSyVpFpstDfcrLkmyHku4tNzywXDToosfr3dd-30heSPM6agjpmQ&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPYWXL6zYfIQ57FE13Npj8sgw2WxwuithXg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG6IOO14xGsYwKHFKyZGSzdanwSmVLO30t1xHA3xQSaE9gVplOfOSyVpFpstDfcrLkmyHku4tNzywXDToosfr3dd-30heSPM6agjpmQ&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPYWXL6zYfIQ57FE13Npj8sgw2WxwuithXg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG6IOO14xGsYwKHFKyZGSzdanwSmVLO30t1xHA3xQSaE9gVplOfOSyVpFpstDfcrLkmyHku4tNzywXDToosfr3dd-30heSPM6agjpmQ&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPYWXL6zYfIQ57FE13Npj8sgw2WxwuithXg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG6IOO14xGsYwKHFKyZGSzdanwSmVLO30t1xHA3xQSaE9gVplOfOSyVpFpstDfcrLkmyHku4tNzywXDToosfr3dd-30heSPM6agjpmQ&s=10',
]

for (let i = 1; i <= thumbnails.length; i ++) {
    let movieSection = new MovieSection(thumbnails[i - 1], 'Synopsys', 'Rating', 'Comment')
    movieSection.sectionNumber = i
    mainSection.innerHTML += movieSection.toHtml()
}