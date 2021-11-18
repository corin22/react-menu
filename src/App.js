// import logo from './logo.svg';
// import './App.css';
// // import Todo from "./Todo"
// // // import Todo from "./Todo";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Todo user="syleemomo" name="cleaning" done={false} description="청소"></Todo>
// //     </div>
// //   );
// // }

// import Book from "./Book"

// function App() {
//   // const book = { title="해리포터", author="JK 롤링", summary="재밌다", genre="공상과학", release="2008-04-23", ISBN:12345678 }
//       const Book = {
//         title:"해리포터", 
//         author:"JK 롤링",
//         summary:"재밌다",
//         genre:"공상과학",
//         release:"2008-04-23",
//         ISBN:12345678
//       }
//       return(
//         <div className="App">
//         <Book
//           title={Book.title}
//           author={Book.author}
//           summary={Book.summary}
//           genre={Book.genre}
//           release={Book.release}
//           ISBN={Book.ISBN}
//         >
//         </Book>
//         </div>
//       );
// }
// export default App;


// import logo from './logo.svg'
// import './App.css'
// import Counter from "./Counter"
// import React, {Component} from 'react'
// import YoutubeVideo from './YoutubeVideo'
// import dummyDate from './dummyDeta'
// import words from './kor_dib_coll.json'


// class App extends Component {
//     state = {
//         name: 'parent'
//     }
//     changeName = () => {
//         this.setState({ name: "parent changed"})
//     }
// render(){
//     console.log('parent')
//     const {name} = this.state
//     return(
//         <div className="App">
//             <h1>{name}</h1>
//             <button type="button" onClick={this.changeName}>change name</button>
//             <Counter></Counter>
//         </div>
//         )
//     }
// }

// export default App;

// import logo from './logo.svg'
// import './App.css'
// import Counter from "./Counter"
// import React, {Component} from 'react'
// import YoutubeVideo from './YoutubeVideo'
// import dummyDate from './dummyDeta'
// import words from './kor_dib_coll.json'

// class App extends Component{
//     state = {
//         count: 0
//     }
//     showUI = (cnt) => {
//         let ui = null;
//         switch(cnt){
//             case 0:
//                 ui = <h1>Home</h1>
//                 break;
//             case 1:
//                 ui = <h1>About</h1>
//                 break;
//             case 2:
//                 ui = <h1>Detail</h1>
//                 break;
//             case 3:
//                 ui = <h1>NotFound</h1>
//                 break;
//         }
//         return ui
//     }
//     increase = () => {
//         this.setState({count: this.state.count + 1})
//     }
//     render(){
//         const { count } = this.state
//         const name = "syleemomo"
//         const itemStyle = {
//             fonSize: '100px',
//             background: 'red'
//         }
//         const head = ()=>(<h1>태그</h1>)
//         return (
//             <>
//             {/* {this.showUI(count)}
//             {
//                 (
//                     <>
//                     <h1 className="center" onClick>헤딩태그</h1>
//                     <p style={itemStyle}>this is {name} lorem lorem lorem lorem lorem lorem lorem</p>
//                     </>
//                 )
//             }
//             <button type="button" onClick={this.increase}>카운팅</button> */}
//             <div class="item">
//                 <div class="words"><a href={words.r_link} target="_blank">{words.r_word}<sup>{words.r_seq}</sup> ({words.r_chi})</a> - {words.r_pos}</div>
//                 <p class="description">{words.r_des}</p>
//              </div>
//             </>
//         )
//     }
// }


// export default App;



// function App() {
//     return (
//         <div className="App">
//                    <div>{
//                        personalbar.name?
//                     <h1>Your name is nice ! </h1>:<h1>"name doesn't exist !"</h1>
//                     } - {personalbar.age}</div>
          
//         </div>
//     );    
// }
// export default App;




// import './App.css'
// import React, {Component} from 'react'
// import words from './kor_dib_coll.json'

