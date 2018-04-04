import React, { Component } from 'react';

export class BlogEntry extends Component {
    displayName = BlogEntry.name

    constructor() {
        super();
        this.state = { blogEntries: [], loading: true };

        fetch("api/Blog/Article/test")
            .then(response => response.json())
            .then(data => {
                this.setState({ blogEntries: data, loading: false });
            });
    }

    static renderBlogEntries(blogEntries) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {blogEntries.map(be =>
                        <tr key={be.id}>
                            <td>{be.title}</td>
                            <td>{be.published}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading blog entries...</em></p>
            : BlogEntry.renderBlogEntries(this.state.blogEntries);

        return (
            <div>
                <h1>Blog entries</h1>
                {contents}
            </div>
        );
    }

}