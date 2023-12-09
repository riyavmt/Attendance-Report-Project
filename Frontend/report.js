 const form = document.getElementById("myForm");
 const list = document.querySelector('.list-container');
 const attendanceList = document.querySelector('.attendanceList')
 const studentNames = ["Riya","Tejas","Harsh"];
 const markBtn = document.getElementById('mark');
 let date;

 form.addEventListener('submit',search);
 markBtn.addEventListener('click',getAttendanceValues);

//  async function search(e) {
//     e.preventDefault();
//     date = e.target.date.value;

//     console.log(date);
//     list.style.display='block';
//  }


 async function search(e) {
    e.preventDefault();
    date = (e.target.date.value);
    try{
        const res = await axios.get('http://localhost:3000/get-attendance/'+date);
        console.log(res.data);
        attendanceList.innerHTML="";
        if(res.data.message=="Found"){
            res.data.Report.forEach((element) =>{
                showAttendance(element);
                
            })
            
        }
        else{
            list.style.display='block';
        }
    }
    catch(err){console.log(err)}

}
 




 async function getAttendanceValues(){
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    let details = [];
    radioButtons.forEach((element,index)=>{
        details.push({
            name:studentNames[index],
            date:date,
            status:element.value
        })
    })
    console.log(details);
    try{
        const res = await axios.post('http://localhost:3000/add-attendance',{detailsArr:details});
        console.log(res);
        attendanceList.innerHTML="";
        res.data.forEach((element)=>{
            showAttendance(element);
        })
    }
    catch(err){
        console.log(err)
    }
 }

 function showAttendance(element){
    list.style.display="none"
    const li =document.createElement('li');
                if(element.status=="Present"){
                    li.innerHTML = `${element.name} - ✅Present`;
                }
                else li.innerHTML =`${element.name} - ❌Absent`;

                attendanceList.append(li);
 }
