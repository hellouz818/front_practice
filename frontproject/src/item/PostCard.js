import './PostCard.css'

function PostCard(props) {

    let { imageSrc, title } = props

    return (
        <div className="postCard">
            <img src={imageSrc} className="postCardImage" alt="postImage" />
            <div className="postCardContentsWrapper">
                <hr className="postCardLine" />
                {title}
            </div>
        </div>
    )
}

export default PostCard
