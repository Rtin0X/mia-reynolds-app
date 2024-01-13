import SectionHeader from "../SectionHeader";
import PostList from "./PostList";

const getPosts = async () => {
    const res = await fetch('https://rtin0x.github.io/host-api/data.json');
    return res.json();
};

const Blog = async () => {
    const posts = await getPosts();
    return (
        <section className="section" id="blog">
            <div className="container mx-auto pt-[140px] pb-[190px]">
                <SectionHeader pretitle='Notre Blog' title='Actualité' />
                {/* post list */}
                <PostList posts={posts} />
            </div>
        </section>
    );
};

export default Blog;