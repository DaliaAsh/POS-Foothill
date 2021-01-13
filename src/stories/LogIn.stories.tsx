import React from "react"; 
import LogIn from "../components/LogIn/LogIn"; 
export default{
    title:'LogIn/LogInComponent',
    component:LogIn
}
const Template = (args) => <LogIn {...args} />;
export const MyLogIn = Template.bind({});
MyLogIn.args={}; 