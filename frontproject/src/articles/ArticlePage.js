import './ArticlePage.css'
import { Link } from 'react-router-dom'
import Like from '../images/like.png'
import Comment from '../images/comment.png'

function ArticlePage(props) {

    let text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    let { photo, title } = props.location
    console.log(photo, title)

    return (
        <div className="articleContainer">
            <div className="mainHeader">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo">LO</div>
                </Link>
                <div className="headerButtonWrapper">
                    <div className="headerButton">ABOUT</div>
                    <div className="headerButton">ARTICLE</div>
                    <div className="headerLineButton">SIGN IN</div>
                </div>
            </div>
            <div className="articleNav">
                <div className="articleNavBox">
                    <img className="articleNavIcon" src={Like} alt="like" />
                    <div className="articleNavText">10</div>
                </div>
                <div className="articleNavBox">
                    <img className="articleNavIcon" src={Comment} alt="comment" />
                    <div className="articleNavText">4</div>
                </div>
            </div>
            <div className="articleWrapper">
                <div className="articleTitle">
                    {title}
                </div>
                <div className="writerInfoBox">
                    <img className="avatar" src={photo} alt="avatar" />
                    <div className="writerNameNdate">
                        <div className="writerNameNdateText" style={{ color: '#525951' }}>Sequoia</div>
                        <div className="writerNameNdateText" style={{ color: 'gray' }}>Oct 26 · 4 min read</div>
                    </div>
                </div>
                <img className="articlePhoto" src={photo} alt="articlePhoto" />
                <div className="articleContentsText">
                    {text}
                </div>
            </div>
            
        </div>
    )
}

export default ArticlePage
