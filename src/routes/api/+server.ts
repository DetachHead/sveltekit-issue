import { json } from "@sveltejs/kit";
import foo from "somepackage/index.js"; 
 
export const GET = () => {
  console.log(foo);
  return json("hi"); 
};
