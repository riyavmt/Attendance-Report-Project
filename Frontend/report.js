 const form = document.getElementById("myForm");
 const list = document.querySelector('.list-container');
 const studentNames = ["Riya","Tejas","Harsh"];
 const markBtn = document.getElementById('mark');
 let date;


 form.addEventListener('submit',search);
 markBtn.addEventListener('click',getAttendanceValues);

 async function search(e) {
    e.preventDefault();
    console.log(date);
    list.style.display='block';
 }


//  async function search(e) {
//     e.preventDefault();
//     date = (e.target.date.value);
//     try{
//         const res = await axios.get('http://localhost:3000/get-attendance/'+date);
//         if(res.data.message=="Found"){
//             res.data.forEach((element) =>{
                
//                 const li =document.createElement('li');
//                 if(element.status=="present"){
//                     li.innerHTML = "`${element.name}` - ✅Present";
//                 }
//                 else li.innerHTML =" `${element.name} `- ❌Absent";
                
//             })
            
//         }
//         else{
//             listContainer.style.display='block';
//         }
//     }
//     catch(err){console.log(err)}

// }





 async function getAttendanceValues(){
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    radioButtons.forEach((element,index)=>{
        const details={
            name:studentNames[index],
            date:date,
            status:element.value
        }
    })
    try{
        const res = await axios.post('http://localhost:3000/add-attendance',details);
        console.log(res);
    }
    catch(err){
        console.log(err)
    }
 }