// const App = () => {
//     const containerStyle = {
//         width: '60%',
//         columns: '2',
//         margin: '50px auto'
//     }
//     const itemStyle = {
//         width: '100%',
//         /* height: 300px; */ 
//         marginBottom: '10px',
//         background: 'tan',
//         display: 'inline-block' /* 컬럼 짤림 방지*/
//     }
//     return(
//         <div id = "container" style={containerStyle}>
//             <h1>사전 검색 서비스</h1>
//             {/* 데이터 => HTML 템플릿 */}
//             {words.map(word => {
//                 return(
//                     <div class="item" style={itemStyle}>
//                         <div class="word"><a href={word.r_link} target="_blank">{word.r_word}<sup>{word.r_seq}</sup> ({word.r_chi})</a> - {words.r_pos}</div>
//                         <p class="description">{word.r_des}</p>
//                     </div>
//                     )
//                 })}
//         </div>
//     )
// }

// export default App;


// import './App.css'
// import React, {Component} from 'react'
// import Movie from './Movie'
// import animals from './dummyData'


// class App extends Component{
//     // 생성자 함수
//     constructor(props){
//         console.log('construct')
//         super(props)
//         this.state = {
//             // name: 'chalrie'
//             loading: true,
//             movies:[]
//         }
//     }
//     //이벤트핸들러 함수
//     // changeName = () => {
//     //     this.setState({name: 'name changed'})
//     //     }
//     // 컴포넌트가 생성되었을때 호출이 됨
//     componentDidMount(){
//  /////////////////// const BASE_URL = 'localhost:5000/api/words'
//         console.log('mount')
//         // 서버에서 데이터 가져오기
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//         .then(
//             res => res.json()
//         ).then(
//             result => {
//                 console.log(result)
//                 const {data: {movies}}= result
//                 this.setState({loading: false, movies})
//             }
//         )
//     }
//     // 컴포넌트가 업데이트 되었을때 호출이 됨
//     componentDidUpdate(){
//         console.log('update')
//     }
//     // // 컴포넌트가 제거되었을때 호출이 됨
//     // componentWillUnmount(){
//     //     console.log('unmount')
//     // }
//     render(){
//         // return (
//         //     <div className="App">
//         //         <h1>{name}</h1>
//         //     <button onClick={this.changeName}>change name</button>
//         //     </div>
//         const {loading, movies}= this.state

//         if(loading){
//             return(
//                 <div>
//                     <h1>Loading ...</h1>
//                 </div>
//             )
//         }else{
//             return (
//                 <div>
//                     {/* 오픈 API 데이터 순화 => 컴포넌트로 변환 */}
//                     {movies.map(movie => {
//                         return(
//                             <Movie 
//                             key={movie.id}
//                             title={movie.title}
//                             genres={movie.genres}
//                             cover={movie.medium_cover_image}
//                             summary={movie.summary}>
//                             </Movie>
//                         )
//                     })}
//                 </div>
//             )
//         }
//     }
// }

// export default App;


// import './App.css';
// import React, { Component } from 'react'
// import words from './dummyData'
// import { number } from 'prop-types';

// class App extends Component{
//     state = {
//         index: 0,
//         count: 0
//     }
//     pickRandomNumber = (min, max) => { return Math.floor( Math.random()*(max-min+1)) + min}

