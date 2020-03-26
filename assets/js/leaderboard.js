var data = [
    {rank:"1",
     handleName:"Drkmaster",
     Contribution:"113" ,
     Year:"SE"  
    },
    {rank:"2",
     handleName:"Someone",
     Contribution:"325",
     Year:"TE"
    },
    {rank:"3",
    handleName:"Someone",
    Contribution:"325",
    Year:"TE"
   },
   {rank:"4",
   handleName:"Someone",
   Contribution:"325",
   Year:"TE"
  },
  {rank:"5",
  handleName:"Someone",
  Contribution:"325",
  Year:"TE"
 },
 {rank:"6",
 handleName:"Someone",
 Contribution:"325",
 Year:"TE"
}

];


var tblbdy = document.getElementById("tbdy");
 for(var index in data)
 {
    var tblrw = document.createElement('tr');
     for(var info in data[index] )
     {
        var tbltd = document.createElement('td');
        var tbldata = document.createTextNode(data[index][info]);
        console.log(data[0][info]);
        tbltd.appendChild(tbldata);
        tblrw.appendChild(tbltd);
     }
    // if( data[index]["Year"]=="SE")
     tblbdy.appendChild(tblrw);
 }   


