var models = [
    {
     name : 'Bmw 116d',
     image : 'img.slider/bmw.jpg',
     link :'https://www.topgear.com.ph/features/feature-articles/old-school-1971-bmw-cs-a00040-20180901'
    },
    {
        name : 'Honda 1977',
        image : 'img.slider/honda.jpg',
        link :'https://upload.wikimedia.org/wikipedia/commons/a/a9/1977_Honda_Civic_Front.jpg'
    },
    {
        name : 'Mazda 323',
        image : 'img.slider/mazda.jpg',
        link :'https://tr.pinterest.com/pin/391461392590818343/'
    },
    {
        name : 'Skoda',
        image : 'img.slider/skoda.jpg',
        link :'https://commons.wikimedia.org/wiki/File:Old_%C5%A0koda_Octavia.jpg'
    },
    {
        name : 'Volvo',
        image : 'img.slider/volvo.jpg',
        link :'https://www.shutterstock.com/tr/image-photo/essen-germany-april-10-2019-volvo-1610442910'
    }

];

 

var index = 0;
var slaytCount = models.length;
var interval;

var settings= {
    duration:'2000',
    random: true
};
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
        index--;
        showSlide(index);
        console.log(index);

    });
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
   index++ ;
   showSlide(index);
   console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings)
        
    })
});   


function init(settings){
    var prev;
    setInterval(function(){
       if(settings.random){
           do{
              index= Math.floor(Math.random() * slaytCount);
           }while(index==prev)
           prev = index;
       }else{
           //artan index
           if(slaytCount==index+1){
               index=0;
           }
           showSlide(index);
           console.log(index);
           index++;
       }
       //console.log(index);
       showSlide(index);
       
    },settings.duration)
}

function showSlide(i){

    index = i;
    if (i<0){

     index = slaytCount -1;

    }
    if(i >= slaytCount){
     
        index =0;
    
    }


    document.querySelector('.card-title').textContent=models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);

}
