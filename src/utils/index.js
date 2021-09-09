export function ParagraphFormatter ({Content}) {

    const isCharNumber = (c) => {
        return c >= '0' && c <= '9'
      }

    let minNumChar = 20;
      
     // normalize minNumChar such that the paragraph size is more even amongst the text
     minNumChar = Math.round(Content.length / Math.round(Content.length / minNumChar))

     var i
     var sentence = ''
     var sentences = []
 
     // creates array of sentences
     for (i = 0; i < Content.length; i++) {
       if (Content[i] !== '.' || (isCharNumber(Content[i - 1]) && isCharNumber(Content[i + 1]))) {
         sentence += Content[i]
       } else {
         sentences.push(sentence.trim())
         sentence = ''
       }
     }
 
     var paragraph = ''
     // temporary string with each of the paragraphs
 
     var paragraphsArr = []
     // text to be returned
 
     var beginOfPara = true // tells if paragraph just begins
 
     for (i = 0; i < sentences.length; i++) {
       paragraph = paragraph.concat(beginOfPara ? '' : ' ', sentences[i], '.')
       beginOfPara = false
       if (paragraph.length > minNumChar) {
         paragraphsArr.push(paragraph)
         paragraph = ''
         beginOfPara = true
       }
     }
     paragraphsArr.push(paragraph)
 
     return paragraphsArr
}