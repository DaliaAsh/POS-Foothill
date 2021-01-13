import React from "react"; 
import SearchBar from "../components/SearchBar/SearchBar"; 
export default{
    title:'SearchBar/SearchBarComponent',
    component:SearchBar
}
const Template = (args) => <SearchBar {...args} />;
export const MySearchBar = Template.bind({});
MySearchBar.args={}; 