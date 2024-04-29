import BlogPost from '@/components/blog-post';
import SectionTitle from '@/components/section-title';
import { getBlogPosts } from '@/db/blog';

const Blogs = ({ all = false }: { all?: boolean }) => {
  const blogs = all ? getBlogPosts() : getBlogPosts().filter((b, i) => i < 5);
  return (
    <div className='pb-5'>
      {!all && <SectionTitle title={'Writings'} href={'/blog'} viewAll />}
      <ul className='space-y-3 sm:space-y-1'>
        {blogs.map((blog) => (
          <BlogPost
            key={blog.slug}
            slug={blog.slug}
            title={blog.metadata.title}
            publishedAt={blog.metadata.publishedAt}
          />
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
