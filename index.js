const guessGifts = (list, present) => {
    
let result = []

    for (let i = 0; i < present.length; i++) {
        for (let g = 0; g < list.length; g++) {
            let {size, clatters, weight} = wishlist[g]
            let {size: sizeP, clatters: clattersP, weight: weightP } = present[i]
            console.log(size)

            if(size === sizeP && clatters === clattersP && weight ===weightP) {
                result.push(wishlist[i].name)
                console.log(1)
            }


        }
        g = 0
    }
    return result
}



let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]