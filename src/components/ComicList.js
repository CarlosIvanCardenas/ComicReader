import React, {Fragment, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import ComicCard from "./ComicCard";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Skeleton from '@material-ui/lab/Skeleton';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const API = 'https://www.mangaeden.com/api/list/0/?p=0';

function ComicList() {
    const [comics, setComics] = useState([]);
    const [filteredComics, setFilteredComics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComics();
    }, []);

    async function fetchComics() {
        const data = await fetch(API)
            .then(data => data.json());
        const comics = await data.manga.sort((a, b) => (a.t > b.t) ? 1 : ((b.t > a.t) ? -1 : 0));
        setComics(comics);
        setFilteredComics(comics);
        setLoading(false);
    }

    function onSearchInputChange(event) {
        let filteredList = comics.filter(function (e) {
            return e.t.match(new RegExp(event.target.value, 'i'))
        });
        setFilteredComics(filteredList);
    }

    return (
        <Container>
            <TextField id={'searchInput'}
                       placeholder={'Buscar comics'}
                       margin={'normal'}
                       onChange={onSearchInputChange}/>
            <Grid container spacing={4}>
                {(loading ? Array.from(new Array(12)) : filteredComics).map((item, index) => (
                    <Grid item key={index} xs={6} sm={3}>
                        <ComicCard comic={item} loading={loading}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default ComicList;