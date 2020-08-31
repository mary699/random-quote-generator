let quotes = [
'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth. ― William W. Purkey',
'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.― Neil Gaiman',
'Everything you can imagine is real.― Pablo Picasso',
'I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion',
'The difference between successful people and very successful people is that very successful people say ‘no’ to almost everything',
'To be a champion, I think you have to see the big picture. It’s not about winning and losing; it’s about every day hard work and about thriving on a challenge. It’s about embracing the pain that you’ll experience at the end of a race and not being afraid. I think people think too hard and get afraid of a certain challenge',
'Go the extra mile. It’s never crowded there',
'Wherever you go, go with all your heart',
'Turn your wounds into wisdom',
'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do',
'When written in Chinese the word “crisis” is composed of two characters – one represents danger and the other represents opportunity',
'Start where you are. Use what you have. Do what you can',
'The big lesson in life is never be scared of anyone or anything',
'Sunshine all the time makes a desert',
'Don’t let what you can’t do interfere with what you can do',
'You can do anything you set your mind to',
'If you can dream it, you can do it',
'You can’t go back and change the beginning, but you can start where you are and change the ending',
'I can and I will. Watch me',
'Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people won’t feel insecure around you. We are all meant to shine, as children do',
'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that',
'I could build a castle out of all the bricks they threw at me',
'Every day women and men become legends',
'On my own I will just create and if it works, it works. And if it doesn’t, I’ll just create something else. I don’t have any limitations on what I think I could do or be',
'When something I can’t control happens, I ask myself: Where is the hidden gift? Where is the positive in this?',
'Doubt is a killer. You just have to know who you are and what you stand for. ',
'I always thought it was me against the world and then one day I realized it’s just me against me',
'I’m not in this world to live up to your expectations and you’re not in this world to live up to mine',
'You don’t have to be perfect to be amazing.',
'It’s not what happens to you but how you react to it that matters'
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
