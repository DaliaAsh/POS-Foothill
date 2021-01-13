import React from "react"; 
import List from "../components/UI/List/List"; 
export default{
    title:'List/ListComponent',
    component:List
}
const Template = (args) => <List {...args} />;
export const MyList = Template.bind({});
MyList.args={
    options:[10,25,50,100]
}; 