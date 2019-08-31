import React, {Fragment, useEffect, useState} from "react";
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Skeleton from '@material-ui/lab/Skeleton';
import ChapterList from "./ChapterList";

const API = "https://www.mangaeden.com/api/manga/";
const IMG_URL = 'https://cdn.mangaeden.com/mangasimg/';

const ComicDetails = (props) => {
    const [comic, setComic] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComic();
    }, []);

    const fetchComic = async () => {
        const data = await fetch(API + props.match.params.id);
        const comic = await data.json();
        setComic(comic);
        setLoading(false);
    };

    return (
        <div>
            <Container align="center" style={{padding: 32}}>
                <Paper style={{padding: '24px'}}>
                    {!loading ? (
                        <Fragment>
                            <img alt="manga poster" src={(comic.image ? IMG_URL + comic.image : '/default.gif')}/>
                            <Typography variant="h4">
                                {comic.title}
                            </Typography>
                            <br/>
                            <Typography variant="body1">
                                {comic.description}
                            </Typography>
                            <br/>
                            <Typography variant="h6">
                                {"Autor: " + comic.author}
                            </Typography>
                            <br/>
                            <Typography variant="h6">
                                {"Artist: " + comic.artist}
                            </Typography>
                            <ChapterList chapters={comic.chapters} comicID={props.match.params.id}/>
                        </Fragment>
                    ) : <Fragment>
                        <Skeleton variant="rect" width={210} height={350}/>
                        <Skeleton width="80%"/>
                        <Skeleton width="80%"/>
                        <Skeleton width="80%"/>
                        <Skeleton width="60%"/>
                        <Skeleton width="60%"/>
                    </Fragment>
                    }

                </Paper>
            </Container>
        </div>
    );
};

export default ComicDetails;