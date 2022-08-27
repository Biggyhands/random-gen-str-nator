const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night,ah?",
    "ohhhh yes!! we are about to push",
    "This commit is a lie",
    "I'll explain when you're older!",
    "it is all done",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
    "Are you serius? a whole commit just for that? come on!!!",
    "Yup that's a commit right there",
    "So...who was your last commit assistant?",
    "Who is your favorite commit assistant? pff, just kidding i know its me, i am just being polite",
    "Hey...i don't want to be rude but... are you sure that commit its all right?",
    "yuuup, that is definitely a commit",
    "okay just for this time, but next time i will be expecting at least a 'would you pleaaaase?' ",
    "yes it is commited, but what about manners? what about 'please','thank you' ?",
    "I'd like to let you know that you are way better than my last developer, just saying",
    "We are going to commit this commit!",
    "Let me show you how the boss commits",
    "Oh yeah commits!!",
    "more work for me, ah? commited.",
    "hey more of that and i will be asking for a pay raise ",
    "I'd like you to know that i am asking for a pay raise, commited", 
    "Commit committed successfully",
    "I got you, commit committed successfully",
    "You call that a 'commit'? how funny",
    "is that all? hahaha",
    "Ok",
    "Done!"



    

];

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    funnyCommit
};