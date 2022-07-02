
const p1score=document.querySelector('#p1Display');
const p2score=document.querySelector('#p2Display');
const p1btn=document.querySelector('#p1button');
const p2btn=document.querySelector('#p2button');
const rst=document.querySelector('#reset');
const maxi=document.querySelector('#max')
const im=document.querySelector('#image');
const h=document.querySelector('#cheer');
const inp=document.querySelector('#input');
const bdy=document.getElementsByTagName("BODY");
const p1name=document.querySelector('#p1name');
p1name.removeEventListener('click',function(){
   
})
const inp2=document.querySelector('#input2')
const p2name=document.querySelector('#p2name');
p1name.removeEventListener('click',function(){
    
})

let p1point=0;
let p2point=0;
let maxscore;

maxi.addEventListener('change',function(){
    maxscore=parseInt(this.value) ;
    
})
let isGameOver=false;
p1btn.addEventListener("click",function(){
    if(!isGameOver){
        p1point+=1;

        if(p1point===maxscore){
          // isGameOver=true;
           p1score.classList.add('winner');
           p2score.classList.add('loser');
           im.src="fire.gif";
           h.innerHTML=`${inp.value}, is the winner!!`;
           h.style.color="red";
           document.body.style.backgroundImage = "url('congrat.gif')";
           p1btn.disabled=true;
           p2btn.disabled=true;
           isGameOver=true;
      }            
     
        
        p1score.textContent=p1point;
      }
})
p2btn.addEventListener("click",function(){
    if(!isGameOver){
    p2point+=1;
   
    
    if(p2point===maxscore){
        isGameOver=true;
        p2score.classList.add('winner');
        p1score.classList.add('loser');
        im.src="fire.gif";
        h.innerHTML=`${inp2.value}, is the winner!!`;
        h.style.color="red";
        document.body.style.backgroundImage = "url('congrat.gif')";
        document.body.style.opacity.backgroundImage='0.1';
        p1btn.disabled=true;
        p2btn.disabled=true;
   }
   p2score.textContent=p2point;
}
})
rst.addEventListener("click",function(){
    if(isGameOver){
    
        p1point=0;
        p1score.textContent=p1point;
        p2point=0;
        p2score.textContent=p2point;
        p2score.classList.remove('winner');
        p1score.classList.remove('loser');
        p1score.classList.remove('winner');
        p2score.classList.remove('loser');
        p1btn.disabled=false;
        p2btn.disabled=false;
        im.src="img.webp";
        document.body.style.backgroundImage = 'none';
        isGameOver=false;
        h.innerHTML="";
        
        

}
    p1point=0;
    p1score.textContent=p1point;
    p2point=0;
    p2score.textContent=p2point;
    
})
