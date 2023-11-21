// Return a sentence with all first words capitalized
//how Can mirrors be real if Eyes aren't Real? => How Can Mirrors Be Real If Eyes Aren't Real
// Atleast it made me feel alive => Atleast It Made Me Feel alive


const capitalizeWords = (sentence) => {
    const words = sentence.split(" ");
    const capitalised = words.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
    return capitalised.join(" ");
}

module.exports = capitalizeWords;