//     setNumber = () => {
//         this.setState({index: this.pickRandomNumber(0, words.length-1)})
//     }
//     // checkDuplication = (numbers, picked) => {
//     //     return numbers.find(num => num === picked)  
//     // }
//     // showRandomNumber = () => {
//     //     // const numbers = [0, 0, 0, 0, 0, 0]
//     //     // const picks = number.map(n => this.pickRandomNumber(1, 45))
//     //     // this.setState({number: this.pickRandomNumber(1,45), numbers: picks.join(' ')})
//     //     const numbers = []
//     //     let cnt = 0;
//     //     while(number.length < 6){
//     //         const picked = this.pickRandomNumber(1, 45)
//     //         const isDuplicated = this.checkDuplication(numbers, picked)
//     //         if(isDuplicated){
//     //             console.log('duplicated...', isDuplicated)
//     //             number.push(this.pickRandomNumber(1, 45))
//     //         }else{
//     //             numbers.push(picked)
//     //         }
//     //         cnt++;
//     //     }
//     //     this.setState({ number: this.pickRandomNumber(1, 45), numbers: numbers.join(' ')})
//     // }
//     // // increaseCount = () => {
//     // //     this.setState({count: this.state.count + 1})
//     // // }
//     // // 초기에 웹화면이 렌더링되었을때 타이머를 설정함
//     componentDidMount(){
//         this.countID = setInterval(this.setNumber, 1000)
//     }
//     // 사용자가 웹화면을 벗어나면 타이머를 해제함
//     componentWillUnmount(){
//         clearInterval(this.countID)
//     }
//     render(){
//         const { index } = this.state
//         const word_picked = words[index]
//         console.log(words.length, index)
//         const cardStyle = {
//             background: 'tan',
//             width: '30%',
//             margin: '0 auto',
//             textLign: 'center',
//             padding: '20px',
//             color: 'white'
//         }
//         // console.log(animals)
//         // const animal = animals [count%animals]
//         return( 
//             <div style={cardStyle}>
//                 {/* <h1>Increase automatically !</h1>
//                 <h2>{count}</h2> */}
//                 <h1 style={{borderBottom: '1px solid lightgray'}}>Flash Card</h1>
//                 <h2>{word_picked.word}</h2>
//                 <h2>{word_picked.meaning}</h2>  
//             </div>
//         )
//     }
// }

// export default App;



// import './App.css';
// import React, { Component } from 'react'
// import Button from './Button'

// class App extends Component{
//     // 이벤트핸들러 함수
//     handleClick = () => alert('clicked button')
//     render(){
//         return (
//             <div>
//                 <Button size ="small" color="blue" width="fullWidth">Add Todo</Button>
//                 <Button size ="medium">
//                     Add Todo</Button>
//                 <Button size ="large" color="grey" handleClick={this.handleClick} disabled={true} >Add Todo</Button>
//                 <img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>
//             </div>
//         )
//     }
// }

// export default App;

// import './App.css'; 
// import { Component } from 'react'; 
// import Nav from './Nav' 

// class App extends Component { 
//     state = {
//         menus: [
//             {
//                 siteTitle: '구글',
//                 siteUrl: 'https://google.com'
//             },
//             {
//                 siteTitle: '네이버',
//                 siteUrl: 'https://naver.com'
//             },
//             {
//                 siteTitle: '네이트',
//                 siteUrl: 'https://nate.com'
//             }
//         ]
//     }
//     render(){ 
//         const { menus } = this.state
//         return ( 
//         <div className="App"> 
//             <Nav menus={menus}></Nav> 
//         </div> 
//         ); 
//     } 
// } 

// export default App;

// import './App.css'; 
// import { Component } from 'react'; 
// import Nav from './Nav' 
// import Modal from './Modal'
// import Button from './Button'

// class App extends Component { 
//     state = {
//         open: false,
//         msg: ''
//     }
//     // 이벤트핸들러 함수
//     openModal = () => {
//         this.setState({open:true})
//     }
//     closeModal = () => {
//         this.setState({ open:false})
//     }
//     handleRemove = () => {
//         this.closeModal()
//         this.setState({msg: '성공적으로 제거되었습니다!'})
//     }
//     render(){     
//         const { open, msg }=this.state
//         const { openModal, closeModal, handleRemove} = this
//         return ( 
//         <>
//             <Button handleClick={this.openModal}>할일 제거</Button>
//             <h1>{msg}</h1>
//             <Modal open={open}>
//             <div className="header">진짜 레알 할일을 제거하시겠어요?</div>
//             <div className="body"> Modal.body
//                 지금 할일을 제거하면 다시 복구할수 없습니다.
//             </div>
//             <div className="footer"> Modal.footer
//                 <Button size="small" handleClick={handleRemove}>제거</Button> 
//                 <Button size="small" handleClick={closeModal}>Close</Button>
//             </div>
//             </Modal>
//         </>
//         ); 
//     } 
// } 

// export default App;

// import './App.css'; 
// import { Component } from 'react'; 
// import animals from './dummyData' 
// import Card from './Card'

