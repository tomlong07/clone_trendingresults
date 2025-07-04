import { category_arr, blog_arr } from './data.js';



document.addEventListener('DOMContentLoaded', () => {
    //blogContainer
    const blogContainer = document.getElementById('Page_grid-items_container');
    if (blogContainer) {
        blog_arr.forEach(blog => {
            const blogItem = document.createElement('div');
            blogItem.className = 'Page_grid-items_child';

            blogItem.innerHTML = `
                        <div class="Page_grid-items_img">
                            <span
                                style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                <span
                                    style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:70%"></span><img
                                    alt=""
                                    src="${blog.img_url}"
                                    decoding="async" data-nimg="responsive"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%">
                            </span>
                        </div>
                        <div class="Page_grid-items_content">
                            <h2><a href="/tardive-dyskinesia-symptoms-treatments-and-emerging-research/">${blog.name}</a></h2>
                            <p>${blog.describe}</p>
                            <div><span><i>${blog.create_time}</i></span><span><a href="/author/${blog.author}">${blog.author}</a></span>
                            </div>
                            <div class="Page_grid-items_more"><a
                                    href="/clone_trendingresults/detail_page.html">Read more</a>
                            </div>
                        </div>
            `;

            blogContainer.appendChild(blogItem);
        });
    } else {
        console.error('Blog container not found');
    }

    //blog detail 
    const blogDetailContainer = document.querySelector('.Page_page-body');
    const blogInfoContainer = document.getElementById('Page_page-header_banner-container');

    if (blogDetailContainer) {
        const currentBlog = blog_arr.find(blog => blog.id == 1);
        if (currentBlog) {
            populateBlogDetailSections(currentBlog);
            if (blogInfoContainer) {
                blogInfoContainer.innerHTML = `<h1>${currentBlog.name}</h1>
                    <span
                        style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                            alt="" sizes="100vw"
                            src="${currentBlog.img_url}"
                            decoding="async"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"></span>`
            }
        } else {
            console.error('Blog not found for slug:', blogSlug);
        }
    }
});

function populateBlogDetailSections(blog) {
    // Category Section
    const categorySection = document.getElementById('blog_detail_category');
    if (categorySection) {
        // Archive section
        categorySection.innerHTML = 'Category: ';

        blog.category.forEach(categoryId => {
            const categoryData = category_arr.find(cat => cat.id === categoryId);
            if (categoryData) {
                const archiveLink = document.createElement('span');
                archiveLink.innerHTML = `<a href="/blog/${categoryData.slug}">${categoryData.name}</a>`;
                categorySection.appendChild(archiveLink);
            }
        });

        // Tag section
        categorySection.innerHTML += '<br>Tag: ';
        if (blog.tags && blog.tags.length > 0) {
            blog.tags.forEach(tag => {
                const tagLink = document.createElement('span');
                tagLink.innerHTML = ` <a href="/tag/${tag}/">#${tag}</a>`;
                categorySection.appendChild(tagLink);
            });
        }
    }

    // Content Section
    const contentSection = document.querySelector('.Page_page-body_section-full');
    if (contentSection && blog.content) {
        contentSection.innerHTML = blog.content;
    }

    // Meta Section
    const metadataSection = document.getElementById('Page_page-body_meta-section_last');
    if (metadataSection) {
        const formattedDate = new Date(blog.create_time).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        metadataSection.innerHTML = `
            <span>
                Published: <i>${formattedDate}</i>
            </span>
            <span>
                From: <a href="/author/${blog.author.toLowerCase().replace(/\s+/g, '-')}/">${blog.author}</a>
            </span>
        `;
    }
}

