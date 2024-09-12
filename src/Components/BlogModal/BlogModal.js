import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogModal.css';

const BlogModal = ({ blogs }) => {
    const { blogId } = useParams();
    const blog = blogs.find(b => b.id === blogId);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const createContent = (htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const placeholders = doc.querySelectorAll('.blog-image-placeholder');

        placeholders.forEach((placeholder) => {
            const index = placeholder.getAttribute('data-image-index');
            const img = document.createElement('img');
            img.src = blog.images[index];
            img.alt = `${blog.title} ${parseInt(index) + 1}`;
            img.className = `blog-image ${placeholder.className.replace('blog-image-placeholder', '')}`;
            placeholder.replaceWith(img);
        });

        return { __html: doc.body.innerHTML };
    };

    return (
        <div className="blog-detail-container">
            <h2>{blog.title}</h2>
            <div dangerouslySetInnerHTML={createContent(blog.fullContent)} />
        </div>
    );
};

export default BlogModal;
