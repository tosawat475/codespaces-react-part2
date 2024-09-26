import { useState,useEffect,useRef } from "react";

function Item({ name, isPacked }) {
    return (
        <li>
            {name} {isPacked && '✓'}
        </li>)
}
export default function Itemlist() {
    const [keyword, setKeyword] = useState("")
    useEffect(()=>{
        console.log("this component is loaded!");
        return ()=>
        {
            alert("component unloaded")
        }
    },[]);
    const items = [{ name: "Sunglass", isPacked: false },
    { name: "Sunblock", isPacked: true },
    { name: "PowerBank", isPacked: true }
    ];
    const filterList = items.filter(i => i.name.toLowerCase().includes(keyword.toLowerCase()))
    const ItemList = filterList.map(i => <Item key={i.name} name={i.name} isPacked={i.isPacked} />)
    return (<>
        Search:
        <input
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)} />
        <ui>
            {ItemList}
        </ui>
    </>);
}