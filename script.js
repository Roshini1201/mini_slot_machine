let list=['7','diamond','cherry','watermelon','beer'];
let points=0;

function randomValue(l){
    return l[Math.floor(Math.random()*l.length)];
}

function spin(){

    let rv1=randomValue(list);
    let rv2=randomValue(list);
    let rv3=randomValue(list);

    if (rv1==rv2 && rv2==rv3 && rv1=='7'){
        points+=200;
    }else if (rv1==rv2 && rv2==rv3){
        points+=100;
    }else if(rv1==rv2 || rv2==rv3 || rv1==rv3){
        points+=50;
    }

    document.getElementById('coins').textContent=points;
}

