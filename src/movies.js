// Iteration 1: All directors? - Get the array of all directors.
// let movies = [
//     {
//       "title": "The Godfather",
//       "year": 1975,
//       "director": "Steven Spielberg",
//       "duration": "2h 22min",
//       "genre": [
//         "Crime",
//         "Drama"
//       ],
//       "rate": 5
//     },
//       {
//         "title": "The Z",
//         "year": 1972,
//         "director": "Francis Ford Coppola",
//         "duration": "2h 55min",
//         "genre": [
//           "Crime",
//           "Drama"
//         ],
//         "rate": 9.2
//       }
// ];

function getAllDirectors(movies) {
    return movies.map((item) => {
      return item.director;
    });
}

getAllDirectors(movies);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let moviesSteve = movies.filter((movie) => {
        return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    });
    return moviesSteve.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimalson ratesAverage()

function ratesAverage(movies) {
    if(movies.length === 0) {
        return 0;
    } else {
        let averageSum = movies.map((movie) => {
            if(!movie.rate) {
                return 0;
            }
            return movie.rate;
        }).reduce((acc, currentValue) => {
            return acc += currentValue;
        });
        return + ((averageSum / movies.length).toFixed(2));
    }
}

ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let drama = arr.filter((movie) => {
        return movie.genre.includes('Drama');
    });

    let average = drama.reduce((acc, currentValue) => {
            if(!currentValue.rate) {
                currentValue.rate = 0;
            } 
            return acc += currentValue.rate;
    }, 0);
        if(drama.length === 0) {
            return 0;
        } else {
            return + ((average / drama.length).toFixed(2));
        }    
}

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let moviesSortedByTitle = movies.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
    let moviesSortedByYear = moviesSortedByTitle.sort((a, b) => {
        return a.year - b.year;
    });
    
    return moviesSortedByYear;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let newMovies = JSON.parse(JSON.stringify(movies));

    let moviesSortedByTitle = newMovies.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
    let arrayOfTitles = [];
    for (let i=0; i<moviesSortedByTitle.length; i++) {
        arrayOfTitles.push(moviesSortedByTitle[i].title);
    }
    return arrayOfTitles.slice(0, 20);
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    let moviesCopy = JSON.parse(JSON.stringify(movies));
    let result = moviesCopy.map((movie) => {
        let arrayTime = movie.duration.split(" ");
        let hour = '';
        let min = '';
        let timeInMin = 0;
            for(let i=0; i<arrayTime[0].length; i++) {
                if(arrayTime[0][i] !== 'h') {
                    hour += arrayTime[0][i]; 
                }
            }
            for(let i=0; i<arrayTime[1].length; i++) {
                if(arrayTime[1][i] !== 'm' && arrayTime[1][i] !== 'i' && arrayTime[1][i] !== 'n') {
                    min += arrayTime[1][i]; 
                }
            }
            timeInMin = +(hour * 60) + +(min);
            movie.duration = timeInMin;
        return movie;
    });
    return result;
}

turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
