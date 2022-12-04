import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


const post = [
    {
        id: 4,
        title: '新型コロナウイルス時代におけるベトナム企業の連携',
        content: 'Covid-19の経済全体への影響に直面し、最大手民間企業500社は売上を増加させる方法を相互に模索した。',
        date: 'November 18, 2020',
        author: 'admin',
        category_name: 'ベトナム情報',
        image: '/image/3.jpg'
    }
];


function Main(props) {
    const {posts,title} = props;

    return (
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            '& .markdown': {
              py: 3,
            },
          }}
        >
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Divider />
          {posts.map((post) => (
            <Markdown className="markdown" key={post.substring(0, 40)}>
              {post}
            </Markdown>
          ))}
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

export default Main;
