import React from "react";
import Header from "./Header";
import Note from './Note';
import Footer from './footer';
import List from "./Notelists";

console.log(List);
function App(){

    return <div>
    <Header />
    {List.map(item=><Note 
        key= {item.id}
        title={item.title}
        content={item.Content}

    />)}
    
    <Footer />
    </div>;
}

export default App;<h1>Keeper</h1>