import { Link } from "react-router-dom"
import {BsArrowLeft} from 'react-icons/bs'
import { Divider } from "rsuite"
const Article = (props) => {
  const {title, content, main_picture} = props.data
  return (
    <div className="article">
      <span className={"title"}><Link to={'/articles'}><BsArrowLeft /></Link><h1>{title}</h1></span> 
      <img src={`/img/${main_picture}`} alt={""}/>
      <Divider />
      <div className="article-content">
        {content.map((text) => {
          if (text.match(/(jpeg|png|jpg|gif|webp)/g)) {
            return <img src={`/img/${text}`} alt={""}/>
          } else if (text.match(/Subtitle:/gi)) {
            return <h2>{text.replace(/Subtitle:/gi, "").trim()}</h2>
          } else {
            return <p>{text}</p>
          }
        })}
      </div>
    </div>
  )
}

export default Article