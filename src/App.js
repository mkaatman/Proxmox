import './App.css';
import {useState} from "react";
import data from "./data";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// Theme examples: https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism.html
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism';


import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function App() {
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [expandedItems, setExpandedItems] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState([]);

  function handleFilter(event) {
    // TODO: Add a debounce here
    setFilter(event.target.value);
  }

  function handleExpandItem(event) {
    const newExpanded = expandedItems.includes(event) ? expandedItems.filter(i => i !== event) : [...expandedItems, event];
    setExpandedItems(newExpanded);
  }

  function handleCategoryClick(event) {
    const newExpandedCategory = expandedCategories.includes(event) ? expandedCategories.filter(i => i !== event) : [...expandedCategories, event];
    setExpandedCategories(newExpandedCategory);
  }

  function handleTypeFilterClick(type) {
    setTypeFilter(type);
  }

  function clearFilters() {
    setFilter("");
    setTypeFilter("all");
  }

  const types = data.items.map(item => item.type);

  const filtered = {};
  const typeFilteredItems = {};
  typeFilteredItems.items = typeFilter !== "all" ? data.items.filter(item => {
    return item.type === typeFilter;
  }) : data.items;
  filtered.items = filter ? typeFilteredItems.items.filter(item => {
    // console.warn("title", filter.toLowerCase(), item.title.toLowerCase(), item.title.toLowerCase().includes(filter.toLowerCase()));
    // console.warn("content", filter.toLowerCase(), item.content.toLowerCase(), item.content.toLowerCase().includes(filter.toLowerCase()));
    return item.title.toLowerCase().includes(filter.toLowerCase()) || item.content.toLowerCase().includes(filter.toLowerCase());
  }) : typeFilteredItems.items;


  // console.warn(filtered);
  // console.warn(types);
  // console.warn("expanded", expanded);
  return (
    <div className="App">
      <h2 align="center" id="heading"> Select a Proxmox Helper </h2>
      <p align="center"><sub> Always remember to use due diligence when sourcing scripts and automation tasks from third-party sites. </sub></p>
      <p align="center"><a href="https://github.com/tteck/Proxmox/blob/main/LICENSE"><img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue" /></a> <a href="https://github.com/tteck/Proxmox/discussions"><img src="https://img.shields.io/badge/%F0%9F%92%AC-Discussions-orange" alt="Discussions" /></a> <a href="https://github.com/tteck/Proxmox/blob/main/CHANGELOG.MD"><img src="https://img.shields.io/badge/🔶-Changelog-blue" alt="Changelog" /></a> <a href="https://ko-fi.com/D1D7EP4GF"><img src="https://img.shields.io/badge/%E2%98%95-Buy%20me%20a%20coffee-red" alt="Buy me a coffee" /></a></p>

        <div className={"inputFilter"}><input type="text" onChange={handleFilter} value={filter} /> Filter <span className="typeFilter">Type: {["all", ...new Set(types)].map(type => <span onClick={() => handleTypeFilterClick(type)} key={type} className={typeFilter === type ? "typeFilterSelected" : "typeFilterNotSelected"}> {type} </span>)}</span></div>
        {filtered.items.length === 0 && <div>No items match your criteria <button onClick={clearFilters}>Clear Filters</button></div>} 
        {filtered.items?.map((item, index) => {
          return <div className={"App-items"} key={item.title}>
            {/* Show Category */}
            {(index === 0 || filtered.items[index === 0 ? 0 : index - 1].category !== item.category) && <div onClick={() => handleCategoryClick(item.category)} className={"itemCategory"}><img className={"categoryLogo"} src={data.categories.filter(category => category.title === item.category)[0]?.logo_url || data.categories[0].logo_url} alt="logo" />{item.category}{((filter || expandedItems.includes(item.title)) || expandedCategories.includes(item.category)) ? " ⬇️" : " ➡️"} </div>}
            {/* Show Item Title */}
            {((filter || expandedItems.includes(item.title)) || expandedCategories.includes(item.category)) && <span onClick={() => handleExpandItem(item.title)} className={"itemTitle"}>{item.title}</span>}
            {
              (filter || expandedItems.includes(item.title)) && <div className="item">
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
                    style={coldarkDark}
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
            </div>}
          </div>;
        })}


    </div>
  );
}

export default App;
