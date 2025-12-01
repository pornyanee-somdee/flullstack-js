function censorWord(sentence, WordToCentor){
    const regex = new RegExp(WordToCentor,'gi' );
    const censoredText = sentence.replace(regex,'****')
    return censoredText;
}
const originalPost = "JavaScript is fun,but sometimer JavaScript";
const cleanPost = censorWord(originalPost,"JavaScript");
console.log(cleanPost);