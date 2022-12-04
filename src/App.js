import './App.css'
import Grid from "@mui/material/Grid";
import * as React from 'react';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {List, ListItem, ListItemText} from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const randomColor = require('randomcolor');
const menuBar = ['オフショア開発', 'NALブログ', 'ベトナム情報', 'お問い合わせ'];
const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    card: {
        position: 'relative',
        padding: '5px',
    },
    overlay: {
        position: 'absolute',
        top: '70%',
        left: '10%',
        height: '30%',
        width: '80%',
        color: 'black',
        backgroundColor: 'white',
        overflowWrap: 'break-word',
    }
}
const hotnews = {
    id: 1,
    title: 'スクラムチェックリスト',
    content: 'スクラムマスターになることを目指しているあなた、またはプロのスクラムマスターになるための最初の一歩を踏み出しているあなたも、NALのSEのTran Duy Truongによる以下の記事でスクラムマストターが何をすべきか、仕事の概要を説明られます。',
    category_name: 'HOT NEWS',
    image: '/image/1.jpg'
}

const topView = [
    {
        id: 2,
        title: '日本とベトナム オフショア開発の課題',
        content: '現在ベトナムと日本は政治経済共に良好な関係を築いており、ベトナム オフショア 会社から...',
        date: 'October 27, 2020',
        author: 'admin',
        category_name: 'TOP VIEWED',
        image: '/image/2.jpg',
    },
    {
        id: 3,
        title: 'ベトナム オフショア 失敗の原因',
        content: 'オフショア市場の魅力を求め、多くのテクノロジー企業がソフトウェアのアウトソーシングに目...',
        Date: 'October 14, 2020',
        author: 'admin',
        category_name: 'TOP VIEWED',
        image: '/image/3.jpg',
    }];

const latestNews = [
    {
        id: 4,
        title: "新型コロナウイルス時代におけるベトナム企業の連携",
        content: "Covid - 19の経済全体への影響に直面し、最大手民間企業500社は売上を増加させる方法を相互に模索した。",
        date: "November 18, 2020",
        author: "admin",
        category_name: "ベトナム情報",
        image: 4,
    },
    {
        id: 5,
        title: "Java言語のメリットとデメリット",
        content: "Javaがもたらすメリットにより、学習して使用する人々の数は日々増加しています。 ただし、言語がどれほど強力であっても、特定の制限があり、Javaも例外ではありません。",
        date: "November 17, 2020",
        author: "admin",
        category_name: "オフショア開発",
        image: 5
    },
    {
        id: 6,
        title: "Dockerfileについて",
        content: "Linux、特にDockerにアプローチしている場合は、この記事が役に立つと思います。 この記事では、NALのSE Nguyen NgocDucがDockfileの概要を説明します。",
        date: "November 16, 2020",
        author: "admin",
        category_name: "NALブログ",
        image: 6
    },
    {
        id: 7,
        title: "ベトナムのビジネス規制改革",
        content: "ベトナム政府は2020年から2025年までの事業活動に関する規定の廃止や簡素化の計画を規定した政府決議68号（68/NQ-CP）を公布した。",
        date: "November 13, 2020",
        author: "admin",
        category_name: "ベトナム情報",
        image: 7
    },
    {
        id: 8,
        title: "ベトナム・日本ICTウィーク2020",
        content: "Japan ICTウィークは、今年で14年目を迎え、コロナウイルスの影響のため、オンラインの形式で11 / 9から11 / 13までの1週間、「ニューノーマル時代の日越ICT協力」というテーマで行われる。",
        date: "November 11, 2020",
        author: "admin",
        category_name: "NALブログ",
        image: 8
    },
    {
        id: 9,
        title: "スクラムにおけるスクラムマスターの役割",
        content: "スクラムマスターは、チームのパフォーマンスを向上させるためにスクラムモデルで重要な役割を果たす人物です。 スクラムマスターの役割については、次の記事で詳細を説明します。",
        date: "November 10, 2020",
        author: "admin",
        category_name: "オフショア開発",
        image: 9
    },
    {
        id: 10,
        title: "2020年度　10月までの企業活動統計データー",
        content: "10月と2020年の最初の10ヶ月の企業活動",
        date: "November 9, 2020",
        author: "admin",
        category_name: "ベトナム情報",
        image: 10
    },
    {
        id: 11,
        title: "ベトナムシステム開発会社NALのエンジニア1日の業務",
        content: " 今回は日本の案件をメインとしたベトナムシステム開発会社のNALを事例にして、エンジニアの1日の業務を紹介させていただきます。",
        date: "November 6, 2020",
        author: "admin",
        category_name: "NALブログ",
        image: 11
    },
    {
        id: 12,
        title: "日本顧客はベトナムオフショア会社に要求するもの",
        content: "ベトナムオフショア会社と日本顧客との協力を強化するためには、製品に関連する要求事項を満たすのにベトナムエンジニアは専門知識を継続的に向上すると共に日本の仕事文化に精通する必要がある。",
        date: "November 5, 2020",
        author: "admin",
        category_name: "オフショア開発",
        image: 12
    },
    {
        id: 13,
        title: "NALが3年連続でベトナムIT会社トップに",
        content: "ベトナムソフトウェアと情報技術サービス協会により、NALが「A - IoT」分野で【2020年ベトナム企業トップ10社】の一社として正式に選出された。NALは今年でベトナムIT会社トップランキングに3年連続でランクインした。",
        date: "November 4, 2020",
        author: "admin",
        category_name: "NALブログ",
        image: 13
    }
];

