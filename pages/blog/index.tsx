import React, { useState } from "react";
import { getAllArticles } from "../../utils/markdown";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/jss/nextjs-material-kit/pages/components";
import Footer from "../../components/Footer/Footer";
import classNames from "classnames";
import BlogCard from "../../components/Blog/BlogCard";
import Button from "../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

type PostType = {
  title: string;
  description: string;
  published: string;
  image_url: string;
  slug: string;
};

export default function BlogPage(props: { posts: PostType[] }) {
  const classes = useStyles();

  const { posts } = props;

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/post?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  return (
    <div>
      <Header
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>NextJS Blog.</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer alignItems="center" justifyContent="center">
          <GridItem xs={6}>
            <div>
              {filteredPosts.map((post, index) => (
                <BlogCard post={post} key={index} />
              ))}
            </div>
            <Button onClick={loadMorePosts} size="md" color="primary">
              Load more
            </Button>
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const articles: PostType[] = await getAllArticles();

  articles
    .map((post) => post)
    .sort((a, b) => {
      if (a.published > b.published) return 1;
      if (a.published < b.published) return -1;

      return 0;
    });

  const posts = articles.map((post) => {
    return {
      ...post,
      published: new Date(post.published).toDateString(),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
