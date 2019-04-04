/*
#container>div:nth-child(1){

    grid-row: 5;
    grid-column: 1/span 2;
    background-color: blanchedalmond;
}
#container>div:nth-child(15){
    grid-row: 5;
    grid-column: 3;
    background-color: brown;
}
#container>div:nth-child(14){
    grid-row: 5;
    grid-column: 4;
    background-color: brown;
}
#container>div:nth-child(13){
    grid-row: 4;
    grid-column: 4;
    background-color: brown;
}
#container>div:nth-child(12){
    grid-row: 3;
    grid-column: 4;
    background-color: brown;
}
#container>div:nth-child(11){
    grid-row: 2;
    grid-column: 4;
    background-color: brown;
}
#container>div:nth-child(10){
    grid-row: 2;
    grid-column: 3;
    background-color: brown;
}
#container>div:nth-child(9){
    grid-row: 2;
    grid-column: 2;
    background-color: brown;
}
#container>div:nth-child(8){
    grid-row: 2;
    grid-column: 1;
    background-color: brown;
}
#container>div:nth-child(7){
    grid-row: 3;
    grid-column: 3;
    background-color: brown;
}
#container>div:nth-child(6){
    grid-row: 3;
    grid-column: 2;
    background-color: brown;
}
#container>div:nth-child(5){
    grid-row: 3;
    grid-column: 1;
    background-color: brown;
}
#container>div:nth-child(4){
    grid-row: 4;
    grid-column: 3;
    background-color: brown;
}
#container>div:nth-child(3){
    grid-row: 4;
    grid-column:2 ;
    background-color: brown;
}
#container>div:nth-child(2){
    grid-row: 4;
    grid-column: 1;
    background-color: brown;
}#container>div:nth-child(16){
    grid-row: 1;
    grid-column: 1/5;
    background-color: brown;
}
#container>div:hover{
    */



   const  fields=[ {txt:0, row:5,col:'1/2'},
                   {txt:1, row:4,col:1},
                   {txt:2, row:4,col:2},
                   {txt:3, row:4,col:3},
                   {txt:4, row:3,col:1},
                   {txt:5, row:3,col:2},
                   {txt:6, row:3,col:3},
                   {txt:7, row:2,col:1},
                   {txt:8, row:2,col:2},
                   {txt:9, row:2,col:3},
                   {txt:'C', row:2,col:4},
                   {txt:'+', row:3,col:4},
                   {txt:'-', row:4,col:4},
                   {txt:'=', row:5,col:4},
                   {txt:'.', row:5,col:3},
                   {txt:'DISPLAY', row:1,col:'1/5'},

       '0','1','2','3','4','5','6','7','8','9','C','+','-','=','.','DISPLAY'];

   const init= ()=>{
       const container = document.createElement('div');
       container.id='container';

       fields.forEach(el =>{
           const div =  document.createElement('div');
           div.textContent =el.txt;
           div.style.gridColumn=el.col;
           div.style.gridRow=el.row;

           if(el.txt=='DISPLAY'){
               div.id='DISPLAY';

           }else {
                 div.addEventListener('click',ev=> {
                     const d=document.getElementById('DISPLAY');
                     d.textContent=ev.target.textContent;
           });
        }
           container.appendChild(div);

       });

  // const container= document.getElementById('container');
   //for(let i=0; i<fields.length;++i){
     //  console.log(fields[i]);
     document.body.appendChild(container);
   }






window.addEventListener('DOMContentLoaded',init);