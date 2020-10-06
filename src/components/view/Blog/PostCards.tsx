import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

interface IMediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: any;
  categories: string[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    card: {
      maxHeight: 500,
    },
    actionCard: {
      padding: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
    },
  }),
);

function toText(node: any) {
  let tag = document.createElement('div')
  tag.innerHTML = node
  node = tag.innerText
  return node
}

const PostCards = () => {
  const classes = useStyles();

  const [mediumPosts, setMediumPosts] = useState<IMediumPost[]>([]);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40solijons1996`)
      .then((res) => {
        return res.json();
      }).then((res) => {
        const filteredPosts: IMediumPost[] = res.items.filter((post: IMediumPost) => post.categories.length > 0);
        setMediumPosts(filteredPosts);
      })
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {mediumPosts.map((post) => {
          return (
            <Grid key={post.description} item xs={12} sm={4}>
              <Card square elevation={2}>
                <CardMedia
                  className={classes.media}
                  image={post.thumbnail}
                  title={toText(post.description)}
                />
                <CardContent
                  style={{
                    height: "200px",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary" component="h6">
                    {toText(post.description).replace('Continue reading on Medium »', '')}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actionCard}>
                  <Link
                    rel="noopener"
                    href={post.link}
                    target="_black"
                    underline="none"
                  >
                    Continue reading on Medium
                   </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
};

export default PostCards;
