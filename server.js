const express = require('express');
const app = express();

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Felipe',
        title: 'Post 2'
    }
];

app.get('/posts', (req,res)=>{
    res.send('hello world')
});

app.listem(3000);