// class App extends Component { 
//     state = { count: 0 } 
//     increaseCount = () => { 
//         this.setState({ count: this.state.count + 1}) 
//     } 
//     componentDidMount(){ 
//         this.countID = setInterval( this.increaseCount , 1000) 
//     } 
//     componentWillUnmount(){ 
//         clearInterval(this.countID) 
//     } 
//     render(){ 
//         const { count } = this.state 
//         const word = words[count%words.length]
//          console.log(word) 
//          return ( 
//          <div className="App"> 
//          <h1>Image Gallery !</h1> 
//             <img src={word.src} alt={word.title}></img> 
//         </div> 
//         ); 
//     }  
// } 
// export default App;

// import './App.css'; 
// import { Component } from 'react'; 
// import CustomInput from './CustomInput' 

// class App extends Component { 
//     render(){ 
//         return ( 
//             <div className="App"> 
//                 <CustomInput></CustomInput> 
//             </div> 
//         ); 
//     } 
// }  
// export default App;

// import './App.css'; 
// import React, { Component } from 'react';

// class App extends Component {
//     constructor(props){
//         super(props)
//         this.showAlert = this.showAlert.bind(this);
//     }
//     showAlert() { 
//          console.log(this) 
//          alert('this is alert message !') 
//     } 
//     render(){ 
//         return ( 
//             <div className="App"> 
//                 <h1>Show alert !</h1> 
//                 <button type="button" onClick={this.showAlert}>show</button> 
//             </div> 
//         ); 
//     } 
// } 
// export default App;

// import './App.css'; 
// import React, { Component } from 'react'; 

// class App extends Component { 
//     state = { 
//         toggle: true 
//     } 
//     toggleScreenMode = () => { 
//         this.setState({toggle: !this.state.toggle}) 
//     }
//     render(){ 
//         const { toggle } = this.state 
//         return ( 
//             <div className={`normal ${toggle? "": "dark"}`}>
//                 <h1>Change screen mode</h1> 
//                 <button type="button" onClick={this.toggleScreenMode}>{ toggle? "DARK": "NORMAL"}
//                 </button> 
//             </div>
//         ); 
//     } 
// } 
// export default App;

// import './App.css'; 
// import React, { Component } from 'react'; 
// import words from './dummyData'
// import Button from './Button'
// import Word from './Word'

// class App extends Component { 
//     state = {
//         words: words
//     }
//     handleRemove = (id, e) => { 
//         const word = e.target.previousSibling.innerText 
//         console.log(word) 
//         console.log(id) 
//         alert(`You want to delete word - ${word}?`) 

//         // 단어 제거
//         const words = this.state.words.filter( (w, index) => index !== id)
//         this.setState({words: words})
//     } 
//     render(){ 
//         const wordStyle = { 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center' 
//         } 
//         return ( 
//             <div> 
//                 <h1>영단어 목록</h1>
//                 {words.map( (w, id) => {
//                     return(
//                         <Word key={id} w={w} handleRemove={(e) => this.handleRemove(id, e)}></Word>
//                     )
//                 })}
//                 {/* <h1 style={{textAlign:'center'}}>Word List</h1> 
//                 {words.map( (w, id) => { 
//                     return ( 
//                         <div key={id} style={wordStyle}>
//                             <h2>{w.word}</h2> 
//                             <Button size="small" type="button" handleClick={(e) => this.handleRemove(id, e)}>DELETE</Button> 
//                         </div> 
//                     ) 
//                 })}  */}
//             </div> 
//         );  
//     }
// }  
// export default App;

// import './App.css'; 
// import React, { Component } from 'react'; 
// import images from './imgData' 
// import Button from './Button' 
// import Sidebar from './Sidebar'

// class App extends Component { 
//     state = { 
//         toggle: false,
//         menus:[
//             { icon: '♜', title: 'HOME' }, { icon: '♞', title: 'ABOUT' }, { icon: '☻', title: 'SETTING' }, { icon: '♜', title: 'HOME' }, { icon: '♞', title: 'ABOUT' }, { icon: '☻', title: 'SETTING' }
//         ]
//     }
//     // 토글 시이드 맵
//     toggleMenu = () => {
//         this.setState({toggle: !this.state.toggle})
//     }

