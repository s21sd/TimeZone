const arr = ["Do you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on?” — J.R.R.Tolkien",
    "Never face facts; if you do you’ll never get up in the morning.” — Marlo Thomas",
    "Morning is wonderful.Its only drawback is that it comes at such an inconvenient time of day.” — Glen Cook",
    "Every single day I wake up and make up my mind that I am going to work really hard.Then my mind laughs at me and says ‘Good joke.’ Then we laugh for some more time and I go back to bed.” — Gehenna Toss",
    "I hate when I dream of alarm clocks going off.” — Jarod Kintz",
    "Moist groaned.It was the crack of seven and he was allergic to the concept of two seven o’clocks in one day.” — Terry Pratchet",
    "Some people wake up drowsy.Some people wake up energized.I wake up dead.” — James Marsden",
    "Morning will come, it has no choice. — Marty Rubin",
    "Everyone wants me to be a morning person.I could be one, only if morning began after noon” — Tony Smite",
    "So far as I know, anything worth hearing is not usually uttered at seven o’clock in the morning; and if it is, it will generally be repeated at a more reasonable hour for a larger and more wakeful audience. — Moss Hart",
    "Good morning is a contradiction of terms.” — Jim Davis",
    "There should be a rule against people trying to be funny before the sun comes up.” — Kristen Chandler",
    "I love the early hours of the day.It’s a nice place to visit but I wouldn’t want to live there.” — James Lileks",
    "Birds scream at the top of their lungs in horrified hellish rage every morning at daybreak to warn us all of the truth, but sadly we don’t speak bird.” — Kurt Cobain",
    "Keep the dream alive: Hit the snooze button.” — Punit Ghadge",
    "Progress isn’t made by early risers.It’s made by lazy men trying to find easier ways to do something. — Robert Heinlein",
    "Mornings are pure evil from the pits of hell, which is why I don’t do them anymore. — Rachel Caine",
    "The first thing I do in the morning is brush my teeth and sharpen my tongue. — Dorothy Parker",
    "Every morning is a battle between the superego and the id, and I am a mere foot soldier with mud and a snooze button on her shield. — Catherynne Valente",
    "Even bad coffee is better than no coffee at all. — David Lynch",
    "The average, healthy, well - adjusted adult gets up at seven - thirty in the morning feeling just plain terrible. — Jean Kerr",
    "My routine is to ride that snooze button as far as it will take me, take a quick shower, get dressed in the dark and bolt out the door. — Willie Geist",
    "What irritates me most of all about these morning people is their horribly good temper, as if they have been up for three hours and already conquered France.” — Timur Vermes"]
const a = new Date();
const time1 = a.getHours();
const time2 = a.getMinutes();
const time3 = a.getSeconds();
console.log(time1, time2, time3);

timehere.innerHTML = (time1 + ":" + time2 + ":" + time3);

let x = Math.round(Math.random() * 15);
thought.innerHTML = arr[x];
setTimeout(() => {
    document.location.reload();

},30000)