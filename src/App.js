import './App.css';
import {useState} from "react";
import data from "./data";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function App() {
  const [filter, setFilter] = useState("");

  function handleFilter(event) {
    // TODO: Add a debounce here
    // console.warn(event.target.value);
    setFilter(event.target.value);
  }
  const filtered = {};
  filtered.items = filter ? data.items.filter(item => {
    // console.warn("title", filter.toLowerCase(), item.title.toLowerCase(), item.title.toLowerCase().includes(filter.toLowerCase()));
    // console.warn("content", filter.toLowerCase(), item.content.toLowerCase(), item.content.toLowerCase().includes(filter.toLowerCase()));
    return item.title.toLowerCase().includes(filter.toLowerCase()) || item.content.toLowerCase().includes(filter.toLowerCase());
  }) : data.items;

  // console.warn(filtered);

  return (
    <div className="App">
      <h2 align="center" id="heading"> Select a Proxmox Helper </h2>
      <p align="center"><sub> Always remember to use due diligence when sourcing scripts and automation tasks from third-party sites. </sub></p>
      <p align="center"><a href="https://github.com/tteck/Proxmox/blob/main/LICENSE"><img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue" /></a> <a href="https://github.com/tteck/Proxmox/discussions"><img src="https://img.shields.io/badge/%F0%9F%92%AC-Discussions-orange" alt="Discussions" /></a> <a href="https://github.com/tteck/Proxmox/blob/main/CHANGELOG.MD"><img src="https://img.shields.io/badge/🔶-Changelog-blue" alt="Changelog" /></a> <a href="https://ko-fi.com/D1D7EP4GF"><img src="https://img.shields.io/badge/%E2%98%95-Buy%20me%20a%20coffee-red" alt="Buy me a coffee" /></a></p>

        <div className={"inputFilter"}><input type="text" onChange={handleFilter} value={filter} /> Filter</div>
        {filtered.items?.map(item => {
          return <div className={"App-items"} key={item.title}>
            <span className={"itemTitle"}>• {item.category}: <img className={"categoryLogo"} src={data.categories.filter(category => category.title === item.category)[0]?.logo_url || data.categories[0].logo_url} alt="logo" />{item.title}</span>
            <div style={{display: "none"}} >
            <ReactMarkdown
            children={item.content} 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
            />
            </div>
          </div>;
        })}


    </div>
  );
}

export default App;