const popularNews = [
    {
        id: 14,
        title: " ベトナム オフショア開発に関する問題解答",
        category_name: "オフショア開発",
        image: 14,
    },
    {
        id: 15,
        title: "2020年 情報技術産業の動向",
        category_name: "オフショア開発",
        image: 15
    },
    {
        id: 16,
        title: " ベトナム オフショア 会社を選ぶ７つの基準",
        category_name: "オフショア開発",
        image: 16
    },
    {
        id: 17,
        title: "ベトナム観光への情報技術適用",
        category_name: "ベトナム情報",
        image: 17
    },
    {
        id: 18,
        title: " ベトナム オフショア 会社への選抜 メリットおよびデメリット",
        category_name: "オフショア開発",
        image: 18
    }
];

const tags = [
    {
        tag: "ベトナム システム開発",
        posts: 19
    },
    {
        tag: "ベトナム　オフショア",
        posts: 17
    },
    {
        tag: "ベトナムIT会社",
        posts: 17
    },
    {
        tag: "ベトナムシステム開発",
        posts: 15
    },
    {
        tag: "ベトナムオフショア",
        posts:12
    }
];

const banners = [
    {
        id: 1,
        image: "banner-1.jpg"
    },
    {
        id: 2,
        image: "banner-2.jpg"
    },
    {
        id: 3,
        image: "banner-3.jpg"
    }
];

const footer = [
    "NAL MEDIA ベトナムオフショア開発にまつわる情報を提供します",
    "このサイトは、ベトナムにおけるオフショア開発の状況、ベトナムと日本の協力関係、およびテクノロジーに関する最新のニュースを更新し、NALの人々とお客様のストーリーを投稿しております。",
    "住所：3F, 84 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam",
    "電話番号：(+84)243-787-8654",
    "メールアドレス：info@nal.vn"
]


function App() {
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12} sx={{textAlign: 'center'}}>
                    <h1>NAL MEDIA</h1>
                    <h4>ベトナムオフショア開発にまつわる情報を提供します</h4>
                    <hr/>
                    {menuBar.map((item, index) => (
                        <Button variant='outlined'>
                            {item}
                        </Button>
                    ))}
                    <hr/>
                </Grid>
                <Grid item xs={12} md={7} sx={{height: '100%'}}>
                    <Card style={styles.card}>
                        <CardMedia image={hotnews.image} style={styles.media}/>
                        <div style={styles.overlay}>
                            <h3>{hotnews.title}</h3>
                            <Typography
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: "2",
                                    WebkitBoxOrient: "vertical",
                                }}>
                                {hotnews.content}
                            </Typography>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid container>
                        {topView.map((post, index) => (
                            <Grid item xs={12}>
                                <Card style={styles.card}>
                                    <CardMedia image={post.image} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <h3>{post.title}</h3>
                                        <Typography
                                            sx={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: "2",
                                                WebkitBoxOrient: "vertical",
                                            }}>
                                            {post.content}
                                        </Typography>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} sx={{paddingTop: "10px"}}>
                    <Typography variant="h4">Lasted News</Typography>
                    <hr/>
                    <List sx={{width: '100%',}}>
                        {latestNews.map((post, index) => (
                                <ListItem alignItems="flex-start" key={index}>
                                    <Grid container>
                                        <Grid item xs={12} md={5}>
                                            <img src={`/image/${post.image}.jpg`}/>
                                        </Grid>
                                        <Grid item xs={12} md={7}>
                                            <ListItemText>
                                                <Typography sx={{
                                                    backgroundColor: randomColor(),
                                                    display: 'table'
                                                }}>{post.category_name}</Typography>
                                                <h4>{post.title}</h4>
                                                <Typography sx={{color: 'grey'}}>{post.date}</Typography>
                                                <br/>
                                                <p>{post.content}</p>
                                            </ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">Popular News</Typography>
                    <hr/>
                    <List sx={{width: '100%',}}>
                        {popularNews.map((post, index) => (
                            <ListItem alignItems="flex-start" key={index}>
                                <img src={`/image/${post.image}.jpg`}/>
                                <ListItemText>
                                    <Typography sx={{
                                        backgroundColor: randomColor(),
                                        display: 'table'
                                    }}>{post.category_name}</Typography>
                                    <h4>{post.title}</h4>
                                    <br/>
                                    <p>{post.content}</p>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                    <hr/>
                    <Typography variant="h6">Tags</Typography>
                    {tags.map((tag,index) =>(
                        <div key={index}>
                            <LocalOfferIcon sx={{color:'grey'}} />
                            {tag.tag}(posts: {tag.posts})
                            <br/>
                            <br/>
                        </div>

                    ))}
                    {banners.map((banner, index)=>(
                        <img src={`/image/${banner.image}`} />
                        ))}
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="footer" sx={{ borderTop: "1px solid", height: "48px", marginTop: "20px" }}>
                        <Grid item xs={12} md={6}>
                            <img alt="NAL logo" src="/image/logo-NAL.jpg" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <List>
                                {
                                    footer.map((item, index) => (
                                        <ListItem disablePadding key={index} sx={{ display: "flex" }}>
                                            <Typography variant="p" sx={{ color: "#7d7d7d", fontSize: "13px", flexWrap: "wrap" }}>
                                                {item}
                                            </Typography>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
