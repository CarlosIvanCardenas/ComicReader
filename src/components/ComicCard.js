import React, {Fragment} from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import Skeleton from '@material-ui/lab/Skeleton';

const IMG_URL = 'https://cdn.mangaeden.com/mangasimg/';

const ComicCard = (props) => {
    return (
        <div>
            <Card>
                <CardActionArea component={Link} to={!props.loading ? `/details/${props.comic.i}` : '/'}>
                    {!props.loading ?
                    <CardMedia
                        component={'img'}
                        height={'auto'}
                        image={(props.comic.im ? IMG_URL + props.comic.im : '/default.gif')}
                        title={props.comic.a}
                    />
                    : <Skeleton variant="rect" width={210} height={118} /> }
                    <CardContent>
                        { props.comic ? (
                            <Fragment>
                                <Typography gutterBottom variant={'h5'} component={'h2'}>
                                    {props.comic.t}
                                </Typography>
                                <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                                    {props.comic.c.join(', ')}
                                </Typography>
                            </Fragment>
                            ) : (
                                <Fragment>
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Fragment>
                            )}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default ComicCard;