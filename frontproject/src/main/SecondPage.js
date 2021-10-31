import './SecondPage.css'
import { Link } from 'react-router-dom'
import PostCard from '../item/PostCard'
import image1 from '../images/sample3.jpg'
import image2 from '../images/sample6.jpg'
import image3 from '../images/sample5.jpg'

function SecondPage() {

    let cardContents = [
        { id: 0, title: 'How to use mindfullness in everyday life', imageSrc: image1 },
        { id: 1, title: 'How to go deep into mind of hope', imageSrc: image2 },
        { id: 2, title: '10 Best Nootropics for Social Anxiety', imageSrc: image3 },
    ]

    let cards = cardContents.map(data => {
        const pathData = {
            pathname:`/articleDetail/${data.id}`,
            photo: data.imageSrc,
            title: data.title
        }
        return (
            <Link to={pathData} key={data.id} style={{ textDecoration: 'none' }}>
                <PostCard title={data.title} imageSrc={data.imageSrc} />
            </Link>
        )
    }
    )

    return (
        <div className="mainContainer2">
            <div className="articleHeader">
                <div className="articleHeaderText">LATEST ARTICLES</div>
                <hr className="smallLine" />
            </div>
            <div className="articleCardsWrapper">
                {cards}
            </div>
        </div>
    )
}

export default SecondPage
