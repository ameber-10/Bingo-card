'use strict';

{
  function createColum(col){
    // const source=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const source=[];
    for(let i=0;i<15;i++){
      source[i]=i+1+15+col;
    }
    
    //Math.floor(Math.random() * (14+1))
    //Math.floor(Math.random() * source.length),1)
    
    const colum=[];
    // b[0]=source.splice(Math.floor(Math.random() * source.length),1)[0];
    // b[1]=source.splice(Math.floor(Math.random() * source.length),1)[0];
    // b[2]=source.splice(Math.floor(Math.random() * source.length),1)[0];
    // b[3]=source.splice(Math.floor(Math.random() * source.length),1)[0];
    // b[4]=source.splice(Math.floor(Math.random() * source.length),1)[0];
    for(let i=0;i<5;i++){
      colum[i]=source.splice(Math.floor(Math.random() * source.length),1)[0];
    }
    return colum;
  }

  function createColums(){
    const colums=[];
    // colums[0]=createColum(0);
    // colums[1]=createColum(1);
    // colums[2]=createColum(2);
    // colums[3]=createColum(3);
    
    for(let i=0;i<5;i++){
      colums[i]=createColum(i);
    }
    colums[2][2]="FREE"
    return colums;
    // console.table(colums);
  }

  // function createBingo(colums){
  //   const bingo=[];
  //   for(let row=0;row<5;row++){
  //     bingo[row]=[];
  //     for(let col=0;col<5;col++){
  //       bingo[row][col]=colums[col][row];
  //     }
  //   }
  //   // console.log(bingo);
  //   return bingo;
  // }

  function renderBingo(colums){
    for(let row=0;row<5;row++){
      const tr=document.createElement('tr');
      for(let col=0;col<5;col++){
        const td=document.createElement('td');
        td.textContent=colums[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const colums=createColums();
  renderBingo(colums);
}
  