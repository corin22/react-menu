import React from 'react' 
import { useParams, NavLink, useSearchParams, useLocation } from "react-router-dom"; 
import posts from '../postData' 
import './Post.css' 

function Post(){ 
    const params = useParams(); 
    const post = posts[params.postId] 
    let [searchParams, setSearchParams] = useSearchParams() 
    const applyActiveColor = ({ isActive }) => (isActive ? {color: 'orangered'} : {}) 

    const changeQueryString = (e) => { 
        const filter = e.target.value 
        if(filter){ 
            setSearchParams({ filter }) 
        }else{ 
            setSearchParams({}) 
        } 
    } 
    const QueryNavLink = ({ to, children, ...props }) => { 
        const location = useLocation(); 
        return <NavLink to={to + location.search} {...props}>{children}</NavLink> 
    }
    return ( 
        <> 
            {/* 쿼리스트링을 이용한 검색 */} 
            <br/><input className="filter-post" value={searchParams.get('filter') || ""} onChange={changeQueryString} placeholder="Search post ..."/> 

            {/* 특정 블로그 포스트 */} 
            {post ? 
                <div className="post-container"> 
                    <h1>{post.title}</h1> 
                    <p>{post.content}</p> 
                    <span>{post.created}</span> 
                </div> : 
                <h1>POST PAGE</h1>} 
            
            {/* 블로그 포스트 전체목록 */} 
            {posts 
            .filter( post => { 
                const filter = searchParams.get('filter') 
                if(!filter) return true; 
                const title = post.title.toLowerCase() 
                return title.includes(filter.toLowerCase()) 
            }) 
            .map( (post, id) => { 
                return ( 
                <QueryNavLink key={id} to={`/posts/${id}`} className="post-item" style={applyActiveColor}>{post.title}</QueryNavLink>
                )
            })} 
        </> 
    ) 
} 
export default Post

