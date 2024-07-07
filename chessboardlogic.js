function generatechessboard() {
   const maindiv =document.getElementById('maindiv');
    maindiv.innerHTML='';

    const rownumber= document.getElementById('rownumber').value;
    const colnumber= document.getElementById('colnumber').value;
    const oddcolor= document.getElementById('oddcolor').value;
    const evencolor= document.getElementById('evencolor').value;

    console.log(rownumber,colnumber,oddcolor,evencolor)

    maindiv.style.gridTemplateRows=`repeat(${rownumber}, 50px)`;
    maindiv.style.gridTemplateColumns =`repeat(${colnumber}, 50px)`;

    for (i=0;i<rownumber;i++){
        for(j=0;j<colnumber;j++){
            const tile=document.createElement('div')
            tile.classList.add('tile')

            if ((i+j)%2===0) {
                tile.style.backgroundColor = evencolor;
            } else {
                tile.style.backgroundColor = oddcolor;
            }
           console.log(i,j)
            maindiv.appendChild(tile)



        }
    }
   console.log('working')

}