// Array of quotes
const quotes = [
    {
        text: "hallo kak👋 apa kabarr?🤔 yang pasti baiik wkwk😅",
        author: "??"
    },
    {
        text: "oh yaa kakak tau kan aku siapa, kaloo gk tau gpp gk perlu tau😉",
        author: "?🤔🤔"
    },
    {
        text: "hmm🤔 sekarang tanggal berapa yaa?? kayanya ada yang lagi bahagia nihh😅",
        author: "🤔"
    },
    {
        text: "😱😱😱😱 sekrang tanggal 22, hari selasa aku olahraga💪",
        author: "22 Oktober 2024"
    },
    {
        text: "ehh, kakak ulang tahun yaa🤔😱",
        author: "22 Oktober 2024"
    },
    {
        text: "🎉🎉selamat ulang tahuun yaaa🎉🎉",
        author: "22 Oktober 2024"
    },
    {
        text: "jujur gk tau mau ngetik apa lagi. semoga bisa masuk sma yang kakak mau dan..",
        author: "22 Oktober 2024"
    },
    {
        text: "pendek teruss yaaw wkwk😅😄 bercanda",
        author: "22 Oktober 2024"
    },
    {
        text: "udah itu aja, btw jangan marah atau benci sama aku yaa kak.",
        author: "22 Oktober 2024"
    },
    {
        text: "maaf kalo waktu itu aku buat kakak marah sama aku🙏😊😅 btw aku boleh temenan lagi gk? sama kakak😅😉",
        author: "22 Oktober 2024"
    },
    {
        text: "wkwkwkkwkwkwkwk, btw jangan lupaa ikut hunting fotonya ya.. udah lahh byeeeeeee kak elenaaa👋👋",
        author: "22 Oktober 2024"
    },
    // Add more quotes here
];

// Get the quote text and author elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

// Get the next quote button
const nextQuoteButton = document.getElementById('next-quote');

// Initialize the current quote index
let currentQuoteIndex = 0;

// Function to display the next quote
function displayNextQuote() {
    // Get the next quote
    const nextQuote = quotes[currentQuoteIndex];

    // Update the quote text and author elements
    quoteText.textContent = nextQuote.text;
    quoteAuthor.textContent = `- ${nextQuote.author}`;

    // Increment the current quote index
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

// Display the first quote
displayNextQuote();

// Add an event listener to the next quote button
nextQuoteButton.addEventListener('click', displayNextQuote);