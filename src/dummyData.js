// function generateRandomId(n){
//     const nums = new Array(n).fill(0) // fill(0) 들어가는 값들을 0으로 초기화
//     return nums.map(n => Math.floor(Math.random()*10)).join("") // 0 <= n < 10  join 랜덤한 숫자 배열을 붙여서 문자열로 만듬[0, 2, 3] → "023"
// }
// function generateRandomString(n){
//     const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
//                      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//     const str = new Array(n).fill('a')
//     return str.map(s => alphabet[Math.floor(Math.random()*alphabet.length)]).join("")
// }
// // 서버에서 가져오는 JSON 문자열 데이터
// const dummyDate = [
//     {
//         videoId: generateRandomId(16),
//         videoName: generateRandomString(10),
//         videoLength: generateRandomId(4),
//         videoDescription: generateRandomString(100),
//         videoAuthor: generateRandomString(10)
//     },
//     {
//         videoId: generateRandomId(16),
//         videoName: generateRandomString(10),
//         videoLength: generateRandomId(4),
//         videoDescription: generateRandomString(100),
//         videoAuthor: generateRandomString(10)
//     },
//     {
//         videoId: generateRandomId(16),
//         videoName: generateRandomString(10),
//         videoLength: generateRandomId(4),
//         videoDescription: generateRandomString(100),
//         videoAuthor: generateRandomString(10)
//     },
//     {
//         videoId: generateRandomId(16),
//         videoName: generateRandomString(10),
//         videoLength: generateRandomId(4),
//         videoDescription: generateRandomString(100),
//         videoAuthor: generateRandomString(10)
//     },
//     {
//         videoId: generateRandomId(16),
//         videoName: generateRandomString(10),
//         videoLength: generateRandomId(4),
//         videoDescription: generateRandomString(100),
//         videoAuthor: generateRandomString(10)
//     }
// ]

// export default dummyDate;

// const dummyData = [
//     {
//         title: '고양이',
//         src:
        // ''
//     },
//     {
//         title: '강아지',
//         src:
        // ''
//     }
// ]

// export default dummyData; 
const dummyData = [ { word: 'apple', meaning: '사과' }, { word: 'before', meaning: '이전의' }, { word: 'clean', meaning: '깨끗한' }, { word: 'dummy', meaning: '가짜의' }, { word: 'emergent', meaning: '긴급한' }, { word: 'famouse', meaning: '유명한' }, { word: 'give', meaning: '(~을) 주다' }, { word: 'humble', meaning: '검소한' }, { word: 'ingrave', meaning: '조각하다' }, { word: 'jungle', meaning: '밀림숲' }, { word: 'korea', meaning: '대한민국' }, ] 

export default dummyData;

