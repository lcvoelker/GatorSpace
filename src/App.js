import './App.css';
// components
import PostRow from './components/postRow';
import Sidebar from './components/sidebar';
import * as React from "react";
import { render } from "react-dom";
import Calendar from 'react-calendar';

function App() {
    const rows = [
        { name: "Today" },
        { name: "This week" },
    ]
    const posts = [
        { title: "First post", desc: "this is the first post"},
        { title: "2 post", desc: "second post"},
        { title: "3 post", desc: "third post lol"},
    ]
    const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date) 
    };
    return (
        <div>
        <Calendar showWeekNumbers onChange={onChange} value={date} />
        {console.log(date)}
        {date.toString()}
        </div>
    );
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
