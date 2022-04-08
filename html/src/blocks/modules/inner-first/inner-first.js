import axios from 'axios';

const Blog = class Blog {
    constructor({ selected }) {
        this.selected = selected,
        this.isMoreShowed = false
    }
}

export default Blog;