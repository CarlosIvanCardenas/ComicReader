import React, {Fragment} from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import Skeleton from '@material-ui/lab/Skeleton';

const IMG_URL = 'https://cdn.mangaeden.com/mangasimg/';

const cardStyle = {
    display: 'block',
    transitionDuration: '0.3s',
    height: '430px'
};

const cardTitleStyle = {
    lineHeight: '1em',
    height: '2em',       /* height is 2x line-height, so two lines will display */
    overflow: 'hidden'  /* prevents extra lines from being visible */
};

const cardTextStyle = {
    lineHeight: '1em',
    height: '2em',       /* height is 2x line-height, so two lines will display */
    overflow: 'hidden'  /* prevents extra lines from being visible */
};

const ComicCard = (props) => {
    return (
        <div>
            <Card style={cardStyle}>
                <CardActionArea component={Link} to={!props.loading ? `/comic/${props.comic.i}` : '/'} style={{ height: '100%' }}>
                    {!props.loading ?
                    <CardMedia
                        component={'img'}
                        style={{ height: '300px' }}
                        image={(props.comic.im ? IMG_URL + props.comic.im : '/default.gif')}
                        title={props.comic.a}
                    />
                    : <Skeleton variant="rect" style={{ height: '300px' }} /> }
                    <CardContent>
                        { props.comic ? (
                            <Fragment>
                                <Typography gutterBottom variant={'h5'} component={'h2'} style={cardTitleStyle}>
                                    {props.comic.t}
                                </Typography>
                                <Typography variant={'body2'} color={'textSecondary'} component={'p'} style={cardTextStyle}>
                                    {props.comic.c.join(', ')}
                                </Typography>
                            </Fragment>
                            ) : (
                                <Fragment>
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton width="60%"/>
                                </Fragment>
                            )}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default ComicCard;