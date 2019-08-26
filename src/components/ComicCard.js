import React, {Fragment} from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const IMG_URL = 'https://cdn.mangaeden.com/mangasimg/';

const ComicCard = (props) => {
  return (
      <div>
          { props.comic ? (
              <Card>
                      <CardMedia
                          component={'img'}
                          height={'auto'}
                          image={(props.comic.im ? IMG_URL + props.comic.im : '/default.gif')}
                          title={props.comic.a}
                      />
                      <CardContent>
                          <Typography gutterBottom variant={'h5'} component={'h2'}>
                              {props.comic.t}
                          </Typography>
                          <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                              {props.comic.c.join(', ')}
                          </Typography>
                      </CardContent>
                  <CardActions>
                      <Button size="small" color="primary">
                          Capitulos
                      </Button>
                  </CardActions>
              </Card>
          ) : null}
      </div>
  )
};

export default ComicCard;