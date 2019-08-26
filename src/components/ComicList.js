import React, {Component, Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import ComicCard from "./ComicCard";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const API = 'https://www.mangaeden.com/api/list/0/?p=0';

class ComicList extends Component{
    state = {
        searchString: '',
        comics: [],
        filteredComics: [],
        error: null
    };

    componentDidMount() {
        this.getComics()
    }

    getComics = () => {
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                data.manga.sort((a,b) => (a.t > b.t) ? 1 : ((b.t > a.t) ? -1 : 0));
                this.setState({ comics: data.manga, filteredComics: data.manga })
            })
            .catch(error => this.setState({ error }))
    };

    onSearchInputChange = (event) => {
        let filteredList = this.state.comics.filter(function (e) {
            return e.t.match(new RegExp(event.target.value, 'i'))
        });
        this.setState({ filteredComics: filteredList })
    };

    render() {
        const { filteredComics, error } = this.state;
        return (
            <Container style={{ padding: 32 }}>
                <TextField id={'searchInput'}
                    placeholder={'Buscar comics'}
                    margin={'normal'}
                    onChange={this.onSearchInputChange}/>
                <Grid container spacing={4}>
                    {filteredComics.map(currentComic =>
                        <Grid item xs={6} sm={3} key={currentComic.a}>
                            <ComicCard comic={currentComic}/>
                        </Grid>
                    )}
                </Grid>
            </Container>
        )
    }
}

export default ComicList;