//     // decreaseIndex = () => { 
//     //     const nextIndex = this.state.index - 1 
//     //     this.setState({index: (nextIndex < 0) ? images.length - 1 : nextIndex}) 
//     // }
//     // increaseIndex = () => { 
//     //     const nextIndex = this.state.index + 1 
//     //     this.setState({index: (nextIndex > images.length - 1) ? 0 : nextIndex}) 
//     // } 
//     render(){ 
//         const { toggle, menus } = this.state

//         // const { index } = this.state 
//         // const { increaseIndex, decreaseIndex } = this 
//         // const path = images[index].src 
//         // const title = images[index].title 
//         return ( 
//             <div className="App"> 
//                 <Button handleClick={this.toggleMenu}>Open sidebar</Button> 
                
//                 <Sidebar open={toggle}> 
//                     {menus.map( (menu, id) => { 
//                         return <div className="menu" key={id}>{menu.icon} {menu.title} </div> 
//                         })} 
//                     </Sidebar> 
//                 </div>
//             // <div className="App"> 
//             //     <div className="img-container"> 
//             //         <img src={path} alt={title}/> 
//             //     </div> 
//             //     <div className="control-btns"> 
//             //         <Button handleClick={decreaseIndex}>Prev</Button> 
//             //         <Button handleClick={increaseIndex}>Next</Button> 
//             //     </div> 
//             // </div> 
//         ); 
//     } 
// } 
// export default App;


// import './App.css'; 
// import React, { Component } from 'react'; 
// import Button from './Button' 
// import youtubeVideos from './videoData'


// class App extends Component { 
//     constructor(props){ 
//         super(props) 
//         this.state = { 
//             fileName: '', 
//             imgSrc: '' 
//         } 
//         this.fileInput = React.createRef() 
//         // ref 생성하기 
//     }
//      isValid = (type) => { 
//         return type === 'image' 
//     } 
//     handleChange = (e) => { 
//         console.log(e.target.files[0]) 
//         const file = e.target.files[0] 
//         const imgSrc = URL.createObjectURL(file) 
    
//     if(this.isValid(file.type.split('/')[0])){ 
//         this.setState({ fileName: file.name, imgSrc }) 
//     }else{ 
//         this.setState({ fileName: 'File is not valid type !', imgSrc: ''})
//     } 
// } 

// openFileWindow = () => { 
//     this.fileInput.current.click() // ref 사용하기 
// } 
// render(){ 
//     const { fileName, imgSrc } = this.state 
//     return ( 
//         <div className="App"> 
//             <h1>{fileName}</h1> 
//             {imgSrc !== '' && <img src={imgSrc} alt="preview-img" width="300px" height="400px"></img>}
//             <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput}accept="image/*"></input> 
//             <Button handleClick={this.openFileWindow}>Upload</Button> 
//         </div> 
//         ); 
//     } 
// } 
// export default App;



// import './App.css';
// import React, { Component } from 'react';
// import Button from './Button'
// import loginData from './loginData'

// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             files: []
//         }
//         this.fileInput = React.createRef()
//     }
//     // state = {
//     //     isLogin:false,
//     //     id: '',
//     //     password: '',
//     //     open: false
//     // }
//     // openModal = () => {
//     //     this.setState({open: true})
//     // }
//     // closeModal = () => {
//     //     this.setState({open: false})
//     // }
    
//     // 파일 유효성 검사
//     isValid = (type) => {
//         return type === 'image'
//     }
//     // 사용자가 여러개의 파일을 선택했을때
//     handleChange = (e) => {
//         const files = e.target.files
//         const uploadedFiles = [] // 빈 배열 생성

//         // file.type.split("/")[0] => "image" "pef" "video"
//         for(let file of files){
//             if(this.isValid(file.type.split('/')[0])){
//                 const name = file.name
//                 const imgSrc = URL.createObjectURL(file)
//                 uploadedFiles.push({ name, imgSrc})
//             }else{
//                 alert(`file [$(file.name)] type is not vaild !`)
//             }
//         }
//         this.setState({files: uploadedFiles})
//     }
//     openFileWindow = () => {
//         this.fileInput.current.click() // ref 사용하기
//     }

