//const { response } = require("express");
// import axios from 'axios';
function myFunction() {
    var x = document.getElementById("createBlock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunct() {
    var x = document.getElementById("updateBlock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFun() {
    var x = document.getElementById("deleteBlock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
//   function FetchNotes(){
    //allpostsaxios
const BASE_URL = 'http://localhost:3000/posts';

const getallNotes = async (res,data)=> {
  try {
    const res = await axios.get(`${BASE_URL}`);
    const allposts = res.data;
    const description=res.data.description;
    const title=res.data.title;
    //const{title,description}= data;
    // document.getElementById('describe').textContent=description;
    // console.log(`this is description`,description);
    // document.getElementById('head').textContent=title;
    console.log(`this is title`,title);
    console.log(`GET: Here's the list of posts`, allposts);
    var l=allposts.length;
    console.log(l);
    for (var i=0;i<l;i++){
 
      var a=allposts[i]["title"];
      var b=allposts[i]["description"]; 
      var c =allposts[i]["_id"]
      var newNode = document.createElement('div');
          newNode.className = 'card';
          newNode.id=i;
          document.querySelector('.cardlist').appendChild(newNode);
      var x = document.createElement("div"); 
          x.className='card-body';
          x.id=i;
          document.querySelector('.card').appendChild(x);
      var newH = document.createElement("h5"); 
          newH.className='card-title';
          newH.innerHTML=`Title:${a}`;
          newH.id=i;
          document.querySelector('.card-body').appendChild(newH);

      var newPara = document.createElement("p"); 
          newPara.className='card-text';
          newPara.innerHTML=`Description:${b}`+` `+`${c}`;
                //newNode.innerHTML = 'this created div contains a class while created!!!';
          newPara.id=i;
          document.querySelector('.card-body').appendChild(newPara);
      var newBr=document.createElement("br");
              document.querySelector('.cardlist').appendChild(newBr);

      //var t =  document.createTextNode(a); 
      //x.appendChild(t); 
      //document.body.appendChild(x);
            console.log(allposts[i]["_id"],allposts[i]["description"]);
    }
  } catch (e) {
    console.error(e);
  }
};

// }
// const getallNotes=() =>{
//     axios.get(BASE_URL).then(response=>
//         {
//             console.log(response);
//         });
// };
// const form = document.querySelector('form');
// const formEvent = form.addEventListener('submit', async event => {
//   event.preventDefault();
//   const n_title = document.querySelector('#new_title').value;
//   const n_description = document.querySelector('#new_description').value;
//   console.log(n_title);
//   console.log(n_description);
//   const aNewNote ={
//   n_title,
//   n_description
//   };
//   const addedNote = await addNote(aNewNote);
//   addNoteToDOM(addedNote);
//  });
// const addNote = async aNewNote => {
//   try {
//     const res = await axios.post(`${BASE_URL}`, aNewNote);
//     const addedNote = res.data;
//     console.log(`Added a new Note!`, addedNote);
//     return addedNote;
//   } catch (e) {
//     console.error(e);
//   }
// };

  // const postNotes = async () => {
  //   try {
  //     // const res = await axios.get(`${BASE_URL}`);
  
  //     // const todos = res.data;
  //   const n_title = document.querySelector('#new_title').value;
  //   console.log(n_title,n_description);
  //   const n_description = document.querySelector('#new_description').value;
  
  //     console.log(`post: Here's the list of notes`, todos);
  //     axios.post(`${BASE_URL}`, {
  //       title: n_title,
  //       description:n_description
        
  //     })
  //     console.log("added");      
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  //axios.get(BASE_URL).then(response=>
    //         {
    //             console.log(response);
    //         });

  const postallNotes=() =>{
 const n_title = document.querySelector('#new_title').value;
 const n_description = document.querySelector('#new_description').value;
 console.log(n_title);
 console.log(n_description);
 axios.post(`${BASE_URL}`, {
    title: n_title,
    description: n_description
  })
};

const deleteNotes = ()=> {
  const obj_id=document.querySelector('#objectId').value
 try {
   axios.delete(`${BASE_URL}/${obj_id}`);
   console.log(`Deleted Note ID: `, obj_id);

 } catch (e) {
   console.error(e);
 }
};
