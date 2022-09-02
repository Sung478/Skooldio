const prompt = require('prompt-sync')({ sigint: true });

const char = ["club", "diamond", "heart", "spade"];
const num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

class Shuffel {
    constructor() {
        this.deck = []
    }

    generate() {
        let useChar = [...char]
        let firstDeck = []
        for (let i = 0; i < char.length; i++) {
            let ranChar = Math.floor(Math.random() * useChar.length)
            let useNum = [...num]
            for (let j = 0; j < num.length; j++) {
                let ranNum = Math.floor(Math.random() * useNum.length)
                let card = ''
                card += useChar[ranChar]
                card += "-" + useNum[ranNum]
                firstDeck.push(card)
                useNum = useNum.filter(num => num !== useNum[ranNum])
            }
            useChar = useChar.filter(char => char !== useChar[ranChar])
        }
        // console.log(firstDeck)
        for (let z = 0; z < 52; z++) {
            let randomly = Math.floor(Math.random() * firstDeck.length)
            this.deck.push(firstDeck[randomly])
            firstDeck = firstDeck.filter(card => card != firstDeck[randomly])
        }
    }

}



let net = 0
let con = "Yes"

do {

    const thisDeck = new Shuffel()
    thisDeck.generate()

    console.clear()

    // console.log(thisDeck.deck.length)
    let player = {
        score: 0,
        cards: [thisDeck.deck[0], thisDeck.deck[1]]
    }
    let dealer = {
        score: 0,
        cards: [thisDeck.deck[50], thisDeck.deck[51]]
    }

    const checkScore = (who) => {
        for (let i = 0; i < who.cards.length; i++) {
            let point = who.cards[i].split("-")
            switch (point[1]) {
                case "A":
                    who.score += 1; break;
                case "K" || "Q" || "J" || "10":
                    who.score += 0; break;
                case "1":
                    who.score += 1; break;
                case "2":
                    who.score += 2; break;
                case "3":
                    who.score += 3; break;
                case "4":
                    who.score += 4; break;
                case "5":
                    who.score += 5; break;
                case "6":
                    who.score += 6; break;
                case "7":
                    who.score += 7; break;
                case "8":
                    who.score += 8; break;
                case "9":
                    who.score += 9; break;
            }
            if (who.score >= 10) {
                // console.log(who.score)
                who.score = who.score - 10
            }
        }
    }

    checkScore(player)
    checkScore(dealer)

    let checkAnswer = false
    let dept = prompt('Plese put your dept: ')
    while (checkAnswer === false) {
        if (!dept.match("[a-zA-Z]+")) {
            dept = parseInt(dept)
            checkAnswer = true
        } else {
            console.log('Please add number')
            dept = prompt('Plese put your dept: ')
        }
    }

    console.log(`You got ${player.cards[0]}, ${player.cards[1]}`)
    console.log(`The dealer got ${dealer.cards[0]}, ${dealer.cards[1]}`)

    // console.log(player.score)
    // console.log(dealer.score)


    if (player.score > dealer.score) {
        console.log(`You won!!! receive ${dept} chips`)
        net += dept
    } else if (player.score == dealer.score) {
        console.log('Tie')
    } else if (player.score < dealer.score) {
        console.log(`You lose!!! lose ${dept} chips`)
        net -= dept
    }


    con = prompt('Wanna Play more (Yes/No): ')
    if (con === 'No') {
        console.log(`You got total ${net} chips`)
    } else if (con === "Yes") {
        console.log('Ok')
    } else {
        console.log("Plase type Yes/No")
        con = prompt('Wanna Play more (Yes/No): ')
    }

} while (con === "Yes")