import { category_arr, blog_arr, trending } from './data.js';



document.addEventListener('DOMContentLoaded', () => {
    const categoryContainer = document.getElementById('IconsCategory_category-container');
    const tagCloudContainer = document.getElementById('TagCloud_ArbTagCloud-container');
    const blogContainer = document.getElementById('Home_grid-last-posts_section_container-container');
    const gridItemsContainer = document.getElementById('Home_grid-items_container');

    //categoryContainer
    if (categoryContainer) {
        category_arr.forEach(category => {
            const categoryItem = document.createElement('a');
            // categoryItem.href = `/category/${category.slug}`;
            categoryItem.href = `search_category.html`;
            categoryItem.classList.add('IconsCategory_eb_body_content_item_action');

            categoryItem.innerHTML = `
        <div class="IconsCategory_eb_body_content_item_img">
            <span style="display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                <span style="display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:97.75%"></span>
                <img src="${category.img_url}" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%">
            </span>
        </div>
            ${category.name}
    `;

            categoryContainer.appendChild(categoryItem);
        });
    } else {
        console.error('Category container not found');
    }

    //tagCloudContainer
    if (tagCloudContainer) {
        trending.forEach(tag => {
            const tagElement = document.createElement('a');
            const fontSize = Math.floor(Math.random() * 11) + 20;

            const r = Math.floor(Math.random() * 51);
            const g = Math.floor(Math.random() * 101) + 100;
            const b = Math.floor(Math.random() * 51);
            const color = `rgb(${r}, ${g}, ${b})`;

            tagElement.className = 'tag-cloud-tag';
            // tagElement.setAttribute('url', tag.slug);
            tagElement.setAttribute('href', "./trending.html");
            tagElement.style.margin = '0px 3px';
            tagElement.style.verticalAlign = 'middle';
            tagElement.style.display = 'inline-block';
            tagElement.style.fontSize = `${fontSize}px`;
            tagElement.style.color = color;

            tagElement.textContent = tag.name;
            tagCloudContainer.appendChild(tagElement);
        });
    } else {
        console.error('Trending container not found');
    }

    //blogContainer
    if (blogContainer) {
        blog_arr.forEach(blog => {
            const blogItem = document.createElement('div');
            blogItem.className = 'Home_grid-last-posts-item_container';

            blogItem.innerHTML = `
                <span style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                    <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:70%"></span>
                    <img alt="${blog.name}" 
                         src="${blog.img_url}" 
                         decoding="async" 
                         data-nimg="responsive" 
                         style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%">
                </span>
                <div class="Home_grid-last-posts-item_content">
                    <h2>
                        <a href="/${blog.slug}">
                            ${blog.name}
                        </a>
                    </h2>
                    <div>
                        <p>${blog.describe}</p>
                    </div>
                </div>
            `;

            blogContainer.appendChild(blogItem);
        });
    } else {
        console.error('Blog container not found');
    }

    //gridItemsContainer
    if (gridItemsContainer) {
        blog_arr.forEach(blog => {
            const gridItem = document.createElement('div');
            gridItem.className = 'Home_grid-items_child';

            // const formattedDate = new Date(blog.create_time).toLocaleDateString('en-US', {
            //     year: 'numeric',
            //     month: '2-digit',
            //     day: '2-digit'
            // });

            gridItem.innerHTML = `
            <div class="Home_grid-items_img">
                <span style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                    <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:70%"></span>
                    <img alt="${blog.name}"
                        src="${blog.img_url}"
                        decoding="async" data-nimg="responsive"
                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%">
                </span>
            </div>
            <div class="Home_grid-items_content">
                <h2>
                    <a href="/${blog.slug}">
                        ${blog.name}
                    </a>
                </h2>
                <p>${blog.describe}</p>
                <div>
                    <span><i>${blog.create_time}</i></span>
                    <span><a href="/author/${blog.author.toLowerCase().replace(/\s+/g, '-')}/">${blog.author}</a></span>
                </div>
                <div class="Home_grid-items_more">
                    <a href="/clone_trendingresults/detail_page.html">Read more</a>
                </div>
            </div>
        `;

            gridItemsContainer.appendChild(gridItem);
        });
    } else {
        console.error('Grid items container not found');
    }
});