//     // handleChange = (e) => {
//     //     const { name, value } = e.target
//     //     this.setState({ [name]: value})
//     // }
//     // login = (e) => {
//     //     e.preventDefault()
//     //     const {id, password}=this.state
//     //     // 사용자 정보와 일치하는지 검사하는 로직
//     //     if(id === loginData.USER_ID && password === loginData.USER_PASSWORD)
//     //         this.setState({isLogin: true})
//     // }else{
//     //         alert('You failed to login')
//     //     }
//     // }
//     // componentDidMount(){
//     // }
//     render(){
//         const{files}=this.state

//         return(
//             <div className="App">
//                 {files.length !== 0 && files.map( (file, id) => {
//                     return(
//                         <div key={id}>
//                             <h3>{file.name}</h3>
//                             <img src={file.imgSrc} alt={file.name} width="70px" height="100px"></img>
//                         </div>
//                     )
//                 })}
//                 <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*" multiple></input>
//                 <Button handleClick={this.openFileWindow}>Upload</Button>  
//             </div>
//         );
//     }
// }
        
// //         const { isLogin, id, password, open } = this.state
// //         const loginForm = (
// //             <>
// //             <form>
// //                 <label>ID <input type="text" placeholder="TYPE YOUR ID ..." name="id" value={id} onChange={this.handleChange}></input></label><br/><br/>
// //                 <label>PASSWORD <input type="password" placeholder="TYPE YOUR PASSWORD ..." name="password" value={password} onChange={this.handleChange}></input></label> 
// //                 <div className="login-btn">
// //                 <Button handleClick={this.login}>Login</Button>
// //                 </div>
// //             </form>
// //             <Modal open={open}>
// //                 <p>You failed to login</p>
// //                 <Button handleClick={this.closeModal}>Close</Button>
// //             </Modal>
// //             </>
// //         )
// //     }
// // }

// export default App;


// import './App.css'; 
// import React, { Component } from 'react'; 
// import {Home, About, NotFound} from './pages'
// import {Route, Routes} from 'react-router-dom'

// class App extends Component { 
//     render(){ 
//         return ( 
//             <div className="App"> 
//                 <Route>
//                     <Route exact path="/" elemet={<Home/>}/>
//                     <Route exact path="/about" elemet={<About/>}/>
//                     <Route path="*" element={<NotFound/>}/>
//                 </Route>
//             </div> 
//         );
//     } 
// } 
// export default App;

// import './App.css'; 
// import React, { Component } from 'react'; 
// import { Route, Routes } from 'react-router-dom'; 
// import { Home, About, NotFound } from './pages'; 
// import Menu from './Menu'

// class App extends Component { 
//     render(){ return ( 
//         <div className="App">
//             <Menu> </Menu>
//             <Routes> 
//                 <Route exact path="/" element={<Home/>}/> 
//                 <Route exact path="/about" element={<About/>}/> 
//                 <Route path="*" element={<NotFound/>}/> 
//             </Routes>  
//             </div> 
//         ); 
//     } 
// } 
// export default App;

import './App.css'; 
import React, { Component } from 'react'; 
import { Route, Routes } from 'react-router-dom'; 
import { Home, About, NotFound, Post } from './pages'; 
import Menu from './Menu' 
import Sidebar from './Sidebar' 
import Button from './Button' 

class App extends Component { 
    homeMenu = [ 
        { url: "/", name: "HOME" }, { url: "/about", name: "ABOUT" }, { url: "/posts", name: "POST" }, 
    ]
    state = { 
        open: false 
    } 
    showSidebar = () => {
         this.setState({ open: !this.state.open }) 
    } 
    render(){ 
        const { open } = this.state 
        const { homeMenu } = this
        return ( 
            <div className="App"> 
                <Button handleClick={this.showSidebar}>Menu</Button> 
                <Sidebar open={open}> 
                    <Menu menus={homeMenu}></Menu> 
                </Sidebar> 
                <Routes> 
                    <Route exact path="/" element={<Home/>}/> 
                    <Route exact path="/about" element={<About/>}/> 
                    <Route path="/posts" element={<Post/>}>
                    <Route path=":postId" element={<Post/>}/> 
                </Route> 
                <Route path="*" element={<NotFound/>}/> 
                </Routes> 
            </div> 
        ); 
    } 
}

export default App;


