import './App.css';
// components
import PostRow from './components/postRow';
import Sidebar from './components/sidebar'

function App() {
    const rows = [
        { name: "Today" },
        { name: "This week" },
    ]
    const posts = [
        { title: "First post", desc: "this is the first post"},
        { title: "2 post", desc: "second post"},
        { title: "3 post", desc: "third post lol"},
        { title: "4 post", desc: "loloolloloollolllol"},
    ]
  return (
    <div className="App">
        <div className="mainView">
            <PostRow rowdata={rows[0]} postdata={posts} />
            <PostRow rowdata={rows[1]} postdata={posts} />
        </div>
        <Sidebar />
    </div>
  );
}

export default App;
