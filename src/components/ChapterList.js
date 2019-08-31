import React, {Fragment} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";

const ChapterList = (props) => {
    return (
        <Fragment>
            <List component={'nav'}>
                {props.chapters.map((item, index) =>
                    <ListItem button key={index} component={Link} to={`/comic/${props.comicID}/chapter/${item[3]}`}>
                        <ListItemText primary={`Capitulo ${item[0]}${(item[2] ? ': ' + item[2] : '')}`}/>
                    </ListItem>
                )}
            </List>
        </Fragment>
    );
};

export default ChapterList;