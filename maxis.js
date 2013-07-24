window.addEventListener('load',function(){
    figure = document.getElementById('multiSlide');
    topButton       = document.getElementById('top');
    bottomButton    = document.getElementById('bottom');
    leftButton      = document.getElementById('left');
    rightButton     = document.getElementById('right'); 
    
    new Box(-2,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(-1,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(0,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(1,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(3,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(4,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(5,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,-2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,-1,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,0,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,1,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,2,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,3,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,4,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    new Box(2,5,'http://www.technotoday.com.tr/Post/PostDosyalar/image/Haber/2689.jpg');
    
    topButton.addEventListener('click', function(){
        if(slidePosY>-3)
            slide('Y',-1);
    });
    bottomButton.addEventListener('click', function(){
        if(slidePosY<4)
            slide('Y',1);
    });
    leftButton.addEventListener('click', function(){
        if(slidePosX>-3)
            slide('X',-1);
    });
    rightButton.addEventListener('click', function(){
        if(slidePosX<4)
            slide('X',1);
    });
});

var unit            = 160;
var registeredBoxes = [];
var slidePosX       = 0;
var slidePosY       = 0;
var Box = function(posX,posY,img){
    this.pos    = {};
    this.pos.X  = posX;
    this.pos.Y  = posY;
    this.img    = img;
    this.init();
}
Box.prototype = {
    init : function(){
        this.DOMElement             = document.createElement('div');
        this.DOMElement.className   = 'box';
        this.DOMElement.style.left  = (this.pos.X*unit)-unit+'px';
        this.DOMElement.style.top   = (this.pos.Y*unit)-unit+'px';
        this.DOMElement.setAttribute('data-pos',this.pos.X.toString()+this.pos.Y.toString());
        
        var img = document.createElement('img');
        img.src = this.img;
        
        this.DOMElement.appendChild(img);
        figure.appendChild(this.DOMElement);
        registeredBoxes.push(this);
    },
    setPosition : function(axis,val){
        this.pos[axis] = val;
        if(axis == 'X'){
            this.DOMElement.style.left  = (this.pos[axis]*unit)-unit+'px';
        }else if(axis == 'Y'){
            this.DOMElement.style.top   = (this.pos[axis]*unit)-unit+'px';
        }
        this.DOMElement.setAttribute('data-pos',this.pos.X.toString()+this.pos.Y.toString());
    }
}

function slide(axis,dir){
    var len = registeredBoxes.length;
    
    if(axis == 'Y'){
        for(var i=0; i<len; i++){
            if(registeredBoxes[i].pos['X']=='2'){
                registeredBoxes[i].setPosition(axis,registeredBoxes[i].pos['Y']+(1*dir));
            }
        }
        slidePosY = slidePosY+dir;
    }else if(axis == 'X'){
        for(var i=0; i<len; i++){
            if(registeredBoxes[i].pos['Y']=='2'){
                registeredBoxes[i].setPosition(axis,registeredBoxes[i].pos['X']+(1*dir));
            }
        }
        slidePosX = slidePosX+dir;
    }
}
