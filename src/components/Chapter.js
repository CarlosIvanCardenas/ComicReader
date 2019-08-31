import React, {Fragment, useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";

const API = 'https://www.mangaeden.com/api/chapter/';
const IMG_URL = 'https://cdn.mangaeden.com/mangasimg/';

function Chapter(props) {
    const [chapter, setChapter] = useState([[]]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetchChapter();
        window.addEventListener('keydown', changeCurrentPage, false);
        return () => {
            window.removeEventListener('keydown', changeCurrentPage);
        };
    }, []);

    const fetchChapter = async () => {
        const data = await fetch(API + props.match.params.cid);
        const chapter = await data.json();
        const images = await chapter.images.reverse();
        setChapter(images);
    };

    const changeCurrentPage = (event) => {
        if (event.key === 'ArrowRight' || event.type === 'click') {
            console.log(currentPage);
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Container align="center" style={{padding: 32, overflow: 'hidden'}}>
            {chapter[currentPage][1] ? //cambiar a loading
                <img src={IMG_URL + chapter[currentPage][1]}
                     alt={chapter[currentPage]} style={{height: '80vh'}} onClick={changeCurrentPage}/>
                :
                <Fragment>
                    <Skeleton variant="rect" style={{height: '80vh'}}/>
                </Fragment>
            }
        </Container>
    )
}

export default Chapter;