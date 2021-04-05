import { Component } from 'react';

const INITIAL_STATE = {
  bookmarks: []
  filter: null,
}

class Bookmarks extends Component
constructor(props) {
  super(props);
  this.state = INITIAL_STATE;
}

componentDidMount() {
  const bookmarks = [
    {
      url:
      tags: []
    }, {
      url:
      tags: []
    }

  ];

  this.setState({ bookmarks });
}

render() {

  const allTags = this.state.Bookmarks
  .map(bookmark => bookmark.tags)
  .reduce((acc, i) => acc.concat(i), []);

  const uniqueTags = Array.from(new Set(allTags);
  const tags = uniqueTags.map((tag, index) =>
  <button key={index} classname="btn btn-link">{tag}</button>
)

return(
}

export default Bookmarks
