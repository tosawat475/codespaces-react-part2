export default function MouseEvent()
{
    return (<h1 
        onClick={e=>console.log("onClick")}
        onMouseEnter={e=>console.log("onMouseEnter")}
        onMouseOver={e=>console.log("onMouseOver")}
        onMouseUp={e=>console.log("onMouseUp")}
        onMouseDown={e=>console.log("onMouseDown")}
        onMouseLeave={e=>console.log("onMouseLeave")}
        >Click Me</h1>);
}